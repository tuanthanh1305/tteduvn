
import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, FileText, 
  Users, Settings, Plus, 
  TrendingUp, Bell, MoreVertical, 
  LogOut, Code, UserPlus, 
  Shield, Edit2, Trash2, X, Save, Globe, Image, Type as TypeIcon, Info
} from 'lucide-react';
import { useApp } from '../App';
import { TeamMember, Course, Service, BlogPost, CourseCategory } from '../types';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  
  const { 
    courses, setCourses, 
    team, setTeam, 
    services, setServices, 
    blogs, setBlogs,
    siteSettings, setSiteSettings,
    lang 
  } = useApp();

  const [editingItem, setEditingItem] = useState<{type: 'course'|'team'|'service'|'blog'|'settings', data: any} | null>(null);

  const handleDelete = (type: string, id: string) => {
    if (!confirm('Xác nhận xóa?')) return;
    if (type === 'course') setCourses(prev => prev.filter(i => i.id !== id));
    if (type === 'team') setTeam(prev => prev.filter(i => i.id !== id));
    if (type === 'service') setServices(prev => prev.filter(i => i.id !== id));
    if (type === 'blog') setBlogs(prev => prev.filter(i => i.id !== id));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    const { type, data } = editingItem;
    if (type === 'settings') {
      setSiteSettings(data);
    } else {
      const setter = type === 'course' ? setCourses : type === 'team' ? setTeam : type === 'service' ? setServices : setBlogs;
      setter((prev: any[]) => {
        const index = prev.findIndex(i => i.id === data.id);
        if (index > -1) {
          const next = [...prev];
          next[index] = data;
          return next;
        } else {
          return [...prev, { ...data, id: Math.random().toString(36).substr(2, 9) }];
        }
      });
    }
    setEditingItem(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-6 bg-grid">
        <div className="w-full max-w-md p-14 bg-white rounded-[4rem] shadow-2xl border border-white space-y-10">
          <div className="text-center space-y-3">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl mx-auto flex items-center justify-center shadow-xl shadow-blue-500/20">
               <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 pt-4">Admin Hub</h1>
            <p className="text-blue-600 text-[10px] uppercase tracking-[0.3em] font-black italic">Quản trị Tri thức số TT</p>
          </div>
          <div className="space-y-5">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-500 outline-none transition-all font-bold"
              placeholder="Mật khẩu: Admin@2024" 
              onKeyDown={(e) => e.key === 'Enter' && (password === 'Admin@2024' ? setIsLoggedIn(true) : alert('Sai mật khẩu'))}
            />
            <button 
              onClick={() => { if(password === 'Admin@2024') setIsLoggedIn(true); else alert('Sai mật khẩu'); }}
              className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl shadow-xl transition-all"
            >
              Đăng nhập Hệ thống
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderModal = () => {
    if (!editingItem) return null;
    const { type, data } = editingItem;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <div className="bg-white w-full max-w-4xl rounded-[3rem] p-12 shadow-2xl my-auto animate-in zoom-in duration-300">
          <div className="flex justify-between items-center mb-8 border-b pb-6">
            <h4 className="text-2xl font-black uppercase tracking-tight flex items-center">
              <Settings className="w-6 h-6 mr-3 text-blue-600" /> Cấu hình {type}
            </h4>
            <button onClick={() => setEditingItem(null)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors"><X className="w-6 h-6 text-slate-400" /></button>
          </div>
          <form onSubmit={handleSave} className="space-y-8">
            {type === 'team' ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">Họ và Tên</label>
                    <input value={data.name} onChange={e => setEditingItem({...editingItem, data: {...data, name: e.target.value}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">Phân loại</label>
                    <select value={data.type} onChange={e => setEditingItem({...editingItem, data: {...data, type: e.target.value}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold">
                       <option value="Chuyên gia">Chuyên gia</option>
                       <option value="Giảng viên">Giảng viên</option>
                       <option value="Cố vấn">Cố vấn</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400">Chức danh (VI)</label>
                  <input value={data.role.vi} onChange={e => setEditingItem({...editingItem, data: {...data, role: {...data.role, vi: e.target.value}}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400">Tiểu sử chuyên sâu (VI)</label>
                  <textarea value={data.bio.vi} onChange={e => setEditingItem({...editingItem, data: {...data, bio: {...data.bio, vi: e.target.value}}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" rows={10} />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">URL Ảnh chân dung</label>
                    <input value={data.image} onChange={e => setEditingItem({...editingItem, data: {...data, image: e.target.value}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" />
                </div>
              </div>
            ) : type === 'course' ? (
              <div className="space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">Tên khóa học (VI)</label>
                    <input value={data.title.vi} onChange={e => setEditingItem({...editingItem, data: {...data, title: {...data.title, vi: e.target.value}}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" />
                  </div>
                   <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">Học phí</label>
                    <input value={data.fee} onChange={e => setEditingItem({...editingItem, data: {...data, fee: e.target.value}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" />
                  </div>
                </div>
                 <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400">Mô tả khóa học (VI)</label>
                  <textarea value={data.description.vi} onChange={e => setEditingItem({...editingItem, data: {...data, description: {...data.description, vi: e.target.value}}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" rows={4} />
                </div>
                 <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400">URL Ảnh bìa</label>
                  <input value={data.image} onChange={e => setEditingItem({...editingItem, data: {...data, image: e.target.value}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" />
                </div>
              </div>
            ) : type === 'settings' ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">Hero Title (VI)</label>
                    <input value={data.heroTitle.vi} onChange={e => setEditingItem({...editingItem, data: {...data, heroTitle: {...data.heroTitle, vi: e.target.value}}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">Slogan (VI)</label>
                    <input value={data.slogan.vi} onChange={e => setEditingItem({...editingItem, data: {...data, slogan: {...data.slogan, vi: e.target.value}}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400">Mô tả chính Hero (VI)</label>
                  <textarea value={data.heroDesc.vi} onChange={e => setEditingItem({...editingItem, data: {...data, heroDesc: {...data.heroDesc, vi: e.target.value}}})} className="w-full bg-slate-50 border p-4 rounded-xl font-bold" rows={4} />
                </div>
              </div>
            ) : null}
            
            <div className="pt-6 border-t flex gap-4">
              <button type="button" onClick={() => setEditingItem(null)} className="flex-1 py-5 bg-slate-100 text-slate-500 font-black rounded-2xl active:scale-95 transition-all">Hủy bỏ</button>
              <button type="submit" className="flex-1 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center active:scale-95 transition-all">
                <Save className="w-5 h-5 mr-2" /> Lưu dữ liệu
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-slate-200 hidden xl:flex flex-col p-8 space-y-10 bg-white fixed h-full z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-blue-600 rounded-xl shadow-lg"><LayoutDashboard className="w-6 h-6 text-white" /></div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">TT Hub</span>
        </div>
        <nav className="flex-1 space-y-1">
          {[
            { id: 'dashboard', icon: TrendingUp, label: 'Báo cáo tổng' },
            { id: 'settings', icon: Settings, label: 'Tùy biến Hero' },
            { id: 'courses', icon: BookOpen, label: 'Khóa đào tạo' },
            { id: 'team', icon: Shield, label: 'Đội ngũ / Founder' },
            { id: 'blog', icon: FileText, label: 'Blog Tri thức' },
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl font-black text-sm transition-all ${activeTab === item.id ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-50'}`}>
              <item.icon className="w-5 h-5" /> <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl font-black text-sm text-red-500 hover:bg-red-50"><LogOut className="w-5 h-5" /> <span>Đăng xuất</span></button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 xl:ml-72 p-12 overflow-y-auto">
        <header className="mb-12 flex justify-between items-end animate-in fade-in duration-500">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Hệ thống Quản trị TT Center</h2>
            <p className="text-slate-500 font-medium italic mt-1">Trần Tuấn Thành & Cộng sự - Quyền năng quản lý tuyệt đối</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center text-blue-700 text-xs font-black uppercase">
             <Info className="w-4 h-4 mr-2" /> Live Dashboard
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 animate-in slide-in-from-bottom-5 duration-500">
            <div className="bg-white p-10 rounded-[3.5rem] border shadow-sm group hover:shadow-xl transition-all">
              <Users className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110" />
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Học viên mới</p>
              <h4 className="text-5xl font-black tracking-tighter">12.4K</h4>
            </div>
            <div className="bg-white p-10 rounded-[3.5rem] border shadow-sm group hover:shadow-xl transition-all">
              <BookOpen className="w-12 h-12 text-purple-600 mb-6 group-hover:scale-110" />
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Khóa học hiện hữu</p>
              <h4 className="text-5xl font-black tracking-tighter">{courses.length}</h4>
            </div>
            <div className="bg-white p-10 rounded-[3.5rem] border shadow-sm group hover:shadow-xl transition-all">
              <Globe className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110" />
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Lượt tương tác</p>
              <h4 className="text-5xl font-black tracking-tighter">8.9K</h4>
            </div>
            <div className="bg-white p-10 rounded-[3.5rem] border shadow-sm group hover:shadow-xl transition-all">
              <Shield className="w-12 h-12 text-amber-600 mb-6 group-hover:scale-110" />
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Chuyên gia hệ thống</p>
              <h4 className="text-5xl font-black tracking-tighter">{team.length}</h4>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white p-12 rounded-[4rem] border shadow-sm space-y-10 animate-in slide-in-from-right duration-500">
            <div className="flex justify-between items-center border-b pb-8">
              <h3 className="text-3xl font-black tracking-tight">Cấu hình Trang chủ Hero</h3>
              <button onClick={() => setEditingItem({type: 'settings', data: siteSettings})} className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs flex items-center shadow-xl active:scale-95 transition-all"><Edit2 className="w-4 h-4 mr-2" /> Chỉnh sửa Hero</button>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Hero Title (VI)</p>
                  <p className="text-2xl font-black leading-tight text-slate-900">{siteSettings.heroTitle.vi}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Slogan (VI)</p>
                  <p className="text-2xl font-black leading-tight text-blue-600 italic">"{siteSettings.slogan.vi}"</p>
                </div>
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Hero Description (VI)</p>
                 <p className="text-base font-medium opacity-60 leading-relaxed bg-slate-50 p-6 rounded-[2rem]">{siteSettings.heroDesc.vi}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="bg-white rounded-[4rem] border shadow-sm overflow-hidden">
            <div className="p-12 border-b flex justify-between items-center">
               <h3 className="text-3xl font-black tracking-tight">Danh sách Khóa học</h3>
               <button onClick={() => setEditingItem({type: 'course', data: {id: '', title: {vi:'', en:''}, category: CourseCategory.FREE, description: {vi:'', en:''}, image: '', roadmap: {vi:[], en:[]}, targetAudience: {vi:'', en:''}, fee: '', duration: {vi:'', en:''}, level: 'Cơ bản'}})} className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs flex items-center shadow-lg active:scale-95 transition-all"><Plus className="w-4 h-4 mr-2" /> Tạo khóa mới</button>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b">
                    <tr className="text-[11px] font-black uppercase text-slate-400 tracking-widest">
                      <th className="px-12 py-6">Khóa học</th>
                      <th className="px-12 py-6">Phân loại</th>
                      <th className="px-12 py-6">Học phí</th>
                      <th className="px-12 py-6 text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {courses.map(c => (
                      <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-12 py-6 font-black text-slate-900">{c.title.vi}</td>
                        <td className="px-12 py-6"><span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-lg">{c.category}</span></td>
                        <td className="px-12 py-6 font-black text-blue-600">{c.fee}</td>
                        <td className="px-12 py-6 text-right space-x-2">
                           <button onClick={() => setEditingItem({type: 'course', data: c})} className="p-3 bg-white border border-slate-200 rounded-xl hover:text-blue-600 transition-all shadow-sm"><Edit2 className="w-4 h-4" /></button>
                           <button onClick={() => handleDelete('course', c.id)} className="p-3 bg-white border border-slate-200 rounded-xl hover:text-red-600 transition-all shadow-sm"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="bg-white rounded-[4rem] border shadow-sm overflow-hidden">
             <div className="p-12 border-b flex justify-between items-center">
                <h3 className="text-3xl font-black tracking-tight">Quản lý Đội ngũ / Founder</h3>
                <button onClick={() => setEditingItem({type: 'team', data: {id: '', name: '', role: {vi:'', en:''}, bio: {vi:'', en:''}, image: '', type: 'Giảng viên'}})} className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs flex items-center shadow-lg active:scale-95 transition-all"><UserPlus className="w-4 h-4 mr-2" /> Thêm Chuyên gia</button>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b">
                    <tr className="text-[11px] font-black uppercase text-slate-400 tracking-widest">
                       <th className="px-12 py-6">Thành viên</th>
                       <th className="px-12 py-6">Chức danh</th>
                       <th className="px-12 py-6">Phân loại</th>
                       <th className="px-12 py-6 text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {team.map(m => (
                      <tr key={m.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-12 py-6 flex items-center space-x-5">
                           <img src={m.image} className="w-14 h-14 rounded-2xl object-cover shadow-lg" alt="" />
                           <span className="font-black text-slate-900">{m.name}</span>
                        </td>
                        <td className="px-12 py-6 text-sm font-bold text-slate-500 max-w-xs">{m.role.vi}</td>
                        <td className="px-12 py-6"><span className="px-4 py-1 bg-amber-50 text-amber-600 text-[10px] font-black uppercase rounded-lg">{m.type}</span></td>
                        <td className="px-12 py-6 text-right space-x-2">
                           <button onClick={() => setEditingItem({type: 'team', data: m})} className="p-3 bg-white border border-slate-200 rounded-xl hover:text-blue-600 transition-all shadow-sm"><Edit2 className="w-4 h-4" /></button>
                           <button onClick={() => handleDelete('team', m.id)} className="p-3 bg-white border border-slate-200 rounded-xl hover:text-red-600 transition-all shadow-sm"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        )}

        {renderModal()}
      </main>
    </div>
  );
};

export default AdminDashboard;
