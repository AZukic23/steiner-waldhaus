export default function OpeningHoursPage() {
    return (
        <div className="container mx-auto py-10">
            <div className="bg-white rounded-xl shadow p-6 mb-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-primary">Öffnungszeiten</h2>
                <ul>
                    <li>Montag: Ruhetag</li>
                    <li>Dienstag–Freitag: 17:00 – 23:00 Uhr</li>
                    <li>Samstag: 15:00 – 23:00 Uhr</li>
                    <li>Sonntag: 10:00 – 22:00 Uhr</li>
                </ul>
            </div>
        </div>
    );
}
