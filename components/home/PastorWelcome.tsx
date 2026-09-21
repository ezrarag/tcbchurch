import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Quote, ArrowRight, Award } from "lucide-react";

export function PastorWelcome() {
  return (
    <section className="w-full bg-[#221c19] py-16 lg:py-24 px-4 sm:px-6 lg:px-12 text-stone-100">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-center">
        {/* Left Column: Pastor Card */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-md rounded-2xl bg-[#581120] text-stone-100 p-8 sm:p-10 shadow-2xl border border-amber-500/30 flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-black/40 border-2 border-amber-400/60 flex items-center justify-center text-amber-300 font-serif font-bold text-2xl shadow-inner">
              TCBC
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-amber-300/80 font-sans block">
                {siteConfig.pastorTitle}
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                {siteConfig.pastorName}
              </h3>
              <span className="text-xs text-stone-300 font-light block">
                Senior Pastor & Teacher
              </span>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full shadow-sm">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Celebrating 100 Years</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Welcome Text */}
        <div className="space-y-6 text-left max-w-[65ch]">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-widest">
            <Quote className="w-4 h-4 text-amber-400 fill-current" />
            <span>Welcome Message from Our Pastor</span>
          </div>

          <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-amber-50 leading-[1.15]">
            Greetings in the Name of Our Lord Jesus Christ
          </h2>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Welcome to Tabernacle Community Baptist Church. Celebrating 100 years of God&apos;s grace and ministry in Milwaukee, we are a preaching, teaching, and healing community of faith dedicated to empowering and transforming lives through God&apos;s holy Word. Whether you are seeking a church home, prayer support, or searching for answers about faith, you are welcome here.
          </p>

          <div className="pt-2">
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 font-medium text-amber-400 hover:text-amber-300 transition-colors text-base group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1"
            >
              <span>Learn more about Pastoral Leadership & Clergy</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
