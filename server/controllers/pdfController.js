const fs = require("fs");
const axios = require("axios");
const pdfParse = require("pdf-parse");

const uploadPDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No PDF uploaded",
      });
    }

    const dataBuffer = req.file.buffer || (req.file.path ? fs.readFileSync(req.file.path) : null);
    if (!dataBuffer) {
      return res.status(400).json({ message: "Unable to read uploaded PDF data" });
    }

    const pdfData = await pdfParse(dataBuffer);
    const extractedText = (pdfData.text || "").trim();

    if (!extractedText) {
      return res.status(400).json({ message: "Could not extract text from the PDF. It may be scanned or empty." });
    }

    // Limit extracted text to prevent hitting OpenRouter API payload/token limit
    const truncatedText = extractedText.slice(0, 12000);

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: "OPENROUTER_API_KEY is not configured on server." });
    }

    const aiResponse = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are an AI study assistant that creates concise study summaries and revision notes.",
          },
          {
            role: "user",
            content: `Summarize these study notes into concise revision points:\n\n${truncatedText}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const summary = aiResponse.data?.choices?.[0]?.message?.content || "No summary generated.";

    res.json({
      summary,
    });
  } catch (error) {
    const errorDetails = error.response?.data || error.message || error;
    console.error("PDF Upload processing error:", errorDetails);

    const clientMsg = error.response?.data?.error?.message || error.message || "Failed to process PDF";
    res.status(500).json({
      message: clientMsg,
    });
  }
};

module.exports = {
  uploadPDF,
};
