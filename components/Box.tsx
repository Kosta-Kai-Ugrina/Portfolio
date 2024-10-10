import { JSX } from "preact";

export function Box(props: JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            style={container}
            {...props}
        />
    );
}

const container: JSX.CSSProperties = {
    backgroundColor: "#3c4",
    borderRadius: "10px",
    padding: "10px",
    borderColor: "#000",
    borderWidth: "10px",
    borderStyle: "solid",
};
