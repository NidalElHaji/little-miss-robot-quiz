import { useState, useEffect } from "react";

import type { QuizQuestion } from "../../types/quiz";
import { useTimer } from "../../hooks/useTimer";
import Timer from "../ui/Timer";
import AnswerButton from "./AnswerButton";
import QuizControls from "./QuizControls";

type QuizPanelProps = {
    question: QuizQuestion;
    onNext: (selectedAnswers: number, timeSpent: number) => void;
    isLast: boolean;
};

const QuizPanel = ({ question, onNext, isLast }: QuizPanelProps) => {
    const [selected, setSelected] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [startTime] = useState(() => Date.now());

    const handleTimeout = () => {
        if (!submitted) {
            setSubmitted(true);
        }
    };

    const { timeLeft, reset } = useTimer(question.time_limit_s, handleTimeout);

    useEffect(() => {
        setSelected([]);
        setSubmitted(false);
        reset(question.time_limit_s);
    }, [question, reset]);

    const handleSubmit = () => {
        if (submitted) return;
        setSubmitted(true);
    };

    const toggleAnswer = (id: string) => {
        if (submitted) return;
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
        );
    };

    const handleNext = () => {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        const correctIds = question.answers
            .map((a, i) => ({ ...a, id: String(i) }))
            .filter((a) => a.correct)
            .map((a) => a.id);

        const isCorrect =
            selected.length === correctIds.length &&
            selected.every((id) => correctIds.includes(id));

        onNext(isCorrect ? 1 : 0, timeSpent);
    };

    return (
        <div className="h-screen flex flex-col bg-blue-800 p-6 text-white">
            <div className="flex justify-center">
                <div className="bg-white text-blue-800 rounded-full px-4 py-1 m-2 shadow-md">
                    <Timer timeRemaining={timeLeft} />
                </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-4">
                {question.question}
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
                {question.answers.map((answer, idx) => (
                    <AnswerButton
                        key={idx}
                        id={String(idx)}
                        label={answer.answer}
                        selected={selected.includes(String(idx))}
                        onClick={() => toggleAnswer(String(idx))}
                        showResult={submitted}
                        isCorrect={answer.correct}
                    />
                ))}
            </div>

            <div className="mt-auto">
                <QuizControls
                    submitted={submitted}
                    isLast={isLast}
                    onSubmit={handleSubmit}
                    onNext={handleNext}
                />
            </div>
        </div>
    );
};

export default QuizPanel;
