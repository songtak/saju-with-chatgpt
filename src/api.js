// api.js
import axios from "axios";

// const OPENAI_ENDPOINT = "https://api.openai.com/v1/engines/davinci/completions";
// const OPENAI_ENDPOINT = "https://api.openai.com/v1/completions";
const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";
// const OPENAI_ENDPOINT =
//   "https://api.openai.com/v1/models/gpt-3.5-turbo-instruct";

export const getResponseFromGPT = async (prompt) => {
  console.log(
    "process.env.REACT_APP_OPENAI_API_KEY",
    process.env.REACT_APP_OPENAI_API_KEY
  );
  const response = await axios.post(
    OPENAI_ENDPOINT,
    {
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      // prompt: prompt,
      max_tokens: 1500,
      model: "gpt-4",
      // model: "gpt-3.5-turbo-16k",
      // model: "gpt-3.5-turbo-instruct",
      // model: "gpt-3.5-turbo",
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  // return response.data.choices[0].text.trim();
  return response.data.choices[0].message.content;
};
