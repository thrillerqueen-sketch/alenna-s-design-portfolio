import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Mail, LayoutGrid, Palette, ArrowLeft, Send } from 'lucide-react';
import { useLanguage } from './i18n/LanguageContext';

type Project = {
  id: string;
  titleKey: string;
  descKey: string;
  category: string;
  gradient: string;
  thumbnail: string;
  role: string;
  year: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: 'tipbox',
    titleKey: 'project.tipbox',
    descKey: 'project.tipbox.desc',
    category: 'UI/UX Design',
    gradient: 'from-emerald-500 via-emerald-400 to-teal-300',
    thumbnail: '/portfolio_files/Cases/Tipbox/Case-Tipbox_Cover.png',
    role: 'Lead UX/UI Designer',
    year: '2024',
    images: [
      '/portfolio_files/Cases/Tipbox/Case-Tipbox-02.png',
      '/portfolio_files/Cases/Tipbox/Case-Tipbox-03.png',
      '/portfolio_files/Cases/Tipbox/Case-Tipbox-04.png',
      '/portfolio_files/Cases/Tipbox/Case-Tipbox-05.png',
      '/portfolio_files/Cases/Tipbox/Case-Tipbox-06.png',
      '/portfolio_files/Cases/Tipbox/Case-Tipbox-07.png',
      '/portfolio_files/Cases/Tipbox/Case-Tipbox-08.png',
      '/portfolio_files/Cases/Tipbox/Case-Tipbox-09.png',
      '/portfolio_files/Cases/Tipbox/Case-Tipbox-10.png',
      '/portfolio_files/Cases/Tipbox/Case-Tipbox-11.png',
    ],
  },
  {
    id: 'snova',
    titleKey: 'project.snova',
    descKey: 'project.snova.desc',
    category: 'Branding',
    gradient: 'from-blue-500 via-blue-400 to-cyan-300',
    thumbnail: '/portfolio_files/Cases/Snova Cup/Snova_Cover.png',
    role: 'Lead Brand & UX Designer',
    year: '2022-2023',
    images: [
      '/portfolio_files/Cases/Snova Cup/Case-Snova-02.png',
      '/portfolio_files/Cases/Snova Cup/Case-Snova-03.png',
      '/portfolio_files/Cases/Snova Cup/Case-Snova-04.png',
      '/portfolio_files/Cases/Snova Cup/Case-Snova-05.png',
      '/portfolio_files/Cases/Snova Cup/Case-Snova-06.png',
      '/portfolio_files/Cases/Snova Cup/Case-Snova-07.png',
      '/portfolio_files/Cases/Snova Cup/Case-Snova-08.png',
      '/portfolio_files/Cases/Snova Cup/Case-Snova-09.png',
      '/portfolio_files/Cases/Snova Cup/Case-Snova-10.png',
      '/portfolio_files/Cases/Snova Cup/Case-Snova-11.png',
    ],
  },
  {
    id: 'heycanvas',
    titleKey: 'project.heycanvas',
    descKey: 'project.heycanvas.desc',
    category: 'Branding',
    gradient: 'from-pink-500 via-pink-400 to-rose-300',
    thumbnail: '/portfolio_files/Cases/Heycanvas/Heycanvas_Cover.png',
    role: 'Lead Brand & UI/UX Designer',
    year: '2023',
    images: [
      '/portfolio_files/Cases/Heycanvas/Case-HeyCanvas-02.png',
      '/portfolio_files/Cases/Heycanvas/Case-HeyCanvas-03.png',
      '/portfolio_files/Cases/Heycanvas/Case-HeyCanvas-04.png',
      '/portfolio_files/Cases/Heycanvas/Case-HeyCanvas-05.png',
      '/portfolio_files/Cases/Heycanvas/Case-HeyCanvas-06.png',
      '/portfolio_files/Cases/Heycanvas/Case-HeyCanvas-07.png',
      '/portfolio_files/Cases/Heycanvas/Case-HeyCanvas-08.png',
    ],
  },
  {
    id: 'gtrivia',
    titleKey: 'project.gtrivia',
    descKey: 'project.gtrivia.desc',
    category: 'UI/UX Design',
    gradient: 'from-purple-500 via-purple-400 to-violet-300',
    thumbnail: '/portfolio_files/Cases/GTrivia/GTrivia_Cover.png',
    role: 'Lead UI/UX & Brand Designer',
    year: '2022',
    images: [
      '/portfolio_files/Cases/GTrivia/Case-GTrivia-02.png',
      '/portfolio_files/Cases/GTrivia/Case-GTrivia-03.png',
      '/portfolio_files/Cases/GTrivia/Case-GTrivia-04.png',
      '/portfolio_files/Cases/GTrivia/Case-GTrivia-05.png',
      '/portfolio_files/Cases/GTrivia/Case-GTrivia-06.png',
      '/portfolio_files/Cases/GTrivia/Case-GTrivia-07.png',
      '/portfolio_files/Cases/GTrivia/Case-GTrivia-08.png',
    ],
  },
  {
    id: 'avinext',
    titleKey: 'project.avinext',
    descKey: 'project.avinext.desc',
    category: 'Graphic Design',
    gradient: 'from-orange-500 via-orange-400 to-amber-300',
    thumbnail: '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case_Cover copy.png',
    role: 'Brand Designer',
    year: '2024',
    images: [
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-02.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-03.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-04.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-05.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-06.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-07.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-08.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-09.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-10.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-11.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-12.png',
      '/portfolio_files/Cases/Avinext/Avinext Branding Guidelines/Avinext Case-13.png',
      '/portfolio_files/Cases/Avinext/Avinext Website Concept/Avinext Case_Web-1.png',
      '/portfolio_files/Cases/Avinext/Avinext Website Concept/Avinext Case_Web-2.png',
    ],
  },
  {
    id: 'artthree',
    titleKey: 'project.artthree',
    descKey: 'project.artthree.desc',
    category: 'Art / Illustration',
    gradient: 'from-yellow-500 via-yellow-400 to-amber-300',
    thumbnail: '/portfolio_files/Cases/Art-Three/Case-Art_Cover.png',
    role: 'Illustrator / Artist',
    year: '2025',
    images: [
      '/portfolio_files/Cases/Art-Three/Case-Art-02.png',
      '/portfolio_files/Cases/Art-Three/Case-Art-03.png',
      '/portfolio_files/Cases/Art-Three/Case-Art-04.png',
      '/portfolio_files/Cases/Art-Three/Case-Art-05.png',
      '/portfolio_files/Cases/Art-Three/Case-Art-06.png',
      '/portfolio_files/Cases/Art-Three/Case-Art-07.png',
      '/portfolio_files/Cases/Art-Three/Case-Art-08.png',
      '/portfolio_files/Cases/Art-Three/Case-Art-09.png',
      '/portfolio_files/Cases/Art-Three/Case-Art-10.png',
      '/portfolio_files/Cases/Art-Three/Case-Art-11.png',
      '/portfolio_files/Cases/Art-Three/Case-Art-12.png',
    ],
  },
];

const categories = [
  { key: 'work.filter.all', value: 'All' },
  { key: 'work.filter.uiux', value: 'UI/UX Design' },
  { key: 'work.filter.graphic', value: 'Graphic Design' },
  { key: 'work.filter.branding', value: 'Branding' },
  { key: 'work.filter.art', value: 'Art / Illustration' },
];

function HeroText() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [circleRadius, setCircleRadius] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (isHovering) {
      setCircleRadius(120);
    } else {
      setCircleRadius(0);
    }
  }, [isHovering]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      ref={textRef}
      className="relative inline-block cursor-crosshair mb-4 w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] text-[#1C1C1C]">
        GRAPHIC &<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 animate-shimmer italic font-serif pr-4 -mr-4" style={{ backgroundSize: '200% auto' }}>UI/UX</span> DESIGN.
      </h1>

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          clipPath: `circle(${circleRadius}px at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
        transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] text-white" style={{ textShadow: '0 0 2px rgba(255,255,255,0.8)' }}>
          GRAPHIC &<br />
          <span className="italic font-serif text-white pr-4 -mr-4">UI/UX</span> DESIGN.
        </h1>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const { t, lang, setLang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#F9F9F8] text-[#1C1C1C] selection:bg-[#E5E5E5] font-sans">
      
      {/* Detail View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#F9F9F8] overflow-y-auto"
          >
            <div className="sticky top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference text-white">
              <button 
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 font-medium hover:opacity-60 transition-opacity"
              >
                <ArrowLeft size={20} />
                {t('detail.back')}
              </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 pb-32 -mt-24">
              {/* Gradient mood header instead of duplicate image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl mb-16 bg-gradient-to-br ${selectedProject.gradient}`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                <div className="lg:col-span-4">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">{t(selectedProject.titleKey)}</h1>
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t('detail.services')}</h4>
                      <p className="font-medium text-lg">{selectedProject.category}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t('detail.role')}</h4>
                      <p className="font-medium text-lg">{selectedProject.role}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{t('detail.year')}</h4>
                      <p className="font-medium text-lg">{selectedProject.year}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 lg:pt-2">
                  <h3 className="text-2xl md:text-3xl font-light leading-relaxed text-gray-600">
                    {t(selectedProject.descKey)}
                  </h3>
                </div>
              </div>

              <div className="space-y-8 md:space-y-12">
                {selectedProject.images.map((img, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    key={idx}
                    className="w-full bg-gray-100 rounded-2xl overflow-hidden"
                  >
                    <img src={img} alt={`${t(selectedProject.titleKey)} detail ${idx + 1}`} className="w-full h-auto" />
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-32 text-center">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1C1C1C] text-white hover:scale-105 transition-transform"
                >
                  <ArrowLeft size={24} />
                </button>
                <p className="mt-4 font-medium text-gray-500">{t('detail.back_portfolio')}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl font-bold tracking-tight"
        >
          ALENNA©
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6 text-sm font-medium"
        >
          <a href="#work" className="hover:opacity-60 transition-opacity hidden md:block">{t('nav.work')}</a>
          <a href="#about" className="hover:opacity-60 transition-opacity hidden md:block">{t('nav.about')}</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">{t('nav.contact')}</a>
          
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
            className="ml-2 px-3 py-1 rounded-full border border-white/30 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-all"
          >
            {lang === 'en' ? 'RU' : 'EN'}
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-12">
        <div className="max-w-6xl mx-auto w-full mt-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <h2 className="text-lg md:text-xl font-medium text-gray-500 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
              {t('hero.available')}
            </h2>
          </motion.div>
          <HeroText />
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-auto flex justify-between items-end pb-8"
        >
          <p className="max-w-sm text-gray-500 text-sm md:text-base font-medium">
            {t('hero.tagline')}
          </p>
          <div className="hidden md:block">
            <svg className="w-12 h-12 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
              <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              <text fontSize="11" fontWeight="bold" className="tracking-widest uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  {t('hero.scroll')}
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 px-6 md:px-10 bg-white rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter whitespace-pre-line">{t('work.title')}</h2>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.value 
                      ? 'bg-[#1C1C1C] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t(cat.key)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-100">
                    <img 
                      src={project.thumbnail}
                      alt={t(project.titleKey)}
                      className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight size={24} className="text-black" />
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">{t(project.titleKey)}</h3>
                      <p className="text-gray-500 font-medium">{project.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="about" className="py-32 px-6 md:px-10 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">{t('about.title')}</h2>
              <p className="text-xl text-gray-400 max-w-md font-light leading-relaxed">
                {t('about.subtitle')}
              </p>
            </div>
            <div className="grid gap-8">
              <div className="p-8 rounded-3xl bg-[#2A2A2A] border border-white/5 transition-colors hover:bg-[#333333]">
                <LayoutGrid className="w-8 h-8 mb-6 text-gray-300" />
                <h3 className="text-2xl font-semibold mb-3">{t('about.uiux_title')}</h3>
                <p className="text-gray-400 leading-relaxed">{t('about.uiux_desc')}</p>
              </div>
              <div className="p-8 rounded-3xl bg-[#2A2A2A] border border-white/5 transition-colors hover:bg-[#333333]">
                <Palette className="w-8 h-8 mb-6 text-gray-300" />
                <h3 className="text-2xl font-semibold mb-3">{t('about.graphic_title')}</h3>
                <p className="text-gray-400 leading-relaxed">{t('about.graphic_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-10 bg-[#F9F9F8]">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-12"
          >
            {t('contact.title')}
            <span className="italic font-serif text-gray-500">{t('contact.title_accent')}</span>
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:green.projecto@yandex.ru" className="inline-flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black hover:scale-105 transition-all">
              <Mail size={20} />
              {t('contact.email')}
            </a>
            <a href="https://t.me/productgal" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-[#1C1C1C] border border-gray-200 shadow-sm px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 hover:scale-105 transition-all">
              <Send size={20} />
              {t('contact.telegram')}
            </a>
          </div>

          <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-sm font-medium text-gray-500">
            <p>© {new Date().getFullYear()} Alenna. {t('contact.footer')}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="mailto:green.projecto@yandex.ru" className="hover:text-black transition-colors">green.projecto@yandex.ru</a>
              <a href="https://t.me/productgal" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">@productgal</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}