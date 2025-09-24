import { UI_STYLES } from "../../utils/constants";

type ButtonProps = {
    variant?:
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "outline"
        | "default"
        | "selected"
        | "correct"
        | "incorrect";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...props
}: ButtonProps) => {
    const baseStyles =
        "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    return (
        <button
            className={`${baseStyles} ${UI_STYLES.BUTTON[variant]} ${UI_STYLES.SIZE[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
