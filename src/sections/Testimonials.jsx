import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at Verve Labs",
    avatar: "SC",
    text: "NexusAI cut our deployment time by 60%. The AI automation is genuinely intelligent — it learned our workflow in days.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Founder at Stackify",
    avatar: "MW",
    text: "We tried 6 different tools before NexusAI. Nothing comes close to how seamlessly it integrates with our existing stack.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Head of Product at Loopline",
    avatar: "PS",
    text: "The analytics alone are worth the price. Real-time dashboards that actually make sense — not just pretty charts.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Engineering Lead at Draftbit",
    avatar: "JO",
    text: "Our team of 40 switched to NexusAI in one weekend. The onboarding was that smooth. Incredible product.",
    rating: 5,
  },
  {
    name: "Anika Patel",
    role: "CEO at Flowstate",
    avatar: "AP",
    text: "Revenue up 40% in Q3 after switching. Hard to say how much is NexusAI but our team credits it heavily.",
    rating: 5,
  },
  {
    name: "Tom Eriksson",
    role: "DevOps at Northpine",
    avatar: "TE",
    text: "The integrations are unmatched. We connected everything in one afternoon. Support team is also fantastic.",
    rating: 5,
  },
];

function TestimonialCard({ t, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass border border-dark-border rounded-2xl p-6 hover:border-brand-blue/20 transition-all duration-300"
    >
      <div className="flex gap-0.5 mb-4">
        {"★★★★★".split("").map((s, i) => (
          <span key={i} className="text-yellow-400 text-sm">{s}</span>
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full blue-gradient flex items-center justify-center text-white text-xs font-display font-700">
          {t.avatar}
        </div>
        <div>
          <p className="text-white text-sm font-600">{t.name}</p>
          <p className="text-slate-500 text-xs font-mono">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="testimonials" className="py-4">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-brand-blueLight bg-brand-blue/10 border border-brand-blue/20 mb-4">
            Loved by teams
          </span>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white mb-4">
            Don't take our <span className="blue-gradient-text">word for it</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            12,000+ teams trust NexusAI to run their operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
