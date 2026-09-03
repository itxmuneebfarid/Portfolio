import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  FaRobot, FaHeadphones, FaGlobe, FaBolt, FaEnvelopeOpenText, FaUsersCog,
  FaBrain, FaFilePdf, FaDatabase, FaFileInvoice, FaFileInvoiceDollar, FaUser,
  FaPhoneAlt, FaMicrophone, FaPhoneVolume, FaEye, FaUserCheck, FaSearchPlus,
  FaChartBar, FaChartLine, FaShieldAlt, FaLaptopCode, FaCloud, FaChartPie,
  FaShoppingCart, FaThumbsUp, FaShoppingBag, FaMobileAlt, FaDumbbell,
  FaLanguage, FaCloudUploadAlt, FaDocker, FaServer, FaLink, FaCogs, FaWhatsapp
} from 'react-icons/fa';

import Robot3D from './Robot3D';

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const tickerItems = [
  { text: "AI Chatbots", icon: FaRobot },
  { text: "Customer Support Chatbot", icon: FaHeadphones },
  { text: "Website AI Chatbot", icon: FaGlobe },
  { text: "AI Automation", icon: FaBolt },
  { text: "Email Automation", icon: FaEnvelopeOpenText },
  { text: "CRM Automation", icon: FaUsersCog },
  { text: "LLM Applications", icon: FaBrain },
  { text: "PDF Chat", icon: FaFilePdf },
  { text: "AI Knowledge Base", icon: FaDatabase },
  { text: "AI Document Processing", icon: FaFileInvoice },
  { text: "Invoice Reader", icon: FaFileInvoiceDollar },
  { text: "Resume Screening", icon: FaUser },
  { text: "Voice AI", icon: FaPhoneAlt },
  { text: "AI Voice Assistant", icon: FaMicrophone },
  { text: "AI Calling Agent", icon: FaPhoneVolume },
  { text: "Computer Vision", icon: FaEye },
  { text: "Face Recognition", icon: FaUserCheck },
  { text: "Object Detection", icon: FaSearchPlus },
  { text: "Machine Learning", icon: FaChartBar },
  { text: "Sales Prediction", icon: FaChartLine },
  { text: "Fraud Detection", icon: FaShieldAlt },
  { text: "AI Web Applications", icon: FaLaptopCode },
  { text: "AI SaaS Platform", icon: FaCloud },
  { text: "AI Dashboard", icon: FaChartPie },
  { text: "E-commerce AI", icon: FaShoppingCart },
  { text: "Product Recommendation System", icon: FaThumbsUp },
  { text: "AI Shopping Assistant", icon: FaShoppingBag },
  { text: "Mobile AI Apps", icon: FaMobileAlt },
  { text: "AI Fitness App", icon: FaDumbbell },
  { text: "AI Translator", icon: FaLanguage },
  { text: "AI Deployment", icon: FaCloudUploadAlt },
  { text: "Docker Deployment", icon: FaDocker },
  { text: "Cloud AI Infrastructure", icon: FaServer },
  { text: "AI Integrations", icon: FaLink },
  { text: "OpenAI API Integration", icon: FaCogs },
  { text: "WhatsApp AI Bot Integration", icon: FaWhatsapp }
];

const doubledItems = [...tickerItems, ...tickerItems];

const Home = () => {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-24 pb-28 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: " linear-gradient(rgba(16, 20, 36, 0.88), rgba(16, 20, 36, 0.88)), url('/bg-img.jpg')" }}
    >
      <div className="absolute inset-0 " />

      {/* Moving White Dots Background */}
      <div className="stars-bg"></div>
      <div className="stars-bg-2"></div>
      <div className="stars-bg-3"></div>

      {/* Decorative glowing circles - now with slow floating pulse */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-float-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-float-glow-delayed" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start text-start order-2 lg:order-1">
          <span className="text-primary font-medium text-[24px] sm:text-[42px] mb-1 inline-block animate-reveal-blur delay-1">
            {t('homeHello')}
          </span>
          <h1 className="text-[50px] md:text-[72px] lg:text-[85px] font-bold text-primary leading-[1.1] tracking-tight mb-5 font-sans animate-reveal-blur delay-2 drop-shadow-[0_0_18px_rgba(247,80,35,0.22)]">
            {t('homeName')}
          </h1>
          <p className="text-[20px] md:text-[24px] lg:text-[28px] font-medium text-white mb-6 font-sans animate-reveal-blur delay-3">
            {t('homeSubtitle1')}
            <span className="text-[#11b67a] animate-text-glow">{t('homeSubtitle2')}</span>
            {t('homeSubtitle3')}
            <span className="text-[#8b5cf6] animate-text-glow-purple">{t('homeSubtitle4')}</span>
          </p>
          <p className=' pt-6 '></p>
          <p className="text-[#fff] pb-2 font-normal mb-6 max-w-[500px] leading-[1.7] text-[18px] sm:text-[23px] animate-reveal-blur delay-4">
            {t('homeDescription')}
          </p>

          {/* Skill/Platform Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 mt-4 animate-reveal-blur delay-5">
            {["AI Systems", "Blockchain", "Cloud Platforms"].map((label, i) => (
              <a
                key={label}
                href="#service"
                style = {{ animationDelay: `${0.6 + i * 0.12}s` }}
            className="animate-pop-in relative inline-flex items-center justify-center px-5 py-2 font-sans text-[16px] font-bold text-white border-2 border-primary rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(247,80,35,0.6)] group no-underline cursor-pointer"
              >
            <span className="absolute inset-0 w-full h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
            <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />
            <span className="relative z-10">{label}</span>
          </a>
            ))}
        </div>

        <div className="flex flex-wrap items-center gap-8 mt-2 animate-reveal-blur delay-6">
          <a
            href="#about"
          className="relative inline-flex items-center justify-center px-5 py-2 font-sans text-[17px] font-bold text-white border-2 border-transparent rounded-full overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#f75023] to-[#ff7854] hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(247,80,35,0.7)] group no-underline cursor-pointer"
            >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff7854] to-[#f75023] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
          <span className="relative z-10 flex items-center gap-2">
            {t('homeAboutMe')}
          </span>
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {[
            { Icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61560145530518" },
            { Icon: TwitterIcon, href: "https://x.com/MuneebFaridAI" },
            { Icon: InstagramIcon, href: "https://www.instagram.com/itx_muneeb_farid/" },
            { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/muneeb-farid-47028a322/" },
            { Icon: GithubIcon, href: "https://github.com/itxmuneebfarid" },
          ].map(({ Icon, href }, i) => (
            <a
              key={href}
              href={href}
                  target = "_blank"
                  rel = "noopener noreferrer"
                  style = {{ animationDelay: `${0.9 + i * 0.08}s` }}
          className="animate-pop-in text-gray-400 hover:text-white hover:-translate-y-1 hover:scale-125 transition-all duration-300"
                >
          <Icon className="w-5 h-5 fill-current" />
        </a>
              ))}
      </div>
    </div>
        </div >

  {/* Right Column: Interactive Animated Robot Slider */ }
  <div className="hidden lg:flex justify-center items-center order-1 lg:order-2 relative select-none w-full min-h-[400px] sm:min-h-[480px] animate-robot-entrance">
    <Robot3D />
  </div>
      </div >

  {/* Infinite Horizontal Marquee Ticker */ }
  < div className = "absolute bottom-0 left-0 w-full overflow-hidden bg-white/[0.04] backdrop-blur-md border-t border-b border-white/10 py-3 sm:py-4 z-20 animate-fade-in-up delay-7" >
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-white/25 to-transparent pointer-events-none z-30" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-white/25 to-transparent pointer-events-none z-30" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer">
          {doubledItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex items-center mx-4 sm:mx-6 md:mx-8 gap-2 sm:gap-3 select-none">
                <IconComponent className="text-sm sm:text-base md:text-lg text-[#f75023]" />
                <span className="text-xs sm:text-sm md:text-base font-bold tracking-wider font-sans uppercase whitespace-nowrap text-white">
                  {item.text}
                </span>
                <span className="text-white/25 font-bold text-xs sm:text-sm ml-2 sm:ml-4 select-none">✦</span>
              </div>
            );
          })}
        </div>
      </div >
    </section >
  );
};

export default Home;