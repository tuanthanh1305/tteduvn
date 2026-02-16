
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useApp } from '../App';

const Blog: React.FC = () => {
  const { blogs, lang, theme } = useApp();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-grid">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-black tracking-tight mb-16 text-center">Tin tức & Tri thức số</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map(blog => (
            <article key={blog.id} className={`rounded-[3rem] border overflow-hidden flex flex-col group ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-sm'}`}>
              <div className="aspect-video overflow-hidden">
                <img src={blog.image} alt={blog.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-10 flex-1 flex flex-col space-y-6">
                <div className="flex items-center space-x-4 text-xs font-black text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-2" /> {blog.date}</span>
                  <span className="flex items-center"><User className="w-3.5 h-3.5 mr-2" /> {blog.author}</span>
                </div>
                <h3 className="text-2xl font-black leading-tight group-hover:text-blue-600 transition-colors">{blog.title[lang]}</h3>
                <p className="text-sm font-medium opacity-60 flex-1">{blog.excerpt[lang]}</p>
                <button className="flex items-center text-blue-600 font-black text-sm group-hover:translate-x-2 transition-transform">
                  Xem chi tiết <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
