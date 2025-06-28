// src/components/QuizModal.jsx
import React, { useState } from "react";

function QuizModal({ isOpen, onClose, quizData, onPass }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !quizData) return null;

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected === quizData.correctIndex) {
      setTimeout(() => {
        onPass();
        onClose();
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">{quizData.question}</h2>
        <ul>
          {quizData.options.map((opt, i) => (
            <li key={i}>
              <label className="flex items-center mb-2 cursor-pointer">
                <input
                  type="radio"
                  name="quiz"
                  value={i}
                  checked={selected === i}
                  onChange={() => setSelected(i)}
                  className="mr-2"
                />
                {opt}
              </label>
            </li>
          ))}
        </ul>
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Submit
        </button>
        {submitted && (
          <div className="mt-3 font-semibold">
            {selected === quizData.correctIndex
              ? "✅ Correct!"
              : "❌ Wrong answer"}
          </div>
        )}
        <button onClick={onClose} className="mt-4 underline text-sm block">
          Close
        </button>
      </div>
    </div>
  );
}

export default QuizModal;
