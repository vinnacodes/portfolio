import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Phone, MapPin } from 'lucide-react';
import profileImage from '../assets/vinna.png';

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
      {/* Cosmic background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/40 z-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4 neon-text-glow"
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
                <h2 className="text-2xl md:text-3xl font-semibold text-white neon-text-subtle">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  Building scalable applications with{' '}
                  <span className="text-blue-400 font-semibold">Java Spring Boot</span> &{' '}
                  <span className="text-purple-400 font-semibold">React</span>
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Info Bar */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-700 neon-border-subtle">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">vinnarasu.tech@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-700 neon-border-subtle">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-300">+91 9360881096</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white neon-button-glow hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.button>
              
              <motion.button
                onClick={handleResumeDownload}
                className="px-8 py-3 border-2 border-gray-600 rounded-full font-semibold text-white hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center space-x-2 neon-border-hover"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
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
                  className="p-4 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300 neon-social-hover group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <social.icon size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Animated rings around image */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #60A5FA, #A855F7, #F472B6, #06B6D4, #60A5FA)',
                  padding: '4px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </motion.div>
              
              {/* Secondary ring */}
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-purple-500/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              ></motion.div>
              
              {/* Floating particles around image */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: `${120 + i * 10}px 0px`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.5
                  }}
                />
              ))}
              
              {/* Profile Image */}
              <motion.div
                className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
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
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
              </motion.div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('#about')}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <ArrowDown size={32} className="text-gray-400 hover:text-white transition-colors neon-icon-hover" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;