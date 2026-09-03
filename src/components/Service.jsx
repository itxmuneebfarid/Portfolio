import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiCpu, FiMessageSquare, FiStar, FiTerminal, FiZap, FiLink, FiEye, FiMic, FiBookOpen } from 'react-icons/fi';

const services = [
  { tPrefix: "serv1_", title: "Machine Learning (ML)", description: "I build intelligent ML models that identify patterns in complex datasets, make accurate predictions, and continuously learn to optimize decision-making and business outcomes.", icon: <FiCpu /> },
  { tPrefix: "serv2_", title: "Natural Language Processing", description: "I develop NLP solutions that understand, interpret, and process human language — from intelligent document analysis and sentiment understanding to conversational AI.", icon: <FiMessageSquare /> },
  { tPrefix: "serv3_", title: "Generative AI", description: "I design and deploy Generative AI systems that automate content creation, produce valuable insights, and deliver personalized, context-aware user experiences at scale.", icon: <FiStar /> },
  { tPrefix: "serv4_", title: "Large Language Models (LLM)", description: "I build LLM-powered applications — intelligent chatbots, virtual assistants, enterprise search tools, and automated knowledge systems that supercharge team productivity.", icon: <FiTerminal /> },
  { tPrefix: "serv5_", title: "AI Automation & Workflows", description: "I design end-to-end AI automation pipelines using tools like Make, Zapier, and n8n — eliminating repetitive tasks and enabling intelligent, self-operating business workflows.", icon: <FiZap /> },
  { tPrefix: "serv6_", title: "Model Context Protocol (MCP)", description: "I implement MCP solutions that seamlessly connect AI systems to business applications, databases, and workflows — enabling more accurate, relevant, and context-aware AI responses.", icon: <FiLink /> },
  { tPrefix: "serv7_", title: "Computer Vision", description: "I develop computer vision systems for real-time object detection, face recognition, video analytics, and behavioral analysis — turning visual data into actionable intelligence.", icon: <FiEye /> },
  { tPrefix: "serv8_", title: "Voice AI & Calling Agents", description: "I build real-time voice AI agents that handle scheduling, lead qualification, and automated customer calls — using cutting-edge speech-to-text and text-to-speech pipelines.", icon: <FiMic /> },
  { tPrefix: "serv9_", title: "RAG & Knowledge Systems", description: "I architect Retrieval-Augmented Generation (RAG) systems that give AI models access to your private knowledge base — delivering precise, grounded, and context-aware responses.", icon: <FiBookOpen /> },
];

const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.09)';

// Helper: falls back to default text if the translation is missing,
// empty, OR the t() function just echoed the key back (common i18n bug).
const tr = (t, key, fallback) => {
  const val = t ? t(key) : null;
  if (!val || val === key) return fallback;
  return val;
};

const ServiceCard = ({ service, t }) => {
  const handleEnter = (e) => {
    const card = e.currentTarget;
    card.style.boxShadow = '0 0 35px 5px rgba(255,255,255,0.12)';
    card.style.transform = 'translateY(-4px) scale(1.02)';
  };
  const handleLeave = (e) => {
    const card = e.currentTarget;
    card.style.boxShadow = 'none';
    card.style.transform = 'translateY(0) scale(1)';
  };

  return (
    <div
      className="flex-shrink-0 w-[300px] sm:w-[330px] rounded-2xl border 
        px-3 py-4 sm:px-5 sm:py-5  flex flex-col gap-5 relative group transition-all duration-400 cursor-default"
      style={{
        backgroundColor: CARD_BG,
        borderColor: CARD_BORDER,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'background-color 0.35s, border-color 0.35s, box-shadow 0.35s, transform 0.35s',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{ background: 'rgba(247,80,35,0.10)', border: '1px solid rgba(247,80,35,0.20)' }}
      >
        {service.icon}
      </div>

      <h3 className="text-white font-bold text-[18px] leading-snug font-heading">
        {service.tPrefix ? tr(t, service.tPrefix + 'title', service.title) : service.title}
      </h3>

      <p className="text-slate-400 text-[13px] sm:text-[16px] leading-relaxed font-sans flex-grow">
        {service.tPrefix ? tr(t, service.tPrefix + 'desc', service.description) : service.description}
      </p>

      <button
        onClick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="w-9 h-9 rounded-full flex items-center justify-center border self-start mt-auto transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-110 cursor-pointer"
        style={{ borderColor: 'rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.45)', background: 'transparent' }}
        aria-label="Contact me"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

const Service = () => {
  const { t } = useLanguage();
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.6;
    const step = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  const doubled = [...services, ...services];

  return (
    <section
      id="service"
      className="relative min-h-screen py-12 sm:py-24 border-b border-white/5 flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(16,20,36,0.88), rgba(16,20,36,0.88)), url('/hero-2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-primary font-medium text-[20px] sm:text-[30px] mb-4 tracking-widest uppercase block font-sans">
              {tr(t, 'servicesTitle', 'SERVICES')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold mb-4 text-white tracking-tight mb-5 leading-tight">
              {tr(t, 'servicesHeading1', 'My AI Expertise &')}&nbsp;
              <span style={{ color: '#f75023' }}>{tr(t, 'servicesHeading2', 'Capabilities')}</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl text-center font-sans">
              {tr(t, 'servicesDesc', 'I deliver practical, cutting-edge AI solutions that automate workflows, amplify intelligence, and turn complex data into measurable business results.')}
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden" onMouseEnter={pause} onMouseLeave={resume}>
          <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.12), transparent)' }} />
          <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.12), transparent)' }} />

          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{ width: 'max-content', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1rem', paddingBottom: '1.5rem' }}
          >
            {doubled.map((item, idx) => (
              <ServiceCard key={`col1-${idx}`} service={item} t={t} />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-10 sm:gap-16 mt-16">
            {[
              { value: '3+', label: tr(t, 'stat1', 'Years AI Experience') },
              { value: '15+', label: tr(t, 'stat2', 'Projects Delivered') },
              { value: '9', label: tr(t, 'stat3', 'AI Services Offered') },
              { value: '3', label: tr(t, 'stat4', 'Countries Served') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading" style={{ color: '#f75023' }}>
                  {stat.value}
                </span>
                <p className="text-slate-400 text-sm mt-1 font-sans">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;