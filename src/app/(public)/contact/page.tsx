"use client";

import { motion } from "motion/react";
import { useState, useRef } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const services = [
    "Accounting Services",
    "Bookkeeping",
    "Tax Consultation",
    "Business Advisory",
    "Process Solutions",
    "Other",
  ];

  return (
    <main className="bg-[#fafafa]">
      {/* Hero Section - Modern Split Design */}
      <section className="relative w-full min-h-[90vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f4a5a] via-[#1B6174] to-[#3BA3B8]">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3BA3B8]/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0f4a5a]/50 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-20 md:pt-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Ready to serve you</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Let&apos;s Build
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#3BA3B8] to-white">
                  Something Great
                </span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-lg mb-10 leading-relaxed">
                Ready to transform your business? We&apos;re here to help you navigate the complexities of finance and achieve your goals.
              </p>

              {/* Quick Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { 
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    label: "Email",
                    value: "bbconteam@gmail.com",
                    href: "mailto:bbconteam@gmail.com"
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "+63 (2) 8123 4567",
                    href: "tel:+6328123456"
                  }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium text-sm">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right - Floating Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[500px]">
                {/* Decorative Ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[400px] h-[400px] rounded-full border border-white/10" />
                  <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5" />
                </div>

                {/* Location Card */}
                <motion.a
                  href="https://www.google.com/maps/place/7-Eleven+4810+San+Isidro+Mariveles/@14.4343333,120.4804844,3a,68y,13.9h,96.05t/data=!3m7!1e1!3m5!1s3_3xl4sAJ4V5JPHGSX46pw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-6.050579584608954%26panoid%3D3_3xl4sAJ4V5JPHGSX46pw%26yaw%3D13.896102502778213!7i16384!8i8192!4m6!3m5!1s0x339619ecc0d69709:0x694c938cea1598f6!8m2!3d14.4346584!4d120.4804514!16s%2Fg%2F11vjyd6m78?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-64 cursor-pointer group"
                >
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1">Visit Our Office</h3>
                    <p className="text-white/60 text-sm leading-tight">Blk 3, 2F, 7-Eleven Bldg., 797, National Rd., Brgy. San Isidro, Mariveles, Bataan</p>
                  </div>
                </motion.a>

                {/* Hours Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute bottom-10 left-0 w-56"
                >
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                    <p className="text-white/60 text-sm">Mon - Sat: 9AM - 6PM</p>
                  </div>
                </motion.div>

                {/* Response Time Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-20 right-0 w-52"
                >
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1">Quick Response</h3>
                    <p className="text-white/60 text-sm">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="relative w-full px-4 py-24 md:px-8 lg:px-16 -mt-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 overflow-hidden"
          >
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1B6174]/5 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#3BA3B8]/5 to-transparent rounded-tr-full" />

            <div className="relative grid lg:grid-cols-5 min-h-[700px]">
              {/* Left Panel - Info */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#1B6174] to-[#0f4a5a] p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      Get in Touch
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-10">
                      Have a project in mind? Fill out the form and our team will get back to you within 24 hours.
                    </p>
                  </motion.div>

                  {/* Features */}
                  <div className="space-y-6">
                    {[
                      { icon: "✓", title: "Free Consultation", desc: "Initial assessment at no cost" },
                      { icon: "✓", title: "Expert Guidance", desc: "Certified professionals" },
                      { icon: "✓", title: "Tailored Solutions", desc: "Custom strategies for you" },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-emerald-400 font-bold text-sm flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{feature.title}</h4>
                          <p className="text-white/50 text-sm">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-white/50 text-sm mb-4">Connect with us</p>
                  <div className="flex gap-3">
                    {[
                      { name: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                      { name: "LinkedIn", paths: ["M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z", "M2 9h4v12H2z", "M4 6a2 2 0 100-4 2 2 0 000 4z"] },
                      { name: "Instagram", paths: ["M7.8 2h8.4C19 2 22 5 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C5 22 2 19 2 16.2V7.8A5.8 5.8 0 017.8 2z", "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"] },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          {social.path && <path d={social.path} />}
                          {social.paths && social.paths.map((p, i) => <path key={i} d={p} />)}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel - Form */}
              <div className="lg:col-span-3 p-10 lg:p-12">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.6 }}
                      className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-8"
                    >
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-[#151515] mb-3">Message Sent!</h3>
                    <p className="text-zinc-500 mb-8 max-w-sm">
                      Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
                      }}
                      className="inline-flex items-center gap-2 text-[#1B6174] font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Send another message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-[#151515] mb-2">Send a Message</h3>
                      <p className="text-zinc-500">Fill in the details below and we&apos;ll be in touch.</p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className="peer w-full px-4 py-4 rounded-xl border-2 border-zinc-200 focus:border-[#1B6174] outline-none transition-all duration-300 text-[#151515] placeholder-transparent"
                            placeholder="Full Name"
                          />
                          <label
                            htmlFor="name"
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              formData.name || focusedField === 'name'
                                ? '-top-2.5 text-xs bg-white px-2 text-[#1B6174]'
                                : 'top-4 text-zinc-400'
                            }`}
                          >
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className="peer w-full px-4 py-4 rounded-xl border-2 border-zinc-200 focus:border-[#1B6174] outline-none transition-all duration-300 text-[#151515] placeholder-transparent"
                            placeholder="Email"
                          />
                          <label
                            htmlFor="email"
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              formData.email || focusedField === 'email'
                                ? '-top-2.5 text-xs bg-white px-2 text-[#1B6174]'
                                : 'top-4 text-zinc-400'
                            }`}
                          >
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Phone Field */}
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            className="peer w-full px-4 py-4 rounded-xl border-2 border-zinc-200 focus:border-[#1B6174] outline-none transition-all duration-300 text-[#151515] placeholder-transparent"
                            placeholder="Phone"
                          />
                          <label
                            htmlFor="phone"
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              formData.phone || focusedField === 'phone'
                                ? '-top-2.5 text-xs bg-white px-2 text-[#1B6174]'
                                : 'top-4 text-zinc-400'
                            }`}
                          >
                            Phone Number
                          </label>
                        </div>

                        {/* Company Field */}
                        <div className="relative">
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('company')}
                            onBlur={() => setFocusedField(null)}
                            className="peer w-full px-4 py-4 rounded-xl border-2 border-zinc-200 focus:border-[#1B6174] outline-none transition-all duration-300 text-[#151515] placeholder-transparent"
                            placeholder="Company"
                          />
                          <label
                            htmlFor="company"
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              formData.company || focusedField === 'company'
                                ? '-top-2.5 text-xs bg-white px-2 text-[#1B6174]'
                                : 'top-4 text-zinc-400'
                            }`}
                          >
                            Company Name
                          </label>
                        </div>
                      </div>

                      {/* Service Select */}
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-4 rounded-xl border-2 border-zinc-200 focus:border-[#1B6174] outline-none transition-all duration-300 bg-white appearance-none cursor-pointer ${
                            formData.service ? 'text-[#151515]' : 'text-zinc-400'
                          }`}
                        >
                          <option value="" disabled>Select a service you&apos;re interested in</option>
                          {services.map((service, index) => (
                            <option key={index} value={service} className="text-[#151515]">{service}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="peer w-full px-4 py-4 rounded-xl border-2 border-zinc-200 focus:border-[#1B6174] outline-none transition-all duration-300 text-[#151515] resize-none placeholder-transparent"
                          placeholder="Message"
                        />
                        <label
                          htmlFor="message"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            formData.message || focusedField === 'message'
                              ? '-top-2.5 text-xs bg-white px-2 text-[#1B6174]'
                              : 'top-4 text-zinc-400'
                          }`}
                        >
                          Your Message <span className="text-rose-500">*</span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="w-full bg-gradient-to-r from-[#1B6174] to-[#3BA3B8] text-white font-semibold py-5 px-8 rounded-xl hover:shadow-xl hover:shadow-[#1B6174]/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                          </>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full px-4 py-20 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#1B6174]/10 text-[#1B6174] text-sm font-medium rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#151515] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-500 max-w-lg mx-auto">
              Quick answers to questions you may have about our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What services does Bacsal Business Consultancy offer?",
                answer: "Bacsal Business Consultancy provides end-to-end accounting, taxation, and business compliance services, wherein it is envisioned in the future to be complemented by advisory solutions in information technology, human resources, and marketing to support sustainable business growth."
              },
              {
                question: "Who are your typical clients?",
                answer: "We serve startups, SMEs, professionals, cooperatives, and growing enterprises across various industries that require reliable compliance, sound financial management, and strategic advisory support."
              },
              {
                question: "Do you cater to newly registered businesses?",
                answer: "Yes. We assist businesses from pre-registration planning up to post-registration compliance, including DTI/SEC registration, BIR registration, local permits, and initial accounting setup."
              },
              {
                question: "What accounting and bookkeeping services do you provide?",
                answer: "Our services include bookkeeping, financial statement preparation, management reports, cash flow monitoring, and periodic financial analysis tailored to management and regulatory requirements."
              },
              {
                question: "Do you handle tax compliance and filings?",
                answer: "Yes. We manage tax registrations, monthly and quarterly tax filings, annual income tax returns, tax compliance reviews, and coordination during BIR audits or assessments."
              },
              {
                question: "Can you help with BIR audits and tax assessments?",
                answer: "Absolutely. We provide audit assistance, document preparation, reconciliation, representation, and advisory support to help clients address BIR findings efficiently and compliantly."
              },
              {
                question: "Do you offer payroll and HR-related services?",
                answer: "Yes. Our HR support includes payroll processing, statutory contributions (SSS, PhilHealth, Pag-IBIG), basic HR documentation, and advisory on HR systems and compliance."
              },
              {
                question: "What IT-related services do you provide?",
                answer: "We offer IT advisory focused on business systems, accounting software implementation, process automation, data management, and technology solutions that improve operational efficiency."
              },
              {
                question: "Do you provide business advisory and consulting?",
                answer: "Yes. We conduct financial feasibility studies, business diagnostics, performance reviews, internal control assessments, and strategic advisory to support informed decision-making."
              },
              {
                question: "How do you price your services?",
                answer: "Our fees depend on the scope, complexity, and frequency of services required. We offer transparent, customized proposals aligned with your business needs and growth stage."
              },
              {
                question: "Is my business information kept confidential?",
                answer: "Yes. Client confidentiality and data security are strictly observed. We adhere to professional ethics and implement safeguards to protect sensitive information."
              },
              {
                question: "Do you work with clients outside your immediate location?",
                answer: "Yes. We support clients nationwide through digital coordination, online meetings, and secure document sharing."
              },
              {
                question: "How do we start working with Bacsal Business Consultancy?",
                answer: "You may contact us to schedule an initial consultation. We assess your needs, discuss objectives, and propose a tailored service engagement."
              },
              {
                question: "Why should we choose Bacsal Business Consultancy?",
                answer: "We combine technical excellence, practical business insight, and a client-focused approach—delivering compliant, strategic, and value-driven solutions that help businesses move forward with confidence."
              }
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl border border-zinc-200 hover:border-[#1B6174]/30 transition-all duration-300 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-[#151515] font-medium text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1B6174]/10 flex items-center justify-center group-open:bg-[#1B6174] transition-colors duration-300">
                    <svg 
                      className="w-4 h-4 text-[#1B6174] group-open:text-white group-open:rotate-45 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth={2} 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-zinc-500 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
