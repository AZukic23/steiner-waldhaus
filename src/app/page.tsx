import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image 
              src="/logo.jpeg" 
              alt="Steiner Waldhaus Logo" 
              width={320} 
              height={180} 
              className="mx-auto rounded-2xl shadow-lg"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Willkommen im <span className="text-primary-600">Steiner Waldhaus</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Das Sportheim des TSV Viktoria Stein – genießen Sie leckere Speisen, 
            spannende Sportübertragungen und eine gemütliche Atmosphäre!
          </p>
          
          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/menu" 
              className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📋 Speisekarte ansehen
            </Link>
            <Link 
              href="/reservation" 
              className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🪑 Tisch reservieren
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Über das Steiner Waldhaus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unser gemütliches Sportheim ist der perfekte Ort für gesellige Stunden
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors duration-200">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leckere Küche</h3>
              <p className="text-gray-600">
                Regionale Spezialitäten und herzhafte Gerichte für jeden Geschmack
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors duration-200">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sport Live</h3>
              <p className="text-gray-600">
                Alle wichtigen Spiele auf unseren großen Bildschirmen verfolgen
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors duration-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gemeinschaft</h3>
              <p className="text-gray-600">
                Teil der TSV Stein Familie - Vereinsheim mit Herz und Tradition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              href="/opening-hours" 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 text-center group hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">🕒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                Öffnungszeiten
              </h3>
              <p className="text-gray-600">
                Di-Fr: 17:00-23:00<br />
                Sa: 15:00-23:00<br />
                So: 10:00-22:00
              </p>
            </Link>

            <Link 
              href="/reservation" 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 text-center group hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                Reservierung
              </h3>
              <p className="text-gray-600">
                Sichern Sie sich Ihren Platz für einen schönen Abend bei uns
              </p>
            </Link>

            <a 
              href="https://goo.gl/maps/xyzxyzxyz" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 text-center group hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">📍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                Anfahrt
              </h3>
              <p className="text-gray-600">
                Finden Sie uns ganz einfach mit Google Maps
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
