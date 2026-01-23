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

      {/* Banner Cover */}
      <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[30vh] overflow-hidden">
        <Image
          src="/canada.jpg"
          alt="Bacsal Business Consultancy Banner"
          fill
          className="object-cover"
          priority
        />



        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-wider uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 bg-white/60 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section 
        className="relative flex h-screen w-full justify-between px-4 py-12 md:px-8 md:py-24 lg:px-16 lg:py-1 bg-cover bg-center bg-no-repeat overflow-hidden"
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



{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}
{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}
{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}
{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}
{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}{/*Summary Process Section*/}
      <section className="w-full bg-[#fdfdfd] py-16 md:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-[#1B6174] tracking-wider uppercase mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#151515]">
              Quick and Easy
            </h2>
          </motion.div>

          {/* Process Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8">
            {[
              {
                title: "Consult",
                description: "Tell us about your business, financial needs, and goals. Schedule a consultation at your convenience.",
                icon: (
                  <svg className="w-10 h-10 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                )
              },
              {
                title: "Manage",
                description: "Our professional accountants handle your bookkeeping, taxes, and financial records accurately and on time.",
                icon: (
                  <svg className="w-10 h-10 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                )
              },
              {
                title: "Relax",
                description: "Focus on growing your business while we keep your finances organized, compliant, and stress-free.",
                icon: (
                  <svg className="w-10 h-10 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center max-w-[280px]"
                >
                  {/* Circle Icon Container */}
                  <div className="relative mb-6">
                    {/* Outer ring */}
                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#e8f5f0] flex items-center justify-center">
                      {/* Inner circle */}
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#d4ede4] flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    {/* Decorative leaf/accent */}
                    <div className="absolute -top-1 -right-1 w-6 h-6">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1B6174]">
                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z" fill="currentColor" opacity="0.3"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#151515] mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow Connector (hidden on last item and on mobile) */}
                {index < 2 && (
                  <div className="hidden md:flex items-center mx-4 lg:mx-8">
                    <svg className="w-12 h-12 text-zinc-300" fill="none" viewBox="0 0 24 24">
                      <path 
                        d="M5 12h14m0 0l-4-4m4 4l-4 4" 
                        stroke="currentColor" 
                        strokeWidth={1.5} 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}
{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}
{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}
{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}{/*Company Bento Box Section*/}
{/*Company Bento Box Section*/}
      <section className="relative w-full bg-gradient-to-b from-slate-100 via-slate-50 to-white px-4 py-20 md:px-8 md:py-28 lg:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Bento Grid - Matching reference layout */}
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 auto-rows-[140px]">
            
            {/* Card 1 - IT Systems & Support (Top Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
              viewport={{ once: true }}
              className="col-span-4 md:col-span-3 lg:col-span-3 row-span-2 bg-slate-200/60 rounded-3xl p-6 flex flex-col justify-between"
            >
              {/* IT Icons Row */}
              <div className="flex gap-2">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                </div>
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#151515] mb-1.5">IT Systems & Support</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Seamless software implementation and technical management to power your business operations.</p>
              </div>
            </motion.div>


            

            {/* Card 2 - Transcript Image (Tall Center) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="col-span-4 md:col-span-3 lg:col-span-3 row-span-4 rounded-3xl overflow-hidden relative"
            >
              <Image
                src="/whybacsalgroup.jpg"
                alt="Business Professional"
                fill
                className="object-cover"
              />

            </motion.div>




            {/* Card 3 - HR+ Human Resources (Green) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 bg-[#c8e6c9] rounded-3xl p-6 flex flex-col justify-center"
            >
              <span className="text-5xl md:text-6xl font-bold text-[#151515] mb-2">
                HR+
              </span>
              <p className="text-[#151515]/70 text-sm leading-relaxed">Strategic talent acquisition, labor law guidance, and organizational development programs.</p>
            </motion.div>

            {/* Card 4 - Person Image Card (Top Right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 rounded-3xl overflow-hidden relative bg-gradient-to-br from-rose-200 to-orange-200"
            >
              <Image
                src="/whybacsalgroup.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Card 5 - 100% Compliance (Accounting & Compliance) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="col-span-4 md:col-span-3 lg:col-span-3 row-span-2 bg-slate-200/60 rounded-3xl p-6 flex flex-col justify-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-[#151515] mb-1">
                <CountUp from={0} to={100} duration={2} />%
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#1B6174] mb-2">Compliance</span>
              <p className="text-slate-500 text-sm leading-relaxed">Total accuracy in bookkeeping, tax filings, and regulatory reporting requirements.</p>
            </motion.div>

            {/* Card 6 - Market Strategy & Insights (Marketing) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="col-span-4 md:col-span-5 lg:col-span-6 row-span-2 bg-slate-100/80 rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="flex h-full">
                {/* Left side - Text */}
                <div className="flex-1 flex flex-col justify-center pr-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#151515] leading-tight italic">
                    Market Strategy<br />& Insights
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-3">Data-driven brand positioning and communications to amplify your message across all channels.</p>
                </div>
                
                {/* Right side - Marketing Icons */}
                <div className="flex-1 relative">
                  {/* Subtle connection lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="60" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4"/>
                    <circle cx="100" cy="100" r="40" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4"/>
                  </svg>
                  
                  {/* Icon 1 - Top (Target/Audience) */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-lg bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-700" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  
                  {/* Icon 2 - Right (Analytics) */}
                  <div className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-lg bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-rose-700" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  
                  {/* Icon 3 - Bottom Right (Megaphone) */}
                  <div className="absolute bottom-4 right-8 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-lg bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-700" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                    </svg>
                  </div>
                  
                  {/* Icon 4 - Left (Globe/Reach) */}
                  <div className="absolute top-1/3 left-4 w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-white shadow-lg bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  
                  {/* Icon 5 - Bottom Left (Lightbulb/Ideas) */}
                  <div className="absolute bottom-6 left-1/3 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-lg bg-gradient-to-br from-violet-200 to-violet-300 flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-violet-700" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


















{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}
{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}
{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}
{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}
{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}{/*Services Section*/}
      <section className="justify-center flex items-center h-[150vh] w-full bg-zinc-50 py-16 md:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Two Column Layout Container */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 max-w-xl"
            >
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#151515] leading-tight mb-6">
                Your trusted partner for business growth and financial excellence.
              </h2>
              
              {/* Subtitle */}
              <p className="text-zinc-500 text-base md:text-lg mb-10 leading-relaxed">
                Discover a seamless journey with our expert consultancy services and dedicated support team, committed to your success.
              </p>

              {/* Bullet Points with Vertical Line */}
              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-zinc-200" />
                
                <div className="space-y-8">
                  {[
                    {
                      title: "Bookkeeping & Accounting",
                      description: "Comprehensive bookkeeping services to keep your financial records accurate, organized, and up-to-date for better business decisions."
                    },
                    {
                      title: "Tax Preparation",
                      description: "Expert tax preparation and filing services to ensure compliance, minimize liabilities, and maximize your returns."
                    },
                    {
                      title: "Business Compliance",
                      description: "Stay compliant with BIR, SEC, and other regulatory requirements. We handle permits, registrations, and mandatory filings."
                    },
                    {
                      title: "Business Systems and Processes",
                      description: "Streamline your operations with efficient systems and processes designed to improve productivity and support sustainable growth."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="flex gap-6"
                    >
                      {/* Bullet point */}
                      <div className="relative z-10 flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-zinc-800" />
                      
                      {/* Content */}
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#151515] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image with Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/whybacsalgroup.jpg"
                  alt="Bacsal Business Consultancy"
                  width={600}
                  height={700}
                  className="relative object-cover w-full h-[400px] md:h-[500px] lg:h-[580px] rounded-2xl"
                />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white rounded-2xl shadow-xl p-5 md:p-6 min-w-[240px] md:min-w-[280px]"
              >
                <h4 className="text-sm font-semibold text-zinc-800 mb-4">Our Services</h4>
                <div className="space-y-3">
                  {[
                    { label: "Bookkeeping & Accounting", value: 95 },
                    { label: "Tax Preparation", value: 90 },
                    { label: "Business Compliance", value: 88 },
                    { label: "Systems & Processes", value: 85 }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between gap-4">
                      <span className="text-xs md:text-sm text-zinc-600">{stat.label}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 md:w-24 h-2 bg-zinc-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${stat.value}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-zinc-800 rounded-full"
                          />
                        </div>
                        <span className="text-xs font-medium text-zinc-800 w-8">{stat.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>







{/*Why Choose Us Section*/}{/*Why Choose Us Section*/}{/*Why Choose Us Section*/}{/*Why Choose Us Section*/}
{/*Why Choose Us Section*/}{/*Why Choose Us Section*/}{/*Why Choose Us Section*/}{/*Why Choose Us Section*/}
{/*Why Choose Us Section*/}{/*Why Choose Us Section*/}{/*Why Choose Us Section*/}{/*Why Choose Us Section*/}
      <section className="relative w-full bg-gradient-to-br from-[#f8fafc] via-white to-[#f0fdf4] px-4 py-20 md:px-8 md:py-28 lg:px-16 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          {/* Floating gradient orbs */}
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#1B6174]/5 to-emerald-100/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Modern Header with badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1B6174]/10 to-emerald-500/10 border border-[#1B6174]/20 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-[#1B6174]">Why Partner With Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#151515] via-[#1B6174] to-emerald-600 bg-clip-text text-transparent mb-5">
              Built for Your Success
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Experience the difference of working with a consultancy that puts your growth first.
            </p>
          </motion.div>

          {/* Modern Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            
            {/* Card 1 - Featured Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1 lg:row-span-2 group"
            >
              <div className="h-full bg-gradient-to-br from-[#1B6174] to-[#0f4a5a] rounded-3xl p-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Licensed & Certified Experts
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed mb-6 flex-grow">
                    Our team of CPAs and certified professionals ensures your business receives expert-level guidance, full compliance, and strategic insights you can trust.
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white">C</div>
                      <div className="w-8 h-8 rounded-full bg-cyan-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white">P</div>
                      <div className="w-8 h-8 rounded-full bg-teal-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white">A</div>
                    </div>
                    <span className="text-white/70 text-sm">Certified Professionals</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Fast Turnaround */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-6 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#151515] mb-2">Fast Turnaround</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Quick responses and timely delivery on all financial reports.</p>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-2xl font-bold text-amber-500">24h</span>
                    <span className="text-xs text-zinc-400">avg response</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Transparent Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-6 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#151515] mb-2">Transparent Pricing</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">No hidden fees. Clear, competitive rates for all businesses.</p>
                  
                  <div className="mt-4 flex items-center gap-1">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-zinc-500">No surprise charges</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Dedicated Support (Wide) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:col-span-2 group"
            >
              <div className="h-full bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 rounded-3xl p-6 md:p-8 border border-violet-100 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-violet-200/30 rounded-full blur-2xl" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-[#151515] mb-2">Dedicated Account Manager</h3>
                    <p className="text-zinc-600 leading-relaxed">Get assigned a personal account manager who knows your business inside out and is always just a call or message away.</p>
                  </div>
                  
                  <div className="flex-shrink-0 flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-sm border border-violet-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">Available</p>
                      <p className="text-sm font-semibold text-violet-600">Mon-Sat</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Data-Driven */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-6 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#151515] mb-2">Data-Driven Insights</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Modern analytics tools providing actionable business insights.</p>
                  
                  {/* Mini chart visualization */}
                  <div className="mt-4 flex items-end gap-1 h-8">
                    <div className="w-2 bg-cyan-200 rounded-t h-3"></div>
                    <div className="w-2 bg-cyan-300 rounded-t h-5"></div>
                    <div className="w-2 bg-cyan-400 rounded-t h-4"></div>
                    <div className="w-2 bg-cyan-500 rounded-t h-7"></div>
                    <div className="w-2 bg-cyan-600 rounded-t h-8"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 6 - Proven Track Record */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-[#151515] to-zinc-800 rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">Proven Track Record</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">Trusted expertise helping businesses succeed since 2024.</p>
                  
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-2xl font-bold text-emerald-400">CPA</span>
                      <p className="text-xs text-zinc-500">Licensed</p>
                    </div>
                    <div className="w-px h-8 bg-zinc-700"></div>
                    <div>
                      <span className="text-2xl font-bold text-emerald-400">100%</span>
                      <p className="text-xs text-zinc-500">Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 7 - Technology-Driven */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-6 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#151515] mb-2">Technology-Driven</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Modern accounting systems and digital tools for efficient, accurate reporting.</p>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-cyan-500 border-2 border-white flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500">3+ Tech Partners</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Modern CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#1B6174] to-emerald-600 px-8 font-medium text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#1B6174]/25 hover:scale-105"
              >
                Start Your Journey
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-zinc-200 px-8 font-medium text-zinc-700 transition-all duration-300 hover:border-[#1B6174] hover:text-[#1B6174]"
              >
                View All Services
              </a>
            </div>
          </motion.div>
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
                    <CountUp from={0} to={2} duration={2} delay={0.1} />
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





{/*Client Testimonials Section*/}{/*Client Testimonials Section*/}{/*Client Testimonials Section*/}{/*Client Testimonials Section*/}
{/*Client Testimonials Section*/}{/*Client Testimonials Section*/}{/*Client Testimonials Section*/}{/*Client Testimonials Section*/}
{/*Client Testimonials Section*/}{/*Client Testimonials Section*/}{/*Client Testimonials Section*/}{/*Client Testimonials Section*/}
      <section className="relative w-full bg-gradient-to-b from-white to-slate-50 py-20 md:py-28 overflow-hidden">
        {/* CSS for marquee animations */}
        <style jsx>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-[#1B6174] tracking-wider uppercase mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#151515] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what business owners have to say about working with Bacsal Business Consultancy.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Marquee - Row 1 (scrolls left) */}
        <div className="relative mb-6 overflow-hidden">
          <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 px-3">
                {[
                  {
                    name: "Happy Client",
                    position: "Business Owner",
                    quote: "Bacsal Business Consultancy has been instrumental in helping us streamline our financial operations. Their expertise and dedication are truly remarkable.",
                    rating: 5
                  },
                  {
                    name: "Satisfied Partner",
                    position: "Entrepreneur",
                    quote: "Working with Bacsal has given us peace of mind knowing our compliance and accounting needs are in expert hands. Highly recommended!",
                    rating: 5
                  },
                  {
                    name: "Valued Client",
                    position: "Small Business Owner",
                    quote: "Professional, responsive, and incredibly knowledgeable. The Bacsal team truly understands the needs of growing businesses in the Philippines.",
                    rating: 5
                  },
                  {
                    name: "Trusted Partner",
                    position: "Company Director",
                    quote: "Their attention to detail and proactive approach to financial management has been invaluable for our business growth and success.",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <div
                    key={`row1-${setIndex}-${index}`}
                    className="w-[350px] md:w-[400px] flex-shrink-0"
                  >
                    <div className="h-full bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-[#1B6174]/20 transition-all duration-500">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-[#1B6174]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B6174] to-[#2d8a9e] flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#151515] text-sm">{testimonial.name}</h4>
                          <p className="text-zinc-500 text-xs">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Marquee - Row 2 (scrolls right) */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right" style={{ width: 'max-content' }}>
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 px-3">
                {[
                  {
                    name: "Growing Business",
                    position: "Retail Owner",
                    quote: "Switching to Bacsal was the best decision we made. Their expertise in tax planning and compliance has saved us time and resources.",
                    rating: 5
                  },
                  {
                    name: "Happy Entrepreneur",
                    position: "Tech Startup Founder",
                    quote: "Bacsal's team went above and beyond to help us during our expansion. Their financial insights were crucial in making informed decisions.",
                    rating: 5
                  },
                  {
                    name: "Loyal Client",
                    position: "Service Provider",
                    quote: "From bookkeeping to strategic planning, Bacsal handles everything with precision. They've become an essential part of our operations.",
                    rating: 5
                  },
                  {
                    name: "Business Partner",
                    position: "Construction Firm",
                    quote: "What I appreciate most is their responsiveness and genuine care for our success. Bacsal treats our business like their own.",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <div
                    key={`row2-${setIndex}-${index}`}
                    className="w-[350px] md:w-[400px] flex-shrink-0"
                  >
                    <div className="h-full bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-[#1B6174]/20 transition-all duration-500">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-[#1B6174]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B6174] to-[#2d8a9e] flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#151515] text-sm">{testimonial.name}</h4>
                          <p className="text-zinc-500 text-xs">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-zinc-400 text-sm mb-6">Our Trusted Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Partner logos - replace with actual logos when available */}
              <div className="flex items-center justify-center px-4 py-2 bg-zinc-100 rounded-lg border border-zinc-200">
                <span className="text-sm font-medium text-zinc-600">Juan by Juan Tax</span>
              </div>
              <div className="flex items-center justify-center px-4 py-2 bg-zinc-100 rounded-lg border border-zinc-200">
                <span className="text-sm font-medium text-zinc-600">AccountingSuite</span>
              </div>
              <div className="flex items-center justify-center px-4 py-2 bg-zinc-100 rounded-lg border border-zinc-200">
                <span className="text-sm font-medium text-zinc-600">First Circle</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>








{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}
{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}
{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}
{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}
{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}{/*FAQ'S Section*/}
      <section className="relative w-full bg-white px-4 py-20 md:px-8 md:py-28 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#151515] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-500 text-base md:text-lg">
              <a href="/contact" className="text-[#1B6174] hover:underline">Contact us</a> for more information.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Side - FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="space-y-4">
                {[
                  {
                    question: "What services does Bacsal Business Consultancy offer?",
                    answer: "We offer comprehensive business consultancy services including financial planning, tax advisory, business analytics, audit & assurance, payroll management, and strategic consulting to help your business grow and succeed."
                  },
                  {
                    question: "How can Bacsal help my business reduce taxes?",
                    answer: "Our expert tax advisors analyze your business structure and financial situation to identify legal tax-saving opportunities, ensure compliance with regulations, and implement strategies that minimize your tax liabilities while maximizing returns."
                  },
                  {
                    question: "What industries does Bacsal specialize in?",
                    answer: "We serve businesses across various industries including retail, manufacturing, professional services, healthcare, real estate, and technology startups. Our team adapts our expertise to meet the unique needs of each sector."
                  },
                  {
                    question: "How do I get started with Bacsal Business Consultancy?",
                    answer: "Getting started is easy! Simply schedule a free consultation through our contact page. We'll discuss your business needs, assess your current situation, and propose a customized plan to help you achieve your goals."
                  },
                  {
                    question: "What makes Bacsal different from other consultancy firms?",
                    answer: "Bacsal combines personalized attention with professional expertise. We treat each client as a partner, providing dedicated support, transparent pricing, and actionable insights that drive real business results."
                  },
                  {
                    question: "Do you offer ongoing support or one-time consultations?",
                    answer: "We offer both options! Whether you need a one-time assessment, monthly bookkeeping, quarterly reviews, or full-time financial management, we have flexible packages tailored to your business needs and budget."
                  }
                ].map((faq, index) => (
                  <motion.details
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
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
            </motion.div>

            {/* Right Side - Question Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 lg:max-w-md"
            >
              <div className="sticky top-8">
                {/* Illustration */}
                <div className="relative flex justify-center mb-8">
                  <div className="relative">
                    {/* Person illustration placeholder */}
                    <div className="w-48 h-48 md:w-56 md:h-56 relative">
                      {/* Background blob */}
                      <div className="absolute inset-0 bg-[#1B6174]/5 rounded-full" />
                      {/* Question marks decoration */}
                      <div className="absolute -top-2 -right-2 text-4xl text-[#1B6174] font-bold animate-bounce">?</div>
                      <div className="absolute top-8 -left-4 text-2xl text-[#1B6174]/60 font-bold">?</div>
                      <div className="absolute -bottom-1 right-8 text-xl text-[#1B6174]/40 font-bold">?</div>
                      {/* Center icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-24 h-24 text-[#1B6174]" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Any Question Card */}
                <div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-sm">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#151515] mb-3">
                    Any Question?
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base mb-6 leading-relaxed">
                    You can ask anything you want to know about Bacsal Business Consultancy.
                  </p>

                  {/* Contact Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-zinc-600 text-sm mb-2 block">Full Name:</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-[#1B6174] focus:ring-2 focus:ring-[#1B6174]/20 outline-none transition-all duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-zinc-600 text-sm mb-2 block">Email Address:</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-[#1B6174] focus:ring-2 focus:ring-[#1B6174]/20 outline-none transition-all duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-zinc-600 text-sm mb-2 block">Your Question:</label>
                      <input
                        type="text"
                        placeholder="Enter your question here"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-[#1B6174] focus:ring-2 focus:ring-[#1B6174]/20 outline-none transition-all duration-300 text-sm"
                      />
                    </div>
                    <a
                      href="/contact"
                      className="block w-full bg-[#1B6174] hover:bg-[#155666] text-white font-medium py-3 px-6 rounded-full text-center transition-colors duration-300"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>




{/*Quote Banner Section*/}{/*Quote Banner Section*/}{/*Quote Banner Section*/}{/*Quote Banner Section*/}{/*Quote Banner Section*/}
{/*Quote Banner Section*/}{/*Quote Banner Section*/}{/*Quote Banner Section*/}{/*Quote Banner Section*/}{/*Quote Banner Section*/}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B6174] to-[#0f4a5a]">
          {/* Replace with actual image when available */}
          <Image
            src="/placeholder-quote-banner.jpg"
            alt="Bacsal Business Consultancy"
            fill
            className="object-cover opacity-30"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B6174]/80 to-[#0f4a5a]/80" />
        
        {/* Quote Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl text-center"
          >
            {/* Quote Icon */}
            <svg className="w-12 h-12 md:w-16 md:h-16 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            {/* Quote Text */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              &ldquo;A trusted partner to our clients by delivering reliable accounting and tax solutions.&rdquo;
            </h2>
            
            {/* Attribution */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[2px] bg-white/40" />
              <span className="text-white/80 text-sm md:text-base font-medium tracking-wider uppercase">
                Bacsal Business Consultancy
              </span>
              <div className="w-12 h-[2px] bg-white/40" />
            </div>
          </motion.div>
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




    </div>
  );
}
