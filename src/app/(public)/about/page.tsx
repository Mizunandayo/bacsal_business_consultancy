"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import CountUp from "../../../components/CountUp";

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const timelineData = [
    { 
      date: "APR 2024", 
      year: "2024",
      title: "START OF PRO BONO SERVICES", 
      color: "bg-[#1B6174]",
      fullDescription: "Our journey began with a commitment to community service. We provided free accounting and tax advisory services to small and medium enterprises in Mariveles, Bataan, helping local businesses establish proper financial foundations.",
      image: "/probono.png",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    { 
      date: "NOV 2024", 
      year: "2024",
      title: "BUSINESS PLANNING", 
      color: "bg-[#2D8A9E]",
      fullDescription: "With growing demand for our services, Mr. Bacsal developed a comprehensive business plan to formalize operations. This phase included market research, service portfolio development, and strategic planning for sustainable growth.",
      image: "/businessplanning.png",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      )
    },
    { 
      date: "FEB 2025", 
      year: "2025",
      title: "FORMAL REGISTRATION/ SOFT LAUNCH", 
      color: "bg-[#3BA3B8]",
      fullDescription: "Bacsal Business Consultancy was officially registered as a business entity. We launched our services to a broader market, offering professional accounting, tax advisory, and business compliance solutions to startups and growing enterprises.",
      image: "/softlaunch.png",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      )
    },
    { 
      date: "OCT 2025", 
      year: "2025",
      title: "STRATEGIC PARTNERSHIP WITH JUAN BY JUAN TAX", 
      color: "bg-[#1B6174]",
      fullDescription: "We established a strategic partnership with Juan by Juan Tax, integrating technology-driven solutions into our service offerings. This collaboration enhanced our capability to deliver efficient, modern accounting and tax solutions. We also conducted accounting system training for practitioners and business owners in the Freeport Area of Bataan.",
      image: "/juanpartnership.png",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    { 
      date: "DEC 2025", 
      year: "2025",
      title: "GRAND OPENING OF THE FIRM", 
      color: "bg-[#2D8A9E]",
      fullDescription: "We celebrated our grand opening ceremony, marking a significant milestone in our journey. The event coincided with our principal's birthday, making it a doubly special occasion. This marked the beginning of a new chapter as a fully established consultancy firm.",
      image: "/grandopening.png",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      )
    },
  ];

  const coreValues = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Trust",
      description: "Trust is our utmost priority as it is the foundation of a successful relationship. It goes hand in hand with honesty and transparency, so we do everything to build it."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      title: "Excellence",
      description: "We strive to achieve the highest standards in providing accounting, bookkeeping, and process solutions, considering timeliness, budget, and technical innovation to meet customer satisfaction."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      title: "Empathy",
      description: "To make a better and successful relationship, we are sensitive to other people's thoughts and feelings: needs, individuality, core values, and goals in life, for whoever we meet along our way."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "Teamwork",
      description: "We are collaborative and foster team spirit within our internal team and with our customers to ensure everyone's engagement in sharing their knowledge and experience, and provide support to achieve our common goals."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      title: "Commitment",
      description: "We honor our obligations and keep our words by putting our talent, skills, energy, and sincere effort into what we do, all with genuine enthusiasm. We hold ourselves accountable for getting things done to meet or exceed expectations."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      title: "Innovation",
      description: "We are outside-the-box thinkers. We always hold up to continuous learning and improvement – soaking up the newest and meaningful technological trends. We are not afraid of trying new methods and adapting them to specific needs and goals."
    },
  ];

  return (
    <main>


      {/* Hero Header Section */}
      <section className="relative w-full bg-[#151515] pt-32 pb-16 overflow-hidden">
        {/* Background Pattern - Wave Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute right-0 top-0 w-1/2 h-full opacity-20" viewBox="0 0 400 400" fill="none">
            {[...Array(12)].map((_, i) => (
              <path
                key={i}
                d={`M${400 - i * 30} 0 Q${350 - i * 30} 200 ${400 - i * 30} 400`}
                stroke="#1B6174"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-zinc-400"
          >
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Our Story with Images Grid */}
      <section className="relative w-full bg-[#1a1a1a] px-4 py-20 md:px-8 md:py-28 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">Our Story</span>
                <div className="w-12 h-px bg-zinc-700" />
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                Your Vision Our Expertise Your Success{" "}
                <span className="text-[#3BA3B8]">Grow Together.</span>
              </h2>

              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image
                  src="/team.png"
                  alt="Bacsal Business Consultancy Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image
                    src="/accounting.png"
                    alt="Financial Advisory"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 bg-[#1B6174] text-white text-xs rounded-full">Accounting</span>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image
                    src="/taxad.png"
                    alt="Tax Solutions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 bg-[#1B6174] text-white text-xs rounded-full">Tax Advisory</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-400 leading-relaxed">
                Bacsal Business Consultancy is a professional firm delivering excellence in accounting, tax, and business advisory services. We partner with businesses to provide precise financial insight, dependable compliance support, and strategic guidance that drives sustainable growth.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-4 py-6 border-t border-b border-zinc-800">
                {[
                  { value: "100", suffix: "%", label: "Client Satisfaction" },
                  { value: "50", suffix: "+", label: "Clients Served" },
                  { value: "1", suffix: "+", label: "Years Of Service" },
                  { value: "5", suffix: "+", label: "Expert Team" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      <CountUp from={0} to={parseInt(stat.value)} duration={2} />{stat.suffix}
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Avatar Stack & CTA */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-[#1a1a1a] flex items-center justify-center">
                      <svg className="w-5 h-5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 text-white hover:text-[#3BA3B8] transition-colors group"
                >
                  <span className="w-12 h-12 rounded-full border border-zinc-600 flex items-center justify-center group-hover:border-[#3BA3B8] group-hover:bg-[#3BA3B8]/10 transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wider">Contact Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Section 2 - Timeline */}
      <section className="relative w-full bg-zinc-50 px-4 py-20 md:px-8 md:py-28 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#1B6174]/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-zinc-500">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#151515] mb-4 leading-tight">
              Milestones That<br />Define Our Growth
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              From our founding to where we are today, each step has shaped who we are as a company.
            </p>
          </motion.div>

          {/* Zigzag Timeline */}
          <div className="space-y-16 md:space-y-24">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
                >
                  {/* Text Content */}
                  <div className={`flex-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? "justify-start" : "md:justify-end"}`}>
                      <span className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-sm font-semibold text-zinc-600">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#151515] mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed max-w-md">
                      {item.fullDescription}
                    </p>
                    <span className="inline-block mt-4 text-sm font-medium text-[#1B6174]">
                      {item.date}
                    </span>
                  </div>

                  {/* Visual Card */}
                  <div className="flex-1 w-full max-w-sm md:max-w-md">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>


        </div>
      </section>

      {/* Partnership with Juan Section */}
      <section className="relative w-full bg-[#050510] px-4 py-24 md:px-8 md:py-32 lg:px-16 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          {/* Floating gradient orbs */}
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-gradient-to-br from-violet-600/15 to-purple-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#14214f]/30 to-blue-900/20 rounded-full blur-3xl" />
          {/* Additional accent orbs */}
          <div className="absolute top-40 right-[20%] w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-[15%] w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Strategic Partnership</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-[#14214f] to-[#1e3a8a] rounded-xl mb-4">Powered by</span>
              <br />
              <Image
                src="/juanlogoblack.png"
                alt="01 Juan"
                width={320}
                height={90}
                className="mt-4 mx-auto brightness-0 invert"
              />
            </h2>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              We&apos;ve partnered with Juan by JuanTax to bring you the most efficient, technology-driven accounting and tax solutions in the Philippines.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Partnership Benefits */}
              <div className="space-y-5">
                {[
                  { icon: "⚡", title: "Real-time Financial Insights", desc: "Access live reports and data for accurate financial control", color: "from-amber-500/20 to-orange-500/20" },
                  { icon: "🔄", title: "Seamless Tax Compliance", desc: "Integrated BIR tax filing and compliance automation", color: "from-blue-500/20 to-indigo-500/20" },
                  { icon: "☁️", title: "Cloud-Based Accessibility", desc: "Work from anywhere with secure cloud accounting", color: "from-cyan-500/20 to-teal-500/20" },
                  { icon: "🤖", title: "AI-Powered Bookkeeping", desc: "Smart automation for faster, error-free accounting", color: "from-violet-500/20 to-purple-500/20" },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative flex items-start gap-5 p-5 bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://www.juan.ac/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-gradient-to-r from-[#060606] to-[#151515] text-white font-semibold rounded-xl hover:from-[#151515] hover:to-[#131313] transition-all duration-300 group shadow-lg shadow-blue-500/25"
              >
                Learn More About Juan
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Right Content - Image and Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Image */}
              <div className="relative mb-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                  <Image
                    src="/bacsalxjuan.jpg"
                    alt="Bacsal Business Consultancy x Juan Partnership"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-70" />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-500/30"
                >
                  ✓ Official Partner
                </motion.div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Mission */}
      <section className="relative w-full bg-white px-4 py-20 md:px-8 md:py-32 lg:px-16 overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="inline-block px-4 py-1.5 bg-[#1B6174]/10 text-[#1B6174] text-sm font-medium rounded-full mb-4">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#151515] mb-4">
              Mission
            </h2>
            <p className="text-zinc-500 max-w-lg mx-auto">
              Core principles that guide our commitment to excellence
            </p>
          </motion.div>

          {/* Modern Orbital Layout */}
          <div className="relative">
            
            {/* Dartboard Background Pattern - Positioned relative to orbital layout */}
            <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-0">
              <svg 
                className="w-[700px] h-[700px] opacity-[0.06]" 
                viewBox="0 0 400 400" 
                fill="none"
              >
                {/* Concentric Circles - Dartboard Rings */}
                <circle cx="200" cy="200" r="195" stroke="#1B6174" strokeWidth="2" />
                <circle cx="200" cy="200" r="170" stroke="#1B6174" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="145" stroke="#1B6174" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="120" stroke="#1B6174" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="95" stroke="#1B6174" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="70" stroke="#1B6174" strokeWidth="2" />
                <circle cx="200" cy="200" r="45" stroke="#1B6174" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="20" stroke="#1B6174" strokeWidth="2" />
                <circle cx="200" cy="200" r="8" fill="#1B6174" />
                
                {/* Radial Lines - Dartboard Segments */}
                {[...Array(20)].map((_, i) => {
                  const angle = (i * 18) * (Math.PI / 180);
                  const x2 = 200 + 195 * Math.cos(angle);
                  const y2 = 200 + 195 * Math.sin(angle);
                  return (
                    <line 
                      key={i}
                      x1="200" 
                      y1="200" 
                      x2={x2} 
                      y2={y2} 
                      stroke="#1B6174" 
                      strokeWidth="1"
                    />
                  );
                })}
                
                {/* Crosshair Lines */}
                <line x1="0" y1="200" x2="400" y2="200" stroke="#1B6174" strokeWidth="1.5" strokeDasharray="8 4" />
                <line x1="200" y1="0" x2="200" y2="400" stroke="#1B6174" strokeWidth="1.5" strokeDasharray="8 4" />
              </svg>
            </div>
            
            {/* Mobile Layout */}
            <div className="lg:hidden space-y-4">
              {/* Center Card - Mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1B6174] to-[#0f4a5a] rounded-3xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  {/* Dart/Target Icon */}
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-white/70">Driving success with purpose and integrity</p>
              </motion.div>

              {/* Mission Items - Mobile */}
              {[
                { title: "Excellence", description: "We are committed to delivering excellent accounting, bookkeeping, and process solutions through our creative and results-oriented approach.", color: "bg-gradient-to-br from-[#1B6174] to-[#3BA3B8]" },
                { title: "Innovation", description: "We are highly innovative, and continuously seek new and meaningful solutions to provide our service better.", color: "bg-gradient-to-br from-emerald-500 to-teal-500" },
                { title: "Trust", description: "We deal with our work based on trust and a win-win mindset.", color: "bg-gradient-to-br from-violet-500 to-purple-500" },
                { title: "Partnership", description: "We join forces as partners, learning and working together as one team.", color: "bg-gradient-to-br from-amber-500 to-orange-500" },
                { title: "Empathy", description: "We have empathy for our customers and understand their needs. We care for our employees and furnish a positive working environment with challenging, impactful projects.", color: "bg-gradient-to-br from-rose-500 to-pink-500" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#151515] mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Layout - Modern Orbital */}
            <div className="hidden lg:block relative min-h-[900px]">
              {/* Decorative Rings - Centered */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-[320px] h-[320px] rounded-full border border-zinc-200" />
                  <div className="absolute inset-0 w-[320px] h-[320px] rounded-full border border-zinc-100 rotate-45" />
                </motion.div>
              </div>

              {/* Center Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="relative group flex items-center justify-center">
                  {/* Ripple Pulse Effect - Three Circles */}
                  <div className="absolute inset-0 m-auto w-44 h-44 rounded-full bg-[#1B6174]/40 animate-[ripple-pulse_2.5s_ease-out_infinite]" />
                  <div className="absolute inset-0 m-auto w-44 h-44 rounded-full bg-[#1B6174]/30 animate-[ripple-pulse_2.5s_ease-out_infinite_0.5s]" />
                  <div className="absolute inset-0 m-auto w-44 h-44 rounded-full bg-[#1B6174]/20 animate-[ripple-pulse_2.5s_ease-out_infinite_1s]" />
                  
                  {/* Main Circle */}
                  <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-[#1B6174] to-[#0f4a5a] flex items-center justify-center shadow-2xl shadow-[#1B6174]/30">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2 border border-white/20">
                        {/* Dart/Target Icon */}
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="2" fill="currentColor" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                        </svg>
                      </div>
                      <span className="text-white font-bold text-sm">Mission</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Orbital Cards - Positioned in a circle */}
              {/* Excellence - Top (12 o'clock) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="absolute left-1/2 -translate-x-1/2 top-0 z-10"
              >
                <div className="relative group">
                  {/* Connector Line to Center */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full h-[100px]">
                    <div className="w-px h-full bg-gradient-to-b from-zinc-300 to-transparent" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1B6174]" />
                  </div>
                  
                  <div className="w-64 bg-white rounded-2xl p-4 shadow-lg shadow-zinc-200/50 border border-zinc-100 group-hover:shadow-xl group-hover:shadow-[#1B6174]/10 group-hover:border-[#1B6174]/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#1B6174] to-[#3BA3B8] rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">01</span>
                      </div>
                      <h4 className="font-bold text-[#151515] text-base">Excellence</h4>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">We are committed to delivering excellent accounting, bookkeeping, and process solutions through our creative and results-oriented approach.</p>
                  </div>
                </div>
              </motion.div>

              {/* Innovation - Top Right (2 o'clock) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute z-10"
                style={{ right: 'calc(50% - 420px)', top: 'calc(50% - 240px)' }}
              >
                <div className="relative group">
                  {/* Connector Line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[60px] rotate-[-30deg] origin-right">
                    <div className="w-[60px] h-px bg-gradient-to-l from-zinc-300 to-transparent" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  
                  <div className="w-64 bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 group-hover:shadow-xl group-hover:shadow-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">02</span>
                      </div>
                      <h4 className="font-bold text-[#151515] text-base">Innovation</h4>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">We are highly innovative, and continuously seek new and meaningful solutions to provide our service better.</p>
                  </div>
                </div>
              </motion.div>

              {/* Trust - Bottom Right (4 o'clock) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute z-10"
                style={{ right: 'calc(50% - 420px)', top: 'calc(50% + 160px)' }}
              >
                <div className="relative group">
                  {/* Connector Line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[60px] rotate-[30deg] origin-right">
                    <div className="w-[60px] h-px bg-gradient-to-l from-zinc-300 to-transparent" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-500" />
                  </div>
                  
                  <div className="w-64 bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 group-hover:shadow-xl group-hover:shadow-violet-500/10 group-hover:border-violet-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">03</span>
                      </div>
                      <h4 className="font-bold text-[#151515] text-base">Trust</h4>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">We deal with our work based on trust and a win-win mindset.</p>
                  </div>
                </div>
              </motion.div>

              {/* Partnership - Bottom Left (8 o'clock) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute z-10"
                style={{ left: 'calc(50% - 420px)', top: 'calc(50% + 160px)' }}
              >
                <div className="relative group">
                  {/* Connector Line */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[60px] rotate-[-30deg] origin-left">
                    <div className="w-[60px] h-px bg-gradient-to-r from-zinc-300 to-transparent" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-500" />
                  </div>
                  
                  <div className="w-64 bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 group-hover:shadow-xl group-hover:shadow-amber-500/10 group-hover:border-amber-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">04</span>
                      </div>
                      <h4 className="font-bold text-[#151515] text-base">Partnership</h4>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">We join forces as partners, learning and working together as one team.</p>
                  </div>
                </div>
              </motion.div>

              {/* Empathy - Top Left (10 o'clock) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute z-10"
                style={{ left: 'calc(50% - 420px)', top: 'calc(50% - 240px)' }}
              >
                <div className="relative group">
                  {/* Connector Line */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[60px] rotate-[30deg] origin-left">
                    <div className="w-[60px] h-px bg-gradient-to-r from-zinc-300 to-transparent" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-rose-500" />
                  </div>
                  
                  <div className="w-64 bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 group-hover:shadow-xl group-hover:shadow-rose-500/10 group-hover:border-rose-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">05</span>
                      </div>
                      <h4 className="font-bold text-[#151515] text-base">Empathy</h4>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">We have empathy for our customers and understand their needs. We care for our employees and furnish a positive working environment.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 lg:mt-8"
          >
            <p className="text-zinc-400 text-sm">
              Centered on <span className="text-[#1B6174] font-semibold">excellence</span>, driven by <span className="text-[#1B6174] font-semibold">purpose</span>
            </p>
          </motion.div>
        </div>


        
      </section>

      {/* Section 4 - Vision */}
      <section className="relative w-full bg-[#fafafa] px-4 py-24 md:px-8 md:py-32 lg:px-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1B6174]/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1B6174]/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-[#1B6174] text-sm font-medium rounded-full mb-6 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Our Vision
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#151515] mb-6 tracking-tight">
              Where We&apos;re <span className="text-[#1B6174]">Headed</span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Building the future of business consultancy in the Philippines
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Column - Vision Statement Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="relative h-full bg-gradient-to-br from-[#1B6174] to-[#0f4a5a] rounded-3xl p-8 md:p-10 lg:p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="absolute right-0 bottom-0 w-64 h-64 text-white" viewBox="0 0 200 200" fill="currentColor">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>

                  {/* Vision Statement */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                    To be the most trusted accounting and tax partner for businesses and individuals in the Philippines
                  </h3>

                  <p className="text-white/70 text-lg leading-relaxed mb-8">
                    By delivering excellent accounting, tax, compliance, and innovative financial solutions that empower our clients to achieve sustainable growth.
                  </p>

                  {/* Key Pillars */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "📊", label: "Excellent Accounting" },
                      { icon: "📋", label: "Tax Expertise" },
                      { icon: "✓", label: "Compliance Support" },
                      { icon: "💡", label: "Innovation" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-white/90 text-sm font-medium">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats & Image */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 hover:shadow-lg hover:border-[#1B6174]/20 transition-all duration-300">
                  <div className="text-4xl font-bold text-[#1B6174] mb-2">
                    <CountUp from={0} to={100} duration={2} />%
                  </div>
                  <p className="text-zinc-500 text-sm">Client Focus</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 hover:shadow-lg hover:border-[#1B6174]/20 transition-all duration-300">
                  <div className="text-4xl font-bold text-[#1B6174] mb-2">24/7</div>
                  <p className="text-zinc-500 text-sm">Dedication</p>
                </div>
              </motion.div>

              {/* Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex-1 min-h-[280px] relative rounded-3xl overflow-hidden group"
              >
                <Image
                  src="/whybacsalgroup.jpg"
                  alt="Our Vision"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">Building Tomorrow&apos;s Success</p>
                  <p className="text-white/70 text-sm">One partnership at a time</p>
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="/contact"
                  className="block bg-[#151515] rounded-2xl p-6 group hover:bg-[#1B6174] transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg mb-1">Join Our Journey</p>
                      <p className="text-zinc-400 text-sm group-hover:text-white/70 transition-colors">Partner with us today</p>
                    </div>
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section> 

      {/* Section 5 - Core Values */}
      <section className="relative w-full bg-[#f5f5f5] px-4 py-20 md:px-8 md:py-28 lg:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#151515] mb-6 tracking-tight">
              CORE VALUES
            </h2>
            <p className="text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do and how we serve our clients with excellence and integrity.
            </p>
            
            {/* Color Dots */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {["#E87C3E", "#E8B83E", "#3BA3B8", "#1B6174", "#0D3D4A", "#6366F1"].map((color, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </motion.div>

          {/* Core Values - Horizontal Layout with Wave Pattern */}
          <div className="relative mt-20">
            {/* Connecting Dotted Lines - Desktop Only */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
                <path
                  d="M80,200 L200,180 L320,220 L440,160 L560,200 L680,140 L800,180 L920,120 L1040,160 L1120,140"
                  fill="none"
                  stroke="#d4d4d4"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>

            {/* Values Container */}
            <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-4 relative z-10">
              {coreValues.map((value, index) => {
                const colors = ["#E87C3E", "#E8B83E", "#3BA3B8", "#1B6174", "#0D3D4A", "#6366F1"];
                const offsets = [0, -40, 20, -60, 0, -30]; // Wave pattern offsets for 6 items
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center group"
                    style={{ marginTop: `${offsets[index]}px` }}
                  >
                    {/* Icon Circle */}
                    <div className="relative mb-6">
                      <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white group-hover:shadow-xl transition-shadow duration-300">
                        <div 
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${colors[index]}15` }}
                        >
                          <div style={{ color: colors[index] }}>
                            {value.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Dotted Line to Number */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-8 border-l-2 border-dashed border-zinc-300" />
                    </div>

                    {/* Numbered Badge */}
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md mb-4 relative z-10"
                      style={{ backgroundColor: colors[index] }}
                    >
                      {index + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm md:text-base font-bold text-[#151515] uppercase tracking-wider mb-2 max-w-[140px] relative z-10 bg-[#f5f5f5] px-2">
                      {value.title}
                    </h3>

                    {/* Description - Show on Hover (Desktop) / Always (Mobile) */}
                    <p className="text-xs text-zinc-500 max-w-[160px] leading-relaxed lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Strategic Outlook */}
      <section className="relative w-full bg-gradient-to-br from-[#0a0f1a] via-[#111827] to-[#0f172a] px-4 py-24 md:px-8 md:py-32 lg:px-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
          {/* Floating Gradient Orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#1B6174]/40 to-cyan-500/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-600/30 to-emerald-500/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#1B6174]/20 to-blue-900/10 rounded-full blur-3xl" />
          
          {/* Accent Orbs */}
          <div className="absolute top-20 left-[15%] w-48 h-48 bg-gradient-to-br from-cyan-400/15 to-teal-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 right-[20%] w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              STRATEGIC OUTLOOK
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-16 h-1 bg-white/50" />
              <div className="w-8 h-1 bg-[#1B6174]" />
            </div>
          </motion.div>

          {/* Converging Services Visual */}
          <div className="relative max-w-4xl mx-auto mb-20">
            {/* Service Rows */}
            <div className="space-y-4">
              {[
                {
                  title: "ACCOUNTING & COMPLIANCE",
                  desc: "bookkeeping, financial reporting, tax, and regulatory requirements",
                  color: "bg-[#9BA8AB]",
                  icon: (
                    <svg className="w-8 h-8 text-[#9BA8AB]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  ),
                  width: "70%"
                },
                {
                  title: "INFORMATION TECHNOLOGY",
                  desc: "IT systems setup and management, business software implementation, and technical support",
                  color: "bg-[#4A90C2]",
                  icon: (
                    <svg className="w-8 h-8 text-[#4A90C2]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  ),
                  width: "80%"
                },
                {
                  title: "HUMAN RESOURCE",
                  desc: "HR policy, talent acquisition, Labor law, and regulatory compliance guidance, organizational development and training programs",
                  color: "bg-[#3BA3B8]",
                  icon: (
                    <svg className="w-8 h-8 text-[#3BA3B8]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                  ),
                  width: "90%"
                },
                {
                  title: "MARKETING",
                  desc: "Marketing strategy and brand positioning, market research and customer insights, Brand messaging and communications development",
                  color: "bg-[#1B6174]",
                  icon: (
                    <svg className="w-8 h-8 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  ),
                  width: "100%"
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  
                  {/* Content Bar */}
                  <div 
                    className={`relative ${service.color} rounded-r-full py-4 px-6 pr-12`}
                    style={{ width: service.width }}
                  >
                    <h3 className="text-white font-bold text-sm md:text-base tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm mt-1 leading-relaxed">
                      {service.desc}
                    </p>
                    
                    {/* Arrow point */}
                    <div 
                      className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-l-[20px]`}
                      style={{ borderLeftColor: service.color === 'bg-[#9BA8AB]' ? '#9BA8AB' : service.color === 'bg-[#4A90C2]' ? '#4A90C2' : service.color === 'bg-[#3BA3B8]' ? '#3BA3B8' : '#1B6174' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Converging Lines Visual (Right Side) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 hidden lg:block"
            >
              <svg width="120" height="300" viewBox="0 0 120 300" fill="none">
                {/* Converging paths */}
                <path d="M0 30 Q60 30 100 150" stroke="#9BA8AB" strokeWidth="3" fill="none" />
                <path d="M0 90 Q60 90 100 150" stroke="#4A90C2" strokeWidth="3" fill="none" />
                <path d="M0 180 Q60 180 100 150" stroke="#3BA3B8" strokeWidth="3" fill="none" />
                <path d="M0 250 Q60 250 100 150" stroke="#1B6174" strokeWidth="3" fill="none" />
                {/* Center point */}
                <circle cx="100" cy="150" r="8" fill="#1B6174" />
                <circle cx="100" cy="150" r="4" fill="white" />
              </svg>
            </motion.div>
          </div>

          {/* Vision Ahead Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
              VISION AHEAD
            </h3>
            
            <div className="text-lg text-zinc-300 leading-relaxed text-justify space-y-6">
              <p>
                Bacsal Business Consultancy is charting a deliberate expansion beyond accounting and business compliance toward a fully integrated advisory model. By incorporating information technology, human resource solutions, and strategic marketing, we are building a comprehensive platform that supports businesses across every stage of growth.
              </p>
              <p>
                This evolution reflects our commitment to delivering sophisticated, forward-thinking solutions that strengthen operational excellence and long-term value.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1B6174] to-cyan-600 text-white font-semibold rounded-xl hover:from-[#1a5566] hover:to-cyan-500 transition-all duration-300 group shadow-lg shadow-[#1B6174]/25"
              >
                Start Your Journey With Us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
