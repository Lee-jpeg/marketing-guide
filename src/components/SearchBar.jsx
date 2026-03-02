import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <div style={{ marginBottom: '24px', padding: '0 8px' }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'var(--color-background)',
                borderRadius: 'var(--radius-md)',
                padding: '8px 16px',
                border: '1px solid var(--border-color)',
                transition: 'border-color 0.2s ease',
            }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 21L16.65 16.65" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                    type="text"
                    placeholder="가이드 내용 검색"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        width: '100%',
                        border: 'none',
                        outline: 'none',
                        backgroundColor: 'transparent',
                        fontSize: '15px',
                        color: 'var(--color-text-body)',
                        fontFamily: 'inherit'
                    }}
                />
            </div>
        </div>
    );
}

export default SearchBar;
