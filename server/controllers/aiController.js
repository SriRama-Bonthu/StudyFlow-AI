const axios = require("axios");

const generateSummary = async (req, res) => {

  try {

    const { content } = req.body;

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {

        model: "openai/gpt-3.5-turbo",

        messages: [

          {
            role: "system",

            content:
              "You are a helpful study assistant that creates concise study summaries.",
          },

          {
            role: "user",

            content:
              `Summarize these study notes into concise revision points:\n\n${content}`,
          },

        ],

      },

      {

        headers: {

          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json",

        },

      }

    );

    const summary =
      response.data.choices[0].message.content;

    res.json({

      summary,

    });

  } catch (error) {

    console.log(error.response?.data || error);

    res.status(500).json({

      message: "AI summary generation failed",

    });

  }

};
const generateQuiz = async (req, res) => {

  try {

    const { content } = req.body;

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {

        model: "openai/gpt-3.5-turbo",

        messages: [

          {

            role: "system",

            content:
            "You are an AI teacher that creates multiple choice quiz questions.",

          },

          {

            role: "user",

            content:
            `Generate 5 MCQ questions with 4 options and answers from these notes:\n\n${content}`,

          },

        ],

      },

      {

        headers: {

          Authorization:
          `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type":
          "application/json",

        },

      }

    );

    const quiz =
    response.data.choices[0]
    .message.content;

    res.json({

      quiz,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
      "Quiz generation failed",

    });

  }

};
const chatWithPDF = async (req, res) => {

  try {

    const {

      question,

      pdfText,

    } = req.body;

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {

        model: "openai/gpt-3.5-turbo",

        messages: [

          {

            role: "system",

            content:
            "You are an AI assistant that answers questions only from the provided PDF content.",

          },

          {

            role: "user",

            content:

            `
            PDF Content:

            ${pdfText}

            User Question:

            ${question}
            `,

          },

        ],

      },

      {

        headers: {

          Authorization:
          `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type":
          "application/json",

        },

      }

    );

    const answer =
    response.data.choices[0]
    .message.content;

    res.json({

      answer,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
      "AI chat failed",

    });

  }

};

module.exports = {

  generateSummary,

  generateQuiz,
  chatWithPDF,

};