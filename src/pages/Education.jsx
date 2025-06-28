import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ModuleCard from '../components/ModuleCard';
import modules from '../data/modules';
import VideoModal from '../components/VideoModal';
import quizzes from '../data/quizzes';
import QuizModal from '../components/QuizModal';

function Education() {
  const [completedModules, setCompletedModules] = useState(() => {
    const saved = localStorage.getItem('completedModules');
    return saved ? JSON.parse(saved) : [];
  });

  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('educationPoints');
    return saved ? parseInt(saved) : 0;
  });

  const [quizOpen, setQuizOpen] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('completedModules', JSON.stringify(completedModules));
    localStorage.setItem('educationPoints', points.toString());
  }, [completedModules, points]);

  const handleComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      const quiz = quizzes[moduleId];
      if (quiz) {
        setActiveQuiz(quiz);
        setQuizOpen(true);
      } else {
        setCompletedModules([...completedModules, moduleId]);
        setPoints(points + 500);
      }
    }
  };

  const handleQuizPass = () => {
    const moduleId = Object.keys(quizzes).find(
      key => quizzes[key] === activeQuiz
    );

    if (moduleId && !completedModules.includes(parseInt(moduleId))) {
      setCompletedModules([...completedModules, parseInt(moduleId)]);
      setPoints(prev => prev + 500);
      setQuizOpen(false);
      setActiveQuiz(null);
    }
  };

  const openModal = (url) => {
    setCurrentVideo(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideo('');
  };

  const filteredModules = modules.filter((mod) =>
    mod.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">📘 Crypto Education</h1>
      <p className="text-center text-lg mb-6">🎓 Total Points: <span className="font-bold">{points}</span></p>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search modules..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-md w-full md:w-1/2 text-black"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredModules.map((mod) => (
          <ModuleCard
            key={mod.id}
            module={mod}
            completed={completedModules.includes(mod.id)}
            onComplete={() => handleComplete(mod.id)}
            onPlay={() => openModal(mod.videoUrl)}
          />
        ))}
      </div>

      <VideoModal isOpen={modalOpen} onClose={closeModal} videoUrl={currentVideo} />

      {completedModules.length >= 2 ? (
        <div className="mt-10 text-center text-green-400 font-bold">
          ✅ Congratulations! You’ve earned the right to mint an NFT!
        </div>
      ) : (
        <div className="mt-10 text-center text-yellow-400 font-semibold">
          Complete at least 2 modules to earn an NFT reward.
        </div>
      )}

      {/* Quiz modal her zaman dışarıda tanımlanmalı */}
      <QuizModal
        isOpen={quizOpen}
        onClose={() => {
          setQuizOpen(false);
          setActiveQuiz(null);
        }}
        quizData={activeQuiz}
        onPass={handleQuizPass}
      />
    </div>
  );
}

export default Education;
