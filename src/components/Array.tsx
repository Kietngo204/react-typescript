import React from "react";

interface ArrayProps {
  fruits: {
    name: string;
    color: string;
    price: number;
  }[];
}

function Array(props: ArrayProps) {
  return (
    <div>
      {props.fruits.map((fruit) => {
        return (
          <div key={fruit.name}>
            <p>Name - {fruit.name}</p>
            <p>Color - {fruit.color}</p>
            <p>Price - {fruit.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Array;
