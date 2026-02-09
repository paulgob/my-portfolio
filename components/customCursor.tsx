import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SPEED: number = 0.1; // Speed of the animation
const cursors = [
    "/icons/cursors/cowboy-cursor.png",
    "/icons/cursors/flash-cursor.png",
    "/icons/cursors/metal-cursor.png",
];

// Get and Update the mouse coordinates (x, y)
// ======= CREDIT : https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/ =======
const useMousePosition = (
    imageRef: React.RefObject<HTMLImageElement | null>,
) => {
    const mousePosition = useRef({ x: 0, y: 0 });
    const currentPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            mousePosition.current.x = ev.clientX;
            mousePosition.current.y = ev.clientY;
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    useEffect(() => {
        let animationId: number;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            currentPosition.current.x =
                currentPosition.current.x +
                (mousePosition.current.x - currentPosition.current.x) * SPEED;
            currentPosition.current.y =
                currentPosition.current.y +
                (mousePosition.current.y - currentPosition.current.y) * SPEED;

            if (imageRef.current) {
                imageRef.current.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)`;
            }
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId); // cleanup
    }, []);
};

// Return a random image between my cursors list that follow the user's mouse
export default function CustomCursor() {
    const [cursorSrc, setCursorSrc] = useState(
        cursors[Math.floor(Math.random() * cursors.length)],
    );

    const imageRef = useRef<HTMLImageElement>(null);
    useMousePosition(imageRef);

    const changeCursor = () => {
        let newCursorSrc = null;
        do {
            const randomIndex = Math.floor(Math.random() * cursors.length);
            newCursorSrc = cursors[randomIndex];
        } while (newCursorSrc == cursorSrc);
        setCursorSrc(newCursorSrc);
    };

    return (
        <>
            <Image
                ref={imageRef}
                src={cursorSrc}
                alt="cursor"
                width={32}
                height={32}
                className="hidden md:block pointer-events-none fixed top-5 left-5 z-50"
            />

            {/* Button to change the appearance of the cursor */}
            <button
                onClick={changeCursor}
                className="hidden md:block px-2 mb-8 text-red-primary text-[0.75rem]! border-red-primary border-2 rounded-full max-w-36 mx-auto mt-16 active:bg-red-primary active:text-background transition duration-300 hover:bg-red-primary hover:text-background"
            >
                Changer de curseur
            </button>
        </>
    );
}
