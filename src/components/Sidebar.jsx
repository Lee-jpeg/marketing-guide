import React from 'react';
import SearchBar from './SearchBar';

function Sidebar({ data, activeChapter, onSelectChapter, searchQuery, setSearchQuery }) {
    return (
        <aside style={{
            width: 'var(--sidebar-width)',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            backgroundColor: 'var(--color-surface)',
            borderRight: '1px solid var(--border-color)',
            overflowY: 'auto',
            padding: '24px 16px',
            zIndex: 100
        }}>
            <div style={{ marginBottom: '32px', padding: '0 8px' }}>
                <h1 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'var(--color-text-title)',
                    lineHeight: '1.4'
                }}>
                    마케팅·CRM<br />완전 가이드
                </h1>
            </div>

            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            <nav>
                {data.map((part, pIndex) => (
                    <div key={pIndex} style={{ marginBottom: '24px' }}>
                        <h2 style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: 'var(--color-primary)',
                            marginBottom: '12px',
                            padding: '0 8px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.02em'
                        }}>
                            {part.title}
                        </h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {part.chapters && part.chapters.map((chapter, cIndex) => {
                                const isActive = activeChapter && activeChapter.title === chapter.title;
                                return (
                                    <li key={cIndex} style={{ marginBottom: '4px' }}>
                                        <button
                                            onClick={() => onSelectChapter(chapter)}
                                            style={{
                                                width: '100%',
                                                textAlign: 'left',
                                                padding: '10px 12px',
                                                borderRadius: 'var(--radius-sm)',
                                                fontSize: '15px',
                                                color: isActive ? 'var(--color-primary)' : 'var(--color-text-body)',
                                                backgroundColor: isActive ? 'rgba(49, 130, 246, 0.08)' : 'transparent',
                                                fontWeight: isActive ? '600' : '500',
                                                transition: 'all 0.15s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                if (!isActive) e.currentTarget.style.backgroundColor = 'var(--color-background)';
                                            }}
                                            onMouseOut={(e) => {
                                                if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                                            }}
                                        >
                                            {chapter.title}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
