import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full shadow-sm">
            <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
                {/* Navigation gauche */}
                <ul className="flex flex-col gap-4 text-[0.75rem]">
                    <li className="cursor-pointer text-red-primary">
                        <a href="#about">A propos</a>
                    </li>
                    <li className="cursor-pointer text-red-primary">
                        <a href="#projects">Projets</a>
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

                <ul className="flex flex-col gap-4 text-[0.75rem] text-right">
                    <li className="cursor-pointer text-red-primary">
                        <a href="#skills">Compétences</a>
                    </li>
                    <li className="cursor-pointer text-red-primary">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
