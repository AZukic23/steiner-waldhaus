import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
      <div className="container mx-auto py-10 flex flex-col items-center">
        <Image src="/logo.jpeg" alt="Logo" width={250} height={120} className="mb-8" />
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">
          Willkommen im Steiner Waldhaus
        </h1>
        <p className="mb-8 text-lg text-gray-700 text-center max-w-xl">
          Das Sportheim des TSV Viktoria Stein – genießen Sie leckere Speisen, Sportübertragungen und eine gemütliche Atmosphäre!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl my-10">
          <Link href="/menu" className="block p-8 bg-primary text-white text-center rounded-xl shadow hover:scale-105 transition">
            Speisekarte
          </Link>
          <Link href="/opening-hours" className="block p-8 bg-white text-primary border border-primary text-center rounded-xl shadow hover:scale-105 transition">
            Öffnungszeiten
          </Link>
          <Link href="/reservation" className="block p-8 bg-white text-primary border border-primary text-center rounded-xl shadow hover:scale-105 transition">
            Reservieren
          </Link>
        </div>
        <div className="mt-10">
          <a
              href="https://goo.gl/maps/xyzxyzxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary text-lg"
          >
            Hier finden Sie uns auf Google Maps
          </a>
        </div>
      </div>
  );
}
