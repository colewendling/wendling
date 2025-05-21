// components/CodeBlock.tsx

"use client";

import React from "react";

interface CodeBlockProps {
  title: string;
  code: Record<string, any>;
  keyColor: string;
  valueColor: string;
  punctuationColor: string;
}

const colorMap: Record<string, string> = {
  orange: "#ff4400",
  cyan: "rgb(0,255,214)",
  ruby: "rgb(230,0,35)",
  grey: "rgb(188,188,188)",
  navy: "rgb(56,118,144)",
  black: "rgb(51,9,9)",
};

export default function CodeBlock({
  title,
  code,
  keyColor,
  valueColor,
  punctuationColor,
}: CodeBlockProps) {
  const INDENT = "  ";

  function renderValue(value: any, indentLevel: number = 0): React.ReactNode {
    if (Array.isArray(value)) {
      return (
        <>
          <span style={{ color: colorMap[punctuationColor] }}>[</span>
          {value.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <span style={{ color: colorMap[punctuationColor] }}>, </span>
              )}
              {typeof item === "string" ? (
                <span style={{ color: colorMap[valueColor] }}>"{item}"</span>
              ) : typeof item === "number" || typeof item === "boolean" ? (
                <span style={{ color: colorMap[valueColor] }}>
                  {String(item)}
                </span>
              ) : (
                renderObject(item, indentLevel)
              )}
            </React.Fragment>
          ))}
          <span style={{ color: colorMap[punctuationColor] }}>]</span>
        </>
      );
    } else if (value && typeof value === "object") {
      return renderObject(value, indentLevel);
    } else if (typeof value === "string") {
      return <span style={{ color: colorMap[valueColor] }}>"{value}"</span>;
    } else {
      return (
        <span style={{ color: colorMap[valueColor] }}>{String(value)}</span>
      );
    }
  }

  function renderObject(
    obj: Record<string, any>,
    indentLevel: number = 0
  ): React.ReactNode {
    const entries = Object.entries(obj);
    return (
      <>
        <span style={{ color: colorMap[punctuationColor] }}>{"{"}</span>
        <br />
        {entries.map(([key, val], idx) => (
          <React.Fragment key={key}>
            {INDENT.repeat(indentLevel + 0.5)}
            <span style={{ color: colorMap[keyColor] }}>{key}</span>
            <span style={{ color: colorMap[punctuationColor] }}>: </span>
            {renderValue(val, indentLevel + 0.5)}
            {idx < entries.length - 1 && (
              <span style={{ color: colorMap[punctuationColor] }}>,</span>
            )}
            <br />
          </React.Fragment>
        ))}
        {INDENT.repeat(indentLevel)}
        <span style={{ color: colorMap[punctuationColor] }}>{"}"}</span>
      </>
    );
  }

  return (
    <div className="w-full h-full overflow-visible font-mono text-sm leading-tight">
      <h2 className="image-title-text">{title}</h2>
      <pre className="whitespace-pre-wrap leading-tight">
        {renderObject(code)}
      </pre>
    </div>
  );
}
