import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Phone, MapPin } from 'lucide-react';
import profileImage from '../assets/vinnabgcopy.png';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // This will be connected when you provide the resume file
    console.log('Resume download requested');
    alert('Resume download will be available soon!');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Deep space overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-gray-900/40 to-black/60 z-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content with Glass Background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6 lg:space-y-8"
          >
            {/* Glass background for text content */}
            <div className="bg-black/30 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/10 shadow-2xl">
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 neon-text-glow"
                  style={{
                    background: 'linear-gradient(45deg, #60A5FA, #A855F7, #F472B6, #06B6D4)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient-shift 4s ease infinite'
                  }}
                >
                  Vinnarasu
                </motion.h1>
                
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white neon-text-subtle">
                    Full Stack Developer
                  </h2>
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Building scalable applications with{' '}
                    <span className="text-blue-400 font-semibold">Java Spring Boot</span> &{' '}
                    <span className="text-purple-400 font-semibold">React</span>
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Info Bar */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start text-sm mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center justify-center lg:justify-start space-x-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-600 neon-border-subtle">
                  <Mail size={16} className="text-blue-400" />
                  <span className="text-gray-300 text-xs lg:text-sm">vinnarasu.tech@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-600 neon-border-subtle">
                  <Phone size={16} className="text-green-400" />
                  <span className="text-gray-300 text-xs lg:text-sm">+91 9360881096</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  onClick={() => scrollToSection('#projects')}
                  className="px-6 lg:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white neon-button-glow hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Projects
                </motion.button>
                
                <motion.button
                  onClick={handleResumeDownload}
                  className="px-6 lg:px-8 py-3 border-2 border-gray-500 rounded-full font-semibold text-white hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center space-x-2 neon-border-hover text-sm lg:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center lg:justify-start space-x-4 lg:space-x-6 mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {[
                  { icon: Github, href: 'https://github.com/vinnacodes', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/vinnarasu', label: 'LinkedIn' },
                  { icon: Mail, href: '#contact', label: 'Contact' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    onClick={(e) => {
                      if (social.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(social.href);
                      }
                    }}
                    className="p-3 lg:p-4 rounded-full bg-black/40 backdrop-blur-sm border border-gray-600 hover:border-blue-400 transition-all duration-300 neon-social-hover group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <social.icon size={20} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Blended Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Space-themed animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #60A5FA, #A855F7, #F472B6, #06B6D4, #60A5FA)',
                  padding: '3px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-sm"></div>
              </motion.div>
              
              {/* Cosmic particle orbit */}
              <motion.div
                className="absolute inset-2 rounded-full border border-purple-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              ></motion.div>
              
              {/* Floating cosmic particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: `${100 + i * 8}px 0px`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.8
                  }}
                />
              ))}
              
              {/* Profile Image with Space Blend */}
              <motion.div
                className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-gray-700/50 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={profileImage}
                  alt="Vinnarasu - Full Stack Developer"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                
                {/* Space blend overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 mix-blend-screen"></div>
              </motion.div>
              
              {/* Cosmic glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('#about')}
      >
        <div className="flex flex-col items-center space-y-2 bg-black/30 backdrop-blur-md rounded-full px-4 py-3 border border-white/10">
          <span className="text-gray-400 text-xs lg:text-sm">Scroll to explore</span>
          <ArrowDown size={24} className="text-gray-400 hover:text-white transition-colors neon-icon-hover" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;