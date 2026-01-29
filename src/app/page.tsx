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
      <section id="home" className="relative w-full h-[40vh] md:h-[50vh] lg:h-[30vh] overflow-hidden">
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


        

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="mt-8 text-center"
          >
            <p className="text-zinc-400 text-xs mb-4">In partnership with :</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center justify-center px-4  bg-white/80 backdrop-blur-sm rounded-lg border border-zinc-200 shadow-sm">
                <Image
                  src="/juanlogoblack.png"
                  alt="Juan by Juan Tax"
                  width={120}
                  height={10}
                  className="object-contain"
                />
              </div>
            </div>
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
                <h3 className="text-xl font-bold text-[#151515] mb-1.5">Utilizes Accounting Systems & Tools</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Enhances efficiency and accuracy with expert IT support and modern accounting software.</p>
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
                src="/bacsallong.jpg"
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
                AI+
              </span>
              <p className="text-[#151515]/70 text-sm leading-relaxed">Leverages advanced AI automation to streamline accounting, tax, and business processes—delivering faster, more accurate, and data-driven solutions that empower clients to focus on growth.</p>
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
                src="/hrs.png"
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
      <section id="services" className="relative w-full bg-gradient-to-b from-zinc-50 via-white to-zinc-50 py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1B6174]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-[#1B6174]/10 border border-[#1B6174]/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#1B6174] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#1B6174]">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#151515] leading-tight mb-5">
              Comprehensive Business Solutions
            </h2>
            <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Your trusted partner for business growth and financial excellence.
            </p>
          </motion.div>

          {/* Services - Modern Alternating Layout */}
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Accounting & Bookkeeping",
                description: "Complete bookkeeping, financial statement preparation, general ledger review, account reconciliation, and clean-up of backlogged accounting records.",
                features: ["Financial Statements", "Ledger Review", "Account Reconciliation", "Backlog Clean-up"],
                color: "from-blue-500 to-cyan-500",
                lightColor: "bg-blue-50",
                textColor: "text-blue-600"
              },
              {
                number: "02",
                title: "Tax Compliance & Advisory",
                description: "Preparation and filing of tax returns, BIR registration, tax planning and advisory, and handling of BIR notices, audits, and assessments.",
                features: ["Tax Returns Filing", "BIR Registration", "Tax Planning", "Audit Support"],
                color: "from-emerald-500 to-teal-500",
                lightColor: "bg-emerald-50",
                textColor: "text-emerald-600"
              },
              {
                number: "03",
                title: "Business Registration",
                description: "SEC/DTI registration, BIR COR processing, LGU permits, barangay clearance, and assistance with amendments and closures.",
                features: ["SEC/DTI Registration", "BIR COR Processing", "LGU Permits", "Business Amendments"],
                color: "from-violet-500 to-purple-500",
                lightColor: "bg-violet-50",
                textColor: "text-violet-600"
              },
              {
                number: "04",
                title: "Payroll & Statutory Reporting",
                description: "Payroll computation, payslip preparation, SSS, PhilHealth, and Pag-IBIG filings, and statutory compliance schedules.",
                features: ["Payroll Computation", "Payslip Preparation", "Government Filings", "Compliance Schedules"],
                color: "from-orange-500 to-amber-500",
                lightColor: "bg-orange-50",
                textColor: "text-orange-600"
              },
              {
                number: "05",
                title: "Financial Reporting & Management",
                description: "Management accounting, budgeting, cash flow analysis, financial performance evaluation, and business planning support.",
                features: ["Management Accounting", "Budgeting", "Cash Flow Analysis", "Performance Evaluation"],
                color: "from-rose-500 to-pink-500",
                lightColor: "bg-rose-50",
                textColor: "text-rose-600"
              },
              {
                number: "06",
                title: "Business Advisory & Consultancy",
                description: "Start-up advisory, business structuring, internal controls review, process improvement, and ongoing financial consultancy.",
                features: ["Start-up Advisory", "Business Structuring", "Internal Controls", "Process Improvement"],
                color: "from-[#1B6174] to-cyan-600",
                lightColor: "bg-cyan-50",
                textColor: "text-[#1B6174]"
              },
              {
                number: "07",
                title: "Specialized & Support Services",
                description: "Sworn declarations, financial certifications, government accreditation assistance, audit support, and other tax-related services.",
                features: ["Sworn Declarations", "Financial Certifications", "Accreditation Assistance", "Audit Support"],
                color: "from-slate-600 to-zinc-700",
                lightColor: "bg-slate-50",
                textColor: "text-slate-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100`}
              >
                {/* Number & Gradient Side */}
                <div className={`relative w-full lg:w-72 flex-shrink-0 bg-gradient-to-br ${service.color} p-8 lg:p-10 flex flex-col justify-between min-h-[200px] lg:min-h-[280px]`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                  </div>
                  
                  <span className="relative text-white/30 text-7xl lg:text-8xl font-bold leading-none">{service.number}</span>
                  

                </div>

                {/* Content Side */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#151515] mb-4 group-hover:text-[#1B6174] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${service.lightColor} ${service.textColor} transition-transform hover:scale-105`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-16 md:mt-20"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-zinc-50 to-slate-50 rounded-2xl border border-zinc-100">
              <div className="text-center sm:text-left">
                <p className="text-[#151515] font-semibold mb-1">Need a custom solution?</p>
                <p className="text-zinc-500 text-sm">Let&apos;s discuss how we can help your business grow.</p>
              </div>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#1B6174] hover:bg-[#154a59] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#1B6174]/25 hover:shadow-xl hover:shadow-[#1B6174]/30 whitespace-nowrap"
              >
                <span>Get in Touch</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </motion.div>
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
                  <p className="text-zinc-500 text-sm leading-relaxed">Accomodate concerns and issues</p>
                  
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-[#151515] mb-2">Working Hours</h3>
                    <p className="text-zinc-600 leading-relaxed">We're available Monday to Saturday, 9:00 AM – 6:00 PM, ready to assist with all your business needs.</p>
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

            {/* Card 6 - Continuously Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:col-span-2 group"
            >
              <div className="h-full bg-gradient-to-br from-[#151515] to-zinc-800 rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">Continuously Learning</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">Staying ahead with the latest industry trends, regulations, and best practices.</p>
                  



                  <div className="flex items-center gap-6">

         
                    <div>
                      <div className="flex gap-0.5 mb-1">
                        <span className="text-emerald-400 text-lg">★</span>
                        <span className="text-emerald-400 text-lg">★</span>
                        <span className="text-emerald-400 text-lg">★</span>
                        <span className="text-emerald-400 text-lg">★</span>
                        <span className="text-emerald-400 text-lg">★</span>
                      </div>
                      <p className="text-xs text-zinc-500">Competency</p>
                    </div>
                  </div>



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

        {/* Client Performance Analytics - Modern Split Layout */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#1B6174]/10 text-[#1B6174] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                Performance Metrics
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#151515]">
                Client Services Excellence
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side - Main Satisfaction Score */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#151515] to-[#2a2a2a] rounded-3xl p-8 md:p-10 relative overflow-hidden"
              >
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <p className="text-zinc-400 text-sm font-medium mb-2">Overall Rating</p>
                      <div className="flex items-baseline gap-2">
                        <CountUp
                          to={4.98}
                          from={0}
                          duration={2}
                          className="text-6xl md:text-7xl font-bold text-white"
                        />
                        <span className="text-zinc-500 text-2xl font-medium">/ 5</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Rating Breakdown */}
                  <div className="space-y-4">
                    {[
                      { label: "Professionalism", value: 5.00, color: "from-emerald-400 to-emerald-500" },
                      { label: "Expertise", value: 4.98, color: "from-blue-400 to-blue-500" },
                      { label: "Advisory", value: 4.98, color: "from-violet-400 to-violet-500" },
                      { label: "Timeliness", value: 4.98, color: "from-amber-400 to-amber-500" },
                      { label: "Responsiveness", value: 4.98, color: "from-rose-400 to-rose-500" },
                      { label: "Accuracy", value: 4.98, color: "from-cyan-400 to-cyan-500" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-zinc-400 text-sm">{item.label}</span>
                          <span className="text-white text-sm font-semibold">{item.value.toFixed(2)}</span>
                        </div>
                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(item.value / 5) * 100}%` }}
                            transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side - NPS & Retention */}
              <div className="grid grid-rows-2 gap-6">
                {/* Net Promoter Score */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-3xl p-6 md:p-8 relative overflow-hidden border border-emerald-200"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10 flex items-center justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        <p className="text-emerald-700 text-sm font-medium">Net Promoter Score</p>
                      </div>
                      <p className="text-emerald-600/70 text-xs max-w-[200px]">
                        Clients who would recommend our services to others
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline">
                        <CountUp
                          to={95}
                          from={0}
                          duration={2}
                          className="text-5xl md:text-6xl font-bold text-emerald-600"
                        />
                        <span className="text-emerald-500 text-2xl font-bold ml-1">%</span>
                      </div>
                      <p className="text-emerald-600 text-xs font-medium mt-1">Excellent</p>
                    </div>
                  </div>
                </motion.div>

                {/* Client Retention */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-6 md:p-8 relative overflow-hidden border border-blue-200"
                >
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200/30 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative z-10 flex items-center justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        <p className="text-blue-700 text-sm font-medium">Client Retention</p>
                      </div>
                      <p className="text-blue-600/70 text-xs max-w-[200px]">
                        Clients who continue to trust our services year after year
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline">
                        <CountUp
                          to={98}
                          from={0}
                          duration={2}
                          className="text-5xl md:text-6xl font-bold text-blue-600"
                        />
                        <span className="text-blue-500 text-2xl font-bold ml-1">%</span>
                      </div>
                      <p className="text-blue-600 text-xs font-medium mt-1">Industry Leading</p>
                    </div>
                  </div>
                </motion.div>
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








    </div>
  );
}
