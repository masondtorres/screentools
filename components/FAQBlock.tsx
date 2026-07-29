export function FAQBlock({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <section aria-labelledby="faq" className="my-10">
      <h2 id="faq" className="text-2xl font-bold">FAQ</h2>
      <div className="mt-4 divide-y divide-line rounded border border-line bg-white">
        {items.map((item) => (
          <details key={item.question} className="group p-4">
            <summary className="cursor-pointer font-semibold">{item.question}</summary>
            <p className="mt-2 text-gray-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
