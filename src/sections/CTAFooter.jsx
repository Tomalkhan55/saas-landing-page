import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Zap, ExternalLink, Code2, Link } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-16 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center glass border border-brand-blue/20 rounded-3xl p-14 glow-blue relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/8 via-transparent to-brand-blueLight/5 pointer-events-none" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl blue-gradient flex items-center justify-center mx-auto mb-6 glow-blue animate-pulse-glow">
            <Zap size={24} className="text-white" />
          </div>

          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Ready to build <span className="blue-gradient-text">smarter?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
            Join 12,000+ teams already using NexusAI. Start free — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-xl blue-gradient text-white font-600 text-base hover:opacity-90 transition-all glow-blue group">
              Get Started Free
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-sm text-slate-400 hover:text-white transition-colors px-4 py-2">
              Talk to sales →
            </button>
          </div>

          <p className="text-slate-600 text-xs mt-6 font-mono">
            Free forever • No credit card • Cancel anytime
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-dark-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg blue-gradient flex items-center justify-center">
              <Zap size={14} className="text-white" />
            </div>
            <span className="font-display font-700 text-white">
              Nexus<span className="blue-gradient-text">AI</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-slate-500">
            {["Privacy", "Terms", "Blog", "Docs", "Status"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[ExternalLink, Code2, Link].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-lg glass border border-dark-border flex items-center justify-center text-slate-500 hover:text-white hover:border-brand-blue/30 transition-all">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-border text-center text-xs text-slate-600 font-mono">
          © 2024 NexusAI. All rights reserved. Built with React + Framer Motion.
        </div>
      </div>
    </footer>
  );
}
