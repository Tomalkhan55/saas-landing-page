import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-blueLight/5 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 py-16">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-sm text-brand-blueLight mb-8">
          <Sparkles size={14} />
          <span className="font-mono">Introducing NexusAI 2.0</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blueLight animate-pulse" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-700 text-5xl md:text-7xl leading-[1.05] tracking-tight text-white mb-6"
        >
          Build Smarter,
          <br />
          <span className="blue-gradient-text">Ship Faster</span>
          <br />
          with AI
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          NexusAI automates your entire workflow — from ideation to deployment.
          Join 12,000+ teams already building the future.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl blue-gradient text-white font-600 text-base hover:opacity-90 transition-all glow-blue group">
            Start for Free
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-dark-border text-slate-300 font-500 text-base hover:border-brand-blue/30 hover:text-white transition-all">
            <Play size={15} className="text-brand-blueLight" />
            Watch Demo
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div {...fadeUp(0.65)} className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500 mb-16">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["A", "M", "R", "Z"].map((a, i) => (
                <div key={i} className="w-7 h-7 rounded-full blue-gradient border-2 border-dark-bg flex items-center justify-center text-white text-xs font-700">
                  {a}
                </div>
              ))}
            </div>
            <span>12,000+ teams</span>
          </div>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-dark-border" />
          <div className="flex items-center gap-1.5">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-yellow-400 text-xs">{s}</span>
            ))}
            <span>4.9/5 rating</span>
          </div>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-dark-border" />
          <span>No credit card required</span>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl border border-dark-border p-1 glow-blue animate-float">
            <div className="bg-dark-card rounded-xl overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-dark-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-dark-muted text-xs text-slate-500 font-mono text-center">
                  app.nexusai.com/dashboard
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-4 grid grid-cols-3 gap-3">
                {[
                  { label: "Revenue", value: "$48.2K" },
                  { label: "Users", value: "12,480" },
                  { label: "Growth", value: "+24%" },
                ].map((card, i) => (
                  <div key={i} className="bg-dark-muted rounded-xl p-3 border border-dark-border">
                    <p className="text-xs text-slate-500 mb-1">{card.label}</p>
                    <p className="text-lg font-display font-700 text-white">{card.value}</p>
                    <div className="mt-2 h-1 rounded-full bg-dark-border">
                      <div className="h-full rounded-full blue-gradient" style={{ width: `${55 + i * 15}%` }} />
                    </div>
                  </div>
                ))}
                <div className="col-span-3 bg-dark-muted rounded-xl p-3 border border-dark-border">
                  <p className="text-xs text-slate-500 mb-2">Revenue Overview</p>
                  <div className="flex items-end gap-1 h-12">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm blue-gradient opacity-70" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
