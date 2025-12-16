import Image from "next/image";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function ExperimentsPage() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Evaluation
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Experiments &amp; Results
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              High-level view of metrics, baselines, and expected gains from
              diffusion KD and multi-modal design.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="grid gap-4">
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Metrics
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Dice coefficient per structure and averaged.</li>
                <li>Hausdorff distance and surface-based metrics.</li>
                <li>Optional calibration or robustness measures.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Baselines
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>MedDINOv3 as the main VFM baseline.</li>
                <li>Representative CNN/Transformer models.</li>
                <li>Variants without diffusion or multi-modal design.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Expected trends
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Improved Dice on challenging structures.</li>
                <li>More stable performance across modalities.</li>
                <li>Stronger generalization across datasets.</li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={140}>
          <div className="rounded-xl border border-dashed border-subtle bg-elevated p-4 text-xs text-muted">
            <p className="font-semibold text-sm text-foreground">
              Quantitative results (coming soon)
            </p>
            <p className="mt-1">
              Final quantitative tables (e.g., dataset × method × Dice) and
              optional plots such as per-structure bar charts will be added
              here once experiments are complete.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={200}>
          <div className="grid gap-6">
            <div className="rounded-xl border border-subtle bg-elevated p-4 text-xs text-muted">
              <p className="font-semibold text-sm text-foreground">
                Qualitative examples
              </p>
              <div className="mt-3 space-y-4">
                <div className="overflow-hidden rounded-lg border border-subtle bg-surface">
                  <Image
                    src="/image1.svg"
                    alt="Qualitative example 1 for medical image segmentation"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-subtle bg-surface">
                  <Image
                    src="/image3.svg"
                    alt="Qualitative example 2 for medical image segmentation"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-subtle bg-surface">
                  <Image
                    src="/image4.svg"
                    alt="Qualitative example 3 for medical image segmentation"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}



