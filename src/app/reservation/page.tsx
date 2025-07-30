"use client";
import { useState } from "react";

export default function ReservationPage() {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccess(true);
        // Hier kannst du später EmailJS, eigenen API-Endpoint etc. einbauen!
    };

    return (
        <div className="container mx-auto py-10">
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow max-w-xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-primary">Reservierungsanfrage</h2>
                <input required className="input" placeholder="Name" type="text" />
                <input required className="input" placeholder="E-Mail" type="email" />
                <input className="input" placeholder="Telefon" type="tel" />
                <input required className="input" placeholder="Datum" type="date" />
                <input required className="input" placeholder="Personenanzahl" type="number" min="1" />
                <textarea className="input" placeholder="Nachricht / Wunsch"></textarea>
                <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-green-700 transition">
                    Absenden
                </button>
                {success && <div className="text-green-600 mt-2">Vielen Dank für Ihre Anfrage!</div>}
                <style jsx>{`
          .input {
            width: 100%;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            padding: 0.75rem;
          }
        `}</style>
            </form>
        </div>
    );
}
