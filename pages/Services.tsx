
import React from 'react';
import { 
  Send, CheckCircle2, Zap, Rocket, 
  Building, ShieldCheck, Globe, Users, 
  Brain, Cpu, Database, Laptop, Lock, Network, ExternalLink
} from 'lucide-react';
import { useApp } from '../App';
import { TRANSLATIONS, GIFT_LINK } from '../constants';

const Services: React.FC = () => {
  const { lang, theme } = useApp();
  const t = TRANSLATIONS[lang];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-grid">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center px-6 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-600 text-[11px] font-black uppercase tracking-widest">
            <Globe className="w-4 h-4 mr-2" /> International Tech Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
            {lang === 'vi' ? 'Giải pháp AI &' : 'AI & Blockchain'} <br /> 
            <span className="text-gradient">{lang === 'vi' ? 'Công nghệ Tri thức số' : 'Digital Knowledge Tech'}</span>
          </h1>
          <p className={`text-lg md:text-xl font-medium leading-relaxed max-w-2xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Chúng tôi hân hạnh đồng hành cùng các tổ chức trong việc triển khai các hệ thống AI nội bộ, 
            nền tảng Blockchain và giải pháp chuyển đổi số chuyên sâu, an toàn và hiệu quả.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-32">
          {[
            { 
              title: lang === 'vi' ? 'AI Nội bộ (Offline/Local)' : 'Private & Local AI', 
              icon: Lock, 
              color: 'blue',
              desc: 'Triển khai mô hình ngôn ngữ lớn (LLM) trên hạ tầng mạng nội bộ, đảm bảo bảo mật dữ liệu tuyệt đối.',
              features: ['Private Chatbot & Assistant', 'Local Knowledge Base', 'Không phụ thuộc Internet']
            },
            { 
              title: lang === 'vi' ? 'Nền tảng AI Online' : 'AI Online Platforms', 
              icon: Globe, 
              color: 'indigo',
              desc: 'Xây dựng và tối ưu các hệ thống AI trên nền tảng Cloud phục vụ kinh doanh và vận hành.',
              features: ['AI SaaS Development', 'Hệ thống gợi ý thông minh', 'Tích hợp API đa nền tảng']
            },
            { 
              title: lang === 'vi' ? 'Hệ sinh thái Blockchain' : 'Blockchain Ecosystem', 
              icon: Network, 
              color: 'purple',
              desc: 'Tư vấn và phát triển nền tảng Blockchain, Smart Contracts minh bạch cho các giao dịch số.',
              features: ['Xây dựng Web3 Apps', 'Smart Contract Auditing', 'Tokenization Solution']
            }
          ].map((cat, i) => (
            <div key={i} className={`p-10 lg:p-12 rounded-[3.5rem] border transition-all group hover:-translate-y-2 hover:shadow-2xl ${theme === 'dark' ? 'bg-slate-800 border-slate-700 shadow-xl shadow-slate-900/40' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'}`}>
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-600/10 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <cat.icon className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="text-2xl font-black mb-4">{cat.title}</h3>
              <p className="text-sm font-medium opacity-60 mb-8 leading-relaxed">{cat.desc}</p>
              <ul className="space-y-4 mb-10">
                {cat.features.map((f, j) => (
                  <li key={j} className="flex items-center text-sm font-bold opacity-80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={GIFT_LINK} target="_blank" className="w-full py-5 bg-slate-900 dark:bg-slate-700 hover:bg-blue-600 text-white font-black rounded-2xl transition-all shadow-xl active:scale-95 flex items-center justify-center space-x-2">
                <span>{lang === 'vi' ? 'Tìm hiểu giải pháp' : 'Request Proposal'}</span> <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Quy trình Phụng sự <br /> <span className="text-gradient">Chuyên nghiệp</span></h2>
              <p className={`text-lg font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Mỗi dự án đều được đội ngũ chuyên gia của chúng tôi nghiên cứu kỹ lưỡng và triển khai theo tiêu chuẩn Agile hiện đại.</p>
            </div>
            <div className="grid gap-8">
              {[
                { step: '01', title: 'Tiếp nhận & Khảo sát', desc: 'Lắng nghe và thấu hiểu bài toán cụ thể của khách hàng.' },
                { step: '02', title: 'Thiết kế Kiến trúc', desc: 'Đề xuất giải pháp công nghệ tối ưu về chi phí và hiệu năng.' },
                { step: '03', title: 'Phát triển & Tinh chỉnh', desc: 'Hiện thực hóa ý tưởng qua các giai đoạn kiểm thử nghiêm ngặt.' },
                { step: '04', title: 'Đào tạo & Chuyển giao', desc: 'Hỗ trợ kỹ thuật và đào tạo nhân sự vận hành hệ thống.' }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-6 sm:space-x-8 items-start group">
                  <div className="text-4xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors shrink-0">{item.step}</div>
                  <div className="pt-1">
                    <h4 className="text-xl font-black">{item.title}</h4>
                    <p className="text-sm font-medium opacity-60 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-10 lg:p-16 rounded-[4rem] border relative overflow-hidden ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]'}`}>
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-[100px]"></div>
             <h3 className="text-3xl font-black mb-10 relative z-10">{lang === 'vi' ? 'Liên hệ Tư vấn' : 'Contact Consultant'}</h3>
             <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">Tên tổ chức/Cá nhân</label>
                    <input type="text" className={`w-full border rounded-2xl px-6 py-4 outline-none transition-all font-bold ${theme === 'dark' ? 'bg-slate-900 border-slate-700 focus:border-blue-500' : 'bg-slate-50 border-slate-100 focus:border-blue-500'}`} placeholder="Tên của bạn" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">Số điện thoại</label>
                    <input type="text" className={`w-full border rounded-2xl px-6 py-4 outline-none transition-all font-bold ${theme === 'dark' ? 'bg-slate-900 border-slate-700 focus:border-blue-500' : 'bg-slate-50 border-slate-100 focus:border-blue-500'}`} placeholder="0789109941" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">Email</label>
                  <input type="email" className={`w-full border rounded-2xl px-6 py-4 outline-none transition-all font-bold ${theme === 'dark' ? 'bg-slate-900 border-slate-700 focus:border-blue-500' : 'bg-slate-50 border-slate-100 focus:border-blue-500'}`} placeholder="contact@tt.edu.vn" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">Vấn đề cần tư vấn</label>
                  <textarea rows={4} className={`w-full border rounded-2xl px-6 py-4 outline-none transition-all font-bold ${theme === 'dark' ? 'bg-slate-900 border-slate-700 focus:border-blue-500' : 'bg-slate-50 border-slate-100 focus:border-blue-500'}`} placeholder="Mô tả tóm tắt nhu cầu..."></textarea>
                </div>
                <a href={GIFT_LINK} target="_blank" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-[2rem] shadow-2xl shadow-blue-600/30 transition-all flex items-center justify-center group active:scale-95 text-center">
                  {lang === 'vi' ? 'Gửi lời nhắn qua Facebook' : 'Send via Facebook'} <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
