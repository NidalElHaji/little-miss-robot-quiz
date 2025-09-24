import { type ReactNode } from "react";

type InformationContainerProps = {
    children: ReactNode;
};

const InformationContainer = ({ children }: InformationContainerProps) => {
    return <aside className="max-w-sm">{children}</aside>;
};

export default InformationContainer;
