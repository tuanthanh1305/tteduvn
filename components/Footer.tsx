
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin, Cpu, ExternalLink } from 'lucide-react';
import { useApp } from '../App';
import { TRANSLATIONS, COMMUNITY_URL, GIFT_LINK } from '../constants';

const Footer: React.FC = () => {
  const { lang, theme } = useApp();
  const t = TRANSLATIONS[lang];

  return (
    <footer className={`border-t ${theme === 'dark' ? 'bg-[#0b0f19] border-slate-800' : 'bg-[#fcfdfe] border-slate-100'} pt-24 pb-12 overflow-hidden`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Logo & Info */}
          <div className="space-y-8 col-span-1 sm:col-span-2 lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 group w-fit">
              <div className="bg-blue-600 p-2.5 rounded-2xl shadow-xl group-hover:rotate-12 transition-transform duration-500">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className={`text-2xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>TT Center</span>
                <p className="text-[10px] text-blue-600 uppercase tracking-[0.2em] font-black leading-none mt-1">International Hub</p>
              </div>
            </Link>
            <p className={`text-sm leading-relaxed font-medium max-w-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              TT.EDU.VN hân hạnh là cầu nối đưa tri thức công nghệ hiện đại đến gần hơn với thế hệ trẻ và doanh nghiệp Việt Nam.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Youtube, Linkedin].map((Icon, idx) => (
                <a key={idx} href={idx === 0 ? GIFT_LINK : "#"} target={idx === 0 ? "_blank" : undefined} className={`p-3 rounded-2xl transition-all duration-300 ${theme === 'dark' ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600' : 'bg-white border border-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white hover:shadow-lg'}`}>
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links - Training */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className={`font-black text-xs uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-slate-300' : 'text-slate-900'}`}>
              Đào tạo
            </h4>
            <ul className={`space-y-4 text-sm font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              {['Lập trình K12', 'Robotics & IoT', 'AI & Blockchain', 'Data Science'].map((item, idx) => (
                <li key={idx}>
                  <Link to="/training" className="hover:text-blue-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Links - Ecosystem */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className={`font-black text-xs uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-slate-300' : 'text-slate-900'}`}>
              Hệ sinh thái
            </h4>
            <ul className={`space-y-4 text-sm font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              <li><a href={GIFT_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center group">Facebook <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></a></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">Giới thiệu</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Giải pháp số</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600 transition-colors">Tin tức</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className={`font-black text-xs uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-slate-300' : 'text-slate-900'}`}>
              Liên hệ
            </h4>
            <div className={`p-6 rounded-[2.5rem] border ${theme === 'dark' ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-100 shadow-sm'}`}>
              <ul className={`space-y-5 text-sm font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                <li className="flex items-start space-x-4 group">
                  <div className="p-2.5 bg-blue-600/10 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-tight pt-1">Hà Nội & TP. Hồ Chí Minh</span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <a href="tel:0789109941" className="flex items-center space-x-4">
                    <div className="p-2.5 bg-blue-600/10 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>0789109941</span>
                  </a>
                </li>
                <li className="flex items-center space-x-4 group">
                  <a href="mailto:contact@tt.edu.vn" className="flex items-center space-x-4">
                    <div className="p-2.5 bg-blue-600/10 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="break-all">contact@tt.edu.vn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'} pt-12`}>
          <div className="flex flex-col xl:flex-row justify-between items-center gap-10">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] text-center xl:text-left">
              &copy; {new Date().getFullYear()} TT International Digital Knowledge Center.
            </p>
            <div className={`px-6 sm:px-10 py-6 rounded-[2.5rem] border w-full xl:w-auto ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-blue-50/20 border-blue-100/30'} backdrop-blur-sm`}>
              <div className="text-[9px] sm:text-[10px] text-blue-700/80 leading-relaxed uppercase tracking-[0.1em] font-bold text-center xl:text-left">
                <p>TT.EDU.VN được cấp phép ngày 19/9/2024 bởi VNNIC - Bộ Khoa học và Công nghệ.</p>
                <p className="mt-1">Phát triển bởi <span className="text-blue-900 font-black">Trần Tuấn Thành</span> và các Cộng sự.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
