export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-600 py-6 mt-12 border-t">
            <div className="container mx-auto text-center">
                <div className="mb-2">
                    © {new Date().getFullYear()} Steiner Waldhaus · TSV Stein
                </div>
                <a
                    href="https://goo.gl/maps/xyzxyzxyz" // Hier den echten Maps-Link einfügen!
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                >
                    Anfahrt (Google Maps)
                </a>
            </div>
        </footer>
    );
}
