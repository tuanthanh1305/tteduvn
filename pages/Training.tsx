
import React, { useState } from 'react';
import { Search, BookOpen, Clock, Users, GraduationCap, ChevronRight, Award, Gift } from 'lucide-react';
import { COURSES, GIFT_LINK } from '../constants';
import { CourseCategory } from '../types';
import { useApp } from '../App';

const Training: React.FC = () => {
  const { lang, theme } = useApp();
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = COURSES.filter(course => 
    (activeCategory === 'All' || course.category === activeCategory) &&
    (course.title[lang].toLowerCase().includes(searchTerm.toLowerCase()) || 
     course.description[lang].toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className={`pt-32 pb-24 min-h-screen ${theme === 'dark' ? 'bg-slate-900' : 'bg-[#f8fafc]'} bg-grid`}>
      <div className="container mx-auto px-6">
        <div className="mb-16 space-y-4">
          <div className="flex items-center space-x-2 text-red-600 font-black text-xs uppercase tracking-widest">
            <Gift className="w-5 h-5 animate-bounce" />
            <span>{lang === 'vi' ? 'LÌ XÌ TRI THỨC TẾT BÍNH NGỌ 2026' : 'LUNAR NEW YEAR KNOWLEDGE GIFT 2026'}</span>
          </div>
          <h1 className={`text-5xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            {lang === 'vi' ? 'Hệ thống Đào tạo' : 'Training System'}
          </h1>
          <p className={`font-medium max-w-2xl text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {lang === 'vi' 
              ? 'Nhằm phổ cập tri thức số, TT.EDU.VN gửi tặng ưu đãi MIỄN PHÍ toàn bộ khóa học cho cộng đồng nhân dịp Tết Bính Ngọ 2026.' 
              : 'To popularize digital knowledge, TT.EDU.VN is giving away ALL courses for FREE to the community for Year of the Horse 2026.'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="relative flex-1 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text" 
              placeholder={lang === 'vi' ? 'Bạn muốn học gì hôm nay?' : 'What do you want to learn today?'} 
              className={`w-full pl-16 pr-8 py-5 border rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-600/5 shadow-sm transition-all font-medium ${
                theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-100 text-slate-900'
              }`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveCategory('All')}
              className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${activeCategory === 'All' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : theme === 'dark' ? 'bg-slate-800 text-slate-400 border border-slate-700' : 'bg-white text-slate-500 border border-slate-100'}`}
            >
              {lang === 'vi' ? 'Tất cả' : 'All'}
            </button>
            {Object.values(CourseCategory).map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : theme === 'dark' ? 'bg-slate-800 text-slate-400 border border-slate-700' : 'bg-white text-slate-500 border border-slate-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div key={course.id} className={`rounded-[3rem] border overflow-hidden group flex flex-col hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 ${
              theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-sm'
            }`}>
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src={course.image} alt={course.title[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-md text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg border border-white">
                    {course.category}
                  </span>
                  <span className="px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg border border-red-500">
                    Lì xì 2026
                  </span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="px-4 py-2 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-xl">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <h3 className={`text-2xl font-black mb-5 group-hover:text-blue-600 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {course.title[lang]}
                </h3>
                <p className={`font-medium text-sm mb-8 leading-relaxed flex-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {course.description[lang]}
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className={`flex items-center text-sm font-bold p-3 rounded-2xl ${theme === 'dark' ? 'bg-slate-900 text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <span>{lang === 'vi' ? 'Lứa tuổi' : 'Audience'}: {course.targetAudience[lang]}</span>
                  </div>
                  <div className={`flex items-center text-sm font-bold p-3 rounded-2xl ${theme === 'dark' ? 'bg-slate-900 text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span>{lang === 'vi' ? 'Thời gian' : 'Duration'}: {course.duration[lang]}</span>
                  </div>
                </div>

                <div className={`flex items-center justify-between pt-8 border-t ${theme === 'dark' ? 'border-slate-700' : 'border-slate-100'}`}>
                  <div className="flex flex-col">
                    {course.originalFee && (
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black line-through">
                        Giá gốc: {course.originalFee}
                      </span>
                    )}
                    <span className={`text-2xl font-black text-red-600`}>{course.fee}</span>
                  </div>
                  <a href={GIFT_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-red-600/20 flex items-center group/btn active:scale-95">
                    {lang === 'vi' ? 'Nhận Lì Xì' : 'Claim Gift'} <ChevronRight className="ml-1 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <div className="text-6xl">🔍</div>
            <p className="text-slate-400 font-bold">
              {lang === 'vi' ? 'Không tìm thấy khóa học phù hợp. Thử từ khóa khác nhé!' : 'No courses found. Try a different search term!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Training;
