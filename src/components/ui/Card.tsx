import React from "react";

import { cn } from "../../services/tailwind";

type CardProps = {
    children: React.ReactNode;
    className?: string;
    padding?: "sm" | "md" | "lg";
};

const Card: React.FC<CardProps> = ({
    children,
    className = "",
    padding = "sm",
}) => {
    const paddingStyles = {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    return (
        <div
            className={cn(
                "bg-blue-500 rounded-2xl shadow-lg",
                paddingStyles[padding],
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Card;
