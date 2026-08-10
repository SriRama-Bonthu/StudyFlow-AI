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

    const dataBuffer = fs.readFileSync(req.file.path);

    const pdfData = await pdfParse(dataBuffer);

    const extractedText = pdfData.text;

    const aiResponse = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "system",

            content:
              "You are an AI study assistant that creates concise study summaries and revision notes.",
          },

          {
            role: "user",

            content: `Summarize these study notes into concise revision points:\n\n${extractedText}`,
          },
        ],
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json",
        },
      },
    );

    const summary = aiResponse.data.choices[0].message.content;

    res.json({
      summary,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  uploadPDF,
};
