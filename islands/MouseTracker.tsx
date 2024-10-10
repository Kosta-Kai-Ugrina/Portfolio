import { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";

interface Point {
    x: number;
    y: number;
}

export function MouseTracker() {
    const mousePosition = useSignal<Point>({ x: 0, y: 0 });
    const ballPosition = useSignal<Point>({ x: 0, y: 0 });
    const divRef = useRef<HTMLDivElement>(null);
    const size = 100;

    const getElementPosition = () => {
        if (!divRef.current) return undefined;

        const { x, y } = divRef.current.getBoundingClientRect();
        return calculateContainerCenter(size, { x, y });
    };

    const getEyeballPosition = (): Point => {
        const containerPosition = getElementPosition();

        if (containerPosition === undefined) return { x: 0, y: 0 };
        const angle = calculateAngleRadians(
            containerPosition,
            mousePosition.value,
        );
        console.log("radians", angle);
        const sine = Math.sin(angle);
        const cosine = Math.cos(angle);

        const x = containerPosition.x - 300 + (cosine * size * 5);
        const y = containerPosition.y - 200 + (sine * size * 3);

        // console.log("containerPosition", containerPosition);
        // console.log("mousePosition", mousePosition.value);

        return { x, y };
    };

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
        mousePosition.value = { x: clientX, y: clientY };
        ballPosition.value = getEyeballPosition();
        console.log("Ball position:", ballPosition.value);
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
    }, []);

    const container: JSX.CSSProperties = {
        backgroundColor: "#fcc",
        display: "inline-block",
        position: "relative",
        borderRadius: "50%",
        borderColor: "#000",
        borderWidth: "3px",
        borderStyle: "solid",
        width: "100px",
        height: "100px",
    };

    const ball: JSX.CSSProperties = {
        backgroundColor: "black",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        position: "absolute",
        left: `${(ballPosition.value.x / 1920) * 100}%`,
        top: `${(ballPosition.value.y / 1280) * 100}%`,
    };

    return (
        <div
            ref={divRef}
            style={container}
        >
            <span style={ball} />
        </div>
    );
}

function calculateContainerCenter(size: number, { x, y }: Point): Point {
    return {
        x: x + (size / 2),
        y: y + (size / 2),
    };
}

function calculateAngleRadians(
    pointA: Point,
    pointB: Point,
): number {
    const deltaX = pointB.x - pointA.x;
    const deltaY = pointB.y - pointA.y;
    const angleRadians = Math.atan2(deltaY, deltaX);
    return angleRadians;
}
