
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, LogIn, Moon, Sun, Globe, ExternalLink } from 'lucide-react';
import { useApp } from '../App';
import { TRANSLATIONS, COMMUNITY_URL } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, theme, toggleTheme } = useApp();
  const t = TRANSLATIONS[lang];
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const navLinks = [
    { name: t.navHome, path: '/' },
    { name: t.navTraining, path: '/training' },
    { name: t.navServices, path: '/services' },
    { name: t.navCommunity, path: COMMUNITY_URL, isExternal: true },
    { name: t.navAbout, path: '/about' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? (theme === 'dark' ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-100') + ' backdrop-blur-xl py-3 shadow-xl border-b' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className={`text-xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>TT Center</span>
              <p className="text-[9px] text-blue-600 uppercase tracking-[0.2em] font-black leading-none mt-1">International</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            <nav className="flex items-center space-x-7">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold transition-all flex items-center ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}
                  >
                    {link.name} <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-50" />
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-bold transition-all ${
                      location.pathname === link.path 
                        ? 'text-blue-600' 
                        : (theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-blue-600')
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            <div className="flex items-center space-x-5 border-l border-slate-200 dark:border-slate-800 pl-8">
              <button onClick={toggleTheme} className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform">
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} 
                className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest border border-transparent hover:border-blue-500 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>{lang}</span>
              </button>
              <Link to="/auth" className="flex items-center space-x-2 px-6 py-3 bg-slate-900 dark:bg-blue-600 hover:scale-105 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20">
                <LogIn className="w-4 h-4" />
                <span>{t.login}</span>
              </Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="xl:hidden flex items-center space-x-4">
             <button onClick={toggleTheme} className={`p-2 rounded-xl ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
             </button>
             <button className={`p-2 rounded-xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`} onClick={() => setIsOpen(true)}>
                <Menu className="w-7 h-7" />
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
         <div className={`absolute top-0 right-0 bottom-0 w-[300px] shadow-2xl transition-transform duration-500 p-8 flex flex-col ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between mb-12">
               <div className="flex items-center space-x-2">
                  <div className="bg-blue-600 p-1.5 rounded-lg">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-black text-lg">TT Center</span>
               </div>
               <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800"><X className="w-6 h-6" /></button>
            </div>

            <nav className="flex-1 flex flex-col space-y-4">
               {navLinks.map((link) => (
                 link.isExternal ? (
                   <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className={`px-6 py-4 rounded-2xl text-lg font-black transition-all flex items-center justify-between ${theme === 'dark' ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}
                   >
                     <span>{link.name}</span> <ExternalLink className="w-5 h-5" />
                   </a>
                 ) : (
                   <Link
                     key={link.path}
                     to={link.path}
                     onClick={() => setIsOpen(false)}
                     className={`px-6 py-4 rounded-2xl text-lg font-black transition-all ${
                       location.pathname === link.path 
                         ? 'bg-blue-600 text-white shadow-xl' 
                         : (theme === 'dark' ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600')
                     }`}
                   >
                     {link.name}
                   </Link>
                 )
               ))}
            </nav>

            <div className="pt-8 space-y-4 border-t border-slate-100 dark:border-slate-800">
               <button 
                  onClick={() => { setLang(lang === 'vi' ? 'en' : 'vi'); setIsOpen(false); }} 
                  className="w-full flex items-center justify-center space-x-3 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl font-black uppercase text-xs tracking-widest"
                >
                  <Globe className="w-5 h-5" />
                  <span>{lang === 'vi' ? 'English' : 'Tiếng Việt'}</span>
               </button>
               <Link 
                  to="/auth" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full py-5 bg-blue-600 text-white text-center rounded-2xl font-black text-sm tracking-widest flex items-center justify-center space-x-2 shadow-2xl shadow-blue-600/30"
               >
                  <LogIn className="w-5 h-5" />
                  <span>{t.login}</span>
               </Link>
            </div>
         </div>
      </div>
    </>
  );
};

export default Header;
