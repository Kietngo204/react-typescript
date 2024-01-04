import React from "react";

interface ChildComponentProps {
  children: React.ReactNode;
}

function ChildComponent({ children }: ChildComponentProps) {
  return <div>{children}</div>;
}

export default ChildComponent;
