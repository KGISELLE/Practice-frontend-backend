interface InputProps {
  name: string;
  label: string;
  inputType: string;
  value?: string;
  onChange?: (event: any) => void;
}

const Input = ({ name, label, inputType, value, onChange }: InputProps) => {
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
        height: "30px",
        alignItems: "center",
      }}
    >
      <label htmlFor={name} style={{ margin: "10px" }}>
        {label}
      </label>
      <input
        type={inputType}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
