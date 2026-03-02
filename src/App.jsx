import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ContentViewer from './components/ContentViewer';
import guideData from './data/guideContent.json';
import './App.css';

function App() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // 기본적으로 첫 번째 챕터를 선택
    if (guideData.length > 0 && guideData[0].chapters && guideData[0].chapters.length > 0) {
      setActiveChapter(guideData[0].chapters[0]);
    }
  }, []);

  const filteredData = React.useMemo(() => {
    if (!searchQuery.trim()) return guideData;

    const lowerQuery = searchQuery.toLowerCase();

    return guideData.map(part => {
      const filteredChapters = part.chapters.filter(chapter => {
        const titleMatch = chapter.title.toLowerCase().includes(lowerQuery);
        const subChapterMatch = chapter.subChapters?.some(sub =>
          sub.title.toLowerCase().includes(lowerQuery) ||
          sub.content.toLowerCase().includes(lowerQuery)
        );
        return titleMatch || subChapterMatch;
      });

      if (filteredChapters.length > 0) {
        return { ...part, chapters: filteredChapters };
      }
      return null;
    }).filter(part => part !== null);
  }, [searchQuery]);

  // Calculate generic Previous & Next chapters globally
  const getPrevNextChapters = () => {
    let prevChapter = null;
    let nextChapter = null;

    if (!activeChapter) return { prevChapter, nextChapter };

    let allChapters = [];
    guideData.forEach(part => {
      if (part.chapters) {
        allChapters = allChapters.concat(part.chapters);
      }
    });

    const currentIndex = allChapters.findIndex(ch => ch.title === activeChapter.title);

    if (currentIndex > 0) {
      prevChapter = allChapters[currentIndex - 1];
    }
    if (currentIndex !== -1 && currentIndex < allChapters.length - 1) {
      nextChapter = allChapters[currentIndex + 1];
    }

    return { prevChapter, nextChapter };
  };

  const { prevChapter, nextChapter } = getPrevNextChapters();

  return (
    <div className="app-container">
      <Layout
        data={filteredData}
        activeChapter={activeChapter}
        onSelectChapter={setActiveChapter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      >
        <ContentViewer
          chapter={activeChapter}
          prevChapter={prevChapter}
          nextChapter={nextChapter}
          onNavigate={(chapter) => {
            setActiveChapter(chapter);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </Layout>
    </div>
  );
}

export default App;
