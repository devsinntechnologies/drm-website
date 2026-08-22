import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

export default function WorkflowSteps({
  label = "Workflow",
  title,
  steps,
  reverse = false,
}: {
  label?: string;
  title: string;
  steps: string[];
  reverse?: boolean;
}) {
  return (
    <SectionShell tone={reverse ? "background" : "surface"}>
      <SectionHeader label={label} title={title} className="mb-6 md:mb-8" />
      <ol className="space-y-4 max-w-3xl">
        {steps.map((step, idx) => (
          <li key={step} className="flex gap-4 items-start">
            <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center">
              {idx + 1}
            </span>
            <p className="type-body text-muted leading-relaxed pt-0.5">{step}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
