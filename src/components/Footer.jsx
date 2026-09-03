import React from 'react';
import { FiPhone, FiMapPin, FiGlobe, FiMail, FiChevronRight } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer
      className="relative w-full pt-0 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden "
      style={{
        backgroundImage: "url('/footoer-img.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* ── Main Footer Overlay Container (SAMANEX Style) bg-[#070b14]/75 ── */}
      <div className="relative z-10 max-w-[1500px] mx-auto  backdrop-blur-sm border-b border-l border-r border-white/10 shadow-2xl rounded-b-3xl">

        <div className="px-8 sm:px-12 md:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Column 1: Logo & Info */}
            <div className="flex flex-col">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="Muneeb Farid" className="h-full w-full object-contain" onError={(e) => e.target.style.display = 'none'} />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-sans">
                {t('footerDesc') || 'Helping businesses grow, scale, and achieve long-term success through intelligent AI solutions, strategic automation, and data-driven insights.'}
              </p>

              {/* Social Icons - Theme colored (Mustahsan Tariq style layout) */}
              <div className="flex gap-3 mt-6">
                {[
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/muneeb-farid-ai-engineer/" },
                  { icon: <FaGithub />, link: "https://github.com/itxmuneebfarid" },
                  { icon: <FaTwitter />, link: "https://x.com/MuneebFaridAI" },
                  { icon: <FaEnvelope />, link: "mailto:fareedmuneeb98@gmail.com" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 shadow-lg"
                    style={{ backgroundColor: '#f75023' }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col lg:pl-8">
              <h4 className="text-white text-xl font-bold mb-6 font-heading border-b border-white/10 pb-4 inline-block">
                {t('footerQuickLinks') || 'Quick Links'}
              </h4>
              <ul className="flex flex-col gap-3">
                {['Home', 'About Me', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 font-sans text-[15px]"
                    >
                      <FiChevronRight className="text-primary text-sm" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="flex flex-col">
              <h4 className="text-white text-xl font-bold mb-6 font-heading border-b border-white/10 pb-4 inline-block">
                {t('contactTitle') || 'Contact'}
              </h4>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <FiPhone className="text-primary text-xl mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 font-sans text-[15px]">+92 329 7325390</span>
                </li>
                <li className="flex items-start gap-4">
                  <FiMapPin className="text-primary text-xl mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 font-sans text-[15px]">
                    Bilal Colony House no 350 ,
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <FiGlobe className="text-primary text-xl mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 font-sans text-[15px]">www.muneebfarid.com</span>
                </li>
                <li className="flex items-start gap-4">
                  <FiMail className="text-primary text-xl mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 font-sans text-[15px]">fareedmuneeb98@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Column 4: CTA */}
            <div className="flex flex-col">
              <h4 className="text-white text-xl font-bold mb-6 font-heading border-b border-white/10 pb-4 inline-block">
                {t("Let's Grow Your Business") || "Let's Grow Your Business"}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                {t("Ready to scale your business with clear, results-driven AI strategies? Let's connect and build the future.") || "Ready to scale your business with clear, results-driven AI strategies? Let's connect and build the future."}
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex mt-6 items-center gap-2 px-8 py-3 rounded-full text-white font-bold transition-all hover:scale-105 shadow-[0_4px_15px_rgba(247,80,35,0.4)] w-fit cursor-pointer"
                style={{ backgroundColor: '#f75023' }}
              >
                <FiPhone className="text-lg" /> {t("Get In Touch") || "Get In Touch"}
              </button>
            </div>

          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 bg-[#04070d]/40 px-8 sm:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4 rounded-b-3xl">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-sans cursor-pointer">
            {t('footerTerms') || 'Terms & Agreements'}
          </a>
          <p className="text-slate-500 text-sm text-center font-sans">
            © {new Date().getFullYear()} {t('footerRights') || 'All Rights Reserved For Muneeb Farid.'}
          </p>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-sans cursor-pointer">
            {t('footerPrivacy') || 'Privacy Policy'}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
