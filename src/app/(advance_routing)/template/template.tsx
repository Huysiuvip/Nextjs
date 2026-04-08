"use client";
import { useEffect, useState } from "react";

const TemplatePage = ({ children }:{ children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("template mount");
  }, []);
  return (
    <>
      <div className="bg-green-200 p-3.75 mb-5">
        <h1 className="text-xl font-bold">Template</h1>
        <p>Số trong template: {count}</p>
        <button onClick={() => setCount(count + 1)}>Template +1</button>
      </div>
      {children}
    </>
  );
};

export default TemplatePage;
