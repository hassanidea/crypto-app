"use client";
import Link from "next/link";

export default function HomePage() {
  const callAPI = async () => {
    try {
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Hello from the client!" }),
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <main>
        <button onClick={callAPI}>Make API Call</button>
      </main>
    </div>
  );
}
