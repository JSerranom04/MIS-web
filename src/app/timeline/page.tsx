import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function TimelinePage() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Plan
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Project Timeline &amp; Plan
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Four phases from design to final write-up.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <ol className="space-y-4 text-base text-muted">
            <li className="rounded-xl border border-subtle bg-elevated p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Phase 1 · Design
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-4">
                <li>Finalize model architecture and diffusion KD design.</li>
                <li>Specify datasets, metrics, and baselines.</li>
              </ul>
            </li>
            <li className="rounded-xl border border-subtle bg-elevated p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Phase 2 · Implementation
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-4">
                <li>Implement teacher and student architectures (DINOv3 + Swin).</li>
                <li>Implement diffusion-based knowledge distillation module.</li>
              </ul>
            </li>
            <li className="rounded-xl border border-subtle bg-elevated p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Phase 3 · Experiments
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-4">
                <li>Prepare datasets and training pipelines (BraTS, AMOS22, FeTS, ISLES).</li>
                <li>Run baseline and ablation experiments; collect metrics.</li>
              </ul>
            </li>
            <li className="rounded-xl border border-subtle bg-elevated p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Phase 4 · Analysis &amp; Write-up
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-4">
                <li>Analyze results and refine the model if needed.</li>
                <li>Prepare paper-style write-up and finalize the website.</li>
              </ul>
            </li>
          </ol>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}



