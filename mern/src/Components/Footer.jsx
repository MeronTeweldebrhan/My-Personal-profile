function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>

      <div className="relative container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Meron Qelati Teweldebrhan
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Full Stack Software Developer passionate about creating innovative fintech solutions
              and building accessible, user-friendly applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-blue-200">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-blue-100 hover:text-white transition-colors duration-300">Home</a>
              <a href="/projects" className="block text-blue-100 hover:text-white transition-colors duration-300">Projects</a>
              <a href="/contact" className="block text-blue-100 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-blue-200">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/MeronTeweldebrhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/meron-teweldebrhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="mailto:meron@example.com"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-blue-100 text-sm">
            &copy; 2025 Meron Qelati Teweldebrhan. All rights reserved.
          </p>
          <p className="text-blue-200 text-xs mt-2">
            Built with React, Tailwind CSS, and passion for clean code.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;