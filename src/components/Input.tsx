import React from "react";

interface InputProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.handleChange}
      title="input"
    />
  );
}

export default Input;
