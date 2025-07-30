import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Steiner Waldhaus · TSV Stein",
    description: "Das Sportheim des TSV Viktoria Stein",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <body className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
