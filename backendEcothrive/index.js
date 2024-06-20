/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  require('dotenv').config(); // Load environment variables from .env file
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(gardenType, purpose, preference, schedule,town) {
    const promptVariables = {
      gardenType,
      purpose,
      preference,
      town,
      schedule,
      country: 'sri lanka', 
    };
  
    const parts = [
      { text: "generate only list of plants name as a json output without black slashes" },
      {
        text: `input: 
          garden type: ${promptVariables.gardenType}
          location: ${promptVariables.location}
          purpose: ${promptVariables.purpose}
          preference: ${promptVariables.preference}
          schedule: ${promptVariables.schedule}
          country: ${promptVariables.country}
          town:${promptVariables.town}`,
      },
      // ... remaining parts (optional, for additional prompts)
    ];
  
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      // safetySettings: Adjust safety settings
      // See https://ai.google.dev/gemini-api/docs/safety-settings
    });


  // Parse the result to remove backslashes and return clean JSON
  const jsonString = result.response.text();
  const cleanedJsonString = jsonString.replace(/```json\n|```/g, '').trim();
  const jsonResponse = JSON.parse(cleanedJsonString);

  return jsonResponse;
}
  
  module.exports = { run };
   