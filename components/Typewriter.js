'use client';

import { useEffect, useState } from 'react';

const words = [
  'Website Developer',
  'GHL Expert',
  'Funnel Builder',
  'AI Automation Expert',
];

export default function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    // TYPE
    if (!deleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 80);
    }

    // WAIT AFTER FULL WORD
    else if (!deleting && text.length === currentWord.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1400);
    }

    // ERASE
    else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 40);
    }

    // NEXT WORD
    else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <span className="typewriter-text">
      {text}
      <span className="typewriter-cursor">_</span>

      <style jsx>{`
        .typewriter-text {
          display: inline;
        }

        .typewriter-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blinkCursor 0.8s steps(1) infinite;
        }

        @keyframes blinkCursor {
          0%,
          49% {
            opacity: 1;
          }

          50%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}