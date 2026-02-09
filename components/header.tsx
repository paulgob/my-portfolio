"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";

const LAST_FRAME = 6;
const STEP = 0.08; // seconds per frame

const textDisplay: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => {
        if (i === LAST_FRAME) {
            return {
                opacity: 1,
                transition: { delay: i * STEP, duration: 0.01 },
            };
        }
        return {
            opacity: [0, 1, 1, 0],
            transition: {
                delay: i * STEP,
                duration: STEP,
                times: [0, 0, 0.99, 1],
            },
        };
    },
};

export default function Header() {
    return (
        <header className="w-full shadow-sm">
            <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto md:max-w-none md:w-full md:mx-0">
                {/* Navigation gauche */}
                <ul className="flex flex-col gap-6 pb-4 text-[0.75rem] md:text-[1rem] md:flex-row md:justify-evenly md:w-full">
                    <li className="cursor-pointer text-red-primary">
                        <motion.a
                            href="/#about"
                            className="relative text-nowrap"
                            initial="hidden"
                            whileHover="visible"
                            whileTap="visible"
                        >
                            <span className="hover:opacity-0 active:opacity-0 absolute z-10">
                                A propos
                            </span>
                            <motion.span
                                variants={textDisplay}
                                custom={0}
                                className="absolute"
                            >
                                A m
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={1}
                                className="absolute"
                            >
                                A p%
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={2}
                                className="absolute"
                            >
                                A prh
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={3}
                                className="absolute"
                            >
                                A pro!
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={4}
                                className="absolute"
                            >
                                A prop$
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={5}
                                className="absolute"
                            >
                                A propoL
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={6}
                                className="absolute"
                            >
                                A propos
                            </motion.span>
                        </motion.a>
                    </li>
                    <li className="cursor-pointer text-red-primary">
                        <motion.a
                            href="/#projects"
                            className="relative text-nowrap"
                            initial="hidden"
                            whileHover="visible"
                            whileTap="visible"
                        >
                            <span className="hover:opacity-0 active:opacity-0 absolute z-10">
                                Projets
                            </span>
                            <motion.span
                                variants={textDisplay}
                                custom={0}
                                className="absolute"
                            >
                                Pm
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={1}
                                className="absolute"
                            >
                                Pr!
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={2}
                                className="absolute"
                            >
                                Pro$
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={3}
                                className="absolute"
                            >
                                Projb
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={4}
                                className="absolute"
                            >
                                ProjeW
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={5}
                                className="absolute"
                            >
                                Projet$
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={6}
                                className="absolute"
                            >
                                Projets
                            </motion.span>
                        </motion.a>
                    </li>
                </ul>

                {/* Logo PG */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <a href="/">
                        <Image
                            src="/LogoRed.png"
                            alt="PG logo"
                            width={50}
                            height={50}
                        />
                    </a>
                </div>

                <ul className="flex flex-col gap-6 pb-4 text-[0.75rem] text-right md:text-[1rem] md:flex-row md:justify-evenly md:w-full md:text-left">
                    <li className="cursor-pointer text-red-primary">
                        <motion.a
                            href="/#skills"
                            className="relative text-nowrap"
                            initial="hidden"
                            whileHover="visible"
                            whileTap="visible"
                        >
                            <span className="hover:opacity-0 active:opacity-0 absolute right-0 z-10 md:left-0">
                                Compétences
                            </span>
                            <motion.span
                                variants={textDisplay}
                                custom={0}
                                className="absolute right-0  md:left-0"
                            >
                                C%l
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={1}
                                className="absolute right-0 md:left-0"
                            >
                                ComHb
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={2}
                                className="absolute right-0 md:left-0"
                            >
                                CompéPx
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={3}
                                className="absolute right-0 md:left-0"
                            >
                                Compétew*
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={4}
                                className="absolute right-0 md:left-0"
                            >
                                Compétencp$
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={5}
                                className="absolute right-0 md:left-0"
                            >
                                CompétenceL
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={6}
                                className="absolute right-0 md:left-0"
                            >
                                Compétences
                            </motion.span>
                        </motion.a>
                    </li>
                    <li className="cursor-pointer text-red-primary">
                        <motion.a
                            href="/#contact"
                            className="relative text-nowrap"
                            initial="hidden"
                            whileHover="visible"
                            whileTap="visible"
                        >
                            <span className="hover:opacity-0 active:opacity-0 absolute right-0 z-10 md:left-0">
                                Contact
                            </span>
                            <motion.span
                                variants={textDisplay}
                                custom={0}
                                className="absolute right-0 md:left-0"
                            >
                                Cb
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={1}
                                className="absolute right-0 md:left-0"
                            >
                                CoW
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={2}
                                className="absolute right-0 md:left-0"
                            >
                                Con$
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={3}
                                className="absolute right-0 md:left-0"
                            >
                                Cont!
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={4}
                                className="absolute right-0 md:left-0"
                            >
                                Contam
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={5}
                                className="absolute right-0 md:left-0"
                            >
                                Contac%
                            </motion.span>
                            <motion.span
                                variants={textDisplay}
                                custom={6}
                                className="absolute right-0 md:left-0"
                            >
                                Contact
                            </motion.span>
                        </motion.a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
