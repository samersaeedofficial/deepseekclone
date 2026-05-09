import React, { useState } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import InputBox from './components/InputBox';
import NewChatPage from './components/NewChatPage';

function App() {
  const [message, setMessage] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedModel, setSelectedModel] = useState('instant');
  const [deepThinkEnabled, setDeepThinkEnabled] = useState(false);
  const [searchEnabled, setSearchEnabled] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const chatHistory = {
    today: [
      { id: 1, title: 'DeepSeek开源代码查询', link: '#' },
      { id: 2, title: 'DeepSeek web app language inquiry', link: '#' },
      { id: 3, title: 'Principal Messenger Dashboard Detailed Features', link: '#' },
    ],
    jan2026: [
      { id: 4, title: 'Designing Student Subject Dashboard for School Web App', link: '#' },
      { id: 5, title: 'main ny student side dashboard b', link: '#' },
      { id: 6, title: 'Enhancing Study Portal with Modern Animations', link: '#' },
      { id: 7, title: 'Modern Study Material Design with Animations', link: '#' },
      { id: 8, title: 'You are a senior frontend engine', link: '#' },
      { id: 9, title: 'DeepSeek ka free model hai', link: '#' },
      { id: 10, title: 'yar yay meray web app hy or main', link: '#' },
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark' : ''} ${isDarkTheme ? 'dark-theme' : ''}`}>
      <div className="main-container">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          chatHistory={chatHistory} 
        />

        {/* Overlay for mobile */}
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />

        {/* Main Chat Area */}
        <div className="chat-area">
          <div className="chat-content">
            <NewChatPage 
              selectedModel={selectedModel} 
              setSelectedModel={setSelectedModel} 
            />

            <InputBox 
              message={message}
              setMessage={setMessage}
              deepThinkEnabled={deepThinkEnabled}
              setDeepThinkEnabled={setDeepThinkEnabled}
              searchEnabled={searchEnabled}
              setSearchEnabled={setSearchEnabled}
              handleSubmit={handleSubmit}
              handleKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;