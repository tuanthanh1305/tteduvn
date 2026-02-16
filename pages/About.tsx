
import React from 'react';
import { useApp } from '../App';
import { TRANSLATIONS } from '../constants';
import { Shield, Target, Award, BookOpen, Briefcase, GraduationCap, CheckCircle, BadgeCheck, Phone, Mail, Globe } from 'lucide-react';

const About: React.FC = () => {
  const { lang, theme, team } = useApp();
  const t = TRANSLATIONS[lang];
  const founder = team[0];

  return (
    <div className={`pt-32 pb-24 min-h-screen ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-8">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
            <Shield className="w-4 h-4 mr-2" /> HÀNH TRÌNH PHỤNG SỰ TRI THỨC
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Tâm huyết giáo dục & <br /> <span className="text-gradient">Sứ mệnh Chuyển đổi số</span>
          </h1>
          <p className={`text-lg font-medium leading-relaxed opacity-70`}>
            TT.EDU.VN (Trung tâm Tri thức số Quốc tế TT) là nơi hội tụ tinh hoa tri thức, 
            kết nối công nghệ hiện đại với tâm hồn giáo dục Việt, dẫn dắt bởi sự khiêm nhường và chuyên nghiệp.
          </p>
        </div>

        {/* Founder Professional Bio */}
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left: Sticky Profile */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] blur-xl opacity-20"></div>
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="relative rounded-[3rem] w-full aspect-square object-cover shadow-2xl transition-all duration-700 hover:scale-[1.02]" 
                />
                <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700">
                  <BadgeCheck className="w-12 h-12 text-blue-600" />
                </div>
              </div>

              <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] border border-slate-100 dark:border-slate-700 space-y-6">
                <h4 className="text-lg font-black flex items-center"><GraduationCap className="w-6 h-6 mr-3 text-blue-600" /> Trình độ chuyên môn</h4>
                <ul className="space-y-4 text-xs font-bold opacity-80 leading-relaxed">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-3 text-emerald-500 shrink-0 mt-0.5" /> Cử nhân Công nghệ thông tin</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-3 text-emerald-500 shrink-0 mt-0.5" /> Sĩ quan chỉ huy Bộ binh (SQDB - Bộ Quốc Phòng)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-3 text-emerald-500 shrink-0 mt-0.5" /> Nghiệp vụ sư phạm Giảng viên ĐH/CĐ</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-3 text-emerald-500 shrink-0 mt-0.5" /> Chứng chỉ chức danh nghề nghiệp Giảng viên ĐH - Bộ GD&ĐT</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-3 text-emerald-500 shrink-0 mt-0.5" /> Nghiệp vụ Báo chí - Trường ĐHKHXH&NV TPHCM</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-3 text-emerald-500 shrink-0 mt-0.5" /> Ngạch chuyên viên - Bộ VHTT&DL</li>
                </ul>
              </div>

              <div className="p-8 bg-blue-600 text-white rounded-[3rem] shadow-xl space-y-4">
                 <h4 className="font-black uppercase text-[10px] tracking-widest opacity-80">Liên hệ kết nối</h4>
                 <div className="space-y-3">
                    <a href="tel:0789109941" className="flex items-center space-x-3 text-sm font-black hover:translate-x-1 transition-transform">
                       <Phone className="w-5 h-5" /> <span>0789109941</span>
                    </a>
                    <a href="mailto:contact@tt.edu.vn" className="flex items-center space-x-3 text-sm font-black">
                       <Mail className="w-5 h-5" /> <span>contact@tt.edu.vn</span>
                    </a>
                    <a href="https://trantuanthanh.net" target="_blank" className="flex items-center space-x-3 text-sm font-black hover:translate-x-1 transition-transform">
                       <Globe className="w-5 h-5" /> <span>trantuanthanh.net</span>
                    </a>
                 </div>
              </div>
            </div>

            {/* Right: Detailed Experience */}
            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-6">
                <h2 className="text-5xl font-black tracking-tight">{founder.name}</h2>
                <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm">{founder.role[lang]}</p>
                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                
                <div className={`p-8 rounded-[2.5rem] bg-blue-50/50 dark:bg-slate-800 border-2 border-blue-100 dark:border-blue-900 shadow-xl`}>
                  <p className="text-lg font-black text-blue-700 dark:text-blue-400 italic leading-relaxed">
                    "Ông Trần Tuấn Thành là Giảng viên đầu tiên theo chứng chỉ chức danh nghề nghiệp của Bộ Giáo dục & Đào tạo tại đơn vị chuyên trách về Blockchain và Trí tuệ nhân tạo ở Việt Nam."
                  </p>
                </div>

                <p className={`text-lg font-medium leading-relaxed opacity-80 pt-4 whitespace-pre-line`}>
                  {founder.bio[lang]}
                </p>
              </div>

              {/* Detailed Timeline */}
              <div className="space-y-12">
                <h3 className="text-2xl font-black flex items-center">
                  <Briefcase className="w-8 h-8 mr-4 text-blue-600" /> Kinh nghiệm công tác chuyên sâu
                </h3>
                
                <div className="space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-slate-200 dark:before:bg-slate-800 ml-4 pl-12">
                   {[
                     {
                       title: "Giảng viên cơ hữu, Viện Công nghệ Blockchain và Trí tuệ nhân tạo ABAII",
                       desc: "Tham gia đào tạo và phát triển nguồn nhân lực công nghệ cao tại Việt Nam."
                     },
                     {
                       title: "Co-Founder, CEO Công ty Cổ phần IMTA TECH",
                       desc: "Hợp tác đào tạo và chuyển giao công nghệ với Cao đẳng FPT Polytechnic, BTEC FPT, Melbourne Polytechnic Việt Nam."
                     },
                     {
                       title: "Tác giả chương trình thẩm định Bộ Giáo dục và Đào tạo (Đề án 1665)",
                       desc: "Xây dựng bộ tài liệu kỹ năng ứng dụng Công Nghệ trong khởi nghiệp và đổi mới sáng tạo cho giáo viên, học sinh."
                     },
                     {
                       title: "Trưởng nhóm kỹ thuật - Đề án 498/ĐA-TQS (Bộ Quốc Phòng)",
                       desc: "Tiên phong xây dựng Website thông tin và Hệ thống điều hành quản lý nội bộ, phát triển mô hình Nhà trường Thông minh tại Trường Quân sự Quân khu 2."
                     },
                     {
                       title: "Giám khảo Giải Vô địch Quốc gia Việt Nam VEX Robotics",
                       desc: "Đóng góp chuyên môn trong việc đánh giá và phát triển phong trào Robotics K12 theo chuẩn quốc tế."
                     },
                     {
                       title: "Nghiên cứu & Phát triển (R&D) tại MindX Technology School",
                       desc: "Chuyên viên IoT, xây dựng chương trình học cho hệ sinh thái hơn 40.000 học viên tại đơn vị quy mô hàng đầu Đông Nam Á."
                     }
                   ].map((item, idx) => (
                     <div key={idx} className="relative group">
                       <div className="absolute -left-[54px] top-1.5 w-4 h-4 bg-white dark:bg-slate-900 border-2 border-blue-600 rounded-full group-hover:bg-blue-600 transition-colors z-10"></div>
                       <h4 className="text-xl font-black mb-2 text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h4>
                       <p className="text-sm font-medium opacity-60 leading-relaxed">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </div>

              {/* Values */}
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="p-10 rounded-[3rem] bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800 space-y-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg"><Award className="w-6 h-6" /></div>
                    <h4 className="text-xl font-black">Tri thức chia sẻ</h4>
                    <p className="text-sm font-medium opacity-70 leading-relaxed">Luôn tâm niệm công nghệ chỉ thực sự có giá trị khi được sẻ chia và phụng sự con người.</p>
                 </div>
                 <div className="p-10 rounded-[3rem] bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 space-y-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg"><BookOpen className="w-6 h-6" /></div>
                    <h4 className="text-xl font-black">Học tập suốt đời</h4>
                    <p className="text-sm font-medium opacity-70 leading-relaxed">Không ngừng cập nhật và làm mới bản thân trước những thay đổi chóng mặt của kỷ nguyên số.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Core Info */}
        <div className="mt-32 pt-24 border-t border-slate-100 dark:border-slate-800 grid md:grid-cols-3 gap-12 text-center">
          {[
            { icon: Target, title: 'Tầm nhìn', desc: 'Trở thành trung tâm tri thức số uy tín, đưa trí tuệ Việt vươn tầm quốc tế thông qua các giải pháp thực tiễn.' },
            { icon: BookOpen, title: 'Sứ mệnh', desc: 'Phổ cập tri thức công nghệ cho mọi thế hệ người Việt bằng sự tận tâm và chuẩn mực chuyên môn cao.' },
            { icon: Award, title: 'Giá trị cốt lõi', desc: 'Khiêm nhường - Chuyên nghiệp - Minh bạch - Phụng sự.' }
          ].map((v, i) => (
            <div key={i} className="space-y-4 px-6">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto text-blue-600"><v.icon className="w-8 h-8" /></div>
              <h4 className="text-xl font-black">{v.title}</h4>
              <p className="text-sm font-medium opacity-60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
