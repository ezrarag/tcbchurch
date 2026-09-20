import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TCBC Admin Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      <header className="bg-church-navy text-white px-6 py-4 shadow-md flex items-center justify-between border-b-2 border-church-gold">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-church-gold text-church-navy font-bold flex items-center justify-center text-sm font-serif">
            TCBC
          </div>
          <span className="font-serif font-bold text-lg">Church Secretary & Admin Portal</span>
        </div>
        <a href="/" className="text-xs text-slate-300 hover:text-white underline">
          View Live Website &rarr;
        </a>
      </header>

      <main className="max-w-7xl mx-auto p-6 sm:p-8">
        {children}
      </main>
    </div>
  );
}
