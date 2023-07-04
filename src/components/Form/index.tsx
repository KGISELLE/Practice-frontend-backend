import Button from "../Button";
import Input from "../Input";

interface FormProps {
  fields: Array<{ name: string; label: string; type: string }>;
  onSubmit: (event: any) => void;
  onChange: (event: any) => void;
  buttonText: string;
}

const Form = ({ fields, onSubmit, onChange, buttonText }: FormProps) => {
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexFlow: "column"}}>
      {fields.map((field) => (
        <Input
          key={field.name}
          name={field.name}
          label={field.label}
          inputType={field.type}
          onChange={onChange}
        />
      ))}

      <Button variant="primary" buttonText={buttonText}></Button>
    </form>
  );
};

export default Form;
