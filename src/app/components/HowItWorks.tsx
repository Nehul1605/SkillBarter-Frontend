import { motion } from "motion/react";
import { useInView } from "./useInView";
import { User, Users, Video } from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Create Your Profile",
    description: "Enter skills you know and skills you want to learn. Our algorithm will find your perfect matches.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Get Matched",
    description: "Connect with peers who want to learn what you know and can teach what you want to learn.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Video,
    title: "Exchange & Earn",
    description: "Conduct sessions via Meet/Teams links. Both earn equal credits based on session time (60 min = 60 credits).",
    color: "from-orange-500 to-red-500"
  }
];

export function HowItWorks() {
  const { ref, inView } = useInView();

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#050816] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontWeight: 700 }}>
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to start your skill exchange journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
              className="relative"
            >
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -z-10" />
              )}

              <div className="glass-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Step number */}
                <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity" style={{ fontWeight: 800 }}>
                  {idx + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl mb-3 text-white" style={{ fontWeight: 600 }}>
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline visual */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 max-w-4xl mx-auto mt-12 rounded-full origin-left"
        />
      </div>
    </section>
  );
}