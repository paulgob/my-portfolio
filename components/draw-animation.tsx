"use client";

import { motion, Variants } from "motion/react";

const strokeWidthValue = 2;

// The stroke display like a drawing
const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

// Circle a Word
export function CircleWrapper({
    elemWidth,
    elemHeight,
}: {
    elemWidth: number;
    elemHeight: number;
}) {
    const margin = 10;
    const svgWidth = elemWidth + margin;
    const svgHeight = elemHeight + margin;
    const centerX = (svgWidth + margin) / 2;
    const centerY = (svgHeight + margin) / 2;

    return (
        <motion.svg
            width={svgWidth + margin}
            height={svgHeight + margin}
            viewBox={`0 0 ${svgWidth + margin} ${svgHeight + margin}`}
            initial="hidden"
            whileInView="visible"
            style={{
                ...wrapper,
                top: -margin,
                left: -margin,
            }}
        >
            <motion.ellipse
                cx={centerX}
                cy={centerY}
                rx={svgWidth / 2}
                ry={svgHeight / 2}
                stroke="#C50022"
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.ellipse
                cx={centerX}
                cy={centerY}
                rx={svgWidth / 2 + 2}
                ry={svgHeight / 2 + 4}
                stroke="#C50022"
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.ellipse
                cx={centerX}
                cy={centerY}
                rx={svgWidth / 2 - 4}
                ry={svgHeight / 2 + 2}
                stroke="#C50022"
                variants={draw}
                custom={3}
                style={shape}
            />
        </motion.svg>
    );
}

// Underline a word
export function Underline({
    elemWidth,
    elemHeight,
}: {
    elemWidth: number;
    elemHeight: number;
}) {
    const margin = 10;
    const svgWidth = elemWidth + margin;
    const svgHeight = elemHeight + margin;

    return (
        <motion.svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            initial="hidden"
            whileInView="visible"
            style={{
                ...wrapper,
                top: -margin / 2,
                left: -margin / 2,
            }}
        >
            <motion.path
                d={`M 0, ${svgHeight - 5}
                    L ${svgWidth - margin}, ${svgHeight - 5}
                    L 5, ${svgHeight - 2}
                    L ${svgWidth - margin - 5}, ${svgHeight}`}
                stroke="#C50022"
                variants={draw}
                custom={1}
                style={shape}
            />
        </motion.svg>
    );
}

const wrapper: React.CSSProperties = {
    position: "absolute",
};

const shape: React.CSSProperties = {
    strokeWidth: `${strokeWidthValue}`,
    strokeLinecap: "round",
    fill: "transparent",
};
