import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function RelatedWorkPage() {
  return (
    <SiteLayout>
      <section className="space-y-8">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Context
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Related Work (Brief)
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Where DiffMedDINOv3 sits among CNNs, Transformers, foundation
              models, and diffusion-based KD.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="grid gap-4">
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                CNN &amp; Transformer baselines
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>U-Net and variants (U-Net++, Attention U-Net, etc.).</li>
                <li>TransUNet, Swin-UNet, and hybrid architectures.</li>
                <li>Strong locality but limited long-range and multi-modal fit.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Foundation &amp; promptable models
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>SAM, MedSAM, and adapter-based approaches.</li>
                <li>MedDINOv3 adapts DINOv3 via CT pretraining and KD.</li>
                <li>Still affected by noisy feature transfer and modality gaps.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                KD &amp; diffusion approaches
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Task-specific KD to compress foundation models.</li>
                <li>Diffusion used to refine or generate segmentation cues.</li>
                <li>
                  DiffMedDINOv3 combines these ideas for feature-space denoising
                  and multi-modal KD.
                </li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}



