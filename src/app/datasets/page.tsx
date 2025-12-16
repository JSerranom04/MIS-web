import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function DatasetsPage() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Benchmarks
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Datasets
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Four public datasets covering brain tumors, abdominal organs,
              federated tumors, and ischemic stroke lesions.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="grid gap-4">
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <h2 className="text-lg font-semibold">BraTS (2018–2021)</h2>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Multi-modal brain tumor MRI (T1, T1c, T2, FLAIR).</li>
                <li>Labels: necrosis, edema, enhancing tumor.</li>
                <li>Evaluates multi-modal fusion and tumor sub-regions.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <h2 className="text-lg font-semibold">AMOS22</h2>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Abdominal CT with multiple organ labels.</li>
                <li>Tests cross-anatomy generalization.</li>
                <li>Useful for MRI→CT adaptation with VFMs.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <h2 className="text-lg font-semibold">FeTS</h2>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Federated tumor segmentation across multiple sites.</li>
                <li>Emphasizes distribution shift and heterogeneity.</li>
                <li>Good testbed for robustness and KD generalization.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <h2 className="text-lg font-semibold">ISLES</h2>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Ischemic stroke lesion segmentation.</li>
                <li>Focus on small, challenging lesions.</li>
                <li>Highlights benefits of denoised representations.</li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={140}>
          <p className="max-w-3xl text-xs text-muted">
            All images are resized to 256×256 and normalized using the same mean
            and standard deviation parameters as DINOv3. Official
            training/testing splits provided by dataset organizers are followed.
          </p>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}



