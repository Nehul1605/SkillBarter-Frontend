import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            SkillBarter
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="px-6 py-2 text-white hover:text-blue-400 transition-colors" style={{ fontWeight: 500 }}>
              Sign In
            </Link>
            <Link to="/signup" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white hover:scale-105 transition-transform" style={{ fontWeight: 600 }}>
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors py-2">How it Works</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors py-2">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors py-2">Testimonials</a>
              <div className="border-t border-white/10 pt-4 mt-2">
                <Link to="/login" className="block w-full px-6 py-2 text-center text-white hover:text-blue-400 transition-colors mb-2" style={{ fontWeight: 500 }}>
                  Sign In
                </Link>
                <Link to="/signup" className="block w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-center" style={{ fontWeight: 600 }}>
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}