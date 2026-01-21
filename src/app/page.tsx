"use client";

import Image from "next/image";
import RotatingText from "../components/RotatingText";
import CountUp from "../components/CountUp";
import Footer from "../components/Footer";

import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  font-sans ">



{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}
{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}
{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}
{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}
{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}{/* Hero Section */}
      <section 
        className="relative flex h-screen w-full justify-between px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-1 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/homebackground.png')" }}
      >
        {/* Orbiting particles for hero */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] animate-hero-orbit">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1B6174]/60 rounded-full shadow-lg shadow-[#1B6174]/30" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2d8a9e]/50 rounded-full shadow-lg shadow-[#2d8a9e]/30" />
          </div>
          {/* Medium orbit - reverse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] animate-hero-orbit-reverse">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 bg-[#3da5b8]/50 rounded-full shadow-lg shadow-[#3da5b8]/30" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-[#1B6174]/40 rounded-full shadow-lg shadow-[#1B6174]/20" />
          </div>
          {/* Small orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] animate-hero-orbit-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2d8a9e]/60 rounded-full shadow-lg shadow-[#2d8a9e]/30" />
          </div>
          {/* Floating particles */}
          <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-[#1B6174]/30 rounded-full animate-hero-float" />
          <div className="absolute top-[30%] right-[20%] w-3 h-3 bg-[#2d8a9e]/25 rounded-full animate-hero-float-delayed" />
          <div className="absolute bottom-[25%] left-[25%] w-2.5 h-2.5 bg-[#3da5b8]/30 rounded-full animate-hero-float-slow" />
          <div className="absolute bottom-[35%] right-[15%] w-2 h-2 bg-[#1B6174]/25 rounded-full animate-hero-float" />
        </div>

        {/* CSS for hero animations */}
        <style jsx>{`
          @keyframes hero-orbit {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes hero-orbit-reverse {
            from { transform: translate(-50%, -50%) rotate(360deg); }
            to { transform: translate(-50%, -50%) rotate(0deg); }
          }
          @keyframes hero-float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          }
          @keyframes hero-float-delayed {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
            50% { transform: translateY(15px) translateX(-10px); opacity: 0.8; }
          }
          @keyframes hero-float-slow {
            0%, 100% { transform: translateY(0px); opacity: 0.5; }
            50% { transform: translateY(-25px); opacity: 1; }
          }
          .animate-hero-orbit {
            animation: hero-orbit 20s linear infinite;
          }
          .animate-hero-orbit-reverse {
            animation: hero-orbit-reverse 15s linear infinite;
          }
          .animate-hero-orbit-slow {
            animation: hero-orbit 25s linear infinite;
          }
          .animate-hero-float {
            animation: hero-float 6s ease-in-out infinite;
          }
          .animate-hero-float-delayed {
            animation: hero-float-delayed 8s ease-in-out infinite;
          }
          .animate-hero-float-slow {
            animation: hero-float-slow 10s ease-in-out infinite;
          }
        `}</style>



        <div className=" h-screen flex flex-1 flex-col items-center  gap-8 text-center transition-all duration-500 ease-in-out">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              className="mt-55"
              src="/bacsalicon.png"
              alt="Bacsal Business Consultancy"
              width={130}
              height={55}
              priority
            />
          </motion.div>
          

<div className="flex items-center justify-center gap-3">
          <h1 className="text-4xl font-bold text-[#151515] sm:text-5xl lg:text-5xl">Trusted Partner In</h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex items-center"
          >
            <RotatingText
              texts={['Success', 'Innovation', 'Excellence']}
              mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#1B6174] overflow-hidden py-1 sm:py-1.5 md:py-2 justify-center items-center rounded-lg text-4xl sm:text-5xl lg:text-5xl font-bold"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.h1>
          </div>  
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="max-w-2xl text-lg leading-8 text-zinc-600 transition-all duration-500 ease-in-out"
          >
            We provide expert business consultancy services to help you grow and
            thrive in today's competitive market.
          </motion.p>


        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex gap-4"
          >
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 font-medium text-black transition-colors hover:bg-zinc-100"
            >
              Our Services
            </a>
          </motion.div>
      
       </div>





      </section>



{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}
{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}
{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}
{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}
{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}
      <section className="min-h-screen w-full bg-zinc-50 py-16 md:py-24 lg:py-16 overflow-hidden">
        <div className="max-w-full">
          <h2 className="mb-16 text-center text-2xl font-bold text-[#151515] md:text-5xl px-4 md:px-8 lg:px-16">
            Why Bacsal Business Consultancy?
          </h2>

          {/* Two Column Layout Container */}
          <div className="flex flex-col lg:flex-row items-center justify-start gap-12 lg:gap-20">
            {/* Left Side - Image with Modern Styling */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-shrink-0 relative"
            >
              {/* Main image container */}
              <div className="relative rounded-r-2xl overflow-hidden shadow-xl flex items-center justify-center">
                <Image
                  src="/whybacsalgroup.jpg"
                  alt="Bacsal Business Consultancy"
                  width={1000}
                  height={700}
                  className="relative object-cover w-[360px] h-[260px] md:w-[580px] md:h-[420px] lg:w-[750px] lg:h-[540px]"
                />
              </div>
            </motion.div>

            {/* Right Side - Modern Grid Layout */}
            <div className="flex items-center min-h-[500px] md:min-h-[520px] pr-4 md:pr-8 lg:pr-16">
              <div className="grid grid-cols-2 gap-4 md:gap-5">
              {[
                { 
                  title: "Financial Planning", 
                  description: "Strategic budgeting and forecasting to maximize your business potential and ensure long-term stability.", 
                  icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                  color: "from-emerald-500 to-teal-600",
                  bgLight: "bg-emerald-50",
                  textColor: "text-emerald-600",
                  borderColor: "border-emerald-200"
                },
                { 
                  title: "Tax Advisory", 
                  description: "Expert tax strategies and compliance services to minimize liabilities and maximize returns.", 
                  icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
                  color: "from-blue-500 to-indigo-600",
                  bgLight: "bg-blue-50",
                  textColor: "text-blue-600",
                  borderColor: "border-blue-200"
                },
                { 
                  title: "Business Analytics", 
                  description: "Data-driven insights and reporting to help you make informed decisions for growth.", 
                  icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                  color: "from-violet-500 to-purple-600",
                  bgLight: "bg-violet-50",
                  textColor: "text-violet-600",
                  borderColor: "border-violet-200"
                },
                { 
                  title: "Audit & Assurance", 
                  description: "Comprehensive auditing services to ensure accuracy, compliance, and stakeholder confidence.", 
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  color: "from-amber-500 to-orange-600",
                  bgLight: "bg-amber-50",
                  textColor: "text-amber-600",
                  borderColor: "border-amber-200"
                },
                { 
                  title: "Payroll Management", 
                  description: "Streamlined payroll processing and employee benefits administration for seamless operations.", 
                  icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
                  color: "from-rose-500 to-pink-600",
                  bgLight: "bg-rose-50",
                  textColor: "text-rose-600",
                  borderColor: "border-rose-200"
                },
                { 
                  title: "Strategic Consulting", 
                  description: "Expert guidance on business growth, market expansion, and operational efficiency.", 
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  color: "from-cyan-500 to-sky-600",
                  bgLight: "bg-cyan-50",
                  textColor: "text-cyan-600",
                  borderColor: "border-cyan-200"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`relative bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-500 border ${item.borderColor} overflow-hidden group-hover:-translate-y-2 min-h-[140px] md:min-h-[160px]`}>
                    {/* Colored top accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                    
                    {/* Background pattern on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute top-0 right-0 w-32 h-32 ${item.bgLight} rounded-full -translate-y-16 translate-x-16 blur-2xl`} />
                    </div>
                    
                    {/* Icon container with unique color */}
                    <div className={`relative mb-4 w-12 h-12 rounded-2xl ${item.bgLight} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <svg 
                        className={`relative w-6 h-6 ${item.textColor} group-hover:text-white transition-colors duration-300`} 
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    
                    {/* Title with colored hover */}
                    <h3 className={`relative text-sm md:text-base font-bold text-zinc-800 group-hover:${item.textColor} transition-colors duration-300 mb-2`}>
                      {item.title}
                    </h3>
                    
                    {/* Description - Always visible but fades more on hover */}
                    <p className="relative text-xs md:text-sm text-zinc-500 leading-relaxed line-clamp-2 group-hover:text-zinc-600 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>
          </div>

        </div>
      </section>



{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}
{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}
{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}
{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}
{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}{/*Stats Section*/}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 px-4 py-20 md:px-8 md:py-28 lg:px-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100/30 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl w-full">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#1B6174]/10 text-[#1B6174] text-sm font-medium mb-4">
              Our Achievements
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              A snapshot of the businesses we&apos;ve helped and the results we&apos;ve delivered.
            </p>
          </motion.div>

          {/* Modern Bento Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Year Founded - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
              viewport={{ once: true }}
              className="col-span-2 row-span-2 group"
            >
              <div className="relative h-full bg-gradient-to-br from-emerald-50 to-teal-100 rounded-3xl p-8 md:p-10 overflow-hidden border border-emerald-200">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200/40 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-200/40 rounded-full" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-200/60 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-emerald-700 text-lg font-medium mb-2">Year Founded</h3>
                    <p className="text-emerald-600/70 text-sm leading-relaxed max-w-xs">
                      Bacsal Business Consultancy was established to help businesses thrive with expert financial guidance.
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="text-6xl md:text-8xl font-bold text-emerald-600">
                      <CountUp from={2020} to={2024} duration={2} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Partner Companies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-zinc-500 text-sm font-medium mb-1">Partner Companies</h3>
                  <span className="text-4xl md:text-5xl font-bold text-blue-600">
                    <CountUp from={0} to={3} duration={2} delay={0.1} />+
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Happy Clients */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-zinc-500 text-sm font-medium mb-1">Happy Clients</h3>
                  <span className="text-4xl md:text-5xl font-bold text-amber-600">
                    <CountUp from={0} to={50} duration={2} delay={0.2} />+
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Team Members - Wide Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="col-span-2 group"
            >
              <div className="relative h-full bg-gradient-to-r from-violet-50 to-purple-100 rounded-3xl p-6 md:p-8 overflow-hidden border border-violet-200">
                <div className="absolute top-0 right-0 w-48 h-48 bg-violet-200/40 rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-violet-200/60 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-violet-700 text-lg font-medium">Team Members</h3>
                      <p className="text-violet-600/70 text-sm">Dedicated professionals at your service</p>
                    </div>
                  </div>
                  <span className="text-5xl md:text-6xl font-bold text-violet-600">
                    <CountUp from={0} to={7} duration={2} delay={0.3} />+
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>






{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}
{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}
{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}
{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}
{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}{/*Contact Section*/}
      <section className="w-full bg-zinc-900 px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
            Get In Touch
          </h2>
          <p className="mb-8 text-lg text-zinc-400">
            Ready to grow your business? Contact us today.
          </p>
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Contact Us
          </a>
        </div>
      </section>



      {/* Footer */}
      <Footer />

    </div>
  );
}
