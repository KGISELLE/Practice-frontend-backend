interface ButtonProps {
    color: "primary" | "secondary";
    buttonText: string;
}

const Button = ({ color, buttonText }: ButtonProps) => {

    const buttonColor = color === "primary" ? "#646CFF" : "red"

    return (
        <button
            style={{
                backgroundColor: buttonColor, 
                color: "white",
                margin: "20px"
            }}
        >
            {buttonText}
        </button>
    );
}

export default Button;

