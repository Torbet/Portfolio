import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/cjs/styles/hljs/googlecode';

const CodeBlock = ({ language, value }) => {

    const codeStyle = {
        width: "100%",
    }

    const blockStyle = {
        borderRadius: "20px",
        padding: '1em',
        lineHeight: '1.5em',
        fontSize: "1.2rem",
        marginBottom: '1em',
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
      }

    return (
        <div style={codeStyle}>
            <SyntaxHighlighter language={language} style={theme} customStyle={blockStyle}>
                {value}
            </SyntaxHighlighter>
        </div>

    )
}

export default CodeBlock