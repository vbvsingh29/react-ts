import React from "react";
import "./App.css";

function Button({
  children,
  styles,
  ...rest
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    styles: React.CSSProperties;
  }) {
  return (
    <button style={styles} {...rest}>
      {children}
    </button>
  );
}

interface BoxProps {
  children: React.ReactNode;
}
function Box({ children, ...styles }: BoxProps & React.CSSProperties) {
  return <div style={styles}>{children}</div>;
}

interface AChildComponentProps {
  title: string;
  body: string;
  children?: React.ReactNode;
}

function AChildComponent({ title, body, children }: AChildComponentProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      <div>{children}</div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Button
        onClick={(e) => console.log(e)}
        styles={{ backgroundColor: "black" }}
      >
        Button
      </Button>
      <Box backgroundColor="red" display="flex">
        This is Box child
      </Box>
      <AChildComponent title="Title" body="this is body">
        This is Child Componenet
      </AChildComponent>
    </div>
  );
}

export default App;
