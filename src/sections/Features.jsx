import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Zap, BarChart3, Shield, GitBranch, Globe } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    desc: "Let NexusAI handle repetitive tasks. Our AI learns your workflow and automates everything from data entry to report generation.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    desc: "Built on edge infrastructure with sub-100ms response times. Your team stays productive without waiting.",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Get instant insights with live dashboards. Track every metric that matters with beautiful, interactive charts.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "SOC 2 Type II certified. End-to-end encryption, SSO, and granular permissions to keep your data safe.",
    color: "blue",
  },
  {
    icon: GitBranch,
    title: "Seamless Integrations",
    desc: "Connect with 200+ tools you already use — Slack, GitHub, Jira, Salesforce, and more in one click.",
    color: "blue",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    desc: "Work across time zones with real-time sync. Comments, mentions, and live cursors keep everyone aligned.",
    color: "blue",
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group p-6 rounded-2xl glass border border-dark-border hover:border-brand-blue/25 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-11 h-11 rounded-xl blue-gradient flex items-center justify-center mb-4 glow-blue-sm group-hover:scale-110 transition-transform duration-300">
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="font-display font-600 text-white text-lg mb-2">{feature.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="features" className="py-4 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-brand-blueLight bg-brand-blue/10 border border-brand-blue/20 mb-4">
            Everything you need
          </span>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Features that <span className="blue-gradient-text">scale with you</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From solo founders to enterprise teams — NexusAI grows with your business.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
