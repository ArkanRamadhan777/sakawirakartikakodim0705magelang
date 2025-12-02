import React, { useState, useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadArticleImage } from '../services/articleService';
import { Loader2, Image as ImageIcon } from 'lucide-react';

const ArticleEditor = ({ value, onChange, articleId }) => {
  const [uploading, setUploading] = useState(false);
  const quillRef = useRef(null);

  // Image handler untuk upload ke Firebase Storage
  const imageHandler = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        setUploading(true);
        
        const result = await uploadArticleImage(file, articleId || 'temp');
        
        if (result.success) {
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', result.url);
        } else {
          alert('Gagal upload gambar: ' + result.message);
        }
        
        setUploading(false);
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'align': [] }],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    },
    clipboard: {
      matchVisual: false
    }
  }), [articleId]);

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'list', 'bullet',
    'indent',
    'align',
    'blockquote', 'code-block',
    'link', 'image', 'video'
  ];

  return (
    <div className="relative">
      {uploading && (
        <div className="absolute top-0 left-0 right-0 z-50 bg-blue-100 border border-blue-300 text-blue-800 px-4 py-2 rounded-lg flex items-center gap-2">
          <Loader2 className="animate-spin" size={16} />
          <span className="text-sm">Uploading gambar...</span>
        </div>
      )}
      
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Tulis artikel di sini..."
        className="bg-white"
        style={{ height: '500px', marginBottom: '50px' }}
      />
      
      <style jsx global>{`
        .ql-editor {
          min-height: 500px;
          font-size: 16px;
          line-height: 1.6;
        }
        .ql-editor img {
          max-width: 100%;
          height: auto;
        }
        .ql-toolbar {
          background: #f8f9fa;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        .ql-container {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          font-family: inherit;
        }
      `}</style>
    </div>
  );
};

export default ArticleEditor;
