import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1B6174]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-zinc-800/50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#1B6174]/10 via-zinc-900/50 to-violet-500/10 rounded-3xl p-8 md:p-12 border border-zinc-800/50">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to streamline your finances?
              </h3>
              <p className="text-zinc-400 max-w-lg">
                Let us handle your accounting, tax, and compliance needs so you can focus on growing your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1B6174] px-8 font-medium text-white transition-all duration-300 hover:bg-[#2d8a9e] hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-8 font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Company Info - Wider Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/bacsallogo.png"
                alt="Bacsal Business Consultancy"
                width={160}
                height={50}
                className="brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              A CPA-led firm and trusted partner in accounting, tax, and business compliance — supporting startups, SMEs, and companies every step of the way.
            </p>
            
            {/* Founder Card */}
            <div className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800/50 mb-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/aj11.png"
                  alt="Arjay B. Bacsal"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">Arjay B. Bacsal, CPA</p>
                  <p className="text-zinc-500 text-sm">Founder & Principal</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/bacsalbusinessconsultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800/50 hover:bg-[#1877f2] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="mailto:bbconteam@gmail.com"
                className="w-10 h-10 bg-zinc-800/50 hover:bg-amber-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
              <a
                href="tel:+639260626619"
                className="w-10 h-10 bg-zinc-800/50 hover:bg-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Bookkeeping & Accounting",
                "Tax Preparation",
                "Business Compliance",
                "Business Systems",
                "Financial Planning",
                "Payroll Management",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#1B6174] rounded-full group-hover:scale-150 transition-transform duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              {/* Address */}
              <li className="group">
                <a 
                  href="https://maps.google.com/?q=Blk+3+2F+7-Eleven+Bldg+797+National+Rd+Brgy+San+Isidro+Mariveles+Bataan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <span className="text-zinc-400 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    Blk 3, 2F, 7-Eleven Bldg., 797, National Rd., Brgy. San Isidro, Mariveles, Bataan, 2105
                  </span>
                </a>
              </li>
              {/* Phone */}
              <li className="group">
                <a 
                  href="tel:+639260626619"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="text-zinc-400 text-sm group-hover:text-white transition-colors duration-300">
                    <span className="block">0969 347 6955</span>
                    <span className="block">0926 062 6619</span>
                  </div>
                </a>
              </li>
              {/* Email */}
              <li className="group">
                <a 
                  href="mailto:bbconteam@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-zinc-400 text-sm group-hover:text-white transition-colors duration-300">
                    bbconteam@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-zinc-800/50">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Bacsal Business Consultancy. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-zinc-600 text-sm">In partnership with</span>
              <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
                <span className="bg-white text-black text-xs font-bold px-1.5 py-0.5 rounded">01</span>
                <span className="font-semibold text-white text-sm">JUAN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
