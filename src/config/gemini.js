import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Your actual API key should be securely handled
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 0.7,  // Slightly reduced for more precise but still colorful responses
  topP: 0.85,       // Narrow the range of possible responses for better quality
  topK: 30,         // Restricting output options to increase precision
  maxOutputTokens: 1024, // Reasonable token count for colorful and detailed responses
  responseMimeType: "text/plain",
};

async function runChat(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      // You can provide some prior conversation context here
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default runChat;
