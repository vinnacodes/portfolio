import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Globe, Trophy, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust APIs with Java Spring Boot, implementing secure authentication and scalable architecture.'
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'Creating responsive user interfaces with React.js, Redux state management, and modern JavaScript.'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing efficient MySQL databases with proper normalization, joins, and optimized queries.'
    },
    {
      icon: Code,
      title: 'Full Stack Integration',
      description: 'Seamlessly connecting frontend and backend systems with RESTful APIs and modern development practices.'
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Smart India Hackathon 2019',
      subtitle: '1st Place Winner - MSME Innovation Category',
      description: 'Developed a self-charging ceiling fan for energy efficiency and rural electrification. Nationally recognized with cash prize.',
      skills: ['Embedded Programming', 'Innovation', 'Team Leadership', 'Problem Solving']
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Glass background for title */}
          <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Full Stack Developer specializing in Java Spring Boot backend development 
              and React frontend applications. I build scalable, secure, and user-friendly web applications 
              with modern technologies and best practices.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Glass background for feature cards */}
              <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl h-full hover:border-blue-400/30 transition-all duration-300">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon size={32} className="text-blue-400 group-hover:text-purple-400 transition-colors" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Glass background for achievements title */}
          <div className="bg-black/30 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl mb-8">
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Achievements & Recognition
            </h3>
          </div>
          
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <achievement.icon size={32} className="text-yellow-400" />
                </motion.div>
                
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-1 text-white">{achievement.title}</h4>
                  <p className="text-yellow-400 font-semibold mb-3">{achievement.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed mb-4">{achievement.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {achievement.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* SIH Achievement Image with Sliding Animation and Glowing Border */}
                <motion.div
                  className="relative lg:w-80 lg:h-60 w-full h-48 rounded-xl overflow-hidden flex-shrink-0"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Static glowing border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1">
                    <div className="w-full h-full bg-black/20 rounded-lg"></div>
                  </div>
                  
                  {/* SIH Achievement Image */}
                  <motion.img
                    src="/src/assets/VINNA SIH.avif"
                    alt="Smart India Hackathon 2019 Winner - Vinnarasu"
                    className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-lg z-10"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Sliding shine effect */}
                  <motion.div
                    className="absolute inset-2 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-lg z-20"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: 'easeInOut'
                    }}
                  />
                  
                  {/* Achievement badge overlay */}
                  <div className="absolute top-4 right-4 z-30">
                    <motion.div
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      🏆 Winner
                    </motion.div>
                  </div>
                  
                  {/* Pulsing glow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl blur-xl -z-10"
                    style={{
                      background: 'linear-gradient(45deg, #FBBF24, #F59E0B, #EF4444)',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">My Development Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a Full Stack Developer, I specialize in creating end-to-end solutions using Java Spring Boot 
                for robust backend services and React.js for dynamic user interfaces. My expertise spans across 
                the entire development lifecycle.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about writing clean, maintainable code and implementing best practices in 
                software architecture, security, and performance optimization.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Backend Development (Java/Spring)', percentage: 92 },
                { label: 'Frontend Development (React)', percentage: 88 },
                { label: 'Database Design & Management', percentage: 85 },
                { label: 'API Development & Integration', percentage: 90 }
              ].map((skill, index) => (
                <div key={skill.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-300">{skill.label}</span>
                    <span className="text-sm text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
