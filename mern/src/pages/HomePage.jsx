import { Link } from 'react-router-dom';
import avatar from '../assets/meron.jpg';

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Professional Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50"></div>
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.03]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-cyan-200/15 rounded-full blur-xl"></div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          {/* Profile Image with Enhanced Styling */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-lg opacity-20 scale-110"></div>
            <img
              src={avatar}
              alt="Meron Qelati Teweldebrhan"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-blue-100"
            />
          </div>

          {/* Name and Title Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
              Meron Qelati Teweldebrhan
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg">
                Full Stack Software Developer
              </span>
              <span className="text-gray-600 font-medium flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-blue-500"></i>
                Charlotte, NC, USA
              </span>
            </div>
            <p className="text-xl text-gray-700 italic font-light">
              "Building Innovative Fintech Solutions with Code & Precision"
            </p>
          </div>
        </section>

        {/* Skills Highlight Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
              <div className="text-blue-500 text-3xl mb-4">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend Development</h3>
              <p className="text-gray-600">React,,Angular JavaScript, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
              <div className="text-indigo-500 text-3xl mb-4">
                <i className="fas fa-server"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Backend Development</h3>
              <p className="text-gray-600">Java,Spring Boot, Node.js, MongoDB ,mySql, API Development</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
              <div className="text-cyan-500 text-3xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fintech Solutions</h3>
              <p className="text-gray-600">Financial Systems, Data Analysis, Process Optimization</p>
            </div>
          </div>
        </section>

        {/* About Section with Enhanced Layout */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-white/20">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  Detail-oriented and analytical software engineering professional with a unique blend of
                  <span className="font-semibold text-blue-600"> accounting expertise</span> and
                  <span className="font-semibold text-indigo-600"> cutting-edge technology skills</span>.
                </p>
                <p className="mb-6">
                  I specialize in building full-stack applications using modern technologies including
                  <strong> Java, JavaScript, TypeScript, React, Node.js,My Sql and MongoDB</strong>. My background in
                  financial systems gives me a unique perspective on developing robust, scalable solutions
                  for complex business challenges.
                </p>
                <p>
                  Currently enhancing my technical expertise through continuous learning and hands-on projects,
                  with a focus on <strong>fintech solutions</strong>, <strong>accessible user interfaces</strong>,
                  and <strong>API-driven architectures</strong>. I'm passionate about writing clean, maintainable
                  code and leveraging technology to solve real-world problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-blue-100 mb-6">Ready to discuss your next project or explore collaboration opportunities?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <i className="fas fa-envelope"></i>
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;