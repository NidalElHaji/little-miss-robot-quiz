import { type FC } from "react";

type ProgressBarProps = {
    current: number;
    total: number;
    className?: string;
};

const ProgressBar: FC<ProgressBarProps> = ({
    current,
    total,
    className = "",
}) => {
    const percentage = Math.min((current / total) * 100, 100);

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="flex-1 bg-gray-300 rounded-full h-2 overflow-hidden">
                <div
                    className="h-full bg-yellow-400 transition-all duration-300 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <span className="text-sm font-medium text-white">
                Level {current} / {total}
            </span>
        </div>
    );
};

export default ProgressBar;
