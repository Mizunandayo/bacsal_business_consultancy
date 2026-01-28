"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Service categories with their sub-services
// paymentType: 'monthly' | 'quarterly' | 'one-time'
const serviceCategories = [
  {
    id: 1,
    name: "Accounting & Bookkeeping",
    icon: "📊",
    services: [
      { id: "ab1", name: "Monthly Bookkeeping Services", basePrice: 5000, paymentType: "monthly" as const },
      { id: "ab2", name: "Financial Statement Preparation", basePrice: 8000, paymentType: "quarterly" as const },
      { id: "ab3", name: "General Ledger Review", basePrice: 3500, paymentType: "one-time" as const },
      { id: "ab4", name: "Account Reconciliation", basePrice: 2500, paymentType: "monthly" as const },
      { id: "ab5", name: "Backlog Clean-up", basePrice: 7500, paymentType: "one-time" as const },
    ]
  },
  {
    id: 2,
    name: "Tax Compliance & Advisory",
    icon: "📋",
    services: [
      { id: "tc1", name: "Monthly Tax Filing & Computation", basePrice: 3500, paymentType: "monthly" as const },
      { id: "tc2", name: "Annual Income Tax Return (ITR)", basePrice: 5000, paymentType: "one-time" as const },
      { id: "tc3", name: "BIR Registration Assistance", basePrice: 4000, paymentType: "one-time" as const },
      { id: "tc4", name: "Tax Planning & Advisory", basePrice: 6000, paymentType: "one-time" as const },
      { id: "tc5", name: "BIR Audit Support", basePrice: 10000, paymentType: "one-time" as const },
    ]
  },
  {
    id: 3,
    name: "Business Registration",
    icon: "📝",
    services: [
      { id: "br1", name: "SEC/DTI Registration", basePrice: 8000, paymentType: "one-time" as const },
      { id: "br2", name: "BIR COR Processing", basePrice: 5000, paymentType: "one-time" as const },
      { id: "br3", name: "LGU Permits & Barangay Clearance", basePrice: 4000, paymentType: "one-time" as const },
      { id: "br4", name: "Business Amendments", basePrice: 3500, paymentType: "one-time" as const },
      { id: "br5", name: "Business Closure Assistance", basePrice: 6000, paymentType: "one-time" as const },
    ]
  },
  {
    id: 4,
    name: "Payroll & Statutory Reporting",
    icon: "💰",
    services: [
      { id: "pr1", name: "Monthly Payroll Computation", basePrice: 3000, paymentType: "monthly" as const },
      { id: "pr2", name: "Payslip Preparation", basePrice: 1500, paymentType: "monthly" as const },
      { id: "pr3", name: "SSS/PhilHealth/Pag-IBIG Filings", basePrice: 2500, paymentType: "monthly" as const },
      { id: "pr4", name: "Compliance Schedules", basePrice: 2000, paymentType: "quarterly" as const },
    ]
  },
  {
    id: 5,
    name: "Financial Reporting & Management",
    icon: "📈",
    services: [
      { id: "fr1", name: "Management Accounting Reports", basePrice: 8000, paymentType: "monthly" as const },
      { id: "fr2", name: "Budgeting & Forecasting", basePrice: 6000, paymentType: "quarterly" as const },
      { id: "fr3", name: "Cash Flow Analysis", basePrice: 4500, paymentType: "quarterly" as const },
      { id: "fr4", name: "Financial Performance Evaluation", basePrice: 7000, paymentType: "quarterly" as const },
      { id: "fr5", name: "Business Planning Support", basePrice: 10000, paymentType: "one-time" as const },
    ]
  },
  {
    id: 6,
    name: "Business Advisory & Consultancy",
    icon: "💼",
    services: [
      { id: "ba1", name: "Start-up Advisory", basePrice: 8000, paymentType: "one-time" as const },
      { id: "ba2", name: "Business Structuring", basePrice: 12000, paymentType: "one-time" as const },
      { id: "ba3", name: "Internal Controls Review", basePrice: 7500, paymentType: "one-time" as const },
      { id: "ba4", name: "Process Improvement", basePrice: 6000, paymentType: "one-time" as const },
      { id: "ba5", name: "Ongoing Financial Consultancy", basePrice: 5000, paymentType: "monthly" as const },
    ]
  },
  {
    id: 7,
    name: "Specialized & Support Services",
    icon: "⭐",
    services: [
      { id: "ss1", name: "Sworn Declarations", basePrice: 2000, paymentType: "one-time" as const },
      { id: "ss2", name: "Financial Certifications", basePrice: 3000, paymentType: "one-time" as const },
      { id: "ss3", name: "Government Accreditation Assistance", basePrice: 8000, paymentType: "one-time" as const },
      { id: "ss4", name: "Audit Support", basePrice: 10000, paymentType: "one-time" as const },
      { id: "ss5", name: "Audited Financial Statement", basePrice: 13000, paymentType: "one-time" as const },
    ]
  },
];

type PaymentType = "monthly" | "quarterly" | "one-time";

interface SelectedService {
  id: string;
  name: string;
  categoryName: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  paymentType: PaymentType;
}

interface CustomerInfo {
  businessName: string;
  address: string;
  contactNo: string;
  email: string;
  businessTax: "vat" | "non-vat" | "";
  taxStructure: "8-percent" | "itemized" | "osd" | "";
  totalAssets: string;
  income: string;
  sales: string;
  negotiationApplicable: boolean;
}

export default function PricingPage() {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    businessName: "",
    address: "",
    contactNo: "",
    email: "",
    businessTax: "",
    taxStructure: "",
    totalAssets: "",
    income: "",
    sales: "",
    negotiationApplicable: false,
  });
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [discount, setDiscount] = useState(0);
  const [taxRate] = useState(3);
  const quotationRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const validityDate = new Date(today);
  validityDate.setDate(validityDate.getDate() + 20);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const generateQuotationNumber = () => {
    const year = today.getFullYear();
    const random = Math.floor(Math.random() * 99999).toString().padStart(5, '0');
    return `${year}-${random}`;
  };

  const [quotationNumber] = useState(generateQuotationNumber());

  const toggleService = (categoryName: string, service: { id: string; name: string; basePrice: number; paymentType: PaymentType }) => {
    const existingIndex = selectedServices.findIndex(s => s.id === service.id);
    
    if (existingIndex >= 0) {
      // Service already exists, remove it (toggle off)
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      // Add new service
      setSelectedServices([...selectedServices, {
        id: service.id,
        name: service.name,
        categoryName,
        quantity: 1,
        unitPrice: service.basePrice,
        lineTotal: service.basePrice,
        paymentType: service.paymentType,
      }]);
    }
  };

  const removeService = (id: string) => {
    setSelectedServices(selectedServices.filter(s => s.id !== id));
  };

  const updateServiceQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    const updated = selectedServices.map(s => {
      if (s.id === id) {
        return { ...s, quantity, lineTotal: quantity * s.unitPrice };
      }
      return s;
    });
    setSelectedServices(updated);
  };

  const updateServicePrice = (id: string, unitPrice: number) => {
    if (unitPrice < 0) return;
    const updated = selectedServices.map(s => {
      if (s.id === id) {
        return { ...s, unitPrice, lineTotal: s.quantity * unitPrice };
      }
      return s;
    });
    setSelectedServices(updated);
  };

  const subtotal = selectedServices.reduce((sum, s) => sum + s.lineTotal, 0);
  const discountAmount = subtotal * (discount / 100);
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = taxableAmount * (taxRate / 100);
  const total = taxableAmount + taxAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateQuote = async () => {
    if (selectedServices.length === 0) return;
    
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/generate-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerInfo,
          selectedServices,
          quotationNumber,
          date: formatDate(today),
          validityDate: formatDate(validityDate),
          subtotal,
          discount,
          discountAmount,
          taxRate,
          taxAmount,
          total,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Quotation-${quotationNumber}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error generating quote:', error);
      alert('Failed to generate quotation. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Minimal Header */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-medium text-[#1B6174] tracking-widest uppercase mb-4">
              Service Quotation
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Build Your Quote
            </h1>
            <p className="text-gray-500 max-w-md mx-auto">
              Select the services you need. Simple, transparent pricing.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Panel - Service Selection */}
          <div className="lg:col-span-3 space-y-8 print:hidden">
            {/* Customer Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
                Business Details
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Business Name */}
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      value={customerInfo.businessName}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, businessName: e.target.value })}
                      className="w-full px-3 py-3 text-gray-900 bg-transparent border-0 border-b border-gray-200 focus:border-[#1B6174] focus:ring-0 transition-colors placeholder:text-gray-400"
                      placeholder="Business / Company Name"
                    />
                  </div>
                  
                  {/* Address */}
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      className="w-full px-3 py-3 text-gray-900 bg-transparent border-0 border-b border-gray-200 focus:border-[#1B6174] focus:ring-0 transition-colors placeholder:text-gray-400"
                      placeholder="Business Address"
                    />
                  </div>
                  
                  {/* Contact Number */}
                  <div>
                    <input
                      type="text"
                      value={customerInfo.contactNo}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, contactNo: e.target.value })}
                      className="w-full px-3 py-3 text-gray-900 bg-transparent border-0 border-b border-gray-200 focus:border-[#1B6174] focus:ring-0 transition-colors placeholder:text-gray-400"
                      placeholder="Contact Number"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full px-3 py-3 text-gray-900 bg-transparent border-0 border-b border-gray-200 focus:border-[#1B6174] focus:ring-0 transition-colors placeholder:text-gray-400"
                      placeholder="Email Address"
                    />
                  </div>
                  
                  {/* Business Tax Type */}
                  <div>
                    <select
                      value={customerInfo.businessTax}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, businessTax: e.target.value as "vat" | "non-vat" | "" })}
                      className="w-full px-3 py-3 text-gray-900 bg-transparent border-0 border-b border-gray-200 focus:border-[#1B6174] focus:ring-0 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="text-gray-400">Business Tax Type</option>
                      <option value="vat">VAT Registered</option>
                      <option value="non-vat">Non-VAT</option>
                    </select>
                  </div>
                  
                  {/* Tax Structure */}
                  <div>
                    <select
                      value={customerInfo.taxStructure}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, taxStructure: e.target.value as "8-percent" | "itemized" | "osd" | "" })}
                      className="w-full px-3 py-3 text-gray-900 bg-transparent border-0 border-b border-gray-200 focus:border-[#1B6174] focus:ring-0 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="text-gray-400">Tax Structure</option>
                      <option value="8-percent">8% Tax Regime</option>
                      <option value="itemized">Itemized Deduction</option>
                      <option value="osd">Optional Standard Deduction (OSD)</option>
                    </select>
                  </div>
                  
                  {/* Total Assets */}
                  <div>
                    <input
                      type="text"
                      value={customerInfo.totalAssets}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, totalAssets: e.target.value })}
                      className="w-full px-3 py-3 text-gray-900 bg-transparent border-0 border-b border-gray-200 focus:border-[#1B6174] focus:ring-0 transition-colors placeholder:text-gray-400"
                      placeholder="Total Assets (₱)"
                    />
                  </div>
                  
                  {/* Income */}
                  <div>
                    <input
                      type="text"
                      value={customerInfo.income}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, income: e.target.value })}
                      className="w-full px-3 py-3 text-gray-900 bg-transparent border-0 border-b border-gray-200 focus:border-[#1B6174] focus:ring-0 transition-colors placeholder:text-gray-400"
                      placeholder="Annual Income (₱)"
                    />
                  </div>
                  
                  {/* Sales */}
                  <div>
                    <input
                      type="text"
                      value={customerInfo.sales}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, sales: e.target.value })}
                      className="w-full px-3 py-3 text-gray-900 bg-transparent border-0 border-b border-gray-200 focus:border-[#1B6174] focus:ring-0 transition-colors placeholder:text-gray-400"
                      placeholder="Annual Sales (₱)"
                    />
                  </div>
                  
                  {/* Negotiation Applicable */}
                  <div className="flex items-center gap-3 py-3">
                    <input
                      type="checkbox"
                      id="negotiation"
                      checked={customerInfo.negotiationApplicable}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, negotiationApplicable: e.target.checked })}
                      className="w-5 h-5 rounded border-gray-300 text-[#1B6174] focus:ring-[#1B6174] cursor-pointer"
                    />
                    <label htmlFor="negotiation" className="text-sm text-gray-600 cursor-pointer">
                      Negotiation Applicable
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
                Select Services
              </h2>
              
              {/* Legend */}
              <div className="flex flex-wrap gap-4 mb-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-gray-500">Monthly</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span className="text-gray-500">Quarterly</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span className="text-gray-500">One-time (50% downpayment)</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                      className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{category.icon}</span>
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        {selectedServices.filter(s => category.services.some(cs => cs.id === s.id)).length > 0 && (
                          <span className="px-2 py-0.5 bg-[#1B6174]/10 text-[#1B6174] text-xs font-medium rounded-full">
                            {selectedServices.filter(s => category.services.some(cs => cs.id === s.id)).length}
                          </span>
                        )}
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${activeCategory === category.id ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {activeCategory === category.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-4 space-y-1">
                            {category.services.map((service) => {
                              const isSelected = selectedServices.some(s => s.id === service.id);
                              const paymentColor = service.paymentType === 'monthly' 
                                ? 'bg-blue-500' 
                                : service.paymentType === 'quarterly' 
                                  ? 'bg-purple-500' 
                                  : 'bg-amber-500';
                              return (
                                <div
                                  key={service.id}
                                  onClick={() => toggleService(category.name, service)}
                                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                                    isSelected 
                                      ? 'bg-[#1B6174] text-white' 
                                      : 'hover:bg-gray-50 text-gray-700'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                                      isSelected 
                                        ? 'border-white/30 bg-white/20' 
                                        : 'border-gray-300'
                                    }`}>
                                      {isSelected && (
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className={`w-2 h-2 rounded-full ${paymentColor} ${isSelected ? 'opacity-70' : ''}`}></span>
                                      <span className="text-sm font-medium">{service.name}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                                      isSelected 
                                        ? 'bg-white/20 text-white/80' 
                                        : 'bg-gray-100 text-gray-500'
                                    }`}>
                                      {service.paymentType === 'monthly' ? '/mo' : service.paymentType === 'quarterly' ? '/qtr' : 'once'}
                                    </span>
                                    <span className={`text-sm font-semibold ${isSelected ? 'text-white/90' : 'text-[#1B6174]'}`}>
                                      ₱{formatCurrency(service.basePrice)}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Panel - Quote Summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <motion.div
                ref={quotationRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1B6174] rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold">B</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">BACSAL</p>
                        <p className="text-xs text-gray-400">Business Consultancy</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Quote #{quotationNumber}</p>
                      <p className="text-xs text-gray-400">{formatDate(today)}</p>
                    </div>
                  </div>
                  
                  {customerInfo.businessName && (
                    <div className="pt-4 border-t border-gray-100 space-y-1">
                      <p className="text-sm font-medium text-gray-900">{customerInfo.businessName}</p>
                      {customerInfo.address && <p className="text-xs text-gray-500">{customerInfo.address}</p>}
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
                        {customerInfo.contactNo && <span>{customerInfo.contactNo}</span>}
                        {customerInfo.email && <span>{customerInfo.email}</span>}
                      </div>
                      {(customerInfo.businessTax || customerInfo.taxStructure) && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {customerInfo.businessTax && (
                            <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full uppercase">
                              {customerInfo.businessTax === 'vat' ? 'VAT' : 'Non-VAT'}
                            </span>
                          )}
                          {customerInfo.taxStructure && (
                            <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                              {customerInfo.taxStructure === '8-percent' ? '8% Regime' : 
                               customerInfo.taxStructure === 'itemized' ? 'Itemized' : 'OSD'}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Services */}
                <div className="p-6">
                  <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
                    Selected Services
                  </p>
                  
                  {selectedServices.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500">No services selected</p>
                      <p className="text-xs text-gray-400 mt-1">Click services to add</p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-[280px] overflow-y-auto">
                      {selectedServices.map((service) => {
                        const paymentColor = service.paymentType === 'monthly' 
                          ? 'bg-blue-500' 
                          : service.paymentType === 'quarterly' 
                            ? 'bg-purple-500' 
                            : 'bg-amber-500';
                        return (
                          <motion.div 
                            key={service.id} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="group"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${paymentColor} flex-shrink-0`}></span>
                                  <p className="text-sm text-gray-900 truncate">{service.name}</p>
                                </div>
                                <div className="flex items-center gap-2 mt-1 print:hidden ml-4">
                                  <button
                                    onClick={() => updateServiceQuantity(service.id, service.quantity - 1)}
                                    className="w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                                  >
                                    −
                                  </button>
                                  <span className="text-xs text-gray-500 w-4 text-center">{service.quantity}</span>
                                  <button
                                    onClick={() => updateServiceQuantity(service.id, service.quantity + 1)}
                                    className="w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                                  >
                                    +
                                  </button>
                                  <span className="text-xs text-gray-400">× ₱{formatCurrency(service.unitPrice)}</span>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="text-right">
                                  <span className="text-sm font-medium text-gray-900">₱{formatCurrency(service.lineTotal)}</span>
                                  <p className="text-[10px] text-gray-400">
                                    {service.paymentType === 'monthly' ? '/month' : 
                                     service.paymentType === 'quarterly' ? '/quarter' : 
                                     'one-time'}
                                  </p>
                                </div>
                                <button
                                  onClick={() => removeService(service.id)}
                                  className="opacity-0 group-hover:opacity-100 w-5 h-5 rounded-md hover:bg-red-50 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all print:hidden"
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Payment Breakdown */}
                {selectedServices.length > 0 && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/30">
                    <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-3">
                      Payment Breakdown
                    </p>
                    <div className="space-y-2 text-xs">
                      {/* Monthly Services */}
                      {selectedServices.filter(s => s.paymentType === 'monthly').length > 0 && (
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span className="text-gray-600">Monthly (ongoing)</span>
                          </div>
                          <span className="font-medium text-gray-900">
                            ₱{formatCurrency(selectedServices.filter(s => s.paymentType === 'monthly').reduce((sum, s) => sum + s.lineTotal, 0))}/mo
                          </span>
                        </div>
                      )}
                      {/* Quarterly Services */}
                      {selectedServices.filter(s => s.paymentType === 'quarterly').length > 0 && (
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            <span className="text-gray-600">Quarterly</span>
                          </div>
                          <span className="font-medium text-gray-900">
                            ₱{formatCurrency(selectedServices.filter(s => s.paymentType === 'quarterly').reduce((sum, s) => sum + s.lineTotal, 0))}/qtr
                          </span>
                        </div>
                      )}
                      {/* One-time Services */}
                      {selectedServices.filter(s => s.paymentType === 'one-time').length > 0 && (
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            <span className="text-gray-600">One-time (50% DP)</span>
                          </div>
                          <span className="font-medium text-gray-900">
                            ₱{formatCurrency(selectedServices.filter(s => s.paymentType === 'one-time').reduce((sum, s) => sum + s.lineTotal, 0))}
                          </span>
                        </div>
                      )}
                      {/* Down Payment Required */}
                      {selectedServices.filter(s => s.paymentType === 'one-time').length > 0 && (
                        <div className="flex justify-between items-center pt-2 border-t border-gray-200 mt-2">
                          <span className="text-amber-600 font-medium">Down payment (50%)</span>
                          <span className="font-semibold text-amber-600">
                            ₱{formatCurrency(selectedServices.filter(s => s.paymentType === 'one-time').reduce((sum, s) => sum + s.lineTotal, 0) / 2)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Totals */}
                {selectedServices.length > 0 && (
                  <div className="p-6 bg-gray-50/50 border-t border-gray-100">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-500">
                        <span>Subtotal</span>
                        <span>₱{formatCurrency(subtotal)}</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-500 print:hidden">
                        <span>Discount</span>
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            value={discount}
                            onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                            className="w-12 px-2 py-1 text-xs text-right bg-white border border-gray-200 rounded-md focus:border-[#1B6174] focus:ring-0"
                            min="0"
                            max="100"
                          />
                          <span className="text-xs">%</span>
                        </div>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-gray-500">
                          <span>Less discount</span>
                          <span>-₱{formatCurrency(discountAmount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-gray-500">
                        <span>Tax ({taxRate}%)</span>
                        <span>₱{formatCurrency(taxAmount)}</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-gray-200">
                        <span className="font-semibold text-gray-900">Total</span>
                        <span className="text-xl font-semibold text-[#1B6174]">₱{formatCurrency(total)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="p-6 border-t border-gray-100 print:hidden">
                  <button
                    onClick={handleGenerateQuote}
                    disabled={selectedServices.length === 0 || isGenerating}
                    className="w-full py-3 bg-[#1B6174] text-white font-medium rounded-xl hover:bg-[#154f5e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating PDF...
                      </>
                    ) : (
                      'Generate Quote'
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    Valid until {formatDate(validityDate)}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100">
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
                    <span>+639 69 347 6955</span>
                    <span>•</span>
                    <span>Mariveles, Bataan</span>
                    <span>•</span>
                    <span>bacsalcpa2024@gmail.com</span>
                  </div>
                </div>
              </motion.div>

              {/* Notes */}
              {selectedServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 space-y-3"
                >
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                    <p className="text-xs text-blue-700">
                      <span className="font-medium">Monthly Services:</span> Billed at the start of each month. Paid in advance.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                    <p className="text-xs text-purple-700">
                      <span className="font-medium">Quarterly Services:</span> Billed at the start of each quarter.
                    </p>
                  </div>
                  {selectedServices.filter(s => s.paymentType === 'one-time').length > 0 && (
                    <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                      <p className="text-xs text-amber-700">
                        <span className="font-medium">Special Projects:</span> Require 50% down payment before work begins. Balance due upon completion.
                      </p>
                    </div>
                  )}
                  {customerInfo.negotiationApplicable && (
                    <div className="p-4 rounded-xl bg-green-50/50 border border-green-100">
                      <p className="text-xs text-green-700">
                        <span className="font-medium">✓ Negotiation Applicable:</span> Prices may be adjusted based on project scope and requirements.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
