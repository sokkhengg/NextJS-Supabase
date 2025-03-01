"use client";

import { useState } from "react";
import Card from "@/components/card"


export default function Home({searchParams}) {
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

  // console.log(searchParams);
  // if (searchParams) throw new Error("error is detected")
  
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
