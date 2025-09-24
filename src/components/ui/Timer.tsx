import { Clock } from "lucide-react";

import { QUIZ_CONFIG } from "../../utils/constants";
import { formatTime } from "../../utils/quiz";

type TimerProps = {
    timeRemaining: number;
    className?: string;
};

const Timer = ({ timeRemaining, className = "" }: TimerProps) => {
    const isLowTime = timeRemaining <= QUIZ_CONFIG.LOW_TIME_WARNING;

    return (
        <div
            className={`flex items-center gap-2 px-2 py-1 rounded-full ${
                isLowTime ? "text-red-600" : ""
            } ${className}`}
        >
            <Clock size={16} />
            <span className="font-mono font-medium">
                {formatTime(timeRemaining)}
            </span>
        </div>
    );
};

export default Timer;
