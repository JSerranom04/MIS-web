import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function ContributionsPage() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              What is new?
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Contributions
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Snapshot of the main architectural and empirical contributions.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="grid gap-4">
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Methodological
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>
                  A{" "}
                  <span className="font-medium text-foreground">
                    diffusion-distilled multi-task multi-modal framework
                  </span>{" "}
                  that explicitly denoises student representations to better
                  align with a DINOv3-based teacher.
                </li>
                <li>
                  A{" "}
                  <span className="font-medium text-foreground">
                    shared Swin-Transformer encoder with modality-specific
                    branches
                  </span>{" "}
                  to capture both common structure and modality-dependent cues
                  in MRI and CT.
                </li>
                <li>
                  A{" "}
                  <span className="font-medium text-foreground">
                    feature-space diffusion process
                  </span>{" "}
                  integrated with an MLP-based segmentation decoder trained with
                  Dice and cross-entropy losses.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Empirical
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>
                  A{" "}
                  <span className="font-medium text-foreground">
                    systematic study across BraTS, AMOS22, FeTS, and ISLES
                  </span>{" "}
                  evaluating modality robustness and cross-dataset
                  generalization.
                </li>
                <li>
                  Ablations clarifying{" "}
                  <span className="font-medium text-foreground">
                    when diffusion KD and multi-modal design are most beneficial
                  </span>
                  .
                </li>
                <li>
                  Insights that can guide{" "}
                  <span className="font-medium text-foreground">
                    future foundation-model distillation strategies
                  </span>{" "}
                  for other clinical tasks.
                </li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}



