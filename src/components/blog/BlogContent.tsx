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
            return <h2 key={index}>{block.text}</h2>;
          }
          return <h3 key={index}>{block.text}</h3>;
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
            <section key={index} aria-labelledby={`faq-heading-${index}`}>
              <h2 id={`faq-heading-${index}`}>{block.heading}</h2>
              <div className="blog-faq">
                {block.items.map((item) => (
                  <div key={item.question} className="blog-faq-item">
                    <div className="blog-faq-q">{item.question}</div>
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
              <p>{block.body}</p>
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
