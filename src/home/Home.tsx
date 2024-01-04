import React from "react";
import MyComponent from "../components/MyComponent";
import Status from "../components/Status";
import ChildComponent from "../components/ChildComponent";
import Button from "../components/Button";
import Input from "../components/Input";
import Counter from "../components/Counter";
import Array from "../components/Array";
import CountUseEffect from "../components/CountUseEffect";

function Home() {
  // const user = { name: "Alice", age: 25, location: "American" };

  // const items = ["Apple", "Banana", "Orange"];

  const fruits = [
    { name: "Apple", color: "Red", price: 1000 },
    { name: "Banana", color: "Yellow", price: 2000 },
    { name: "Orange", color: "Orange", price: 3000 },
  ];
  return (
    <div>
      <MyComponent name="john" age={20} gender={false} />

      <Status status="success" />

      <ChildComponent>This is a child component</ChildComponent>

      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />

      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />

      <Array fruits={fruits} />

      <Counter />

      <CountUseEffect />
    </div>
  );
}

export default Home;
