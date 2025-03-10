import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

//import { Card, CardContent } from "../components/ui/card";


const CodeBlock = ({ language = "javascript", children }) => {
    return (
        <Card className="w-full max-w-2xl mx-auto mt-4 border border-gray-600 shadow-lg">
            <CardContent className="p-4 bg-gray-900 rounded-lg overflow-auto">
                <SyntaxHighlighter language={language} style={oneDark}>
                    {children}
                </SyntaxHighlighter>
            </CardContent>
        </Card>
    );
};

export default CodeBlock;
