"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("layout mount");
  }, []);

  return (
    <>
      <div className="bg-blue-200 p-3.75 mb-5">
        <h1 className="text-xl font-bold">Layout</h1>
        <p>Số trong layout: {count}</p>
        <button onClick={() => setCount(count + 1)}>Layout +1</button>

        <nav className="mt-2.5 flex gap-2.5">
          <Link
            className="link"
            href="/template"
          >
            Trang Con
          </Link>
          <Link
            className="link"
            href="/template/other"
          >
            Trang Khác
          </Link>
        </nav>
      </div>
      {children}
    </>
  );
};

export default LayoutPage;
