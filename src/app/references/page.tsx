import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function ReferencesPage() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Sources
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              References
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Only a quick snapshot here—the full list is in the paper PDF.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Examples of key references
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
              <li>U-Net and its variants for CNN-based biomedical segmentation.</li>
              <li>ViT and Swin-Transformer for vision Transformers.</li>
              <li>DINOv3 and MedDINOv3 for vision foundation models.</li>
              <li>SAM and MedSAM for promptable segmentation.</li>
              <li>Diffusion models and diffusion-based segmentation (e.g., DiffuSeg).</li>
              <li>Task-specific knowledge distillation and multi-modal KD methods.</li>
              <li>Recent surveys on medical image segmentation and multimodal learning.</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={140}>
          <div className="rounded-xl border border-dashed border-subtle bg-elevated p-4 text-xs text-muted">
            <p className="font-semibold">Formal bibliography</p>
            <p className="mt-1">
              For citation-ready entries with authors, titles, venues, and years,
              please refer to the reference section in the DiffMedDINOv3 paper
              PDF linked from the Home page.
            </p>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}



