export default function MenuPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Unsere <span className="text-primary-600">Speisekarte</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Regionale Spezialitäten und herzhafte Gerichte in gemütlicher Atmosphäre
                    </p>
                </div>

                {/* Coming Soon Card */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <div className="text-6xl mb-6">🍽️</div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Speisekarte in Vorbereitung
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Wir arbeiten gerade an unserer neuen digitalen Speisekarte. 
                            Diese wird in Kürze hier verfügbar sein. Für aktuelle Informationen 
                            zu unserem Angebot rufen Sie uns gerne an oder besuchen Sie uns vor Ort!
                        </p>
                        
                        <div className="bg-primary-50 rounded-xl p-6 mb-6">
                            <h3 className="font-semibold text-primary-800 mb-2">Vorab schon mal:</h3>
                            <ul className="text-primary-700 space-y-1">
                                <li>• Herzhafte Hauptgerichte</li>
                                <li>• Kleine Snacks & Brotzeiten</li>
                                <li>• Regionale Spezialitäten</li>
                                <li>• Erfrischende Getränke</li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="tel:+49123456789" 
                                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                📞 Anrufen
                            </a>
                            <a 
                                href="/reservation" 
                                className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center"
                            >
                                🪑 Reservieren
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
