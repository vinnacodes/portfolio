import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'RESTful API', 'Spring Security', 'Maven', 'Hibernate'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Redux', 'JavaScript (ES6)', 'HTML5', 'CSS3', 'Bootstrap'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database',
      skills: ['MySQL', 'SQL Joins', 'Schema Design', 'CRUD Operations', 'Normalization', 'Relational DB'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'IntelliJ IDEA'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
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
              Technical Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit for full stack development with modern technologies
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 shadow-2xl"
            >
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10,
                      z: 50
                    }}
                    className="bg-black/40 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-black/60 transition-all duration-300 cursor-pointer border border-white/10 hover:border-blue-400/30"
                  >
                    <span className="text-gray-200 font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Development Approach</h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              I follow industry best practices including Object-Oriented Programming principles, 
              responsive design patterns, and secure coding standards. My focus is on creating 
              maintainable, scalable applications with clean architecture and optimal performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;