import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0e27] border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              SkillBarter
            </div>
            <p className="text-gray-400 text-sm">
              Empowering students to exchange skills and unlock unlimited learning opportunities.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Browse Skills</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Become a Teacher</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 SkillBarter. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with ❤️ for students, by students
          </p>
        </div>
      </div>
    </footer>
  );
}
