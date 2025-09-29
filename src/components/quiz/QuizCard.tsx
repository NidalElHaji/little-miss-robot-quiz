import { useState } from "react";

import { useQuizData } from "../../hooks/useQuizData";
import Card from "../ui/Card";
import { QuizStage, type QuizQuestion } from "../../types/quiz";
import QuizPanel from "./QuizPanel";
import QuizStart from "./QuizStart";
import QuizEnd from "./QuizEnd";

type Stage = "start" | "quiz" | "end";

const QuizCard = () => {
    const { quizData, loading, error } = useQuizData();
    const [stage, setStage] = useState<Stage>(QuizStage.START);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [results, setResults] = useState<
        { question: QuizQuestion; correct: boolean }[]
    >([]);

    const handleStart = () => {
        setStage(QuizStage.QUIZ);
        setCurrent(0);
        setScore(0);
        setResults([]);
    };

    const handleNext = (correctCount: number, question: QuizQuestion) => {
        setScore((s) => s + correctCount);
        setResults((r) => [...r, { question, correct: correctCount > 0 }]);

        if (current + 1 < quizData!.length) {
            setCurrent((c) => c + 1);
        } else {
            setStage("end");
        }
    };

    const handleRestart = () => {
        setStage("start");
        setCurrent(0);
        setScore(0);
        setResults([]);
    };

    return (
        <Card className="flex flex-col h-full w-full">
            {!quizData?.length && loading && !error && (
                <div className="h-screen flex items-center justify-center">
                    ⏳ Laden...
                </div>
            )}
            {!quizData?.length && !loading && !error && (
                <div className="h-screen flex items-center justify-center">
                    Geen quiz data gevonden
                </div>
            )}
            {!quizData?.length && !loading && error && (
                <div className="h-screen flex items-center justify-center text-red-500">
                    ❌ Error: {error}
                </div>
            )}
            {quizData?.length && !loading && !error && (
                <>
                    {stage === QuizStage.START && (
                        <QuizStart onStart={handleStart} />
                    )}
                    {stage === QuizStage.QUIZ && (
                        <QuizPanel
                            question={quizData[current]}
                            onNext={(correctCount: number) =>
                                handleNext(correctCount, quizData[current])
                            }
                            isLast={current + 1 === quizData.length}
                        />
                    )}
                    {stage === QuizStage.END && (
                        <QuizEnd
                            score={score}
                            total={quizData.length}
                            results={results}
                            onRestart={handleRestart}
                        />
                    )}
                </>
            )}
        </Card>
    );
};

export default QuizCard;
