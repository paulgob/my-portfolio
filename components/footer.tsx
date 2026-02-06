import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
        <footer className="pt-8 bg-foreground text-background text-center">
            <ul className="flex items-center justify-center gap-4">
                <li>
                    <a href="https://github.com/paulgob">
                        <Image
                            src={"/icons/github.png"}
                            alt={"Mon github"}
                            width={30}
                            height={30}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/pg_devw">
                        <Image
                            src={"/icons/x.png"}
                            alt={"Mon X (anciennement twitter)"}
                            width={30}
                            height={30}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/paul-gobb%C3%A9/">
                        <Image
                            src={"/icons/linkedin.png"}
                            alt={"Mon LinkedIn"}
                            width={30}
                            height={30}
                        />
                    </a>
                </li>
            </ul>
            <p className="mt-4">
                &copy; Paul Gobbé - tous droits réservés - 2026
            </p>
            <Link href="/ressources" className="text-[0.75rem] opacity-70">
                Ressources
            </Link>
        </footer>
    );
}
