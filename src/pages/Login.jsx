import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, UserPlus, Mail, Lock, User, AlertCircle, LogOut, History } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, signup, logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        if (!displayName.trim()) {
          setError('Nama lengkap harus diisi');
          setLoading(false);
          return;
        }
        await signup(email, password, displayName);
      }
      navigate(from, { replace: true });
    } catch (error) {
      let errorMessage = 'Terjadi kesalahan. Silakan coba lagi.';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Email sudah terdaftar.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email tidak valid.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'Email tidak terdaftar.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Password salah.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password minimal 6 karakter.';
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = 'Email atau password salah.';
      }
      
      setError(errorMessage);
    }

    setLoading(false);
  };

  // If user is already logged in, show profile page instead
  if (currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={40} />
                </div>
                <h1 className="text-2xl font-bold mb-2">Profil Saya</h1>
                <p className="text-white/90">Selamat datang kembali!</p>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="text-sm text-gray-500">Nama</label>
                    <p className="text-lg font-bold text-gray-900">{currentUser.displayName || 'User'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="text-sm text-gray-500">Email</label>
                    <p className="text-lg font-medium text-gray-900">{currentUser.email}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to="/history" className="btn btn-primary w-full gap-2">
                    <History size={20} />
                    Riwayat Quiz
                  </Link>
                  <Link to="/" className="btn btn-outline w-full">
                    Kembali ke Beranda
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="btn btn-outline btn-error w-full gap-2"
                  >
                    <LogOut size={20} />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {isLogin ? <LogIn size={40} /> : <UserPlus size={40} />}
              </div>
              <h1 className="text-2xl font-bold mb-2">
                {isLogin ? 'Masuk' : 'Daftar Akun'}
              </h1>
              <p className="text-white/90">
                {isLogin ? 'Masuk untuk melanjutkan' : 'Buat akun baru untuk mulai belajar'}
              </p>
            </div>

            {/* Form */}
            <div className="p-8">
              {error && (
                <div className="alert alert-error mb-6">
                  <AlertCircle size={20} />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Nama Lengkap</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="Nama lengkap kamu"
                        className="input input-bordered w-full pl-10"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="input input-bordered w-full pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="input input-bordered w-full pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                  </div>
                  {!isLogin && (
                    <label className="label">
                      <span className="label-text-alt text-gray-500">Minimal 6 karakter</span>
                    </label>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    <>
                      {isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
                      {isLogin ? 'Masuk' : 'Daftar'}
                    </>
                  )}
                </button>
              </form>

              {/* Toggle */}
              <div className="divider my-6">atau</div>
              
              <div className="text-center">
                <p className="text-gray-600">
                  {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}
                  <button
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError('');
                    }}
                    className="btn btn-link btn-sm text-primary"
                  >
                    {isLogin ? 'Daftar sekarang' : 'Masuk di sini'}
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Back to home */}
          <div className="text-center mt-6">
            <Link to="/" className="btn btn-ghost btn-sm">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
