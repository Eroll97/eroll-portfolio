
/* ==========================================
   EROLL OLIVER - BLOG LAYOUT
   FIXED DOUBLE TOP SPACING
========================================== */

export default function BlogArticleLayout({ children }) {
  return (
    <div className="blog-article-layout">
      {children}

      <style>{`
        .blog-article-layout {
          position: relative;
          width: 100%;
          min-height: 100vh;

          /* REMOVE EXTRA TOP SPACING */
          padding: 0;
          margin: 0;

          background: #070707;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .blog-article-layout {
            padding: 0;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
