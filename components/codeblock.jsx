import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';

const CodeBlock = ({ language, value }) => {

    const codeStyle = {
        width: "90%",
    }

    const blockStyle = {
        borderRadius: "20px",
        padding: '1em',
        lineHeight: '1.5em',
        fontSize: "1.2rem"
      }

    return (
        <div style={codeStyle}>
            <SyntaxHighlighter language={language} style={atomOneDark} customStyle={blockStyle}>
                {value}
            </SyntaxHighlighter>
        </div>

    )
}

export default CodeBlock