import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Code2, Database, Video, Lock, Zap, Globe } from "lucide-react";

const technologies = [
  { icon: Code2, name: "React", color: "#61DAFB" },
  { icon: Database, name: "PostgreSQL", color: "#4169E1" },
  { icon: Video, name: "WebRTC", color: "#FF6B6B" },
  { icon: Lock, name: "OAuth 2.0", color: "#34D399" },
  { icon: Zap, name: "Redis", color: "#DC2626" },
  { icon: Globe, name: "GraphQL", color: "#E535AB" },
  { icon: Code2, name: "TypeScript", color: "#3178C6" },
  { icon: Database, name: "MongoDB", color: "#47A248" }
];

export function TechStack() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-24 bg-[#0a0e27] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontWeight: 700 }}>
            Technology Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built with modern, scalable technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="glass-strong rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center aspect-square hover:scale-105"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
                style={{ color: tech.color }}
              >
                <tech.icon className="w-12 h-12" />
              </motion.div>

              <div className="text-white text-center" style={{ fontWeight: 600 }}>
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">99.9% Uptime • Enterprise Grade Security</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
