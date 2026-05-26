export function SEOContentSection({ sections }: { sections: Array<{ title: string; body: string[] }> }) {
  return (
    <div className="content-prose">
      {sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </div>
  );
}
