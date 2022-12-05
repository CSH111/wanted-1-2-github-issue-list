import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = {
  img: ({ ...props }) => <img style={{ maxWidth: "100%" }} {...props} alt="" />,
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    if (!inline) {
      return (
        <SyntaxHighlighter style={prism} language={match ? match[1] : ""} PreTag="div" {...props}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      );
    }
    if (inline)
      return (
        <SyntaxHighlighter
          style={prism}
          customStyle={{
            padding: "0px",
            fontSize: "16px",
          }}
          language={""}
          PreTag="span"
        >
          {String(children)}
        </SyntaxHighlighter>
      );
  },
};

export default CodeBlock;
