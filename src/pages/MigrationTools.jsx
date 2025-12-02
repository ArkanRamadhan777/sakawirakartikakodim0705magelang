import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useAdmin } from '../contexts/AdminContext';
import { 
  migrateAllArticles, 
  getMigrationStatus,
  clearMigratedArticles 
} from '../services/migrationService';
import { 
  Database, 
  Upload, 
  CheckCircle, 
  AlertTriangle, 
  Loader2,
  Trash2,
  RefreshCw,
  FileText,
  ArrowRight
} from 'lucide-react';

const MigrationTools = () => {
  const { currentUser } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();
  const navigate = useNavigate();
  
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [migrating, setMigrating] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!adminLoading && !isAdmin) {
      navigate('/');
    }
  }, [isAdmin, adminLoading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      loadStatus();
    }
  }, [isAdmin]);

  const loadStatus = async () => {
    setLoading(true);
    const result = await getMigrationStatus();
    if (result.success) {
      setStatus(result.data);
    }
    setLoading(false);
  };

  const handleMigrate = async () => {
    if (!window.confirm(
      'Yakin ingin memigrate semua artikel dari kridas.jsx ke Firestore?\n\n' +
      'Artikel yang sudah ada tidak akan di-override.'
    )) {
      return;
    }

    setMigrating(true);
    setResult(null);

    const migrationResult = await migrateAllArticles(
      currentUser.uid,
      currentUser.displayName || currentUser.email
    );

    setResult(migrationResult);
    setMigrating(false);
    
    // Reload status
    await loadStatus();
  };

  const handleClear = async () => {
    if (!window.confirm(
      '⚠️ PERINGATAN!\n\n' +
      'Ini akan menghapus SEMUA artikel yang di-migrate dari kridas.jsx.\n' +
      'Artikel yang dibuat manual lewat editor TIDAK akan terhapus.\n\n' +
      'Yakin ingin melanjutkan?'
    )) {
      return;
    }

    setLoading(true);
    const clearResult = await clearMigratedArticles();
    
    if (clearResult.success) {
      alert(clearResult.message);
      await loadStatus();
    } else {
      alert('Error: ' + clearResult.message);
    }
    
    setLoading(false);
  };

  if (adminLoading || !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Database className="text-primary" size={40} />
            <div>
              <h1 className="text-3xl font-bold font-anta text-gray-900">Migration Tools</h1>
              <p className="text-gray-600 mt-1">Migrate artikel dari kridas.jsx ke Firestore Database</p>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText size={24} />
            Status Migrasi
          </h2>

          {loading && !status ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="animate-spin text-primary" size={40} />
            </div>
          ) : status ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">{status.totalInKridas}</div>
                  <div className="text-sm text-gray-600 mt-1">Total di kridas.jsx</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">{status.migratedArticles}</div>
                  <div className="text-sm text-gray-600 mt-1">Sudah di-migrate</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-600">{status.needMigration}</div>
                  <div className="text-sm text-gray-600 mt-1">Perlu di-migrate</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">{status.percentage}%</div>
                  <div className="text-sm text-gray-600 mt-1">Progress</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress Migrasi</span>
                  <span>{status.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${status.percentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={loadStatus}
                  className="btn btn-sm btn-outline gap-2"
                  disabled={loading}
                >
                  <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                  Refresh
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-gray-500">
              Gagal memuat status
            </div>
          )}
        </div>

        {/* Migration Action */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Upload size={24} />
            Migrate Artikel
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex gap-3">
              <AlertTriangle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-2">Apa yang akan terjadi:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Semua artikel dari kridas.jsx akan di-copy ke Firestore</li>
                  <li>Artikel yang sudah ada tidak akan di-override</li>
                  <li>Content akan dikonversi ke format HTML</li>
                  <li>Setelah migrate, artikel bisa diedit lewat CMS Admin</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={handleMigrate}
            disabled={migrating || loading || (status && status.needMigration === 0)}
            className="btn btn-primary btn-lg w-full gap-3"
          >
            {migrating ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Sedang Memigrate...
              </>
            ) : (
              <>
                <ArrowRight size={20} />
                Migrate Semua Artikel
              </>
            )}
          </button>

          {status && status.needMigration === 0 && (
            <p className="text-center text-green-600 font-semibold mt-4 flex items-center justify-center gap-2">
              <CheckCircle size={20} />
              Semua artikel sudah di-migrate!
            </p>
          )}
        </div>

        {/* Result */}
        {result && (
          <div className={`rounded-xl shadow-sm border p-6 mb-6 ${
            result.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${
              result.success ? 'text-green-800' : 'text-red-800'
            }`}>
              {result.success ? <CheckCircle size={24} /> : <AlertTriangle size={24} />}
              {result.success ? 'Migrasi Berhasil!' : 'Migrasi Gagal'}
            </h3>
            <p className={result.success ? 'text-green-700' : 'text-red-700'}>
              {result.message}
            </p>
            
            {result.stats && result.stats.errors > 0 && (
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-semibold text-red-800">
                  Lihat Error Details ({result.stats.errors} errors)
                </summary>
                <div className="mt-2 bg-white rounded p-3 text-xs">
                  <pre className="overflow-auto">
                    {JSON.stringify(result.stats.errorDetails, null, 2)}
                  </pre>
                </div>
              </details>
            )}
          </div>
        )}

        {/* Danger Zone */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
            <Trash2 size={24} />
            Danger Zone
          </h2>
          
          <p className="text-red-700 mb-4 text-sm">
            ⚠️ Hapus semua artikel yang di-migrate dari kridas.jsx. 
            Artikel yang dibuat manual lewat editor tidak akan terhapus.
          </p>

          <button
            onClick={handleClear}
            disabled={loading}
            className="btn btn-error btn-outline gap-2"
          >
            <Trash2 size={18} />
            Clear Migrated Articles
          </button>
        </div>

      </div>
    </div>
  );
};

export default MigrationTools;
