interface ButtonProps {
  variant: "primary" | "income" | "withdraw";
  buttonText: string;
  onClick?: (event: any) => void;
}

const Button = ({ variant, buttonText }: ButtonProps) => {

  let buttonColor: string;

  if (variant === "primary") {
    buttonColor = "#646CFF";
  } else if (variant === "income") {
    buttonColor = "green";
  } else {
    buttonColor = "red";
  }

  return (
    <button
      style={{
        backgroundColor: buttonColor,
        color: "white",
        margin: "50px 20px 50px 20px",
        padding: "10px",
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
