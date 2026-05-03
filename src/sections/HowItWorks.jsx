import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    desc: "Sign up in seconds. No credit card needed. Connect your existing tools with one click.",
  },
  {
    icon: Settings,
    title: "Configure your workflow",
    desc: "Tell NexusAI how your team works. Our AI adapts to your processes, not the other way around.",
  },
  {
    icon: Rocket,
    title: "Launch and scale",
    desc: "Go live instantly. Watch your productivity soar as NexusAI automates the work that slows you down.",
  },
];

function Step({ step, index, inView }) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="text-center group"
    >
      <div className="relative inline-flex mb-6">
        <div className="w-20 h-20 rounded-2xl glass border border-dark-border flex items-center justify-center group-hover:border-brand-blue/30 transition-all duration-300">
          <Icon size={28} className="text-brand-blueLight" />
        </div>
        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full blue-gradient text-white text-xs font-mono font-700 flex items-center justify-center">
          {index + 1}
        </span>
      </div>
      <h3 className="font-display font-600 text-white text-xl mb-3">{step.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-brand-blueLight bg-brand-blue/10 border border-brand-blue/20 mb-4">
            Simple setup
          </span>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Up and running in <span className="blue-gradient-text">3 steps</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Most teams are fully set up in under 10 minutes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <Step key={i} step={step} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
