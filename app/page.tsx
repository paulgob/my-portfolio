"use client";

import Image from "next/image";
import Card from "../components/card";
import { CircleWrapper, Underline } from "../components/draw-animation";
import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import CustomCursor from "@/components/customCursor";

// Make the image grow and fill the viewport when the user scroll
function ScrollImageGrow() {
    const imageContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imageContainer,
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.8],
        ["#EFEEE8", "#C50022"],
    );
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const opacityText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <motion.div
            ref={imageContainer}
            className="h-[300vh] relative md:mt-36"
            style={{ backgroundColor }}
        >
            <div className="sticky top-50 pointer-events-none">
                <div className="w-full absolute top-0 flex flex-col justify-center items-center overflow-x-clip">
                    <motion.div
                        style={{ scale, opacity }}
                        className="w-[30vw] h-[30vh] relative flex items-center justify-center"
                    >
                        <img
                            src="/marathon.png"
                            alt="Photo de moi en train de courir un marathon"
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.p
                        className="mt-4 text-[0.75rem]! text-center md:mt-36"
                        style={{ opacity: opacityText }}
                    >
                        (C'est moi tout fier d'avoir fini un marathon !)
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
}

// Make the ';)' image grow and fill the viewport when the user scroll (similar at ScrollImageGrow)
function ScrollEmojiGrow() {
    const imageContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imageContainer,
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.8],
        ["#EFEEE8", "#000000"],
    );
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 90]);

    return (
        <motion.div
            ref={imageContainer}
            className="h-[300vh] relative"
            style={{ backgroundColor }}
        >
            <div className="sticky top-50 pointer-events-none">
                <div className="w-full absolute top-0 flex flex-col justify-center items-center overflow-x-clip">
                    <motion.div
                        style={{ scale, opacity, rotate }}
                        className="w-[30vw] h-[30vh] relative flex items-center justify-center"
                    >
                        <img src="/icons/clin-doeil-icon.png" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Home() {
    // To get the dimension to use draw-animations components
    const percentRef = useRef<HTMLSpanElement>(null);
    const skillsRef = useRef<HTMLSpanElement>(null);
    const contactRef = useRef<HTMLSpanElement>(null);
    const mailRef = useRef<HTMLSpanElement>(null);

    const [percentBounds, setPercentBounds] = useState({ width: 0, height: 0 });
    const [skillsBounds, setSkillsBounds] = useState({ width: 0, height: 0 });
    const [contactBounds, setContactBounds] = useState({ width: 0, height: 0 });
    const [mailBounds, setMailBounds] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (percentRef.current) {
            const rect = percentRef.current.getBoundingClientRect();
            setPercentBounds({ width: rect.width, height: rect.height });
        }
        if (skillsRef.current) {
            const rect = skillsRef.current.getBoundingClientRect();
            setSkillsBounds({ width: rect.width, height: rect.height });
        }
        if (contactRef.current) {
            const rect = contactRef.current.getBoundingClientRect();
            setContactBounds({ width: rect.width, height: rect.height });
        }
        if (mailRef.current) {
            const rect = mailRef.current.getBoundingClientRect();
            setMailBounds({ width: rect.width, height: rect.height });
        }
    }, []);

    return (
        <>
            <section id="about" className="mx-4">
                <div className="md:mx-auto md:max-w-4xl md:flex md:justify-around md:mt-8">
                    <Image
                        src="/portrait.png"
                        alt="Portrait de Paul Gobbé"
                        width={200}
                        height={200}
                        className="hidden md:block md:border md:rounded-full"
                    />
                    <div className="md:flex md:flex-col md:justify-around">
                        <h1 className="text-[3rem] md:text-[3.75rem] text-center">
                            Paul Gobbé
                        </h1>
                        <hr className="bg-red-primary border-red-primary h-1 my-4 md:my-0" />
                        <h2 className="text-[1rem]! font-(family-name:--font-montserrat)! text-center">
                            Développeur Full-Stack Junior
                        </h2>
                    </div>
                </div>
                <div className="flex justify-center my-8 mx-6">
                    <strong className="text-[1.5rem] font-(family-name:--font-kanit)! font-medium text-center">
                        Je me donne toujours à{" "}
                        <span className="relative" ref={percentRef}>
                            100%{" "}
                            <Underline
                                elemWidth={percentBounds.width}
                                elemHeight={percentBounds.height}
                            />
                        </span>{" "}
                        sur les projets
                    </strong>
                </div>

                <p className="md:text-center">
                    J’aime passer mes dimanches matins à courir, mes weekends à
                    regarder la F1, et la semaine à coder et chercher des expos
                    à visiter !
                </p>

                <CustomCursor />
            </section>
            <ScrollImageGrow />
            <section
                id="projects"
                className="bg-red-primary text-background pt-20 overflow-x-hidden"
            >
                <h2 className="text-center">Mes (supers) projets</h2>
                <div className="flex justify-center">
                    <div className="cards-container mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                        <Card
                            imageSrc="/projets/free-message.png"
                            name="Free Message"
                            description="Un faux réseau social pour poster des messages avec médias ou non. Swipe comme Tinder pour les interactions sur les messages. Gestion de base de données avec PHP et MySQL."
                            projectLink="http://178.62.53.66:8080/"
                        ></Card>
                        <Card
                            imageSrc="/projets/clash-of-clans-data.png"
                            name="Clash of clans Data"
                            description="Site NextJS affichant des données extraites de l'API Clash of Clans. Recherche de joueurs, clans, et affichage de statistiques détaillées."
                            projectLink="https://clash-of-clan-data.vercel.app/"
                        ></Card>
                        <Card
                            imageSrc="/projets/sae303.png"
                            name="Inserm - Dépistage de l'autisme"
                            description="Application Web utilisant ChartJS pour exploiter les données d'une expérience d'un laboratoire de recherche à partir d'un fichier Excel."
                            projectLink="https://sae-303-tawny.vercel.app/index.html"
                        ></Card>
                        <Card
                            imageSrc="/projets/ancien-portfolio.png"
                            name="Ancien Portfolio"
                            description="Mon ancien site portfolio, présentant mes projets et compétences. Réalisé avec NextJS et TailwindCSS."
                            projectLink="https://portfolio-paulgobbe.vercel.app/"
                        ></Card>
                        <Card
                            imageSrc="/projets/cbd-shop.png"
                            name="CBD Shop"
                            description="Une maquette de site e-commerce pour des produits à base de CBD. Réalisée avec Figma et respectant un wireframe donné."
                            projectLink="https://www.figma.com/design/uksPxDPE0omAzozREPoTD1/CBD-shop?node-id=0-1&t=3N8cfr41T3fmWvHk-1"
                        ></Card>
                    </div>
                </div>
                <hr className="mt-4 bg-background h-1" />
                <div className="overflow-hidden mt-4 pb-4">
                    {/* Texte infinite slider */}
                    <motion.p
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="text-nowrap whitespace-nowrap w-fit text-4xl! font-extrabold py-16 opacity-60"
                    >
                        CONTINUE DE SCROLLER ! CONTINUE DE SCROLLER ! CONTINUE
                        DE SCROLLER ! CONTINUE DE SCROLLER ! CONTINUE DE
                        SCROLLER ! CONTINUE DE SCROLLER ! CONTINUE DE SCROLLER !
                        CONTINUE DE SCROLLER ! CONTINUE DE SCROLLER ! CONTINUE
                        DE SCROLLER ! CONTINUE DE SCROLLER ! CONTINUE DE
                        SCROLLER ! CONTINUE DE SCROLLER ! CONTINUE DE SCROLLER !
                        CONTINUE DE SCROLLER ! CONTINUE DE SCROLLER !
                    </motion.p>
                </div>
            </section>
            <section id="skills" className="mt-8">
                <h2 className="text-center">
                    <span className="relative p-3" ref={skillsRef}>
                        Mes compétences{" "}
                        <CircleWrapper
                            elemWidth={skillsBounds.width}
                            elemHeight={skillsBounds.height}
                        />
                    </span>
                </h2>
                <div className="skills-container md:flex md:justify-evenly">
                    <div className="md:w-full">
                        <h3 className="mt-8 mx-4">Frontend technologies</h3>
                        <ul className="mt-4 flex flex-col mx-4">
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/html.png"
                                    alt="HTML icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                HTML
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/css.png"
                                    alt="CSS icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                CSS
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/js.png"
                                    alt="JavaScript icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                JavaScript
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/nextjs.png"
                                    alt="NextJS icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                NextJS
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/tailwind.png"
                                    alt="TailwindCSS icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                TailwindCSS
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/bootstrap.png"
                                    alt="Bootstrap icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                Bootstrap
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-full">
                        <h3 className="mt-8 mx-4">Backend technologies</h3>
                        <ul className="mt-4 flex flex-col mx-4">
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/php.png"
                                    alt="PHP icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                PHP
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/twig.png"
                                    alt="TWIG icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                TWIG
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/mysql.png"
                                    alt="MySQL icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                MySQL
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/docker.png"
                                    alt="Docker icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                Docker
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-full">
                        <h3 className="mt-8 mx-4">Autres</h3>
                        <ul className="mt-4 flex flex-col mx-4">
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/git.png"
                                    alt="Git icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                Git
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/linux.png"
                                    alt="Linux icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                Linux
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/figma.png"
                                    alt="Figma icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                Figma
                            </li>
                            <li className="flex gap-4 shadow-lg p-4 border-2 border-red-primary rounded-lg mb-2">
                                <Image
                                    src="/icons/illustrator.png"
                                    alt="Illustrator icon"
                                    width={24}
                                    height={24}
                                />{" "}
                                Illustrator
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="mt-8 flex justify-center">
                    Et je compte ajouter des cordes à mon arc{" "}
                </p>
                <span>
                    {/* <Image
                            src={"/icons/clin-doeil-icon.png"}
                            alt={""}
                            width={24}
                            height={24}
                        /> */}
                    <ScrollEmojiGrow />
                </span>
            </section>
            <section
                id="contact"
                className="bg-foreground text-background text-center h-[50vh]"
            >
                <h2 className="pt-4">
                    Envie de me{" "}
                    <span className="relative" ref={contactRef}>
                        contacter{" "}
                        <Underline
                            elemWidth={contactBounds.width}
                            elemHeight={contactBounds.height}
                        />
                    </span>{" "}
                    ?
                </h2>
                <p className="mt-8">Voici mon mail</p>
                <a href="mailto:pgobbe.pro@gmail.com" className="block mt-8">
                    <span className="relative p-3" ref={mailRef}>
                        pgobbe.pro@gmail.com
                        <CircleWrapper
                            elemWidth={mailBounds.width}
                            elemHeight={mailBounds.height}
                        />
                    </span>
                </a>
                <a
                    href="#"
                    className="block text-red-primary text-[0.75rem]! border-red-primary border-2 rounded-full max-w-36 mx-auto mt-16 active:bg-red-primary active:text-background transition duration-300 hover:bg-red-primary hover:text-background"
                >
                    Revenir au début
                </a>
            </section>
        </>
    );
}
