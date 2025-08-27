import React from "react";
import { Button } from "./ui/button";
import { CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const quickBenefits = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "100% digitale Verwaltung" },
    { icon: <Clock className="w-5 h-5" />, text: "Vollautomatisierte Prozesse" },
    { icon: <Shield className="w-5 h-5" />, text: "DSGVO-konform & rechtssicher" }
  ];

  return (
    <section className="relative bg-gradient-to-b from-acencia via-acencia via-acencia to-acencia-light min-h-[80vh] flex items-center overflow-hidden">
      {/* Enhanced geometric background patterns - wie zuvor mit Bewegung */}
      <div className="absolute inset-0">
        {/* Animated geometric SVG patterns */}
        <div className="absolute inset-0 opacity-[0.07]">
          <svg className="absolute top-20 right-0 w-96 h-96 animate-pulse" viewBox="0 0 400 400">
            <polygon points="200,50 350,150 350,250 200,350 50,250 50,150"
                     fill="none" stroke="white" strokeWidth="2"/>
            <polygon points="150,100 250,100 300,173 250,247 150,247 100,173"
                     fill="none" stroke="white" strokeWidth="1"/>
          </svg>
          <svg className="absolute bottom-20 left-0 w-64 h-64 animate-bounce" viewBox="0 0 300 300" style={{animationDuration: '3s'}}>
            <polygon points="150,30 270,120 270,180 150,270 30,180 30,120"
                     fill="none" stroke="white" strokeWidth="1"/>
          </svg>
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-1/2 right-10 opacity-[0.08]">
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25"
                     fill="currentColor" className="text-acencia-blue animate-float" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left animate-fade-in">
            <div className="mb-8">
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 inline-flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>Digitale bAV-Lösung</span>
              </span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight font-heading">
              Wir machen<br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
                bAV einfach!
              </span>
            </h1>

            <p className="text-lg text-slate-200 mb-8 max-w-lg leading-relaxed font-body">
              Entlasten Sie Ihr HR-Team mit unserer vollautomatisierten,
              digitalen All-in-One-Plattform für die betriebliche Altersvorsorge.
            </p>

            {/* Enhanced benefits with animations */}
            <div className="space-y-4 mb-10">
              {quickBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300"
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className="text-orange-400 group-hover:text-orange-300 transition-colors duration-300 group-hover:scale-110 transform">
                    {benefit.icon}
                  </div>
                  <span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-300">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Jetzt starten</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300/50 text-slate-200 hover:bg-white/10 hover:text-white hover:border-white/50 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Jetzt beraten lassen
              </Button>
            </div>
          </div>

          {/* Right content - Enhanced video player */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg relative group">
              {/* Video Container */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-600/50 hover:border-orange-400/50 transition-all duration-500 shadow-2xl backdrop-blur-sm relative">

                {/* YouTube Video Embed */}
                <iframe
                  className="w-full h-full rounded-2xl"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Dw1XYzzPTkY?si=xdaue75GVpcizewG"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-300 rounded-full animate-ping"></div>
              </div>

              {/* Video Info */}
              <div className="mt-4 text-center">
                <p className="text-slate-300 font-semibold mb-1">
                  Betriebliche Altersvorsorge einfach einrichten
                </p>
                <p className="text-slate-500 text-sm">
                  Sehen Sie, wie ACENCIA Ihre bAV digitalisiert
                </p>
              </div>

              {/* Enhanced glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-purple-500/10 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center text-slate-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
            <span className="text-sm font-medium mb-2">Mehr erfahren</span>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay für späteren Übergang */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-acencia-light to-transparent"></div>
    </section>
  );
};

export default HeroSection;