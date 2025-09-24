import { QuizStage } from "../types/quiz";

export const QUIZ_CONFIG = {
    PASSING_THRESHOLD: 0.5,
    DEFAULT_TIME_LIMIT: 30,
    LOW_TIME_WARNING: 10,
} as const;

export const UI_STYLES = {
    BUTTON: {
        default:
            "bg-blue-100 text-blue-900 hover:bg-blue-400 focus:ring-blue-500",
        primary: "bg-blue-700 hover:bg-blue-400 text-white focus:ring-blue-500",
        secondary:
            "bg-blue-900 hover:bg-blue-600 text-white focus:ring-blue-500",
        success:
            "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
        warning:
            "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500",
        outline:
            "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        selected: "bg-blue-400 text-white border-amber-300 border-2",
        correct: "bg-green-500 text-white",
        incorrect: "bg-red-500 text-white",
    },
    QUIZ_STAGES: {
        [QuizStage.START]: "bg-blue-900",
        [QuizStage.QUIZ]: "bg-blue-800",
        [QuizStage.END]: "bg-blue-900",
    },
    SIZE: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    },
} as const;
