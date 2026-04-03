"use client";
import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  console.log("Toi la con");
  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => console.log("eo")}>Click me</button>
      <GrandChild />
    </div>
  );
};

export default Child;
