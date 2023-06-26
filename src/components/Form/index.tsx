import Button from "../Button";
import Input from "../Input";

interface FormProps {
  onSubmit: (event: any) => void;
  onChange: (event: any) => void;
  formType: "login" | "register";
  buttonText: string;
}


const Form = ({ onSubmit, onChange, formType, buttonText }: FormProps) => {
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexFlow: "column" }}>
      {formType === "login" && (
        <>
          <Input
            name="username"
            label="User Name:"
            inputType="text"
            onChange={onChange}
          />
          <Input
            name="password"
            label="Password:"
            inputType="password"
            onChange={onChange}
          />

          <Button color="primary" buttonText={buttonText} ></Button>
        </>
      )}
      {formType === "register" && (
        <>
          <Input
            name="name"
            label="Name:"
            inputType="text"
            onChange={onChange}
          />
          <Input
            name="username"
            label="User Name:"
            inputType="text"
            onChange={onChange}
          />
          <Input
            name="password"
            label="Password:"
            inputType="password"
            onChange={onChange}
          />
          <Input
            name="balance"
            label="Balance:"
            inputType="number"
            onChange={onChange}
          />

          <Button color="primary" buttonText={buttonText} ></Button>

          {/* <button
            style={{
              backgroundColor: "#646CFF",
              color: "white",
              margin: "20px",
            }}
            type="submit"
          >
            Register
          </button> */}
        </>
      )}
    </form>
  );
};

export default Form;
