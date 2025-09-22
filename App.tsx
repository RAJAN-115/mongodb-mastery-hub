
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/pages/Dashboard';
import QuizView from './components/pages/QuizView';
import FlashcardsView from './components/pages/FlashcardsView';
import MindMapView from './components/pages/MindMapView';
import AssistantView from './components/pages/AssistantView';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex h-screen bg-slate-900 text-slate-100 font-sans">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz" element={<QuizView />} />
            <Route path="/flashcards" element={<FlashcardsView />} />
            <Route path="/mind-map" element={<MindMapView />} />
            <Route path="/assistant" element={<AssistantView />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
