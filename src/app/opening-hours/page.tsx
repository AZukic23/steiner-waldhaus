export default function OpeningHoursPage() {
    const openingHours = [
        { day: 'Montag', hours: 'Ruhetag', closed: true },
        { day: 'Dienstag', hours: '17:00 – 23:00 Uhr', closed: false },
        { day: 'Mittwoch', hours: '17:00 – 23:00 Uhr', closed: false },
        { day: 'Donnerstag', hours: '17:00 – 23:00 Uhr', closed: false },
        { day: 'Freitag', hours: '17:00 – 23:00 Uhr', closed: false },
        { day: 'Samstag', hours: '15:00 – 23:00 Uhr', closed: false },
        { day: 'Sonntag', hours: '10:00 – 22:00 Uhr', closed: false },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="text-primary-600">Öffnungszeiten</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Wir freuen uns auf Ihren Besuch zu unseren regulären Öffnungszeiten
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Opening Hours Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <div className="text-center mb-8">
                            <div className="text-5xl mb-4">🕒</div>
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Unsere Öffnungszeiten
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {openingHours.map((item, index) => (
                                <div 
                                    key={index}
                                    className={`flex justify-between items-center p-4 rounded-xl ${
                                        item.closed 
                                            ? 'bg-gray-50 text-gray-500' 
                                            : 'bg-primary-50 text-primary-800'
                                    }`}
                                >
                                    <span className="font-medium text-lg">{item.day}</span>
                                    <span className={`font-semibold ${item.closed ? 'text-gray-400' : 'text-primary-700'}`}>
                                        {item.hours}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Info Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                            📋 Wichtige Hinweise
                        </h3>
                        <div className="space-y-3 text-gray-600">
                            <p className="flex items-start">
                                <span className="text-primary-600 mr-2">•</span>
                                An Feiertagen können die Öffnungszeiten abweichen
                            </p>
                            <p className="flex items-start">
                                <span className="text-primary-600 mr-2">•</span>
                                Bei Vereinsveranstaltungen evtl. geschlossene Gesellschaft
                            </p>
                            <p className="flex items-start">
                                <span className="text-primary-600 mr-2">•</span>
                                Für größere Gruppen empfehlen wir eine Reservierung
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <a 
                                href="tel:+49123456789" 
                                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-center"
                            >
                                📞 Anrufen
                            </a>
                            <a 
                                href="/reservation" 
                                className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200 text-center"
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
