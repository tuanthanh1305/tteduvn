
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Brain, Cpu, Database, 
  ShieldCheck, Rocket, Zap, Users, 
  Globe, Laptop, Heart, Star, 
  CheckCircle2, Play, Users2, ExternalLink, Gift, X, Info, BadgeCheck, Scale, Award
} from 'lucide-react';
import { useApp } from '../App';
import { TRANSLATIONS, COMMUNITY_URL, GIFT_LINK } from '../constants';
import { TeamMember } from '../types';

const Home: React.FC = () => {
  const { lang, theme, courses, team, siteSettings } = useApp();
  const t = TRANSLATIONS[lang];
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <div className={`absolute top-[-20%] right-[-10%] w-[70%] h-[70%] ${theme === 'dark' ? 'bg-blue-900/10' : 'bg-blue-100/40'} rounded-full blur-[150px] opacity-60 animate-pulse`}></div>
          <div className={`absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] ${theme === 'dark' ? 'bg-purple-900/10' : 'bg-purple-100/30'} rounded-full blur-[150px] opacity-50 animate-pulse delay-1000`}></div>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left animate-in slide-in-from-left duration-700">
            
            {/* Legal & Attribution Info */}
            <div className="space-y-4 mb-8">
              <div className={`inline-flex items-center px-4 py-2 bg-blue-600/5 border border-blue-600/10 rounded-2xl text-[10px] font-bold text-blue-600 uppercase tracking-wider mx-auto lg:mx-0 shadow-sm`}>
                <Scale className="w-3.5 h-3.5 mr-2 shrink-0" />
                <span>TT.EDU.VN được cấp phép ngày 19/9/2024 bởi VNNIC - Bộ Khoa học và Công nghệ</span>
              </div>
              <div className={`text-[12px] font-bold opacity-80 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                <div className="flex items-center">
                  <Info className="w-4 h-4 mr-2 shrink-0 text-blue-600" />
                  Phát triển và định hướng bởi
                </div>
                <div className="flex items-center">
                  <a href={GIFT_LINK} target="_blank" className="mx-1 text-blue-600 hover:underline font-black">Trần Tuấn Thành</a> 
                  và các Cộng sự tâm huyết.
                </div>
              </div>
            </div>

            {/* Founder Highlight Emphasis */}
            <div className={`p-6 rounded-[2.5rem] border-2 border-blue-600/20 bg-blue-600/5 flex items-start space-x-5 max-w-2xl mx-auto lg:mx-0 shadow-xl shadow-blue-500/5 transform transition-all hover:scale-[1.02]`}>
               <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shrink-0">
                  <Award className="w-6 h-6" />
               </div>
               <p className="text-sm font-black text-blue-700 dark:text-blue-400 leading-relaxed text-left">
                 Ông Trần Tuấn Thành là Giảng viên đầu tiên theo chứng chỉ chức danh nghề nghiệp của Bộ Giáo dục & Đào tạo tại đơn vị chuyên trách về Blockchain và Trí tuệ nhân tạo ở Việt Nam.
               </p>
            </div>

            <div className="inline-flex items-center px-5 py-2 bg-red-600/10 border border-red-500/20 rounded-full text-red-600 text-[11px] font-black tracking-[0.2em] uppercase mx-auto lg:mx-0">
              <Gift className="w-4 h-4 mr-2 animate-bounce" />
              Lì xì tri thức Miễn phí toàn bộ khóa học Tết Bính Ngọ 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
              {siteSettings.heroTitle[lang].split(' ').slice(0, 2).join(' ')} <br />
              <span className="text-gradient">
                {siteSettings.heroTitle[lang].split(' ').slice(2).join(' ')}
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              TT.EDU.VN hân hạnh là cầu nối đưa tri thức Công nghệ số tiên tiến (AI, Robotics, Blockchain, ... ) đến gần hơn với thế hệ trẻ và doanh nghiệp Việt Nam.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href={GIFT_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-black transition-all flex items-center justify-center shadow-2xl shadow-red-500/30 active:scale-95 group">
                {t.registerNow} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={GIFT_LINK} target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto px-10 py-5 ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-100 text-slate-900'} border-2 rounded-2xl font-black transition-all flex items-center justify-center shadow-lg active:scale-95 group`}>
                {t.learnMore} <ExternalLink className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-in zoom-in duration-1000">
            <div className={`relative z-10 p-8 glass rounded-[4rem] shadow-2xl border ${theme === 'dark' ? 'border-slate-800' : 'border-white/50'}`}>
              <div className="rounded-[3rem] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop" className="w-full h-[550px] object-cover" alt="Future Technology" />
              </div>
              <div className="absolute -top-6 -right-6 p-6 bg-blue-600 rounded-3xl shadow-2xl animate-bounce text-white">
                <Brain className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className={`py-32 border-y ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-[#f8fafc] border-slate-100'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.trainingHeading}</h2>
              <p className="text-lg text-blue-600 font-bold">"{t.trainingSubheading}"</p>
            </div>
            <a href={GIFT_LINK} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-red-600 text-white rounded-2xl font-black text-sm shadow-xl active:scale-95 transition-all">
              Tất cả khóa học 0đ
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.slice(0, 6).map(course => (
              <div key={course.id} className={`rounded-[3rem] border overflow-hidden group flex flex-col hover:shadow-2xl transition-all duration-500 ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-sm'}`}>
                <div className="aspect-[16/10] relative overflow-hidden">
                   <img src={course.image} alt={course.title[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black px-4 py-2 rounded-xl">MIỄN PHÍ</div>
                </div>
                <div className="p-10 space-y-5 flex-1 flex flex-col">
                   <h3 className="text-2xl font-black line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">{course.title[lang]}</h3>
                   <p className="text-sm font-medium opacity-60 flex-1 line-clamp-2">{course.description[lang]}</p>
                   <div className="flex items-center justify-between pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 line-through">{course.originalFee}</span>
                        <span className="text-xl font-black text-red-600">0 VNĐ</span>
                      </div>
                      <a href={GIFT_LINK} target="_blank" rel="noopener noreferrer" className={`p-4 rounded-2xl transition-all ${theme === 'dark' ? 'bg-slate-700 hover:bg-red-600 hover:text-white' : 'bg-slate-50 hover:bg-red-600 hover:text-white'}`}>
                        <ArrowRight className="w-6 h-6" />
                      </a>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.teamHeading}</h2>
            <p className="text-lg font-medium opacity-60">{t.teamSubheading}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
             {team.slice(0, 3).map((m, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedMember(m)}
                  className={`p-10 rounded-[4rem] text-center border relative transition-all group hover:scale-[1.05] cursor-pointer ${theme === 'dark' ? 'bg-slate-800 border-slate-700 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)]' : 'bg-white border-slate-100 shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]'}`}
                >
                   <div className="relative w-40 h-40 mx-auto mb-8">
                     <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-6 scale-95 opacity-20 group-hover:rotate-12 group-hover:scale-105 transition-all"></div>
                     <img src={m.image} alt={m.name} className="relative w-full h-full rounded-[2.5rem] object-cover shadow-2xl border-4 border-white dark:border-slate-700" />
                     <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <Info className="w-5 h-5" />
                     </div>
                   </div>
                   <h4 className="text-3xl font-black">{m.name}</h4>
                   <p className="text-blue-600 font-black uppercase text-[10px] tracking-widest mt-2 mb-4">{m.role[lang]}</p>
                   <button className="text-xs font-bold opacity-40 group-hover:opacity-100 group-hover:text-blue-600 transition-all flex items-center justify-center mx-auto">
                     Xem thông tin chi tiết <ArrowRight className="ml-1 w-3.5 h-3.5" />
                   </button>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
          <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl animate-in fade-in duration-300" onClick={() => setSelectedMember(null)}></div>
          <div className={`relative w-full max-w-5xl rounded-[4rem] overflow-hidden shadow-2xl animate-in zoom-in duration-500 flex flex-col lg:flex-row ${theme === 'dark' ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-100'}`}>
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-8 right-8 z-20 p-3 bg-slate-100 dark:bg-slate-800 hover:bg-red-600 hover:text-white rounded-full transition-all shadow-lg active:scale-95"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="lg:w-2/5 relative h-[400px] lg:h-auto">
               <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent lg:hidden"></div>
               <div className="absolute bottom-10 left-10 lg:hidden">
                  <h3 className="text-4xl font-black text-white">{selectedMember.name}</h3>
                  <p className="text-blue-400 font-black uppercase text-[10px] tracking-widest">{selectedMember.role[lang]}</p>
               </div>
            </div>

            <div className="lg:w-3/5 p-8 lg:p-16 max-h-[80vh] lg:max-h-none overflow-y-auto">
               <div className="hidden lg:block mb-8">
                  <div className="inline-flex items-center px-4 py-1.5 bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                    <BadgeCheck className="w-4 h-4 mr-2" /> CHUYÊN GIA HỆ THỐNG
                  </div>
                  <h3 className="text-5xl font-black tracking-tight mb-4">{selectedMember.name}</h3>
                  <p className="text-blue-600 font-black uppercase text-xs tracking-[0.2em]">{selectedMember.role[lang]}</p>
               </div>
               
               <div className="space-y-8">
                  <div className={`p-8 rounded-[2.5rem] border font-medium leading-relaxed whitespace-pre-line ${theme === 'dark' ? 'bg-slate-800/50 border-slate-700 text-slate-300' : 'bg-blue-50/50 border-blue-100 text-slate-700'}`}>
                    {selectedMember.bio[lang]}
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                     <div className={`p-6 rounded-3xl border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                        <h4 className="font-black text-sm mb-2 flex items-center text-blue-600"><Users2 className="w-4 h-4 mr-2" /> Tầm ảnh hưởng</h4>
                        <p className="text-xs font-bold opacity-60">Lan tỏa tri thức đến hàng ngàn học viên.</p>
                     </div>
                     <div className={`p-6 rounded-3xl border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                        <h4 className="font-black text-sm mb-2 flex items-center text-blue-600"><Globe className="w-4 h-4 mr-2" /> Kết nối quốc tế</h4>
                        <p className="text-xs font-bold opacity-60">Chuẩn mực đào tạo Startup quốc tế.</p>
                     </div>
                  </div>
                  
                  <a href={GIFT_LINK} target="_blank" className="w-full py-5 bg-slate-900 dark:bg-blue-600 text-white font-black rounded-2xl shadow-xl active:scale-95 transition-all text-center flex items-center justify-center space-x-2">
                    <ExternalLink className="w-5 h-5" /> <span>Kết nối Chuyên gia qua Facebook</span>
                  </a>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
