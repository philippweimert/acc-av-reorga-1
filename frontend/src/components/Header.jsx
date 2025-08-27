import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBavDropdownOpen, setIsBavDropdownOpen] = useState(false);
  const [isBkvDropdownOpen, setIsBkvDropdownOpen] = useState(false);
  const [isBuvDropdownOpen, setIsBuvDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-acencia/95 backdrop-blur-lg border-b border-acencia-light/50 shadow-lg'
        : 'bg-acencia/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo - zurück zur alten Größe */}
          <Link to="/" className="flex items-center group smooth-slide py-2 mr-8">
            <img
              src="/acencia-logo-new.png"
              alt="ACENCIA - Wir machen bAV einfach"
              className="h-12 w-auto object-contain transition-all duration-400 group-hover:scale-105"
            />
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* bAV Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsBavDropdownOpen(true)}
              onMouseLeave={() => setIsBavDropdownOpen(false)}
            >
              <Link
                to="/die-bav"
                className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body flex items-center"
              >
                <span>bAV</span>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
              </Link>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-acencia-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-acencia-light/50 py-2 transition-all duration-300 ${
                isBavDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <Link
                  to="/die-bav/x"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Für Unternehmen
                </Link>
                <Link
                  to="/die-bav/y"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Für Arbeitnehmer
                </Link>
                <Link
                  to="/die-bav/aktuelles"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Aktuelles
                </Link>
              </div>
            </div>

            {/* bKV Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsBkvDropdownOpen(true)}
              onMouseLeave={() => setIsBkvDropdownOpen(false)}
            >
              <Link
                to="/bkv"
                className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body flex items-center"
              >
                <span>bKV</span>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
              </Link>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-acencia-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-acencia-light/50 py-2 transition-all duration-300 ${
                isBkvDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <Link
                  to="/bkv/x"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  bKV Option X
                </Link>
                <Link
                  to="/bkv/y"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  bKV Option Y
                </Link>
              </div>
            </div>

            {/* bUV Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsBuvDropdownOpen(true)}
              onMouseLeave={() => setIsBuvDropdownOpen(false)}
            >
              <Link
                to="/buv"
                className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body flex items-center"
              >
                <span>bUV</span>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
              </Link>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-acencia-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-acencia-light/50 py-2 transition-all duration-300 ${
                isBuvDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <Link
                  to="/buv/x"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  bUV Option X
                </Link>
                <Link
                  to="/buv/y"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  bUV Option Y
                </Link>
              </div>
            </div>

            {/* über uns Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link
                to="/ueber-uns"
                className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body flex items-center"
              >
                <span>über uns</span>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
              </Link>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-acencia-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-acencia-light/50 py-2 transition-all duration-300 ${
                isAboutDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <Link
                  to="/ueber-uns"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  über uns
                </Link>
                <Link
                  to="/ueber-uns/service-team"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Service-Team
                </Link>
              </div>
            </div>

            {/* Kontakt Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsContactDropdownOpen(true)}
              onMouseLeave={() => setIsContactDropdownOpen(false)}
            >
              <Link
                to="/kontakt"
                className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body flex items-center"
              >
                <span>Kontakt</span>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
              </Link>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-acencia-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-acencia-light/50 py-2 transition-all duration-300 ${
                isContactDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <Link
                  to="/kontakt"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Kontakt
                </Link>
                <Link
                  to="/kontakt/beratung"
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Beratung
                </Link>
              </div>
            </div>
            <Button
              className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-md micro-bounce text-body"
              onClick={() => window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank')}
            >
              Login Portal
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-400 hover:bg-white/10 p-3 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-acencia-light/95 backdrop-blur-lg rounded-2xl mt-4 border border-acencia-light/50 shadow-xl">
            {/* bAV with submenu in mobile */}
            <div className="space-y-1">
              <Link
                to="/die-bav"
                className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                bAV
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  to="/die-bav/x"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Für Unternehmen
                </Link>
                <Link
                  to="/die-bav/y"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Für Arbeitnehmer
                </Link>
                <Link
                  to="/die-bav/aktuelles"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Aktuelles
                </Link>
              </div>
            </div>

            {/* bKV with submenu in mobile */}
            <div className="space-y-1">
              <Link
                to="/bkv"
                className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                bKV
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  to="/bkv/x"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  bKV Option X
                </Link>
                <Link
                  to="/bkv/y"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  bKV Option Y
                </Link>
              </div>
            </div>

            {/* bUV with submenu in mobile */}
            <div className="space-y-1">
              <Link
                to="/buv"
                className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                bUV
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  to="/buv/x"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  bUV Option X
                </Link>
                <Link
                  to="/buv/y"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  bUV Option Y
                </Link>
              </div>
            </div>

            {/* über uns with submenu in mobile */}
            <div className="space-y-1">
              <Link
                to="/ueber-uns"
                className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                über uns
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  to="/ueber-uns/service-team"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Service-Team
                </Link>
              </div>
            </div>

            {/* Kontakt with submenu in mobile */}
            <div className="space-y-1">
              <Link
                to="/kontakt"
                className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  to="/kontakt/beratung"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beratung
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <Button
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl py-3 transition-all duration-300"
                onClick={() => {
                  window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Login Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;