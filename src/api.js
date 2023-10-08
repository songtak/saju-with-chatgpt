// api.js
import axios from "axios";

const OPENAI_ENDPOINT = "https://api.openai.com/v1/engines/davinci/completions";

export const getResponseFromGPT = async (prompt) => {
  const response = await axios.post(
    OPENAI_ENDPOINT,
    {
      prompt: prompt,
      max_tokens: 150,
    },
    {
      headers: {
        Authorization: ``,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].text.trim();
};
