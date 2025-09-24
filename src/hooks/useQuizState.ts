import { useState } from "react";
import { QuizStage, type QuizQuestion, type QuizResult } from "../types/quiz";
import { validateAnswers, calculateScore } from "../utils/quiz";

export const useQuizState = () => {
    const [stage, setStage] = useState<QuizStage>(QuizStage.START);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [results, setResults] = useState<QuizResult[]>([]);

    const score = () => calculateScore(results);

    const handleStart = () => {
        setStage(QuizStage.QUIZ);
        setCurrentIndex(0);
        setResults([]);
    };

    const handleNext = (
        question: QuizQuestion,
        selectedAnswers: string[],
        timeSpent: number,
        totalQuestions: number,
    ) => {
        const isCorrect = validateAnswers(selectedAnswers, question);
        const result: QuizResult = {
            question,
            correct: isCorrect,
            selectedAnswers,
            timeSpent,
        };

        setResults((prev) => [...prev, result]);

        if (currentIndex + 1 < totalQuestions) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setStage(QuizStage.END);
        }
    };

    const handleRestart = () => {
        setStage(QuizStage.START);
        setCurrentIndex(0);
        setResults([]);
    };

    return {
        stage,
        currentIndex,
        score,
        results,
        handleStart,
        handleNext,
        handleRestart,
    };
};
