const projects = [
  {
    name: "ClientFlow",
    blurb: "Multi-tenant client portal with RLS-backed isolation.",
    repo: "https://github.com/hangndat/clientflow",
    live: "https://clientflow-blond.vercel.app",
    status: "Shipped (demo video outstanding)",
  },
  {
    name: "RelayOps",
    blurb: "Webhook delivery with idempotency, retries, DLQ, and ops console.",
    repo: "https://github.com/hangndat/relayops",
    live: "https://relayops-gamma.vercel.app",
    status: "Day 05 ops complete (hosted API partial)",
  },
  {
    name: "DocPilot",
    blurb: "PDF pipeline with schema extraction and grounded Q&A citations.",
    repo: "https://github.com/hangndat/docpilot",
    live: null,
    status: "Days 06–07 complete locally",
  },
];

export default function Page() {
  return (
    <main>
      <p className="meta">hangndat · backend / SaaS / applied AI</p>
      <h1>Engineering that stays honest under evidence.</h1>
      <p>
        Three independent showcases built as vertical slices: tenancy boundaries,
        delivery reliability, and inspectable document AI. No invented metrics.
      </p>
      <section className="projects">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <h2>{project.name}</h2>
            <p>{project.blurb}</p>
            <p className="meta">{project.status}</p>
            <p className="meta">
              <a href={project.repo}>Repository</a>
              {project.live ? (
                <>
                  {" · "}
                  <a href={project.live}>Live</a>
                </>
              ) : null}
            </p>
          </article>
        ))}
      </section>
      <p className="meta" style={{ marginTop: "2.5rem" }}>
        Hub:{" "}
        <a href="https://github.com/hangndat/engineering-portfolio">
          engineering-portfolio
        </a>
      </p>
    </main>
  );
}
