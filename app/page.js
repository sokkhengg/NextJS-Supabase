"use client";

import { useState } from "react";

function Card({ children }) {
  return (
    <div className="border rounded-md border-gray-600 p-4">{children}</div>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [names, setNames] = useState(["thom", "ke", "sam"]);
  const name = "Thom";
  const handleClick = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  const handleAdd = () => {
    setNames([...names, "new name"])
  }

  const cards =
    isVisible && names.map((name, index) => <Card key={index}>{name}</Card>);
  return (
    <>
      <div className="p-20 space-y-4">Hellom, {name}</div>
      {cards}

      <div className="flex space-x-4">
        <button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
}
