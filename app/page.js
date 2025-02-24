"use client";

import { useState } from "react";
import Card from "@/components/card"


export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
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
      <div className="space-y-4">Helle, {name}</div>
      {cards}

      <div className="flex space-x-4">
        <button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
}
