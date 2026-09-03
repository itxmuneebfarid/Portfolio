import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  FiBriefcase,
  FiFileText,
  FiUsers,
  FiAward,
  FiBook,
  FiCpu,
  FiZap,
  FiEye,
  FiMic,
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';

// Sequence: Experience -> Research Papers -> Leadership -> Certificates -> Education
const journeyItems = [
  // 1. Experience
  {
    id: 1,
    type: "experience",
    tPrefix: "j1_",
    title: "AI Engineer (Active Job)",
    subtitle: "Tecveq (England)",
    period: "2025 - Present",
    description: "Designing and integrating cutting-edge LLM applications, voice assistants, and cloud AI infrastructure to automate business workflows.",
    icon: <FiCpu className="w-6 h-6" />,
    tags: ["LLMs", "LangChain", "Voice AI", "Cloud AI", "Python", "API Integration"]
  },

  {
    id: 3,
    type: "experience",
    tPrefix: "j2_",
    title: "AI Engineer",
    subtitle: "Findigit (Bahrian)",
    period: "2023 - 2024",
    description: "Built customer support chatbots, product recommendation systems, and computer vision models for object detection and face recognition.",
    icon: <FiEye className="w-6 h-6" />,
    tags: ["Computer Vision", "OpenCV", "PyTorch", "Chatbots", "NLP", "Python"]
  },

  // 0. Research Papers
  {
    id: 9,
    type: "researchpaper",
    tPrefix: "j3_",
    title: "AI-Powered Medical Triage Chatbot for Symptom Assessment and Risk Stratification with Clinical Safety Governance",
    subtitle: "Muneeb Farid · Research Publication",
    period: "2026",
    description: "Developing an AI-powered medical triage system that combines rule-based clinical protocols with machine learning for symptom assessment and risk stratification.",
    icon: <FiCpu className="w-6 h-6" />,
    tags: ["Medical Chatbot", "Risk Stratification", "Clinical Safety", "Machine Learning"],
    link: "https://scholar.google.com/scholar?q=AI-Powered+Medical+Triage+Chatbot+Muneeb+Farid"
  },
  {
    id: 10,
    type: "researchpaper",
    tPrefix: "j4_",
    title: "Design and Evaluation of Multi-Agent AI Systems for Solving Real-World Industry Problems",
    subtitle: "Muneeb Farid · Research Publication",
    period: "2025",
    description: "Designed and developed a Multi-Agent System using Large Language Models (LLMs) to enable autonomous task execution and solve real-world industry problems.",
    icon: <FiUsers className="w-6 h-6" />,
    tags: ["Multi-Agent Systems", "LLMs", "Autonomous Tasks", "Systems Design"],
    link: "https://scholar.google.com/scholar?q=Design+and+Evaluation+of+Multi-Agent+AI+Systems+Muneeb+Farid"
  },
  {
    id: 14,
    type: "researchpaper",
    tPrefix: "j5_",
    title: "Applying Reinforcement Learning to Decision-Making Problems in Games, Robotics, and Resource Management",
    subtitle: "Muneeb Farid · Research Publication",
    period: "2024",
    description: "Published BS Final Year Project titled 'A Comparative Study of Classical and Deep Reinforcement Learning Algorithms' focusing on decision-making optimization.",
    icon: <FiZap className="w-6 h-6" />,
    tags: ["Reinforcement Learning", "Decision-Making", "Robotics", "Algorithms Comparison"],
    link: "https://scholar.google.com/scholar?q=Applying+Reinforcement+Learning+to+Decision-Making+Problems+Muneeb+Farid"
  },
  {
    id: 15,
    type: "researchpaper",
    tPrefix: "j6_",
    title: "A new method for image classification based on the fusion of multi-level deep learning models",
    subtitle: "Muneeb Farid · Research Publication",
    period: "2023",
    description: "Developed a novel image classification method utilizing the fusion of multi-level deep learning models to overcome individual model performance limitations.",
    icon: <FiEye className="w-6 h-6" />,
    tags: ["Image Classification", "Deep Learning Fusion", "Computer Vision", "Neural Networks"],
    link: "https://scholar.google.com/scholar?q=A+new+method+for+image+classification+based+on+the+fusion+of+multi-level+deep+learning+models+Muneeb+Farid"
  },
  // 2. Leadership & Community
  {
    id: 7,
    type: "leadership",
    tPrefix: "j7_",
    title: "Campus Ambassador",
    subtitle: "Devsinc · Remote",
    period: "Feb 2025 - Present",
    description: "Representing Devsinc on campus, driving student engagement, and connecting peers to internships, events, and hiring opportunities.",
    icon: <FiUsers className="w-6 h-6" />,
    tags: ["Public Relations", "Community Building", "Mentoring", "Event Organization"]
  },
  {
    id: 8,
    type: "leadership",
    tPrefix: "j8_",
    title: "Tech Lead & Speaker",
    subtitle: "COMSATS CS Society",
    period: "Nov 2023 - Present",
    description: "Leading technical workshops and mentoring peers on AI, web development, and problem solving within the Computer Science Society.",
    icon: <FiMic className="w-6 h-6" />,
    tags: ["Mentorship", "Public Speaking", "Software Engineering", "Algorithms"]
  },
  // 3. Certificates
  {
    id: 4,
    type: "certificate",
    tPrefix: "j9_",
    title: "Professional AI & ML Certifications",
    subtitle: "DeepLearning.AI / Coursera",
    period: "2023",
    description: "Completed comprehensive certifications covering Neural Networks, Deep Learning, LLM Fine-Tuning, and Generative AI systems.",
    icon: <FiAward className="w-6 h-6" />,
    tags: ["Deep Learning", "LLMs Fine-Tuning", "PyTorch", "TensorFlow", "Generative AI"],
    link: "https://www.linkedin.com/in/muneeb-farid-ai-engineer/details/certifications/"
  },
  {
    id: 11,
    type: "certificate",
    tPrefix: "j10_",
    title: "CS50x: Introduction to Computer Science",
    subtitle: "Harvard University (edX)",
    period: "2025",
    description: "Rigorous entry-level course on the intellectual enterprises of computer science and the art of programming (C, Python, SQL, HTML/CSS/JS, algorithms).",
    icon: <FiBook className="w-6 h-6" />,
    tags: ["Algorithms", "C Language", "Python", "SQL", "Data Structures", "Memory Management"],
    link: "https://www.linkedin.com/in/muneeb-farid-ai-engineer/details/certifications/"
  },
  {
    id: 12,
    type: "certificate",
    tPrefix: "j11_",
    title: "Machine Learning Specialization",
    subtitle: "Stanford University & DeepLearning.AI",
    period: "2024",
    description: "Mastered foundational AI concepts including Supervised Learning (Linear Regression, Logistic Regression, Neural Networks) and Unsupervised Learning (Clustering, PCA, Recommender Systems).",
    icon: <FiCpu className="w-6 h-6" />,
    tags: ["Supervised Learning", "Linear Regression", "Neural Networks", "Recommender Systems", "Unsupervised Learning"],
    link: "https://www.linkedin.com/in/muneeb-farid-ai-engineer/details/certifications/"
  },
  {
    id: 13,
    type: "certificate",
    tPrefix: "j13_",
    title: "Cisco: Operating Systems Basics",
    subtitle: "Cisco Networking Academy",
    period: "2024",
    description: "Learned core concepts of operating systems, hardware configuration, process control, thread scheduling, memory management, and file systems.",
    icon: <FiCpu className="w-6 h-6" />,
    tags: ["Operating Systems", "Linux Basics", "Process Management", "File Systems", "Hardware Architecture"],
    link: "https://www.linkedin.com/in/muneeb-farid-ai-engineer/details/certifications/"
  },
  // 4. Education
  {
    id: 5,
    type: "education",
    tPrefix: "j12_",
    title: "Bachelor's degree, Computer Science",
    subtitle: "COMSATS University Islamabad",
    period: "Sep 2024 – Sep 2028",
    description: "Studying foundational computer science principles, database systems, data structures, and software methodologies with a focus on data analysis.",
    icon: <FiBookOpen className="w-6 h-6" />,
    tags: ["Computer Science", "Data Analysis", "Python", "Algorithms", "Software Engineering"]
  }
];

// Color identity per record type — lets the eye scan record kind at a glance
const typeStyles = {
  experience: {
    heading: "Professional Experience",
    icon: <FiBriefcase />,
    accent: "#f75023",
    ring: "rgba(247,80,35,0.45)",
    glow: "rgba(247,80,35,0.22)",
    chipBg: "rgba(247,80,35,0.12)",
  },
  researchpaper: {
    heading: "Research Papers",
    icon: <FiFileText />,
    accent: "#10b981",
    ring: "rgba(16,185,129,0.45)",
    glow: "rgba(16,185,129,0.22)",
    chipBg: "rgba(16,185,129,0.12)",
  },
  leadership: {
    heading: "Leadership & Community",
    icon: <FiUsers />,
    accent: "#ffb648",
    ring: "rgba(255,182,72,0.45)",
    glow: "rgba(255,182,72,0.22)",
    chipBg: "rgba(255,182,72,0.12)",
  },
  certificate: {
    heading: "Certifications",
    icon: <FiAward />,
    accent: "#35d0c0",
    ring: "rgba(53,208,192,0.45)",
    glow: "rgba(53,208,192,0.22)",
    chipBg: "rgba(53,208,192,0.12)",
  },
  education: {
    heading: "Education",
    icon: <FiBook />,
    accent: "#8b7cf6",
    ring: "rgba(139,124,246,0.45)",
    glow: "rgba(139,124,246,0.22)",
    chipBg: "rgba(139,124,246,0.12)",
  },
};

const tabs = [
  { key: "experience", labelKey: "journeyTabExp", icon: <FiBriefcase className="w-4 h-4" /> },
  { key: "researchpaper", labelKey: "journeyTabResearch", icon: <FiFileText className="w-4 h-4" /> },
  { key: "leadership", labelKey: "journeyTabLead", icon: <FiUsers className="w-4 h-4" /> },
  { key: "certificate", labelKey: "journeyTabCert", icon: <FiAward className="w-4 h-4" /> },
];

// Base (idle) and hover values for the glass cards — kept in one place so the
// dark theme stays consistent across all category colors.
const CARD_BG_IDLE = 'rgba(26, 31, 46, 0.55)';
const CARD_BG_HOVER = 'rgba(32, 38, 58, 0.85)';
const CARD_BORDER_IDLE = 'rgba(255, 255, 255, 0.08)';

const CornerNetwork = ({ position }) => {
  let posClass = "";
  let transFore = "";
  let transMid = "";
  let transBack = "";

  if (position === "top-left") {
    posClass = "top-[-20px] left-[-20px]";
    transFore = "group-hover:-translate-x-10 group-hover:-translate-y-10";
    transMid = "group-hover:-translate-x-5 group-hover:-translate-y-5";
    transBack = "group-hover:-translate-x-2 group-hover:-translate-y-2";
  } else if (position === "top-right") {
    posClass = "top-[-20px] right-[-20px]";
    transFore = "group-hover:translate-x-10 group-hover:-translate-y-10";
    transMid = "group-hover:translate-x-5 group-hover:-translate-y-5";
    transBack = "group-hover:translate-x-2 group-hover:-translate-y-2";
  } else if (position === "bottom-left") {
    posClass = "bottom-[-20px] left-[-20px]";
    transFore = "group-hover:-translate-x-10 group-hover:translate-y-10";
    transMid = "group-hover:-translate-x-5 group-hover:translate-y-5";
    transBack = "group-hover:-translate-x-2 group-hover:translate-y-2";
  } else if (position === "bottom-right") {
    posClass = "bottom-[-20px] right-[-20px]";
    transFore = "group-hover:translate-x-10 group-hover:translate-y-10";
    transMid = "group-hover:translate-x-5 group-hover:translate-y-5";
    transBack = "group-hover:translate-x-2 group-hover:translate-y-2";
  }

  return (
    <div className={`absolute ${posClass} w-48 h-48 sm:w-60 sm:h-60 pointer-events-auto group z-0 opacity-45 hover:opacity-90 transition-opacity duration-500`}>
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow-fore" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Layer 3 - Back (deep amber/orange, faint, drifts slowly) */}
        <g
          className={`transition-transform duration-700 ease-out ${transBack}`}
          style={{ animation: 'networkDrift3 24s ease-in-out infinite' }}
        >
          <line x1="20" y1="90" x2="120" y2="120" stroke="rgba(180,83,9,0.18)" strokeWidth="1" />
          <line x1="140" y1="40" x2="120" y2="120" stroke="rgba(180,83,9,0.18)" strokeWidth="1" />
          <line x1="120" y1="120" x2="160" y2="170" stroke="rgba(180,83,9,0.18)" strokeWidth="1" />
          <line x1="20" y1="90" x2="140" y2="40" stroke="rgba(180,83,9,0.15)" strokeWidth="0.8" />
          <circle cx="20" cy="90" r="2.5" fill="#b45309" />
          <circle cx="140" cy="40" r="3" fill="#b45309" />
          <circle cx="120" cy="120" r="3.5" fill="#b45309" />
          <circle cx="160" cy="170" r="2.5" fill="#b45309" />
        </g>

        <g
          className={`transition-transform duration-500 ease-out ${transMid}`}
          style={{ animation: 'networkDrift2 18s ease-in-out infinite' }}
        >
          <line x1="80" y1="20" x2="170" y2="100" stroke="rgba(255,182,72,0.3)" strokeWidth="1.2" />
          <line x1="50" y1="140" x2="170" y2="100" stroke="rgba(255,182,72,0.3)" strokeWidth="1.2" />
          <line x1="80" y1="20" x2="50" y2="140" stroke="rgba(255,182,72,0.2)" strokeWidth="1" />
          <circle cx="80" cy="20" r="3.5" fill="#ffb648" />
          <circle cx="50" cy="140" r="4" fill="#ffb648" />
          <circle cx="170" cy="100" r="3.5" fill="#ffb648" />
        </g>

        <g
          className={`transition-transform duration-300 ease-out ${transFore}`}
          style={{ animation: 'networkDrift1 14s ease-in-out infinite' }}
        >
          <line x1="30" y1="30" x2="90" y2="70" stroke="rgba(247,80,35,0.4)" strokeWidth="1.5" filter="url(#glow-fore)" />
          <line x1="90" y1="70" x2="80" y2="180" stroke="rgba(247,80,35,0.4)" strokeWidth="1.5" filter="url(#glow-fore)" />
          <line x1="30" y1="30" x2="80" y2="20" stroke="rgba(247,80,35,0.2)" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="90" y1="70" x2="120" y2="120" stroke="rgba(247,80,35,0.2)" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="80" y1="180" x2="50" y2="140" stroke="rgba(247,80,35,0.2)" strokeWidth="1" strokeDasharray="2,2" />
          <circle cx="30" cy="30" r="4.5" fill="#f75023" filter="url(#glow-fore)" />
          <circle cx="90" cy="70" r="5" fill="#f75023" filter="url(#glow-fore)" />
          <circle cx="80" cy="180" r="4.5" fill="#f75023" filter="url(#glow-fore)" />
        </g>
      </svg>
    </div>
  );
};

const Journey = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('experience');
  const [startIndex, setStartIndex] = useState(0);

  const handleMouseMove = (e, accentStyle) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();

    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    const tiltMaxAngle = 10;
    const rotateX = -(y / (box.height / 2)) * tiltMaxAngle;
    const rotateY = (x / (box.width / 2)) * tiltMaxAngle;

    card.style.transition = 'transform 0.1s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out, background-color 0.2s ease-out';
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    card.style.borderColor = accentStyle.ring;
    card.style.boxShadow = `0 25px 50px -12px rgba(0,0,0,0.45), 0 0 30px 4px ${accentStyle.glow}`;
    card.style.backgroundColor = CARD_BG_HOVER;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease, border-color 0.6s ease, background-color 0.6s ease';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    card.style.borderColor = CARD_BORDER_IDLE;
    card.style.boxShadow = '0 20px 40px -15px rgba(0,0,0,0.5)';
    card.style.backgroundColor = CARD_BG_IDLE;
  };

  return (
    <section
      id="journey"
      className="py-14 px-4 sm:px-6 md:px-12 bg-[#151a29] border-b border-white/5 flex flex-col justify-center items-center relative overflow-hidden"
    >
      <style>{`
        @keyframes journeyDotDrift {
          0%   { transform: translate(0, 0); opacity: 0.2; }
          50%  { transform: translate(var(--dx), var(--dy)); opacity: 0.95; }
          100% { transform: translate(0, 0); opacity: 0.2; }
        }
        @keyframes networkDrift1 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(2px, -2px); }
        }
        @keyframes networkDrift2 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-1.5px, 2.5px); }
        }
        @keyframes networkDrift3 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(2.5px, 1.5px); }
        }
      `}</style>

      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          background: `
            radial-gradient(circle at 8% 95%, rgba(236,72,153,0.06) 0%, transparent 40%),
            radial-gradient(circle at 4% 100%, rgba(45,212,191,0.05) 0%, transparent 35%),
            radial-gradient(circle at 100% 0%, rgba(139,124,246,0.06) 0%, transparent 45%),
            linear-gradient(135deg, #1c2235 0%, #151a29 55%, #101424 100%)
          `,
        }}
      />

      <CornerNetwork position="top-left" />
      <CornerNetwork position="top-right" />
      <CornerNetwork position="bottom-left" />
      <CornerNetwork position="bottom-right" />

      <div
        className="absolute -top-16 -left-16 w-[420px] h-[420px] pointer-events-none select-none"
        style={{
          background: `
            radial-gradient(circle at 35% 20%, rgba(167,139,250,0.30) 0%, transparent 45%),
            radial-gradient(circle at 55% 30%, rgba(244,63,94,0.25) 0%, transparent 42%),
            radial-gradient(circle at 45% 50%, rgba(251,146,60,0.22) 0%, transparent 45%),
            radial-gradient(circle at 60% 60%, rgba(250,204,21,0.18) 0%, transparent 45%),
            radial-gradient(circle at 35% 68%, rgba(74,222,128,0.18) 0%, transparent 45%),
            radial-gradient(circle at 30% 40%, rgba(56,189,248,0.15) 0%, transparent 45%)
          `,
          filter: 'blur(45px)',
          mixBlendMode: 'screen',
          opacity: 0.45,
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[380px] h-[380px] pointer-events-none select-none"
        style={{
          background: `
            radial-gradient(circle at 40% 70%, rgba(56,189,248,0.20) 0%, transparent 45%),
            radial-gradient(circle at 55% 55%, rgba(74,222,128,0.18) 0%, transparent 45%),
            radial-gradient(circle at 45% 40%, rgba(250,204,21,0.18) 0%, transparent 45%),
            radial-gradient(circle at 60% 30%, rgba(244,63,94,0.20) 0%, transparent 45%),
            radial-gradient(circle at 35% 25%, rgba(167,139,250,0.20) 0%, transparent 45%)
          `,
          filter: 'blur(45px)',
          mixBlendMode: 'screen',
          opacity: 0.4,
        }}
      />

      <div
        className="absolute -top-20 -right-20 w-[400px] h-[400px] pointer-events-none select-none"
        style={{
          background: `
            radial-gradient(circle at 65% 25%, rgba(53,208,192,0.22) 0%, transparent 45%),
            radial-gradient(circle at 45% 45%, rgba(139,124,246,0.20) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(247,80,35,0.15) 0%, transparent 40%)
          `,
          filter: 'blur(50px)',
          mixBlendMode: 'screen',
          opacity: 0.4,
        }}
      />
      <div
        className="absolute -bottom-16 -right-16 w-[420px] h-[420px] pointer-events-none select-none"
        style={{
          background: `
            radial-gradient(circle at 50% 60%, rgba(255,182,72,0.18) 0%, transparent 45%),
            radial-gradient(circle at 30% 40%, rgba(236,72,153,0.15) 0%, transparent 45%),
            radial-gradient(circle at 65% 30%, rgba(56,189,248,0.20) 0%, transparent 42%)
          `,
          filter: 'blur(45px)',
          mixBlendMode: 'screen',
          opacity: 0.42,
        }}
      />

      {[
        { top: '6%', left: '10%', size: 3, dx: 60, dy: 35, dur: 9 },
        { top: '10%', left: '78%', size: 2.4, dx: -50, dy: 40, dur: 8 },
        { top: '16%', left: '35%', size: 2.8, dx: 45, dy: -35, dur: 10 },
        { top: '22%', left: '55%', size: 2.2, dx: -40, dy: -30, dur: 7 },
        { top: '28%', left: '90%', size: 2.6, dx: -45, dy: 30, dur: 9.5 },
        { top: '34%', left: '15%', size: 3.2, dx: 55, dy: 25, dur: 8.5 },
        { top: '40%', left: '65%', size: 2, dx: -35, dy: 45, dur: 11 },
        { top: '46%', left: '25%', size: 2.4, dx: 40, dy: -40, dur: 9 },
        { top: '52%', left: '85%', size: 2.8, dx: -50, dy: -25, dur: 10.5 },
        { top: '58%', left: '45%', size: 2, dx: 35, dy: 35, dur: 8 },
        { top: '64%', left: '5%', size: 3, dx: 50, dy: -30, dur: 9 },
        { top: '70%', left: '70%', size: 2.2, dx: -40, dy: 40, dur: 7.5 },
        { top: '76%', left: '30%', size: 2.6, dx: 45, dy: -35, dur: 10 },
        { top: '82%', left: '92%', size: 2, dx: -35, dy: -40, dur: 8.5 },
        { top: '88%', left: '18%', size: 2.8, dx: 40, dy: 30, dur: 9.5 },
        { top: '94%', left: '60%', size: 2.4, dx: -45, dy: -25, dur: 11 },
        { top: '12%', left: '48%', size: 2, dx: 30, dy: 40, dur: 7 },
        { top: '48%', left: '10%', size: 2.6, dx: -40, dy: 30, dur: 8.5 },
        { top: '60%', left: '92%', size: 2.2, dx: 40, dy: -35, dur: 9.5 },
        { top: '90%', left: '40%', size: 2.8, dx: -35, dy: -30, dur: 10 },
        { top: '3%', left: '25%', size: 2, dx: 40, dy: 25, dur: 8 },
        { top: '38%', left: '38%', size: 2.4, dx: -30, dy: -45, dur: 9 },
        { top: '68%', left: '48%', size: 2, dx: 35, dy: 30, dur: 7.5 },
        { top: '80%', left: '55%', size: 2.6, dx: -40, dy: 35, dur: 10.5 },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none select-none"
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            boxShadow: '0 0 6px 1px rgba(255,255,255,0.5)',
            '--dx': `${dot.dx}px`,
            '--dy': `${dot.dy}px`,
            animation: `journeyDotDrift ${dot.dur}s ease-in-out infinite`,
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span style={{ fontFamily: "Jost, sans-serif" }} className="text-primary font-medium text-[20px] sm:text-[30px] mb-4 tracking-widest uppercase block font-sans">
            {t('navJourney')}
          </span>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          {tabs.map(({ key, labelKey, icon }) => (
            <button
              key={key}
              onClick={() => { setActiveTab(key); setStartIndex(0); }}
              className={`font-sans font-semibold text-[14px] sm:text-[15px] tracking-[0.5px] transition-all duration-300 relative px-4 py-2 rounded-full cursor-pointer outline-none select-none flex items-center gap-2 border ${activeTab === key
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
            >
              <span className="text-base sm:text-lg">{icon}</span>
              <span>{t(labelKey)}</span>
            </button>
          ))}
        </div>

        {/* Categorized Rows */}
        <div className="space-y-16">
          {tabs.map((tab) => {
            const catKey = tab.key;
            if (activeTab !== catKey) return null;

            const items = journeyItems.filter(item => item.type === catKey);
            if (items.length === 0) return null;
            const style = typeStyles[catKey];

            const visibleItems = items.slice(startIndex, startIndex + 3);

            return (
              <div key={catKey} className="w-full">
                {/* Category Section Header */}
                <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-3.5">
                  <h4 className="text-xl sm:text-2xl font-medium text-white flex items-center gap-3 font-heading tracking-wide uppercase">
                    <span className="text-2xl" style={{ color: style.accent }}>{style.icon}</span> {style.heading}
                  </h4>
                  {/* Slider Navigation Controls */}
                  {items.length > 3 && (
                    <div className="flex items-center gap-2">
                      {/* Left Arrow: only visible when startIndex > 0 */}
                      {startIndex > 0 ? (
                        <button
                          onClick={() => setStartIndex(prev => Math.max(0, prev - 1))}
                          className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 text-white flex items-center justify-center hover:bg-white/5 transition-all cursor-pointer"
                        >
                          <FiChevronLeft className="w-5 h-5" />
                        </button>
                      ) : (
                        <div className="w-10 h-10" />
                      )}
                      {/* Right Arrow: visible when there are more items to show */}
                      {startIndex + 3 < items.length ? (
                        <button
                          onClick={() => setStartIndex(prev => Math.min(items.length - 3, prev + 1))}
                          className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 text-white flex items-center justify-center hover:bg-white/5 transition-all cursor-pointer"
                        >
                          <FiChevronRight className="w-5 h-5" />
                        </button>
                      ) : (
                        <div className="w-10 h-10" />
                      )}
                    </div>
                  )}
                </div>

                {/* Grid for this specific category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                  {visibleItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`relative rounded-[1.75rem] overflow-hidden border transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full ${item.link ? 'cursor-pointer' : ''}`}
                      style={{
                        backgroundColor: CARD_BG_IDLE,
                        borderColor: CARD_BORDER_IDLE,
                        boxShadow: `0 20px 40px -15px rgba(0,0,0,0.5)`,
                        backdropFilter: 'blur(14px)',
                        WebkitBackdropFilter: 'blur(14px)',
                        transformStyle: 'preserve-3d',
                      }}
                      onMouseMove={(e) => handleMouseMove(e, style)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => item.link && window.open(item.link, '_blank')}
                    >
                      {/* Card Header with glowing icon badge */}
                      <div
                        className="relative h-32 overflow-hidden flex items-center justify-center border-b"
                        style={{
                          background: `linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)`,
                          borderColor: 'rgba(255,255,255,0.06)',
                        }}
                      >
                        <div
                          className="absolute w-24 h-24 rounded-full blur-2xl transition-all duration-500 group-hover:scale-125"
                          style={{ backgroundColor: style.glow }}
                        />
                        <span className="absolute top-3 right-4 text-[11px] font-bold tracking-widest text-white/25 font-sans select-none z-20">
                          {String(items.indexOf(item) + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl relative z-20 select-none border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
                          style={{
                            borderColor: style.ring,
                            color: style.accent,
                            backgroundColor: 'rgba(255,255,255,0.06)',
                          }}
                        >
                          {item.icon}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className=" pt-3 pb-4 sm:pt-4 sm:pb-5 px-3 sm:px-4 flex flex-col flex-grow">
                        {/* 1. Job Title heading first */}
                        <h4
                          className="text-slate-100 font-bold text-base mb-3 font-heading leading-snug line-clamp-2"
                          style={{ minHeight: '2.5rem' }}
                        >

                          {t(item.tPrefix + 'title')}
                        </h4>

                        {/* 2. Company Subtitle on left, Duration on right */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <span className="text-slate-400 text-sm font-bold font-sans">
                            {t(item.tPrefix + 'sub')}
                          </span>
                          <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-bold font-sans text-slate-300 border"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              borderColor: 'rgba(255,255,255,0.1)',
                            }}
                          >
                            {t(item.tPrefix + 'per')}
                          </span>
                        </div>

                        {/* 3. Description text */}
                        <p className="text-slate-400 text-sm leading-relaxed font-sans font-normal mb-5 flex-grow">
                          {t(item.tPrefix + 'desc')}
                        </p>

                        {/* 4. Tech stack tags relating to title/description */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="mt-auto pt-4 border-t flex flex-wrap gap-1.5" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold text-slate-400 border transition-colors"
                                style={{
                                  backgroundColor: 'rgba(255,255,255,0.05)',
                                  borderColor: 'rgba(255,255,255,0.1)',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = style.accent;
                                  e.currentTarget.style.borderColor = style.ring;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = '';
                                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;