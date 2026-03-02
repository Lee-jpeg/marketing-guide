import React from 'react';
import Sidebar from './Sidebar';

function Layout({ data, activeChapter, onSelectChapter, searchQuery, setSearchQuery, children }) {
  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
      <Sidebar
        data={data}
        activeChapter={activeChapter}
        onSelectChapter={onSelectChapter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main style={{
        flex: 1,
        marginLeft: 'var(--sidebar-width)',
        padding: '40px',
        maxWidth: '1000px',
        margin: '0 auto',
        paddingLeft: 'calc(var(--sidebar-width) + 40px)'
      }}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
