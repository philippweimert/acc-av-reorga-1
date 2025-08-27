import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-acencia text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/acencia-logo-new.png"
                alt="ACENCIA - Wir machen bAV einfach"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge.
              Wir machen bAV einfach und digital.
            </p>
            <div className="text-sm text-slate-400">
              <p>ACENCIA GmbH</p>
              <p>Hackenheim, Deutschland</p>
              <p>Geschäftsführer: Uwe Weimert</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ueber-uns" className="text-slate-300 hover:text-orange-400 transition-colors duration-200">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-slate-300 hover:text-orange-400 transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
              <li>
                <a
                  href="https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Termin vereinbaren
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Rechtliche Prüfung & Einrichtung</li>
              <li>Digitale bAV-Verwaltung</li>
              <li>Mitarbeiterkommunikation</li>
              <li>Persönliche Beratung</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-400 mb-4 md:mb-0">
            © 2025 ACENCIA GmbH. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/datenschutz" className="text-slate-400 hover:text-orange-400 transition-colors duration-200">
              Datenschutzerklärung
            </Link>
            <Link to="/impressum" className="text-slate-400 hover:text-orange-400 transition-colors duration-200">
              Impressum
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;