import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function MotivationPage() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Why this project?
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Motivation &amp; Problem Definition
              </h1>
              <p className="text-lg leading-relaxed text-muted">
                Clinical workflows depend on precise multi-modal segmentations,
                but distilling large vision foundation models into efficient
                backbones often introduces noise and harms robustness.
              </p>
            </div>
            <aside className="mt-2 w-full max-w-sm rounded-xl border border-subtle bg-elevated p-4 text-xs shadow-sm md:mt-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                At a glance
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <p className="text-[11px] font-medium text-muted">
                    Core task
                  </p>
                  <p className="text-base">
                    Multi-modal medical image segmentation (MRI / CT).
                  </p>
                </li>
                <li>
                  <p className="text-[11px] font-medium text-muted">
                    Setting
                  </p>
                  <p className="text-base">
                    Teacher–student with a DINOv3 teacher and Swin-based
                    students.
                  </p>
                </li>
              </ul>
            </aside>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="grid gap-4">
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Problem
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4">
                <li>Distillation from large VFMs can introduce noisy features.</li>
                <li>Noise degrades boundary quality and small structures.</li>
                <li>Cross-modality generalization is limited.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Clinical constraints
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4">
                <li>Heterogeneous MRI sequences and scanners.</li>
                <li>Need for robust performance across datasets.</li>
                <li>Compute and memory budgets in practice.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Proposed direction
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4">
                <li>Use diffusion to denoise student features.</li>
                <li>Combine shared and modality-specific Swin students.</li>
                <li>Jointly optimize distillation and segmentation losses.</li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}




