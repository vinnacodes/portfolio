import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'PROFED – Professional Networking Web App',
      description: 'A modern social networking platform designed to help users discover job opportunities and stay updated with industry trends. Features user profiles, post sharing, and professional connections with responsive design.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: 'Feb 2025',
      status: 'Latest Project'
    },
    {
      title: 'E-Commerce Web Application',
      description: 'Full-stack e-commerce platform built with Spring Boot backend and React frontend. Features user authentication, product catalog, shopping cart, and secure payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Spring Boot', 'React.js', 'MySQL', 'Spring Security', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates. Built with Java Spring Boot REST APIs and React frontend with responsive design.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Banking Management System',
      description: 'Secure banking application with account management, transaction processing, and admin dashboard. Implements Spring Security for authentication.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Spring Boot', 'Hibernate', 'MySQL', 'Spring Security'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Student Information System',
      description: 'Complete student management system with course enrollment, grade tracking, and reporting features. RESTful API design with React frontend.',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'Maven'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Inventory Management API',
      description: 'RESTful API for inventory management with CRUD operations, search functionality, and data validation. Built with Spring Boot and MySQL.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Spring Boot', 'RESTful API', 'MySQL', 'Postman', 'Maven'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts. React frontend consuming external APIs with responsive design and data visualization.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React.js', 'JavaScript', 'API Integration', 'CSS3', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full stack applications showcasing Java Spring Boot backend and React frontend development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 relative"
            >
              {project.status && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    {project.status}
                  </span>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      className="p-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} className="text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.date && (
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </div>
                  )}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-gray-400 text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;