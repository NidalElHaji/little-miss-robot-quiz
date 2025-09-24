import React, { type ReactNode } from "react";

type QuizContainerProps = {
    children: ReactNode;
};

const QuizContainer: React.FC<QuizContainerProps> = ({
    children,
}: QuizContainerProps) => {
    return <div className="w-full">{children}</div>;
};

export default QuizContainer;
