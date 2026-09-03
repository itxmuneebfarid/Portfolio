import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Change this to your WhatsApp number (with country code, no + or spaces, e.g. 923001234567)
const WHATSAPP_NUMBER = '923297325390';
const WHATSAPP_MESSAGE = 'Hello! I visited your portfolio and would like to get in touch with you.';

// Inline WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: (className) => (
      <svg viewBox="0 0 50 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h50v30H0z" fill="#012169" />
        <path d="M0 0l50 30M50 0L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l50 30M50 0L0 30" stroke="#C8102E" strokeWidth="4" />
        <path d="M25 0v30M0 15h50" stroke="#fff" strokeWidth="10" />
        <path d="M25 0v30M0 15h50" stroke="#C8102E" strokeWidth="6" />
      </svg>
    )
  },
  {
    code: 'ar',
    name: 'Arabic',
    flag: (className) => (
      <svg viewBox="0 0 30 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="20" fill="#006C35" />
        <path d="M6 13h18v1H6zm4-3h10v1H10z" fill="#fff" />
      </svg>
    )
  },
  {
    code: 'de',
    name: 'German',
    flag: (className) => (
      <svg viewBox="0 0 5 3" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="5" height="1" y="0" fill="#000" />
        <rect width="5" height="1" y="1" fill="#D00" />
        <rect width="5" height="1" y="2" fill="#FFCE00" />
      </svg>
    )
  },
  {
    code: 'fr',
    name: 'French',
    flag: (className) => (
      <svg viewBox="0 0 3 2" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1" height="2" x="0" fill="#002395" />
        <rect width="1" height="2" x="1" fill="#fff" />
        <rect width="1" height="2" x="2" fill="#ED2939" />
      </svg>
    )
  },
  {
    code: 'zh',
    name: 'Chinese',
    flag: (className) => (
      <svg viewBox="0 0 30 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="20" fill="#DE2910" />
        <polygon points="5,3 5.9,5.8 8.4,5.8 6.4,7.6 7.2,10.2 5,8.6 2.8,10.2 3.6,7.6 1.6,5.8 4.1,5.8" fill="#FFDE00" />
        <circle cx="10" cy="2" r="0.6" fill="#FFDE00" />
        <circle cx="12" cy="4" r="0.6" fill="#FFDE00" />
        <circle cx="12" cy="7" r="0.6" fill="#FFDE00" />
        <circle cx="10" cy="9" r="0.6" fill="#FFDE00" />
      </svg>
    )
  }
];

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const navLinks = [
    { label: t('navHome'), href: '#home', id: 'home' },
    { label: t('navAbout'), href: '#about', id: 'about' },
    { label: t('navJourney'), href: '#journey', id: 'journey' },
    { label: t('navPortfolio'), href: '#portfolio', id: 'portfolio' },
    { label: t('navServices'), href: '#service', id: 'service' },
    { label: t('navBlog'), href: '#blog', id: 'blog' },
    { label: t('navContact'), href: '#contact', id: 'contact' },
  ];

  const currentLangObj = languages.find((lang) => lang.code === language) || languages[0];

  // Track scrolling to toggle glassmorphism style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside language dropdown handler
  const langRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLangDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Generate WhatsApp dynamic link
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#1c2235]/90 backdrop-blur-md py-1 shadow-lg border-b border-white/5'
          : 'bg-transparent py-1'
          }`}
      >
        {/* px-4  sm:px-6 md:px-12  */}
        <div className="max-w-7xl mx-auto   flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, 'home')}
            className="flex items-center gap-2.5 group cursor-pointer no-underline"
          >
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white/95 shadow-[0_0_0_1px_rgba(247,80,35,0.35)] transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt=""
                aria-hidden="true"
                className="absolute left-0 top-0 h-12 w-auto max-w-none object-contain"
              />
            </span>
            <span className="font-heading text-base font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary sm:text-lg">
              Muneeb <span className="text-primary">Farid</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`relative font-sans text-sm font-semibold tracking-wide transition-colors duration-300 py-2 cursor-pointer group no-underline ${activeSection === link.id ? 'text-primary' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {link.label}
                    {/* Sliding Underline Effect */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 ${activeSection === link.id ? 'scale-x-100' : ''
                        }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Action Button & Language Dropdown */}
            <div className="flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-2.5 font-sans text-sm font-bold text-white border-2 border-primary rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:shadow-[0_0_15px_rgba(247,80,35,0.4)] group no-underline cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-2">
                  {t('navGetInTouch')}
                  <WhatsAppIcon className="w-4 h-4 z-10 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>

              {/* Language Selector Dropdown */}
              <div
                ref={langRef}
                className="relative inline-block text-left z-50"
              >
                <button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer focus:outline-none"
                >
                  {currentLangObj.flag("w-5 h-3.5 object-cover rounded-[2px]")}
                  <span className="text-[12px] font-bold uppercase">{currentLangObj.code}</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${showLangDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showLangDropdown && (
                  <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-2xl bg-[#1c2235] border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] overflow-hidden z-50">
                    <div className="py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowLangDropdown(false);
                          }}
                          className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-xs font-semibold text-left text-gray-300 hover:text-white hover:bg-primary/20 transition-colors cursor-pointer ${language === lang.code ? 'bg-primary/10 text-white font-bold' : ''
                            }`}
                        >
                          {lang.flag("w-5 h-3.5 object-cover rounded-[2px]")}
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Hamburguer Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation (Slide-in panel) */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer content */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-[280px] bg-[#1c2235] border-l border-white/5 shadow-2xl py-6 pl-6 pr-2 flex flex-col justify-between transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col gap-8">
            {/* Header in Drawer */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <a
                href="#home"
                onClick={(e) => handleScrollTo(e, 'home')}
                className="flex items-center gap-2 cursor-pointer no-underline w-[180px]"
              >
                <img src="/logo.png" alt="Logo" className="w-full h-auto object-contain" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links List */}
            <ul className="flex flex-col gap-5 list-none m-0 p-0">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: isOpen ? 'translateX(0)' : 'translateX(30px)',
                    opacity: isOpen ? 1 : 0,
                    transitionProperty: 'transform, opacity',
                  }}
                  className="transition-all duration-300"
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`block font-sans text-lg font-medium py-1 transition-colors duration-300 no-underline ${activeSection === link.id ? 'text-primary' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action button in drawer */}
          <div
            style={{
              transitionDelay: `${navLinks.length * 50}ms`,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transitionProperty: 'transform, opacity',
            }}
            className="transition-all duration-300 pt-6 border-t border-white/10 flex flex-col gap-5"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-full shadow-[0_4px_15px_rgba(247,80,35,0.3)] transition-all duration-300 no-underline cursor-pointer"
            >
              {t('navGetInTouch')}
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            {/* Mobile Language Flags Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-1">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider whitespace-nowrap">Language</span>
              <div className="flex flex-wrap items-center justify-end gap-2 flex-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`p-1.5 rounded-lg border transition-all cursor-pointer ${language === lang.code ? 'border-primary bg-primary/10 shadow-[0_0_10px_rgba(247,80,35,0.2)]' : 'border-white/10 bg-white/5'
                      }`}
                    title={lang.name}
                  >
                    {lang.flag("w-6 h-4 object-cover rounded-[1px]")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
