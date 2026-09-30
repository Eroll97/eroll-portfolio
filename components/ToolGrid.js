export default function ToolGrid({ tools }) {
  return (
    <div className="tool-grid">
      {tools.map(([abbr, name]) => (
        <article className="tool-card" key={name} data-reveal>
          <div className="tool-icon">{abbr}</div>
          <strong>{name}</strong>
        </article>
      ))}
    </div>
  );
}
