
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Tài khoản được cấp quyền:
    // Admin: admin@tt.edu.vn / Admin@2024
    // Student: student@tt.edu.vn / Student@123
    if (email === 'admin@tt.edu.vn' && password === 'Admin@2024') {
      navigate('/admin');
    } else if (email === 'student@tt.edu.vn' && password === 'Student@123') {
      navigate('/');
    } else {
      alert('Email hoặc mật khẩu không chính xác.\n\nTài khoản Admin: admin@tt.edu.vn / Admin@2024\nTài khoản Học viên: student@tt.edu.vn / Student@123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 pt-32 pb-24 bg-grid">
      <div className="w-full max-w-md">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                {isLogin ? 'Chào mừng trở lại' : 'Tạo tài khoản mới'}
              </h1>
              <p className="text-slate-500 text-sm font-medium">Hệ sinh thái tri thức số Quốc tế TT</p>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Địa chỉ Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium"
                    placeholder="admin@tt.edu.vn"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Mật khẩu</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {isLogin && (
                <div className="text-right">
                  <button type="button" className="text-xs font-bold text-blue-600 hover:text-blue-700">Quên mật khẩu?</button>
                </div>
              )}

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center group">
                {isLogin ? 'Đăng nhập ngay' : 'Bắt đầu hành trình'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Hoặc tiếp tục với</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm text-slate-700">
                <Chrome className="w-4 h-4" /> <span>Google</span>
              </button>
              <button className="flex items-center justify-center space-x-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm text-slate-700">
                <Github className="w-4 h-4" /> <span>Github</span>
              </button>
            </div>

            <p className="text-center text-sm font-medium text-slate-500">
              {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'} 
              <button onClick={() => setIsLogin(!isLogin)} className="ml-1 text-blue-600 font-black hover:underline">
                {isLogin ? 'Đăng ký miễn phí' : 'Đăng nhập tại đây'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
