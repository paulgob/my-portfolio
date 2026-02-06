import Image from "next/image";
import { motion, Variants } from "motion/react";

// Animate cards to appear from the right to the center of the container
const cardVariants: Variants = {
    offscreen: {
        x: 300,
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

// Return a motion.div with all the element needed to display my project
export default function Card({
    imageSrc,
    name,
    description,
    projectLink,
}: {
    imageSrc: string;
    name: string;
    description: string;
    projectLink: string;
}) {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.1, once: true }}
            variants={cardVariants}
            className="card bg-foreground w-75"
        >
            <a href={projectLink} target="_blank">
                <Image
                    src={imageSrc}
                    alt={`Image du projet ${name}`}
                    width={300}
                    height={200}
                />
                <div className="flex justify-between p-2 items-center">
                    <h3>{name}</h3>
                    <p className="hidden">{description}</p>
                    <span className="border-2 border-red-primary rounded-full w-12 max-h-6 overflow-hidden">
                        <Image
                            src="/eye-icon.svg"
                            alt="Voir plus"
                            width={30}
                            height={30}
                            className="mx-auto -translate-y-1"
                        />
                    </span>
                </div>
            </a>
        </motion.div>
    );
}
