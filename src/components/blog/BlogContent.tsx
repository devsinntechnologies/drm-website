import Link from "next/link";
import Image from "next/image";
import type { ContentBlock, InlineLink } from "@/lib/blog/types";

function linkifyParagraph(text: string, links: InlineLink[] = []) {
  if (!links.length) return text;

  const sorted = [...links].sort((a, b) => b.label.length - a.label.length);
  type Part = { type: "text" | "link"; value: string; href?: string };
  let parts: Part[] = [{ type: "text", value: text }];

  for (const link of sorted) {
    const next: Part[] = [];
    for (const part of parts) {
      if (part.type !== "text") {
        next.push(part);
        continue;
      }
      const chunks = part.value.split(link.label);
      chunks.forEach((chunk, index) => {
        if (chunk) next.push({ type: "text", value: chunk });
        if (index < chunks.length - 1) {
          next.push({ type: "link", value: link.label, href: link.href });
        }
      });
    }
    parts = next;
  }

  return parts.map((part, index) =>
    part.type === "link" && part.href ? (
      <Link
        key={`${part.href}-${index}`}
        href={part.href}
        className="text-primary font-semibold underline-offset-2 hover:underline"
      >
        {part.value}
      </Link>
    ) : (
      <span key={`t-${index}`}>{part.value}</span>
    )
  );
}

function IntroParagraphs({
  paragraphs,
}: {
  paragraphs: string[];
}) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={
            index === 0
              ? "text-base md:text-lg text-foreground font-medium leading-relaxed mb-4"
              : undefined
          }
        >
          {paragraph}
        </p>
      ))}
    </>
  );
}

export default function BlogContent({
  blocks,
  isFirstSection = true,
}: {
  blocks: ContentBlock[];
  isFirstSection?: boolean;
}) {
  return (
    <div className="blog-content max-w-3xl mx-auto">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .blog-content h2 { font-size: 1.5rem; line-height: 1.8rem; font-weight: 800; color: var(--foreground); margin-top: 2rem; margin-bottom: 1rem; letter-spacing: -0.025em; }
            .blog-content h3 { font-size: 1.15rem; line-height: 1.5rem; font-weight: 800; color: var(--primary); margin-top: 1.5rem; margin-bottom: 0.75rem; }
            .blog-content p { font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin-bottom: 1rem; font-weight: normal; }
            .blog-content ol { list-style: decimal; padding-left: 1.25rem; margin: 1rem 0 1.25rem; color: #4b5563; }
            .blog-content ul { list-style: disc; padding-left: 1.25rem; margin: 1rem 0 1.25rem; color: #4b5563; }
            .blog-content ol li, .blog-content ul li { margin-bottom: 0.5rem; line-height: 1.6; font-size: 0.95rem; }
            .blog-content .blog-callout { border-left: 3px solid var(--primary); background: rgba(0, 85, 255, 0.05); padding: 1rem 1.25rem; border-top-right-radius: 0.75rem; border-bottom-right-radius: 0.75rem; color: var(--foreground); margin: 1.5rem 0; }
            .blog-content .blog-callout-title { font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.35rem; color: var(--primary); }
            .blog-content .blog-callout-body { font-weight: 700; font-size: 0.95rem; line-height: 1.5; }
            .blog-content .blog-faq { margin-top: 1rem; display: grid; gap: 0.75rem; }
            .blog-content .blog-faq-item { border: 1px solid var(--surface-border); border-radius: 0.75rem; padding: 1rem 1.1rem; background: var(--surface); }
            .blog-content .blog-faq-q { font-weight: 800; color: var(--foreground); font-size: 0.95rem; margin-bottom: 0.4rem; }
            .blog-content .blog-faq-a { font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0; }
            .blog-content .blog-cta { margin-top: 2rem; padding: 1.25rem 1.35rem; border-radius: 1rem; border: 1px solid color-mix(in srgb, var(--primary) 25%, var(--surface-border)); background: color-mix(in srgb, var(--primary) 6%, var(--surface)); }
            .blog-content .blog-cta h2 { margin-top: 0; }
            .blog-content [id] { scroll-margin-top: 84px; }
            .blog-content h3.blog-faq-q { margin: 0 0 0.4rem; line-height: 1.4; }
            .blog-content .blog-jump { margin: 1.25rem 0 1.75rem; padding: 1rem 1.15rem; border: 1px solid var(--surface-border); border-radius: 0.875rem; background: var(--surface); }
            .blog-content .blog-jump-title { font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--foreground); margin-bottom: 0.5rem; }
            .blog-content .blog-jump ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.35rem; }
            .blog-content .blog-jump li { margin: 0; font-size: 0.95rem; }
            .blog-content .blog-jump a { color: var(--primary); font-weight: 600; text-underline-offset: 2px; }
            .blog-content .blog-jump a:hover { text-decoration: underline; }
            .blog-content .blog-table-wrap { margin: 1.25rem 0 1.5rem; overflow-x: auto; border: 1px solid var(--surface-border); border-radius: 0.875rem; background: var(--surface); }
            .blog-content table { width: 100%; border-collapse: collapse; font-size: 0.95rem; line-height: 1.55; }
            .blog-content th, .blog-content td { padding: 0.75rem 1rem; text-align: left; vertical-align: top; border-bottom: 1px solid var(--surface-border); }
            .blog-content tr:last-child th, .blog-content tr:last-child td { border-bottom: 0; }
            .blog-content thead th { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground); background: color-mix(in srgb, var(--primary) 6%, var(--surface)); }
            .blog-content tbody th { font-weight: 700; color: var(--foreground); width: 38%; }
            .blog-content tbody td { color: #4b5563; }
            @media (max-width: 480px) {
              .blog-content thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
              .blog-content tbody tr { display: block; padding: 0.75rem 1rem; border-bottom: 1px solid var(--surface-border); }
              .blog-content tbody tr:last-child { border-bottom: 0; }
              .blog-content tbody th, .blog-content tbody td { display: block; width: auto; padding: 0; border: 0; }
              .blog-content tbody th { margin-bottom: 0.25rem; }
            }
          `,
        }}
      />

      {blocks.map((block, index) => {
        if (block.type === "paragraphs") {
          const useIntroStyle = isFirstSection && index === 0;

          if (useIntroStyle) {
            return <IntroParagraphs key={index} paragraphs={block.paragraphs} />;
          }

          return (
            <div key={index}>
              {block.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>
                  {linkifyParagraph(paragraph, block.links)}
                </p>
              ))}
            </div>
          );
        }

        if (block.type === "heading") {
          if (block.level === 2) {
            return <h2 key={index} id={block.id}>{block.text}</h2>;
          }
          return <h3 key={index} id={block.id}>{block.text}</h3>;
        }

        if (block.type === "jump-links") {
          return (
            <nav key={index} className="blog-jump" aria-label={block.title}>
              <div className="blog-jump-title">{block.title}</div>
              <ul>
                {block.items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          );
        }

        if (block.type === "link-list") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-primary font-semibold underline-offset-2 hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "table") {
          return (
            <div key={index} className="blog-table-wrap" role="region" aria-label={block.label} tabIndex={0}>
              <table>
                <caption className="sr-only">{block.label}</caption>
                <thead>
                  <tr>
                    {block.columns.map((column) => (
                      <th key={column} scope="col">{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map(([rowHeader, ...cells]) => (
                    <tr key={rowHeader}>
                      <th scope="row">{rowHeader}</th>
                      {cells.map((cell, cIndex) => (
                        <td key={cIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.type === "callout") {
          return (
            <aside key={index} className="blog-callout" aria-label={block.title}>
              <div className="blog-callout-title">{block.title}</div>
              <div className="blog-callout-body">{block.text}</div>
            </aside>
          );
        }

        if (block.type === "ordered-list") {
          return (
            <div key={index}>
              {block.intro
                ? block.intro.split("\n\n").map((para, i) => <p key={`intro-${i}`}>{para}</p>)
                : null}
              <ol>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              {block.outro ? <p>{block.outro}</p> : null}
            </div>
          );
        }

        if (block.type === "bullet-list") {
          return (
            <div key={index}>
              {block.intro ? <p>{linkifyParagraph(block.intro, block.links)}</p> : null}
              <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
              {block.outro ? <p>{linkifyParagraph(block.outro, block.links)}</p> : null}
            </div>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={index} className="my-7 overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-md">
              <Image
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full object-cover"
              />
            </figure>
          );
        }

        if (block.type === "faq-section") {
          return (
            <section key={index} aria-labelledby={block.id ?? `faq-heading-${index}`}>
              <h2 id={block.id ?? `faq-heading-${index}`}>{block.heading}</h2>
              <div data-no-tilt className="blog-faq">
                {block.items.map((item) => (
                  <div key={item.question} className="blog-faq-item">
                    {block.questionHeadings ? (
                      <h3 className="blog-faq-q">{item.question}</h3>
                    ) : (
                      <div className="blog-faq-q">{item.question}</div>
                    )}
                    <p className="blog-faq-a">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        }

        if (block.type === "cta") {
          return (
            <section key={index} className="blog-cta">
              <h2>{block.title}</h2>
              <p>{linkifyParagraph(block.body, block.links)}</p>
              <Link
                href={block.href}
                className="inline-flex items-center justify-center mt-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity"
              >
                {block.buttonLabel}
              </Link>
              {block.secondaryButtonLabel && block.secondaryHref ? (
                <Link
                  href={block.secondaryHref}
                  className="inline-flex items-center justify-center mt-2 ml-2 px-4 py-2.5 rounded-xl border border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors"
                >
                  {block.secondaryButtonLabel}
                </Link>
              ) : null}
            </section>
          );
        }

        return null;
      })}
    </div>
  );
}
