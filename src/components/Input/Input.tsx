import { ChangeEvent } from "react";
import "./Input.css";

interface InputProps {
  type: string;
  label: string;
  name: string;
  value: string | number;
  handleChange(data: string): void;
  [key: string]: unknown;
}

const Input = (props: InputProps) => {
  const { type, label, name, value, handleChange, ...rest } = props;

  return (
    <label htmlFor={name}>
      {label}
      <br />
      <input
        type={type}
        name={name}
        id={name}
        value={type === "number" ? Number(value) : value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
        {...rest}
      />
    </label>
  );
};

export default Input;
