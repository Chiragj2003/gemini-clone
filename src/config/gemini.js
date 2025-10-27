import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Your actual API key should be securely handled via environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Using stable and faster model
});

const generationConfig = {
  temperature: 0.9,  // More creative and natural responses
  topP: 0.95,       // Wider range for diverse responses
  topK: 40,         // Better variety in responses
  maxOutputTokens: 2048, // More detailed responses
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

async function runChat(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error in runChat:", error);
    throw error;
  }
}

export default runChat;
