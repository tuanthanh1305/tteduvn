
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Training from './pages/Training';
import Services from './pages/Services';
import AdminDashboard from './pages/AdminDashboard';
import Auth from './pages/Auth';
import Forum from './pages/Forum';
import About from './pages/About';
import Blog from './pages/Blog';
import { Language, Theme, Course, TeamMember, Service, BlogPost, SiteSettings } from './types';
import { INITIAL_COURSES, INITIAL_TEAM, SERVICES as INITIAL_SERVICES, TRANSLATIONS } from './constants';

interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  // Dynamic Data
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  team: TeamMember[];
  setTeam: React.Dispatch<React.SetStateAction<TeamMember[]>>;
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  blogs: BlogPost[];
  setBlogs: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  siteSettings: SiteSettings;
  setSiteSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { theme } = useApp();
  const isMinimalPage = location.pathname.startsWith('/admin') || location.pathname === '/auth';

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0f172a] text-white' : 'bg-[#f8fafc] text-slate-800'}`}>
      {!isMinimalPage && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isMinimalPage && <Footer />}
    </div>
  );
};

function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [theme, setTheme] = useState<Theme>('light');

  // Load state from localStorage if available, otherwise use INITIAL values
  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('tt_courses');
    return saved ? JSON.parse(saved) : INITIAL_COURSES;
  });

  const [team, setTeam] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem('tt_team');
    return saved ? JSON.parse(saved) : INITIAL_TEAM;
  });

  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('tt_services');
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('tt_blogs');
    return saved ? JSON.parse(saved) : [
      {
        id: 'b1',
        title: { vi: 'AI trong kỷ nguyên tri thức số', en: 'AI in the Digital Knowledge Era' },
        excerpt: { vi: 'Hành trình làm chủ công nghệ không bắt đầu từ kỹ thuật, mà từ tư duy sẻ chia.', en: 'The journey to master technology starts not with skills, but with a sharing mindset.' },
        content: { vi: 'Nội dung chi tiết bài viết...', en: 'Detailed content...' },
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
        date: '2024-03-20',
        author: 'Trần Tuấn Thành',
        category: 'AI'
      }
    ];
  });

  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('tt_settings');
    return saved ? JSON.parse(saved) : {
      heroTitle: { vi: TRANSLATIONS.vi.heroTitle, en: TRANSLATIONS.en.heroTitle },
      heroDesc: { vi: TRANSLATIONS.vi.heroDesc, en: TRANSLATIONS.en.heroDesc },
      slogan: { vi: TRANSLATIONS.vi.trainingSubheading, en: TRANSLATIONS.en.trainingSubheading }
    };
  });

  // Persist state
  useEffect(() => { localStorage.setItem('tt_courses', JSON.stringify(courses)); }, [courses]);
  useEffect(() => { localStorage.setItem('tt_team', JSON.stringify(team)); }, [team]);
  useEffect(() => { localStorage.setItem('tt_services', JSON.stringify(services)); }, [services]);
  useEffect(() => { localStorage.setItem('tt_blogs', JSON.stringify(blogs)); }, [blogs]);
  useEffect(() => { localStorage.setItem('tt_settings', JSON.stringify(siteSettings)); }, [siteSettings]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <AppContext.Provider value={{ 
      lang, setLang, theme, toggleTheme,
      courses, setCourses,
      team, setTeam,
      services, setServices,
      blogs, setBlogs,
      siteSettings, setSiteSettings
    }}>
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training" element={<Training />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Forum />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
