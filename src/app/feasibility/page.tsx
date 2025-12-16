import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function FeasibilityPage() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Can we finish on time?
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Feasibility
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Feasible by leveraging existing models, public datasets, and
              lightweight diffusion in feature space.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="grid gap-4">
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Foundations
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Reuse pretrained DINOv3 and MedDINOv3 setups.</li>
                <li>Rely on standard PyTorch tooling.</li>
                <li>Use established benchmarks (BraTS, AMOS22, FeTS, ISLES).</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Computation
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Diffusion operates in feature space, not pixels.</li>
                <li>Lightweight denoisers keep GPU memory manageable.</li>
                <li>Training fits into a small multi-GPU setup.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Incremental progress
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Start with a subset of datasets and baselines.</li>
                <li>Add diffusion KD and multi-modal extensions step by step.</li>
                <li>Finalize with a focused set of strongest experiments.</li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}



