import { motion } from "motion/react";
import { useInView } from "./useInView";
import Slider from "react-slick";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Computer Science Student",
    avatar: "AJ",
    rating: 5,
    text: "SkillBarter changed my college experience! I taught Python and learned graphic design without spending a dime. The credit system is genius!",
    skills: "Taught: Python • Learned: Design"
  },
  {
    name: "Maria Garcia",
    role: "Business Major",
    avatar: "MG",
    rating: 5,
    text: "I was skeptical at first, but after my first session teaching Spanish, I was hooked. The community is amazing and everyone is genuinely here to help.",
    skills: "Taught: Spanish • Learned: Marketing"
  },
  {
    name: "David Chen",
    role: "Engineering Student",
    avatar: "DC",
    rating: 5,
    text: "The video integration is seamless. I've had over 50 sessions teaching web dev and learning music production. Best decision ever!",
    skills: "Taught: Web Dev • Learned: Music"
  },
  {
    name: "Sarah Williams",
    role: "Art Student",
    avatar: "SW",
    rating: 5,
    text: "As an art student, I never thought I could afford coding lessons. SkillBarter made it possible by letting me teach illustration in exchange!",
    skills: "Taught: Illustration • Learned: Coding"
  },
  {
    name: "James Park",
    role: "Economics Student",
    avatar: "JP",
    rating: 5,
    text: "The platform is incredibly well-designed. Scheduling is easy, payments are automatic via credits, and I've met some brilliant people.",
    skills: "Taught: Economics • Learned: Photography"
  }
];

export function Testimonials() {
  const { ref, inView } = useInView();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#050816] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontWeight: 700 }}>
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real experiences from our community of learners and teachers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="px-3">
                <div className="glass-strong rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>

                  {/* Skills */}
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <p className="text-xs text-blue-400">{testimonial.skills}</p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white" style={{ fontWeight: 600 }}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white" style={{ fontWeight: 600 }}>{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}