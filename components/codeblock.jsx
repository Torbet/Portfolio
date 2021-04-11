import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';

const CodeBlock = ({ language, value }) => {

    const codeStyle = {
        width: "100%"
    }

    const blockStyle = {
        font-family: 'Helvetica Neue', 'Helvetica';
        borderRadius: "20px",
        padding: '1em',
        lineHeight: '1.5em',
        fontSize: "1.2em",
        marginBottom: '1em',
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
