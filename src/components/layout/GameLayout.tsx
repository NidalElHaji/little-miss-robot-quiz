import { type ReactNode } from "react";

type GameLayoutProps = {
    children: ReactNode;
};

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
    return (
        <div className="bg-blue-900 h-screen p-6">
            <div className="flex gap-4 h-full">{children}</div>
        </div>
    );
};

export default GameLayout;
