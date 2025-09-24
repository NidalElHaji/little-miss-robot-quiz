type QuizStartProps = { onStart: () => void };

const QuizStart = ({ onStart }: QuizStartProps) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-blue-900 text-white">
            <h1 className="text-4xl font-bold mb-6">Welkom bij de Quiz!</h1>
            <p className="mb-6 text-lg">Klik op start om te beginnen 🚀</p>

            <button
                onClick={onStart}
                className="bg-yellow-400 text-white py-3 px-6 rounded-lg font-semibold shadow"
            >
                Start
            </button>
        </div>
    );
};

export default QuizStart;
