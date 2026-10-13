export function Footer({ tagline, copyright }: { tagline: string; copyright: string }) {
  return (
    <footer className="footer">
      <span className="wordmark small">
        elisa<span className="dot">.</span>
        <small>studio</small>
      </span>
      <p>{tagline}</p>
      <p>{copyright}</p>
    </footer>
  );
}
