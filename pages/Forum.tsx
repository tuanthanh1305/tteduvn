
import React, { useState } from 'react';
import { Search, Plus, MessageCircle, Eye, Clock, ChevronRight, Users, Calendar, Heart, Share2, Facebook, ExternalLink } from 'lucide-react';
import { FORUM_THREADS, TRANSLATIONS, COMMUNITY_URL } from '../constants';
import { useApp } from '../App';

const Forum: React.FC = () => {
  const { lang, theme } = useApp();
  const [activeCat, setActiveCat] = useState('Tất cả');
  const t = TRANSLATIONS[lang];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-grid">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="space-y-4 text-center lg:text-left">
             <div className="inline-flex items-center space-x-2 text-blue-600 font-black text-xs uppercase tracking-[0.2em]">
                <Users className="w-5 h-5" /> <span>Hệ sinh thái Tri thức số</span>
             </div>
             <h1 className="text-5xl font-black tracking-tight leading-tight">Cộng đồng TT Center</h1>
             <p className={`text-lg font-medium opacity-60 max-w-xl mx-auto lg:mx-0`}>Nơi hơn 12,000 chuyên gia và học viên cùng thảo luận, chia sẻ và kiến tạo tương lai số.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 self-center lg:self-center">
             <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-2xl font-black flex items-center justify-center shadow-xl shadow-blue-500/20 active:scale-95 transition-all">
               <Facebook className="w-5 h-5 mr-3" /> Tham gia Nhóm Facebook
             </a>
             <button className={`px-10 py-5 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'} border border-slate-100 dark:border-slate-700 rounded-2xl font-black flex items-center justify-center shadow-lg active:scale-95 transition-all`}>
               <Calendar className="w-5 h-5 mr-3" /> Xem sự kiện sắp tới
             </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-10 order-2 lg:order-1">
            <div className={`p-8 rounded-[3rem] border shadow-sm space-y-8 ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
              <h3 className="text-xl font-black">Chuyên mục thảo luận</h3>
              <nav className="flex flex-col space-y-2">
                {['Tất cả', 'AI & Machine Learning', 'Robotics', 'Blockchain', 'Hướng nghiệp', 'Sự kiện'].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`flex items-center justify-between px-6 py-4 rounded-2xl font-black text-sm transition-all ${activeCat === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900'}`}
                  >
                    <span>{cat}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeCat === cat ? 'rotate-90' : ''}`} />
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-gradient-to-br from-[#1877F2] to-[#166fe5] p-10 rounded-[3rem] text-white space-y-6 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
               <h4 className="text-2xl font-black tracking-tight">Cộng đồng trên Facebook</h4>
               <p className="text-blue-50 text-xs font-medium opacity-80 leading-relaxed italic">"Đây là nơi chúng tôi cập nhật các thảo luận sôi nổi nhất hàng ngày."</p>
               <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 pt-4 hover:translate-x-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center font-black"><Facebook className="w-6 h-6" /></div>
                  <div>
                    <p className="text-sm font-black">Gia nhập ngay</p>
                    <p className="text-[10px] font-bold uppercase opacity-60">Facebook Group Official</p>
                  </div>
               </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8 order-1 lg:order-2">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Tìm kiếm chủ đề thảo luận..." 
                className={`w-full border rounded-[2.5rem] pl-16 pr-8 py-6 text-slate-900 outline-none transition-all font-bold shadow-sm ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500' : 'bg-white border-slate-100 focus:border-blue-500'}`}
              />
            </div>

            <div className="grid gap-6">
              {FORUM_THREADS.map(thread => (
                <div key={thread.id} className={`group p-8 lg:p-10 rounded-[3.5rem] border transition-all duration-500 flex flex-col md:flex-row items-center gap-10 ${theme === 'dark' ? 'bg-slate-800 border-slate-700 hover:bg-slate-900' : 'bg-white border-slate-100 hover:shadow-2xl'}`}>
                  <div className="flex-1 space-y-4 w-full">
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-1.5 bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-xl">
                        {thread.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold flex items-center">
                        <Clock className="w-4 h-4 mr-2" /> {thread.lastUpdate}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors cursor-pointer leading-tight">
                      {thread.title}
                    </h3>
                    <div className="flex items-center justify-between">
                       <p className="text-sm font-bold text-slate-400 flex items-center">
                          <Users className="w-4 h-4 mr-2" /> <span className="text-slate-900 dark:text-slate-300">{thread.author}</span>
                       </p>
                       <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-slate-400 hover:text-red-500"><Heart className="w-5 h-5" /></button>
                          <button className="p-2 text-slate-400 hover:text-blue-500"><Share2 className="w-5 h-5" /></button>
                       </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-12 shrink-0 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-700 pt-8 md:pt-0 md:pl-12 w-full md:w-auto justify-around">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 text-slate-600 dark:text-slate-300 mb-1">
                        <MessageCircle className="w-6 h-6" />
                        <span className="text-xl font-black">{thread.replies}</span>
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phản hồi</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 text-slate-600 dark:text-slate-300 mb-1">
                        <Eye className="w-6 h-6" />
                        <span className="text-xl font-black">{thread.views}</span>
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Lượt xem</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 flex justify-center">
              <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="px-12 py-5 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-sm text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all flex items-center active:scale-95 group">
                Xem thêm trên Facebook <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Forum;
