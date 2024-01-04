import React from "react";

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={(event) => {
        props.handleClick(event, 1);
      }}
    >
      Click
    </button>
  );
}

export default Button;
