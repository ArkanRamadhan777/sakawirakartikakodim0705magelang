import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const { resetPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        setLoading(true);

        try {
            await resetPassword(email);
            setSuccess(true);
            setEmail('');
        } catch (error) {
            console.error("Forgot Password Error:", error);
            console.log("Error Code:", error.code);
            console.log("Error Message:", error.message);

            let errorMessage = 'Terjadi kesalahan. Silakan coba lagi.';

            if (error.code === 'auth/user-not-found') {
                errorMessage = 'Email tidak terdaftar.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Email tidak valid.';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Terlalu banyak percobaan. Silakan coba lagi nanti.';
            }

            setError(errorMessage);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto">
                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white text-center">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail size={40} />
                            </div>
                            <h1 className="text-2xl font-bold mb-2">
                                Lupa Password?
                            </h1>
                            <p className="text-white/90">
                                Masukkan email Anda untuk reset password
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

                            {success && (
                                <div className="alert alert-success mb-6">
                                    <CheckCircle size={20} />
                                    <div>
                                        <p className="font-semibold">Email terkirim!</p>
                                        <p className="text-sm">Silakan cek inbox email Anda untuk link reset password.</p>
                                        <p className="text-sm mt-2">
                                            <strong>Tips:</strong> Jika tidak menemukan email, cek folder <strong>Spam/Junk</strong> Anda.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {!success && (
                                <form onSubmit={handleSubmit} className="space-y-4">
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
                                        <label className="label">
                                            <span className="label-text-alt text-gray-500">
                                                Kami akan mengirim link reset password ke email ini
                                            </span>
                                        </label>
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
                                                <Mail size={20} />
                                                Kirim Email Reset
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}

                            {/* Back to Login */}
                            <div className="divider my-6"></div>

                            <div className="text-center">
                                <Link to="/login" className="btn btn-ghost btn-sm gap-2">
                                    <ArrowLeft size={16} />
                                    Kembali ke Login
                                </Link>
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

export default ForgotPassword;
