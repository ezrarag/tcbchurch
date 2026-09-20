import { siteConfig } from "@/site.config";

export default function BeliefsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Doctrinal Statement
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-church-navy">
          What We Believe
        </h1>
      </div>

      <div className="space-y-6 text-slate-800 text-base leading-relaxed">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <h2 className="font-serif font-bold text-xl text-church-navy">The Holy Scriptures</h2>
          <p className="text-sm text-slate-700">
            We believe the Holy Bible is the inspired, infallible, and authoritative Word of God, serving as the supreme rule for faith, practice, and living.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <h2 className="font-serif font-bold text-xl text-church-navy">The Triune God</h2>
          <p className="text-sm text-slate-700">
            We believe in one eternal God, existing in three persons: God the Father, God the Son (Jesus Christ), and God the Holy Spirit.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <h2 className="font-serif font-bold text-xl text-church-navy">Salvation in Jesus Christ</h2>
          <p className="text-sm text-slate-700">
            We believe salvation is a free gift of God&apos;s grace through faith in Jesus Christ, who died for our sins, was buried, and rose triumphantly on the third day.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <h2 className="font-serif font-bold text-xl text-church-navy">The Church & Mission</h2>
          <p className="text-sm text-slate-700">
            We believe the local church is a fellowship of believers committed to worship, discipleship, fellowship, and fulfilling the Great Commission to preach the Gospel.
          </p>
        </div>

        <p className="text-xs text-slate-500 italic pt-4">
          Detailed Baptist Articles of Faith document available upon request. Tagline: &ldquo;{siteConfig.tagline}&rdquo;.
        </p>
      </div>
    </div>
  );
}
