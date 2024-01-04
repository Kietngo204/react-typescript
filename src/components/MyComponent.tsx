import React from "react";

interface MyComponentProps {
  name: string;
  age: number;
  gender: boolean;
}

function MyComponent(props: MyComponentProps) {
  return (
    <div>
      <h1>Hello, {props.name}.</h1>
      <h2>
        {props.name} is {props.age} year old.
      </h2>
      {props.gender ? (
        <h1>{props.name} is male</h1>
      ) : (
        <h1>{props.name} is female</h1>
      )}
    </div>
  );
}

export default MyComponent;
