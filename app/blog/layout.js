
export default function BlogArticleLayout({ children }) {
  return (
    <div className="blog-article-layout">
      {children}

      <style>{`
        .blog-article-layout {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding-top: 110px;
          background: #070707;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .blog-article-layout {
            padding-top: 95px;
          }
        }
      `}</style>
    </div>
  );
}
