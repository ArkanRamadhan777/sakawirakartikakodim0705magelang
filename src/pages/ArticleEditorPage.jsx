import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';
import { useAuth } from '../contexts/AuthContext';
import { createArticle, updateArticle, getArticleById } from '../services/articleService';
import { kridas } from '../data/kridas';
import ArticleEditor from '../components/ArticleEditor';
import { Save, Eye, EyeOff, ArrowLeft, Loader2 } from 'lucide-react';

const ArticleEditorPage = () => {
  const { id } = useParams();
  const { isAdmin, loading: adminLoading } = useAdmin();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    kridaId: '',
    kridaTitle: '',
    tkkId: '',
    tkkTitle: '',
    published: false
  });

  const [selectedKrida, setSelectedKrida] = useState(null);
  const [selectedTkk, setSelectedTkk] = useState(null);

  useEffect(() => {
    if (!adminLoading && !isAdmin) {
      navigate('/');
    }
  }, [isAdmin, adminLoading, navigate]);

  useEffect(() => {
    if (id && id !== 'new') {
      loadArticle();
    }
  }, [id]);

  const loadArticle = async () => {
    setLoading(true);
    const result = await getArticleById(id);
    if (result.success) {
      setFormData(result.data);
      
      // Set selected krida and tkk
      const krida = kridas.find(k => k.id.toString() === result.data.kridaId);
      if (krida) {
        setSelectedKrida(krida);
        const tkk = krida.tkk.find(t => t.id === result.data.tkkId);
        if (tkk) {
          setSelectedTkk(tkk);
        }
      }
    }
    setLoading(false);
  };

  const handleKridaChange = (e) => {
    const kridaId = e.target.value;
    const krida = kridas.find(k => k.id.toString() === kridaId);
    
    setSelectedKrida(krida);
    setSelectedTkk(null);
    setFormData({
      ...formData,
      kridaId,
      kridaTitle: krida ? krida.title : '',
      tkkId: '',
      tkkTitle: ''
    });
  };

  const handleTkkChange = (e) => {
    const tkkId = e.target.value;
    const tkk = selectedKrida?.tkk.find(t => t.id === tkkId);
    
    setSelectedTkk(tkk);
    setFormData({
      ...formData,
      tkkId,
      tkkTitle: tkk ? tkk.title : ''
    });
  };

  const handleSave = async (publishStatus) => {
    if (!formData.title.trim()) {
      alert('Judul artikel harus diisi!');
      return;
    }

    if (!formData.kridaId || !formData.tkkId) {
      alert('Pilih Krida dan TKK terlebih dahulu!');
      return;
    }

    setSaving(true);

    const articleData = {
      ...formData,
      published: publishStatus
    };

    let result;
    if (id && id !== 'new') {
      result = await updateArticle(id, articleData);
    } else {
      result = await createArticle(
        articleData,
        currentUser.uid,
        currentUser.displayName || currentUser.email
      );
    }

    if (result.success) {
      alert(publishStatus ? 'Artikel berhasil dipublikasikan!' : 'Artikel berhasil disimpan sebagai draft!');
      navigate('/admin/articles');
    } else {
      alert('Gagal menyimpan artikel: ' + result.message);
    }

    setSaving(false);
  };

  if (adminLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/admin/articles')}
              className="btn btn-ghost gap-2"
            >
              <ArrowLeft size={20} />
              Kembali
            </button>
            
            <div className="flex gap-2">
              <button
                onClick={() => handleSave(false)}
                disabled={saving}
                className="btn btn-outline gap-2"
              >
                {saving ? <Loader2 className="animate-spin" size={18} /> : <EyeOff size={18} />}
                Simpan Draft
              </button>
              <button
                onClick={() => handleSave(true)}
                disabled={saving}
                className="btn btn-primary gap-2"
              >
                {saving ? <Loader2 className="animate-spin" size={18} /> : <Eye size={18} />}
                Publish
              </button>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold font-anta text-gray-900">
            {id === 'new' ? 'Buat Artikel Baru' : 'Edit Artikel'}
          </h1>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Judul Artikel *</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Masukkan judul artikel"
              className="input input-bordered w-full"
            />
          </div>

          {/* Description */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Deskripsi Singkat</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Deskripsi singkat artikel (opsional)"
              className="textarea textarea-bordered w-full h-20"
            />
          </div>

          {/* Krida Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Krida *</span>
              </label>
              <select
                value={formData.kridaId}
                onChange={handleKridaChange}
                className="select select-bordered w-full"
              >
                <option value="">Pilih Krida</option>
                {kridas.map((krida) => (
                  <option key={krida.id} value={krida.id}>
                    {krida.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">TKK *</span>
              </label>
              <select
                value={formData.tkkId}
                onChange={handleTkkChange}
                disabled={!selectedKrida}
                className="select select-bordered w-full"
              >
                <option value="">Pilih TKK</option>
                {selectedKrida?.tkk.map((tkk) => (
                  <option key={tkk.id} value={tkk.id}>
                    {tkk.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Content Editor */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Konten Artikel *</span>
            </label>
            <ArticleEditor
              value={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
              articleId={id || 'temp'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditorPage;
