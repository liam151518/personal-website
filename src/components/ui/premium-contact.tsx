'use client'

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare, 
  Building, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap,
  Trophy,
  Target
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    value: "liamxandersantos@gmail.com",
    link: "mailto:liamxandersantos@gmail.com",
    gradient: "from-primary/20 to-accent/20",
    hoverColor: "primary"
  },
  {
    icon: Phone,
    title: "DM me",
    description: "Speak directly to me",
    value: "@SANTOS_LIAM_",
    link: "https://instagram.com/SANTOS_LIAM_",
    gradient: "from-primary/20 to-secondary/20",
    hoverColor: "primary"
  },
  {
    icon: MapPin,
    title: "Based in",
    description: "",
    value: "Johannesburg",
    link: "https://www.google.com/maps/search/Johannesburg",
    gradient: "from-accent/20 to-primary/20",
    hoverColor: "accent"
  }
];

const companyStats = [
  { label: "Response Time", value: "< 2 hours", icon: Clock },
  { label: "Global Reach", value: "50+ Countries", icon: Globe },
  { label: "Success Rate", value: "99.9%", icon: Shield },
  { label: "Championships", value: "15+", icon: Trophy }
];

export function PremiumContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Create email content
      const subject = `New message from ${formData.name} - Personal Website`;
      const body = `Hi Liam,

You have received a new message from your personal website:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}

Message:
${formData.message}

---
This message was sent from your personal website contact form.`;

      // Create mailto link
      const mailtoLink = `mailto:liamxandersantos@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      // Show success message
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' }); // Reset form
      
    } catch (error) {
      console.error('Failed to open email client:', error);
      setErrors({ submit: 'Failed to open email client. Please email me directly at liamxandersantos@gmail.com' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.23, 0.86, 0.39, 0.96] 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative py-32 text-foreground overflow-hidden section-padding">
      <motion.div 
        ref={containerRef}
        className="relative z-10 container-elite"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-primary/20 mb-6"
            whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
          >
            <span className="text-sm font-medium text-foreground/80">
              ✨ Let's Connect
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </motion.div>

          <motion.h2 
            className="text-responsive-xl font-black gradient-text mb-8 tracking-tight"
            variants={fadeInUp}
          >
            Get in Touch
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Let's talk about how I could help your business grow. Whether it's strategy, execution, or just a simple conversation about your vision.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="space-y-8"
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Send me a message</h3>
              <p className="text-muted-foreground text-lg">
                Tell me about your projects and I will get back to you within 48 hours.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 glass border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all ${
                          errors.name ? 'border-destructive' : 'border-primary/20'
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive text-sm mt-2"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 glass border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all ${
                          errors.email ? 'border-destructive' : 'border-primary/20'
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive text-sm mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Company (Optional)"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full pl-10 pr-4 py-4 glass border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                    <textarea
                      placeholder="Tell me your story..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full pl-10 pr-4 py-4 glass border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all resize-none ${
                        errors.message ? 'border-destructive' : 'border-primary/20'
                      }`}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-destructive text-sm mt-2"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Error message for submission */}
                  {errors.submit && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800"
                    >
                      {errors.submit}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden btn-primary font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Email Client Opened!</h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Your email client should have opened with a pre-filled message. Please send the email to complete your message. If it didn't open, you can email me directly at liamxandersantos@gmail.com
                  </p>
                  <motion.button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-6 py-3 glass border border-primary/20 rounded-xl text-foreground hover:bg-primary/5 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            className="space-y-8"
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Other ways to reach me</h3>
              <p className="text-muted-foreground text-lg">
                Choose the method that works best for you.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="block p-6 glass rounded-2xl border border-primary/20 hover:bg-primary/5 transition-all group hover-lift"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} border border-primary/20 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">{method.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                      <p className="text-foreground font-medium">{method.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>


          </motion.div>
        </div>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
} 