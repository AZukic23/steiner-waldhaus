import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Steiner Waldhaus</h3>
                        <p className="text-primary-200 mb-2">
                            Das Sportheim des TSV Viktoria Stein
                        </p>
                        <div className="space-y-2 text-primary-100">
                            <p>📍 [Adresse hier einfügen]</p>
                            <p>📞 [Telefonnummer hier einfügen]</p>
                            <p>✉️ [E-Mail hier einfügen]</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Navigation</h3>
                        <div className="space-y-2">
                            <Link href="/menu" className="block text-primary-100 hover:text-white transition-colors duration-200">
                                Speisekarte
                            </Link>
                            <Link href="/opening-hours" className="block text-primary-100 hover:text-white transition-colors duration-200">
                                Öffnungszeiten
                            </Link>
                            <Link href="/reservation" className="block text-primary-100 hover:text-white transition-colors duration-200">
                                Reservierung
                            </Link>
                            <a 
                                href="https://goo.gl/maps/xyzxyzxyz" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block text-primary-100 hover:text-white transition-colors duration-200"
                            >
                                Anfahrt (Google Maps)
                            </a>
                        </div>
                    </div>

                    {/* Club Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">TSV Viktoria Stein</h3>
                        <p className="text-primary-100 mb-4">
                            Besuchen Sie auch die Hauptseite unseres Vereins für alle Informationen zu den Sportabteilungen.
                        </p>
                        <a 
                            href="https://www.tsvstein.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-200 hover:text-white transition-colors duration-200"
                        >
                            🌐 www.tsvstein.com
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="border-t border-primary-700 mt-8 pt-8 text-center">
                    <p className="text-primary-200">
                        © {new Date().getFullYear()} Steiner Waldhaus · TSV Viktoria Stein
                    </p>
                </div>
            </div>
        </footer>
    );
}
