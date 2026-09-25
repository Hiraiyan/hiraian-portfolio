import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsPage } from './pages/SkillsPage';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-layout">
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={<HomePage onOpenResume={() => setIsResumeModalOpen(true)} />}
              />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
