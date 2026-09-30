'use client';

import { useEffect } from 'react';

export default function Reveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    const observe = (root = document) => {
      root.querySelectorAll?.('[data-reveal]:not(.revealed)').forEach((node) => observer.observe(node));
    };

    observe();
    const mutation = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (node.matches?.('[data-reveal]')) observer.observe(node);
          observe(node);
        }
      }));
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutation.disconnect();
      observer.disconnect();
    };
  }, []);
  return null;
}
