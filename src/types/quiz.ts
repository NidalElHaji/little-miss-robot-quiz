export enum QuizStage {
    START = "start",
    QUIZ = "quiz",
    END = "end",
}

export interface QuizAnswer {
    readonly answer: string;
    readonly correct: boolean;
}

export interface QuizQuestion {
    readonly question: string;
    readonly answers: readonly QuizAnswer[];
    readonly time_limit_s: number;
}

export type QuizData = readonly QuizQuestion[];

export type QuizResult = {
    readonly question: QuizQuestion;
    readonly correct: boolean;
    readonly selectedAnswers: readonly string[];
    readonly timeSpent: number;
};
