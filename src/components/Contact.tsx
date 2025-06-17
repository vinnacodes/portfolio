import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'vinnarasu.tech@gmail.com',
      link: 'mailto:vinnarasu.tech@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 9360881096',
      link: 'tel:+919360881096'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'India',
      link: '#'
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/vinnacodes', 
      label: 'GitHub',
      username: '@vinnacodes'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/vinnarasu', 
      label: 'LinkedIn',
      username: 'vinnarasu'
    },
    { 
      icon: ExternalLink, 
      href: 'https://vinnarasu.tech', 
      label: 'Portfolio',
      username: 'vinnarasu.tech'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text-glow">
              <span style={{
                background: 'linear-gradient(45deg, #60A5FA, #A855F7, #F472B6)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-shift 3s ease infinite'
              }}>
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white neon-text-subtle">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 neon-input-focus backdrop-blur-sm"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 neon-input-focus backdrop-blur-sm"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 neon-input-focus backdrop-blur-sm"
                />
              </motion.div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 resize-none transition-all duration-300 neon-input-focus backdrop-blur-sm"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl neon-button-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white neon-text-subtle">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-black/40 transition-all duration-300 group cursor-pointer neon-contact-hover"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300 neon-icon-bg">
                      <item.icon size={24} className="text-blue-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{item.info}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white neon-text-subtle">Connect With Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-black/30 rounded-xl hover:bg-black/50 transition-all duration-300 group border border-white/10 hover:border-blue-400/30 neon-social-card"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                        <social.icon size={20} className="text-blue-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{social.label}</h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{social.username}</p>
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
              
              <p className="text-gray-300 mt-6 leading-relaxed">
                Let's connect and explore opportunities to collaborate on exciting projects. 
                I'm always open to discussing new ideas and innovative solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;