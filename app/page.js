"use client";
import Lockscreen from "./components/ui/Lockscreen";
import { useState } from "react";

export default function Home() {
  const [isLocked, setIsLocked] = useState(true);


  return (
    <div>
      <main>
        <Lockscreen></Lockscreen>
      </main>
    </div>
  );
}
