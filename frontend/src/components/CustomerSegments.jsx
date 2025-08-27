import React from "react";
import { Rocket, Building, Building2, Users, ArrowRight, Sparkles } from "lucide-react";

const CustomerSegments = () => {
  const segments = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Start-up",
      subtitle: "5-50 Mitarbeiter",
      description: "Flexible und skalierbare bAV-Lösungen für junge Unternehmen mit schnellem Wachstum",
      highlight: "Flexibel & Skalierbar",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Mittelstand",
      subtitle: "50-1000 Mitarbeiter",
      description: "Bewährte Konzepte für etablierte mittelständische Betriebe mit komplexeren Anforderungen",
      highlight: "Bewährt & Effizient",
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Konzern",
      subtitle: "1000+ Mitarbeiter",
      description: "Komplexe Enterprise-Lösungen für große Unternehmensstrukturen mit höchsten Anforderungen",
      highlight: "Enterprise & Komplex",
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-acencia via-acencia-light to-acencia py-12 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="absolute top-20 right-20 w-80 h-80 animate-pulse" viewBox="0 0 400 400">
          <polygon points="200,50 350,150 350,250 200,350 50,250 50,150"
                   fill="none" stroke="white" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-20 left-20 w-64 h-64 animate-bounce" viewBox="0 0 300 300" style={{animationDuration: '4s'}}>
          <polygon points="150,30 270,120 270,180 150,270 30,180 30,120"
                   fill="none" stroke="white" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
            <Users className="w-5 h-5 text-acencia-orange animate-pulse" />
            <span className="text-white font-semibold text-sm tracking-wide uppercase">Für jede Unternehmensgröße</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
            <span className="text-white">Unsere </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
              Kunden
            </span>
            <span className="text-white"> vertrauen uns</span>
          </h2>

          <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
            Von Start-ups bis zu Konzernen - unsere digitale bAV-Plattform ist
            skalierbar und passt sich flexibel an Ihre individuellen Bedürfnisse an.
          </p>
        </div>

        {/* Enhanced segments grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Enhanced card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 h-full group-hover:-translate-y-3 transform">

                {/* Enhanced header with gradient */}
                <div className={`bg-gradient-to-br ${segment.gradient} p-8 relative overflow-hidden`}>
                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8 group-hover:scale-125 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {segment.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-100 transition-colors duration-300">
                      {segment.title}
                    </h3>
                    <p className="text-white/90 text-sm font-medium">
                      {segment.subtitle}
                    </p>
                  </div>
                </div>

                {/* Enhanced content - Kernfunktionen entfernt */}
                <div className="p-8">
                  {/* Highlight badge */}
                  <div className={`bg-gradient-to-r ${segment.bgGradient} rounded-xl px-4 py-2 inline-block mb-6 shadow-sm`}>
                    <span className="text-slate-700 font-bold text-sm flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      {segment.highlight}
                    </span>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8 group-hover:text-slate-700 transition-colors duration-300">
                    {segment.description}
                  </p>

                  {/* Enhanced CTA - Button Text geändert */}
                  <button
                    className={`w-full bg-gradient-to-r ${segment.gradient} hover:scale-105 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group/btn`}
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                  >
                    <span>Kostenlose Erstberatung</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Corner decoration */}
                <div className={`absolute top-6 right-6 w-3 h-3 bg-gradient-to-br ${segment.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-acencia via-acencia-light to-acencia rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl relative overflow-hidden border border-white/10">
            {/* Geometrische Hintergrundmuster - hell auf dunklem Hintergrund */}
            <div className="absolute inset-0 opacity-[0.08]">
              <svg className="absolute top-10 right-0 w-64 h-64 animate-pulse" viewBox="0 0 400 400" style={{animationDuration: '6s'}}>
                <polygon points="200,60 300,120 300,180 200,240 100,180 100,120"
                         fill="none" stroke="white" strokeWidth="2"/>
              </svg>
              <svg className="absolute bottom-10 left-0 w-48 h-48 animate-bounce" viewBox="0 0 400 400" style={{animationDuration: '4s'}}>
                <polygon points="200,80 280,140 280,200 200,260 120,200 120,140"
                         fill="none" stroke="#e3ebf2" strokeWidth="1"/>
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                Unsicher, welche Lösung für Sie die richtige ist?
              </h3>
              <p className="text-slate-300 mb-8 max-w-3xl mx-auto text-base leading-relaxed">
                Lassen Sie uns gemeinsam die optimale bAV-Lösung für Ihr Unternehmen finden.
                In einem kostenlosen Beratungsgespräch analysieren wir Ihre Anforderungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-lg group"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <span>Kostenlose Erstberatung</span>
                  <Sparkles className="w-5 h-5 ml-2 inline group-hover:animate-spin" />
                </button>
                <button
                  className="border-2 border-slate-300 text-slate-200 hover:bg-white/10 hover:text-white hover:border-white/50 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm text-lg"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Kostenlose Erstberatung
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;