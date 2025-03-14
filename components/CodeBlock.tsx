"use client";
import React from 'react';
import { useState } from "react";
import { Copy, Check } from "lucide-react"; // For icons
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (navigator.clipboard) {
      try{
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy code to clipboard",err);
        
      }
    }else{
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy code to clipboard", err);
      }
      document.body.removeChild(textArea);
      
    }
  };

  return (
    <div className="relative group bg-gray-900 rounded-lg p-4">
      <SyntaxHighlighter language={language} style={oneDark} customStyle={{ borderRadius: "8px" }}>
        {code}
      </SyntaxHighlighter>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-opacity opacity-0 group-hover:opacity-100"
      >
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </button>
    </div>
  );
}
