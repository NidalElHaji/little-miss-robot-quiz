import Button from "../ui/Button";

type QuizControlsProps = {
    submitted: boolean;
    isLast: boolean;
    onSubmit: () => void;
    onNext: () => void;
    onHint?: () => void;
};

const QuizControls = ({
    submitted,
    isLast,
    onSubmit,
    onNext,
    onHint,
}: QuizControlsProps) => {
    if (submitted) {
        return (
            <Button
                onClick={onNext}
                className="py-3 w-full rounded-lg font-semibold shadow bg-yellow-400 hover:bg-yellow-600"
            >
                {isLast ? "Voltooi" : "Volgende vraag"}
            </Button>
        );
    }

    return (
        <div className="space-y-3">
            <Button
                variant="outline"
                onClick={onSubmit}
                className="bg-gray-200 text-black py-3 w-full rounded-lg font-semibold shadow"
            >
                Klaar!
            </Button>

            {onHint && (
                <Button
                    variant="outline"
                    onClick={onHint}
                    className="bg-gray-200 text-black py-3 w-full rounded-lg font-semibold shadow"
                >
                    Geef mij een tip ...
                </Button>
            )}
        </div>
    );
};

export default QuizControls;
