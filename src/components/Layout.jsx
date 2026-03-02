import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

function Layout({ data, activeChapter, onSelectChapter, searchQuery, setSearchQuery, children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false); // Close sidebar on desktop resize if inadvertently open
      }
    };

    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh', position: 'relative' }}>
      {/* Mobile Header with Hamburger Menu */}
      {isMobile && (
        <header style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'var(--color-surface)',
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 90 // Stay below sidebar overlay
        }}>
          <h1 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-text-title)', margin: 0 }}>
            마케팅 가이드
          </h1>
          <button onClick={toggleSidebar} style={{ padding: '8px' }} aria-label="메뉴 열기">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20" stroke="var(--color-text-title)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12H20" stroke="var(--color-text-title)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 18H20" stroke="var(--color-text-title)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </header>
      )}

      {/* Background Overlay for mobile sidebar */}
      {isMobile && isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 95,
            transition: 'opacity 0.2s',
          }}
        />
      )}

      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar
          data={data}
          activeChapter={activeChapter}
          onSelectChapter={(chapter) => {
            onSelectChapter(chapter);
            if (isMobile) setIsSidebarOpen(false); // Close menu on select in mobile
          }}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isMobile={isMobile}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main style={{
          flex: 1,
          padding: isMobile ? '20px 16px' : '40px',
          marginLeft: isMobile ? '0' : 'var(--sidebar-width)',
          maxWidth: isMobile ? '100%' : '1000px',
          margin: isMobile ? '0' : '0 auto',
          paddingLeft: isMobile ? '16px' : 'calc(var(--sidebar-width) + 40px)',
          transition: 'margin-left 0.3s ease, padding 0.3s ease'
        }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
