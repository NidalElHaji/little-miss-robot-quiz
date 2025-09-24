import type { QuizQuestion, QuizResult } from "../types/quiz";
import { QUIZ_CONFIG } from "./constants";

export const calculateScore = (results: QuizResult[]): number => {
    return results.reduce(
        (score, result) => score + (result.correct ? 1 : 0),
        0,
    );
};

export const isQuizPassed = (score: number, total: number): boolean => {
    return score >= Math.ceil(total * QUIZ_CONFIG.PASSING_THRESHOLD);
};

export const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export const validateAnswers = (
    selected: string[],
    question: QuizQuestion,
): boolean => {
    const correctAnswers = question.answers
        .map((answer, index) => ({ ...answer, index: index.toString() }))
        .filter((answer) => answer.correct)
        .map((answer) => answer.index);

    return (
        selected.length === correctAnswers.length &&
        selected.every((id) => correctAnswers.includes(id))
    );
};
