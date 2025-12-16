import { ReactNode } from "react";
import { Header } from "./Header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface antialiased">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 sm:py-12">
        {children}
      </main>
      <footer className="mt-8 border-t border-subtle bg-elevated/90 py-4 text-xs text-muted">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 sm:flex-row sm:items-center sm:px-6">
          <p>© {new Date().getFullYear()} DiffMedDINOv3.</p>
          <p>Hao Guo · Juan Jose Serrano Mora · Northern Arizona University</p>
        </div>
      </footer>
    </div>
  );
}



