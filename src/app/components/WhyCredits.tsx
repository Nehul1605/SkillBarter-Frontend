import { motion } from "motion/react";
import { useInView } from "./useInView";
import { ArrowRight, Users, Repeat, TrendingUp } from "lucide-react";

export function WhyCredits() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-24 bg-[#050816] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontWeight: 700 }}>
            Why Credits Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A fair, decentralized economy built on mutual value exchange
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Credit flow diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-strong rounded-3xl p-8 md:p-12 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Student A */}
              <motion.div
                animate={inView ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="text-white mb-2" style={{ fontWeight: 600 }}>Student A</div>
                <div className="text-sm text-gray-400">Teaches: Web Dev</div>
                <div className="text-sm text-green-400 mt-2">Earns 25 credits</div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-12 h-12 text-blue-400" />
                </motion.div>
              </div>

              {/* Student B */}
              <motion.div
                animate={inView ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="text-white mb-2" style={{ fontWeight: 600 }}>Student B</div>
                <div className="text-sm text-gray-400">Learns: Web Dev</div>
                <div className="text-sm text-orange-400 mt-2">Spends 25 credits</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-8 origin-center"
            />

            {/* Reverse flow */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Student B (now teaching) */}
              <motion.div
                animate={inView ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="text-white mb-2" style={{ fontWeight: 600 }}>Student B</div>
                <div className="text-sm text-gray-400">Teaches: Design</div>
                <div className="text-sm text-green-400 mt-2">Earns 25 credits</div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                  <ArrowRight className="w-12 h-12 text-purple-400" />
                </motion.div>
              </div>

              {/* Student A (now learning) */}
              <motion.div
                animate={inView ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="text-white mb-2" style={{ fontWeight: 600 }}>Student A</div>
                <div className="text-sm text-gray-400">Learns: Design</div>
                <div className="text-sm text-orange-400 mt-2">Spends 25 credits</div>
              </motion.div>
            </div>

            <div className="text-center mt-8 flex items-center justify-center gap-2 text-blue-400">
              <Repeat className="w-5 h-5" />
              <span className="text-sm" style={{ fontWeight: 500 }}>Continuous Value Exchange</span>
            </div>
          </motion.div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "No Money Required",
                description: "Learn premium skills without spending real money"
              },
              {
                icon: "⚖️",
                title: "Fair Exchange",
                description: "Everyone's knowledge has equal value in credits"
              },
              {
                icon: "🔄",
                title: "Self-Sustaining",
                description: "Teach to earn, learn to grow - the cycle continues"
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">{benefit.icon}</div>
                <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
