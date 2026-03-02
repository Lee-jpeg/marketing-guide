import React from 'react';
import ReactMarkdown from 'react-markdown';
import CommentSection from './CommentSection';

function ContentViewer({ chapter, prevChapter, nextChapter, onNavigate }) {
  if (!chapter) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '18px' }}>왼쪽 메뉴에서 문서를 선택해주세요.</p>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '80px', animation: 'fadeIn 0.3s ease-in-out' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: 'var(--color-text-title)',
          letterSpacing: '-0.02em',
          lineHeight: '1.3'
        }}>
          {chapter.title}
        </h1>
      </header>

      {chapter.subChapters && chapter.subChapters.map((sub, index) => (
        <section key={index} className="toss-card">
          <h2 style={{
            fontSize: '22px',
            fontWeight: '600',
            color: 'var(--color-primary)',
            marginBottom: '20px',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '12px'
          }}>
            {sub.title}
          </h2>
          <div className="markdown-body" style={{
            fontSize: '16px',
            color: 'var(--color-text-body)',
            lineHeight: '1.7',
            whiteSpace: 'pre-line'
          }}>
            <ReactMarkdown>{sub.content}</ReactMarkdown>
          </div>
        </section>
      ))}

      {/* Navigation Buttons Container */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '60px',
        marginBottom: '60px',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '32px'
      }}>
        <div style={{ flex: 1 }}>
          {prevChapter && (
            <button
              onClick={() => onNavigate(prevChapter)}
              className="toss-nav-btn"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left'
              }}
            >
              <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '4px', fontWeight: '500' }}>이전 글</span>
              <span style={{ fontSize: '16px', color: 'var(--color-primary)', fontWeight: '600' }}>{prevChapter.title}</span>
            </button>
          )}
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          {nextChapter && (
            <button
              onClick={() => onNavigate(nextChapter)}
              className="toss-nav-btn"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textAlign: 'right'
              }}
            >
              <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '4px', fontWeight: '500' }}>다음 글</span>
              <span style={{ fontSize: '16px', color: 'var(--color-primary)', fontWeight: '600' }}>{nextChapter.title}</span>
            </button>
          )}
        </div>
      </div>

      <CommentSection chapterId={chapter.title} />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4 {
          color: var(--color-text-title);
          margin-top: 24px;
          margin-bottom: 12px;
          font-weight: 600;
        }
        .markdown-body p {
          margin-bottom: 16px;
        }
        .markdown-body ul, .markdown-body ol {
          margin-bottom: 16px;
          padding-left: 24px;
        }
        .markdown-body li {
          margin-bottom: 8px;
        }
        .markdown-body strong {
          color: var(--color-text-title);
          font-weight: 700;
        }
        .markdown-body blockquote {
          border-left: 4px solid var(--color-primary);
          padding-left: 16px;
          color: var(--color-text-muted);
          background-color: rgba(49, 130, 246, 0.04);
          padding: 12px 16px;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-bottom: 16px;
        }
        .toss-nav-btn {
          background-color: transparent;
          padding: 16px 20px;
          border-radius: var(--radius-sm);
          transition: background-color 0.2s ease, transform 0.1s ease;
          width: 100%;
          max-width: 300px;
        }
        .toss-nav-btn:hover {
          background-color: rgba(49, 130, 246, 0.06);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

export default ContentViewer;
