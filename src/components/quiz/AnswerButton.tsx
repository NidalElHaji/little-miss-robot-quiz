import Button from "../ui/Button";

type AnswerButtonProps = {
    id: string;
    label: string;
    selected: boolean;
    onClick: () => void;
    showResult: boolean;
    isCorrect: boolean;
};

const AnswerButton = ({
    label,
    selected,
    onClick,
    showResult,
    isCorrect,
}: AnswerButtonProps) => {
    const buttonStyle = () => {
        if (showResult) {
            if (isCorrect && selected) {
                return "success";
            }
            if ((isCorrect && !selected) || (!isCorrect && selected)) {
                return "incorrect";
            }
            return "default";
        }
        return selected ? "selected" : "default";
    };

    return (
        <Button
            onClick={onClick}
            className={`py-3 px-4 rounded-lg font-semibold shadow`}
            variant={buttonStyle()}
        >
            {label}
        </Button>
    );
};

export default AnswerButton;
