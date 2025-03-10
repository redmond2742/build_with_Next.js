"use client";
import React, { useState } from 'react';

export default function Quiz({ title=Quiz, question, options, correctAnswer, explanation }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{question}</p>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {options.map((option, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            <label>
              <input
                type="radio"
                name="quiz"
                value={index}
                onChange={() => setSelected(index)}
                disabled={submitted}
              />{' '}
              {option}
            </label>
          </li>
        ))}
      </ul>
      {!submitted && (
        <button onClick={handleSubmit} disabled={selected === null}>
          Submit Answer
        </button>
      )}
      {submitted && (
        <div>
          {selected === correctAnswer ? (
            <p style={{ color: 'green' }}>Correct!</p>
          ) : (
            <p style={{ color: 'red' }}>
              Incorrect. The correct answer is: {options[correctAnswer]}
            </p>
          )}
          {explanation && <p>{explanation}</p>}
        </div>
      )}
    </div>
  );
}
