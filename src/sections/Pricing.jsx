import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever free",
    desc: "Perfect for individuals and small projects.",
    features: ["Up to 3 projects", "5,000 AI requests/mo", "Basic analytics", "Email support", "2 integrations"],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    desc: "For growing teams that need more power.",
    features: ["Unlimited projects", "100,000 AI requests/mo", "Advanced analytics", "Priority support", "50+ integrations", "Custom workflows", "Team collaboration"],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "per month",
    desc: "For large teams with advanced needs.",
    features: ["Everything in Pro", "Unlimited AI requests", "White-label option", "Dedicated support", "200+ integrations", "SSO & SAML", "SLA guarantee", "Custom contracts"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="pricing" className="py-28">
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
            Simple pricing
          </span>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Plans for <span className="blue-gradient-text">every team</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 transition-all duration-300 ${
                plan.highlighted
                  ? "glass border-2 border-brand-blue/40 glow-blue scale-105"
                  : "glass border border-dark-border hover:border-brand-blue/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full blue-gradient text-white text-xs font-mono font-600 whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display font-700 text-white text-lg mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="font-display font-700 text-4xl text-white">{plan.price}</span>
                <span className="text-slate-500 text-sm ml-2 font-mono">/{plan.period}</span>
              </div>

              <button className={`w-full py-3 rounded-xl text-sm font-600 mb-7 transition-all ${
                plan.highlighted
                  ? "blue-gradient text-white hover:opacity-90 glow-blue-sm"
                  : "border border-dark-border text-slate-300 hover:border-brand-blue/30 hover:text-white"
              }`}>
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? "blue-gradient" : "bg-dark-border"
                    }`}>
                      <Check size={11} className="text-white" />
                    </div>
                    <span className="text-slate-400">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
