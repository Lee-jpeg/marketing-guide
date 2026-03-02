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

  return (
    <div className="app-container">
      <Layout
        data={filteredData}
        activeChapter={activeChapter}
        onSelectChapter={setActiveChapter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      >
        <ContentViewer chapter={activeChapter} />
      </Layout>
    </div>
  );
}

export default App;
