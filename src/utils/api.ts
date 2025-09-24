import type { QuizData } from "../types/quiz";

const API_BASE_URL = import.meta.env.VITE_QUIZ_API_URL;

export const fetchQuizData = async (): Promise<QuizData> => {
    try {
        const response = await fetch(`${API_BASE_URL}/quiz_data.json`);
        if (!response.ok) {
            throw new Error("Failed to fetch quiz data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching quiz data:", error);
        throw error;
    }
};
