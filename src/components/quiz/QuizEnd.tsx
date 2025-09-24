import type { QuizQuestion } from "../../types/quiz";

type QuizEndProps = {
    score: number;
    total: number;
    results: { question: QuizQuestion; correct: boolean }[];
    onRestart: () => void;
};

const QuizEnd = ({ score, total, results, onRestart }: QuizEndProps) => {
    const passed = score >= Math.ceil(total / 2);

    return (
        <div
            className={`h-screen flex flex-col items-center justify-center p-8 text-white bg-blue-900`}
        >
            <h2 className="text-3xl font-bold mb-4">Quiz afgerond!</h2>
            <p className="text-xl mb-6">
                Je had <strong>{score}</strong> van de {total} vragen juist.
            </p>
            <p className="text-lg mb-6">
                {passed
                    ? "🎉 Goed gedaan, je bent geslaagd!"
                    : "❌ Jammer, je bent niet geslaagd."}
            </p>

            <div className="w-full max-w-2xl bg-white/20 rounded-lg p-4 overflow-y-auto max-h-96 mb-6">
                <h3 className="text-xl font-semibold mb-3">Overzicht:</h3>
                <ul className="space-y-3">
                    {results.map((r, idx) => (
                        <li
                            key={idx}
                            className={`p-3 rounded-lg ${
                                r.correct ? "bg-green-500/70" : "bg-red-500/70"
                            }`}
                        >
                            <p className="font-semibold">
                                Vraag {idx + 1}: {r.question.question}
                            </p>
                            <p>
                                {r.correct
                                    ? "✅ Correct beantwoord"
                                    : "❌ Fout beantwoord"}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                onClick={onRestart}
                className="bg-white text-black py-3 px-6 rounded-lg font-semibold shadow"
            >
                Opnieuw proberen
            </button>
        </div>
    );
};

export default QuizEnd;
