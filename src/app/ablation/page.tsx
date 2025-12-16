import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function AblationPage() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              What matters most?
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ablation Studies
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Which components of DiffMedDINOv3 actually move the needle.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="grid gap-4">
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Core ablations
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>No diffusion KD vs. full diffusion KD.</li>
                <li>Shared student only vs. modality-specific only.</li>
                <li>Without fusion Swin block vs. with fusion.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Questions
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>How much does diffusion denoising improve robustness?</li>
                <li>When are modality-specific branches most useful?</li>
                <li>Does the fusion design help small structures?</li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={140}>
          <div className="rounded-xl border border-dashed border-subtle bg-elevated p-4 text-xs text-muted">
            <p className="font-semibold text-sm text-foreground">
              Ablation summary (coming soon)
            </p>
            <p className="mt-1">
              Once experiments are finished, this section will summarize the
              impact of each module with concrete numbers for the core
              ablations listed above.
            </p>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}



