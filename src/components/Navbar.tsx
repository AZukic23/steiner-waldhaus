"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-3">
                <Link href="/" className="flex items-center space-x-3">
                    <Image src="/logo.jpeg" width={52} height={52} alt="Logo" className="rounded" />
                    <span className="font-bold text-xl text-primary hidden md:block">Steiner Waldhaus</span>
                </Link>
                <div className="flex space-x-4">
                    <Link href="/menu" className="hover:text-primary transition">Speisekarte</Link>
                    <Link href="/opening-hours" className="hover:text-primary transition">Öffnungszeiten</Link>
                    <Link href="/reservation" className="hover:text-primary transition font-semibold">Reservieren</Link>
                </div>
            </div>
        </nav>
    );
}
