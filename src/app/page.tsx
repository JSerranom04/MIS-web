import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function Home() {
  return (
    <SiteLayout>
      <section className="space-y-12">
        <FadeInSection>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Project Overview
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              DiffMedDINOv3: Diffusion-Distilled Multi-Task Multi-Modal
              Segmentation
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
              A fast, visual overview of DiffMedDINOv3: what problem it solves,
              how the model is built, and why diffusion-based distillation helps
              medical image segmentation.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delayMs={80}>
          <div className="grid gap-6">
            <div className="rounded-xl border border-subtle bg-elevated p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Authors</h2>
              <dl className="mt-3 space-y-1 text-lg text-muted">
                <div>
                  <dt className="inline font-medium text-foreground">Hao Guo</dt>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">
                    Juan Jose Serrano Mora
                  </dt>
                </div>
                <div className="pt-1">
                  <dt className="inline text-sm font-medium text-foreground">
                    School of Informatics, Computing, and Cyber Systems
                  </dt>
                  <dd className="text-xs text-muted">
                    Northern Arizona University, Flagstaff, AZ
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-subtle bg-elevated p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Project Artifacts</h2>
              <ul className="mt-3 space-y-3 text-lg">
                <li>
                  <a
                    href="/paper/DiffMedDINOv3.pdf"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Paper (PDF)
                  </a>
                  <p className="text-xs text-muted">
                    Place the final manuscript at{" "}
                    <code className="rounded bg-surface px-1 py-0.5 text-[10px]">
                      public/paper/DiffMedDINOv3.pdf
                    </code>
                    .
                  </p>
                </li>
                <li>
                  <a
                    href="https://github.com/alexguo19/diffusion_multi_modality_medimage_segmentation"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    GitHub Repository
                  </a>
                  <p className="text-xs text-muted">
                    Link to the private implementation repository (to be
                    updated).
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </section>
    </SiteLayout>
  );
}


