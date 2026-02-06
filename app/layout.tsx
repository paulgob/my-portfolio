import type { Metadata } from "next";
import { Kanit, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const kanit = Kanit({
    variable: "--font-kanit",
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Paul Gobbé - Développeur Full-Stack Junior",
    description:
        "Portfolio de Paul Gobbé, développeur full-stack junior passionné à l'idée de relever de nouveaux défis. Découvrez mes projets, compétences et contactez-moi pour collaborer !",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={`${montserrat.variable} ${kanit.variable} antialiased`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
