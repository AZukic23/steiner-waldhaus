"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <Image 
                            src="/logo.jpeg" 
                            width={48} 
                            height={48} 
                            alt="Steiner Waldhaus Logo" 
                            className="rounded-lg group-hover:shadow-md transition-shadow duration-200" 
                        />
                        <span className="font-semibold text-xl text-primary-600 hidden sm:block group-hover:text-primary-700 transition-colors">
                            Steiner Waldhaus
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            href="/menu" 
                            className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                        >
                            Speisekarte
                        </Link>
                        <Link 
                            href="/opening-hours" 
                            className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                        >
                            Öffnungszeiten
                        </Link>
                        <Link 
                            href="/reservation" 
                            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                            Reservieren
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                        aria-label="Menü öffnen"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 py-4">
                        <div className="flex flex-col space-y-3">
                            <Link 
                                href="/menu" 
                                className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Speisekarte
                            </Link>
                            <Link 
                                href="/opening-hours" 
                                className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Öffnungszeiten
                            </Link>
                            <Link 
                                href="/reservation" 
                                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-center shadow-sm"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Reservieren
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
