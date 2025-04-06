// app/page.tsx
import React from "react";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="animated-bg" />
      <main className="relative p-8 space-y-6">
        <h1 className="text-4xl">
          ABCFavoritMono – The quick brown fox
        </h1>
        <p className="text-lg">
          Optician Sans – Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <pre className="text-base bg-gray-100 p-4 rounded">
          {`function hello() {
            console.log("Roboto Mono!");
          }`}
        </pre>
      </main>
    </div>
  );
}
