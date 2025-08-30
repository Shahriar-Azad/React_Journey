import React from "react";
import { useState, useEffect } from "react";

export default function TitleChanger() {
  const [name, setName] = useState("Azad");

  useEffect(() => {
    document.title = `Hello, ${name}`; // runs after render
  }, [name]);

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
