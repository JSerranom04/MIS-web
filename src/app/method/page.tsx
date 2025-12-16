import Image from "next/image";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function MethodPage() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Architecture
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Method: DiffMedDINOv3
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Four main blocks: DINOv3 teacher, shared + modality-specific Swin
              students, diffusion KD, and an MLP decoder.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="grid gap-4">
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Teacher
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Pretrained DINOv3 ViT encoder.</li>
                <li>Produces modality-specific token sequences.</li>
                <li>Acts as high-capacity reference for KD.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Shared student
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Multi-stage Swin-Transformer backbone.</li>
                <li>Models anatomy shared across modalities.</li>
                <li>Produces high-resolution feature maps.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Modality-specific students
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>One Swin branch per MRI modality.</li>
                <li>No weight sharing across modalities.</li>
                <li>Captures appearance and contrast differences.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Fusion &amp; decoder
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Concatenate shared and modality-specific features.</li>
                <li>Additional Swin block to refine fused tokens.</li>
                <li>MLP head outputs voxel-wise class probabilities.</li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={140}>
          <div className="grid gap-6">
            <div className="rounded-xl border border-subtle bg-elevated p-4 text-xs text-muted">
              <p className="font-semibold text-sm text-foreground">
                Architecture overview
              </p>
              <div className="mt-3 overflow-hidden rounded-lg border border-subtle bg-surface">
                <Image
                  src="/architecture.svg"
                  alt="DiffMedDINOv3 architecture overview"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <p className="mt-2">
                High-level view of the teacher–student design and multi-modal
                branches.
              </p>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-4 text-xs text-muted">
              <p className="font-semibold text-sm text-foreground">
                Fine-tuning / segmentation pipeline
              </p>
              <div className="mt-3 overflow-hidden rounded-lg border border-subtle bg-surface">
                <Image
                  src="/finetune.svg"
                  alt="Fine-tuning and segmentation pipeline"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-2">
                Illustration of the end-to-end training and inference flow for
                medical image segmentation.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}



