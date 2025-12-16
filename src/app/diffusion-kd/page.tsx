import Image from "next/image";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function DiffusionKDPage() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Feature-space denoising
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Diffusion-Based Knowledge Distillation
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              We diffuse and denoise student features so they converge to the
              teacher representation instead of forcing a one-shot match.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="grid gap-4">
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                1 · Forward diffusion
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Start from fused student features for each modality.</li>
                <li>Inject Gaussian noise over timesteps t = 1, …, T.</li>
                <li>Obtain a noisy feature trajectory analogous to DDPMs.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                2 · Denoising model
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Lightweight Transformer-like denoiser per modality.</li>
                <li>Learns to predict clean features from noisy inputs.</li>
                <li>Conditioned on the timestep index t.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-subtle bg-elevated p-6 text-base shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                3 · Distillation loss
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-base text-muted">
                <li>Compare reconstructed features with teacher tokens.</li>
                <li>Use MSE and KL divergence as reconstruction losses.</li>
                <li>Aggregate across modalities to form the KD objective.</li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={140}>
          <div className="rounded-xl border border-subtle bg-elevated p-4 text-xs text-muted">
            <p className="font-semibold text-sm text-foreground">
              Visual intuition of diffusion KD
            </p>
            <div className="mt-3 overflow-hidden rounded-lg border border-subtle bg-surface">
              <Image
                src="/diffusion_model.svg"
                alt="Diffusion model used for feature-space knowledge distillation"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-2">
              Schematic of noisy student features evolving over timesteps and
              being denoised towards the teacher representation.
            </p>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}



