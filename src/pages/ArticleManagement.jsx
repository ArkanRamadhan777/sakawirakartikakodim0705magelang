import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';
import { getAllArticles, deleteArticle } from '../services/articleService';
import { Edit, Trash2, Eye, EyeOff, Loader2, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const ArticleManagement = () => {
  const { isAdmin, loading: adminLoading } = useAdmin();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, published, draft
  const [expandedTkk, setExpandedTkk] = useState({}); // Track which TKK sections are expanded

  useEffect(() => {
    if (!adminLoading && !isAdmin) {
      navigate('/');
    }
  }, [isAdmin, adminLoading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      loadArticles();
    }
  }, [isAdmin]);

  const loadArticles = async () => {
    setLoading(true);
    const result = await getAllArticles();
    if (result.success) {
      setArticles(result.data);
    }
    setLoading(false);
  };

  const handleDelete = async (articleId) => {
    if (window.confirm('Yakin ingin menghapus artikel ini?')) {
      const result = await deleteArticle(articleId);
      if (result.success) {
        loadArticles();
        alert('Artikel berhasil dihapus');
      } else {
        alert('Gagal menghapus artikel: ' + result.message);
      }
    }
  };

  const toggleTkk = (tkkId) => {
    setExpandedTkk(prev => ({
      ...prev,
      [tkkId]: !prev[tkkId]
    }));
  };

  const filteredArticles = articles.filter(article => {
    if (filter === 'published') return article.published;
    if (filter === 'draft') return !article.published;
    return true;
  });

  // Group articles by Krida and TKK
  const groupedArticles = filteredArticles.reduce((acc, article) => {
    const kridaId = article.kridaId || 'unknown';
    const tkkId = article.tkkId || 'unknown';
    
    if (!acc[kridaId]) {
      acc[kridaId] = {
        title: article.kridaTitle || 'Unknown Krida',
        tkk: {}
      };
    }
    
    if (!acc[kridaId].tkk[tkkId]) {
      acc[kridaId].tkk[tkkId] = {
        title: article.tkkTitle || 'Unknown TKK',
        articles: []
      };
    }
    
    acc[kridaId].tkk[tkkId].articles.push(article);
    return acc;
  }, {});

  if (adminLoading || !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-anta text-gray-900">Kelola Artikel</h1>
              <p className="text-gray-600 mt-2">Edit artikel di setiap Krida dan TKK</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Semua ({articles.length})
            </button>
            <button
              onClick={() => setFilter('published')}
              className={`btn btn-sm ${filter === 'published' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Published ({articles.filter(a => a.published).length})
            </button>
            <button
              onClick={() => setFilter('draft')}
              className={`btn btn-sm ${filter === 'draft' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Draft ({articles.filter(a => !a.published).length})
            </button>
          </div>
        </div>

        {/* Articles List Grouped by TKK */}
        {loading ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <Loader2 className="animate-spin mx-auto mb-4" size={40} />
            <p className="text-gray-600">Memuat artikel...</p>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">Belum ada artikel</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedArticles).map(([kridaId, krida]) => (
              <div key={kridaId} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Krida Header */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">{krida.title}</h2>
                </div>

                {/* TKK List */}
                <div className="divide-y divide-gray-100">
                  {Object.entries(krida.tkk).map(([tkkId, tkk]) => {
                    const isExpanded = expandedTkk[tkkId];
                    
                    return (
                      <div key={tkkId}>
                        {/* TKK Header - Clickable */}
                        <button
                          onClick={() => toggleTkk(tkkId)}
                          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                              <FileText size={20} className="text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900">{tkk.title}</h3>
                              <p className="text-sm text-gray-600">{tkk.articles.length} artikel</p>
                            </div>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="text-gray-400" size={20} />
                          ) : (
                            <ChevronDown className="text-gray-400" size={20} />
                          )}
                        </button>

                        {/* Articles in TKK - Collapsible */}
                        {isExpanded && (
                          <div className="bg-gray-50 p-4 space-y-3">
                            {tkk.articles.map((article) => (
                              <div
                                key={article.id}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <h4 className="font-bold text-gray-900">{article.title}</h4>
                                      {article.published ? (
                                        <span className="badge badge-success badge-sm gap-1">
                                          <Eye size={12} />
                                          Published
                                        </span>
                                      ) : (
                                        <span className="badge badge-warning badge-sm gap-1">
                                          <EyeOff size={12} />
                                          Draft
                                        </span>
                                      )}
                                    </div>
                                    
                                    <div className="text-xs text-gray-600 mb-2">
                                      <span>Oleh: {article.authorName}</span>
                                      <span className="mx-2">•</span>
                                      <span>{new Date(article.createdAt?.toDate()).toLocaleDateString('id-ID')}</span>
                                    </div>

                                    {article.description && (
                                      <p className="text-sm text-gray-700 line-clamp-2">{article.description}</p>
                                    )}
                                  </div>

                                  <div className="flex gap-2 ml-4">
                                    <button
                                      onClick={() => navigate(`/admin/article/edit/${article.id}`)}
                                      className="btn btn-sm btn-outline btn-primary gap-2"
                                    >
                                      <Edit size={14} />
                                      Edit
                                    </button>
                                    <button
                                      onClick={() => handleDelete(article.id)}
                                      className="btn btn-sm btn-outline btn-error gap-2"
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleManagement;
