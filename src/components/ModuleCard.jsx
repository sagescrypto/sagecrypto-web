import React from 'react';
import { FaPlayCircle, FaCheckCircle } from 'react-icons/fa';

function ModuleCard({ module, completed, onComplete, onPlay }) {
  return (
    <div className="bg-white text-black rounded-xl shadow-md p-6 relative transition hover:shadow-lg hover:scale-[1.02]">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-blue-600 text-3xl">
          <FaPlayCircle />
        </div>
        <h2 className="text-xl font-bold">{module.title}</h2>
      </div>

      <p className="mb-4 text-sm text-gray-700">{module.description}</p>

      <div className="flex justify-between items-center">
        <button
          onClick={onPlay}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
        >
          Watch Video
        </button>

        {!completed ? (
          <button
            onClick={onComplete}
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 text-sm"
          >
            Take Quiz
          </button>
        ) : (
          <div className="text-green-500 flex items-center gap-1 text-sm font-semibold">
            <FaCheckCircle /> Completed
          </div>
        )}
      </div>
    </div>
  );
}

export default ModuleCard;
