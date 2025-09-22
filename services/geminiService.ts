// Fix: Import GenerateContentResponse for proper typing.
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Fix: Removed manual API key check and variable. Initializing the client
// directly with the environment variable `process.env.API_KEY` is the required approach.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates content using the Gemini API.
 * @param prompt The text prompt to send to the model.
 * @returns The generated text response.
 */
export async function generateContent(prompt: string): Promise<string> {
    try {
        // Fix: Added GenerateContentResponse type for the response object.
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                // Keep the config minimal for general Q&A
                temperature: 0.5,
                topP: 0.95,
            }
        });
        
        // Fix: Simplified response handling to use `response.text` directly, as recommended.
        // Removed complex and incorrect fallback logic.
        return response.text;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            throw new Error(`Gemini API Error: ${error.message}`);
        }
        throw new Error("An unexpected error occurred while calling the Gemini API.");
    }
}
