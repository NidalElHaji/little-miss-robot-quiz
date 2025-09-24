import { useState, useEffect } from "react";

import type { QuizData } from "../types/quiz";
import { fetchQuizData } from "../utils/api";

export const useQuizData = () => {
    const [quizData, setQuizData] = useState<QuizData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadQuizData = async () => {
            try {
                setLoading(true);
                const data = await fetchQuizData();
                setQuizData(data as QuizData);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };

        loadQuizData();
    }, []);

    return { quizData, loading, error };
};
