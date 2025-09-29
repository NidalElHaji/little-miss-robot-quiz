import { useState, useEffect, useCallback } from "react";

export const useTimer = (initialTime: number, onTimeout?: () => void) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(true);

    const start = useCallback(() => setIsRunning(true), []);
    const stop = useCallback(() => setIsRunning(false), []);
    const reset = useCallback(
        (newTime?: number) => {
            setTimeLeft(newTime ?? initialTime);
            setIsRunning(true);
        },
        [initialTime],
    );

    useEffect(() => {
        if (!isRunning) return;

        if (timeLeft <= 0) {
            setIsRunning(false);
            onTimeout?.();
            return;
        }

        const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, isRunning, onTimeout]);

    return { timeLeft, isRunning, start, stop, reset };
};
