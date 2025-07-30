"use client";
import { useState } from "react";

export default function ReservationPage() {
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccess(true);
        // Hier später EmailJS, eigenen API-Endpoint etc. einbauen!
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Tisch <span className="text-primary-600">reservieren</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Sichern Sie sich Ihren Platz für einen gemütlichen Abend im Steiner Waldhaus
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {!success ? (
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="text-center mb-8">
                                <div className="text-5xl mb-4">🪑</div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Reservierungsanfrage
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    Alle Felder mit * sind Pflichtfelder
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                            placeholder="Ihr Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            E-Mail *
                                        </label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                            placeholder="ihre.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Telefon
                                    </label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                        placeholder="Ihre Telefonnummer"
                                    />
                                </div>

                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Datum *
                                        </label>
                                        <input
                                            required
                                            name="date"
                                            type="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Uhrzeit *
                                        </label>
                                        <select
                                            required
                                            name="time"
                                            value={formData.time}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                        >
                                            <option value="">Wählen Sie eine Zeit</option>
                                            <option value="17:00">17:00</option>
                                            <option value="17:30">17:30</option>
                                            <option value="18:00">18:00</option>
                                            <option value="18:30">18:30</option>
                                            <option value="19:00">19:00</option>
                                            <option value="19:30">19:30</option>
                                            <option value="20:00">20:00</option>
                                            <option value="20:30">20:30</option>
                                            <option value="21:00">21:00</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Personen *
                                        </label>
                                        <select
                                            required
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                        >
                                            <option value="">Anzahl</option>
                                            {[...Array(20)].map((_, i) => (
                                                <option key={i + 1} value={i + 1}>
                                                    {i + 1} {i === 0 ? 'Person' : 'Personen'}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nachricht / Besondere Wünsche
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                                        placeholder="Teilen Sie uns Ihre besonderen Wünsche mit..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                                >
                                    🍽️ Reservierung absenden
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                            <div className="text-6xl mb-6">✅</div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Vielen Dank für Ihre Reservierungsanfrage!
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich 
                                bei Ihnen melden, um die Reservierung zu bestätigen.
                            </p>
                            <div className="bg-primary-50 rounded-xl p-6 mb-6">
                                <p className="text-primary-800 font-medium">
                                    📞 Für dringende Anfragen rufen Sie uns gerne direkt an!
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    setSuccess(false);
                                    setFormData({
                                        name: '',
                                        email: '',
                                        phone: '',
                                        date: '',
                                        time: '',
                                        guests: '',
                                        message: ''
                                    });
                                }}
                                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                            >
                                Neue Reservierung
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
