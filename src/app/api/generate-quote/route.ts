import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

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

interface QuoteData {
  customerInfo: CustomerInfo;
  selectedServices: SelectedService[];
  quotationNumber: string;
  date: string;
  validityDate: string;
  subtotal: number;
  discount: number;
  discountAmount: number;
  taxRate: number;
  taxAmount: number;
  total: number;
}

function generateHTML(data: QuoteData): string {
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const getPaymentTypeLabel = (type: PaymentType) => {
    switch (type) {
      case 'monthly': return 'Monthly';
      case 'quarterly': return 'Quarterly';
      case 'one-time': return 'One-time';
    }
  };

  const getPaymentTypeColor = (type: PaymentType) => {
    switch (type) {
      case 'monthly': return '#3b82f6';
      case 'quarterly': return '#a855f7';
      case 'one-time': return '#f59e0b';
    }
  };

  const monthlyServices = data.selectedServices.filter(s => s.paymentType === 'monthly');
  const quarterlyServices = data.selectedServices.filter(s => s.paymentType === 'quarterly');
  const oneTimeServices = data.selectedServices.filter(s => s.paymentType === 'one-time');

  const monthlyTotal = monthlyServices.reduce((sum, s) => sum + s.lineTotal, 0);
  const quarterlyTotal = quarterlyServices.reduce((sum, s) => sum + s.lineTotal, 0);
  const oneTimeTotal = oneTimeServices.reduce((sum, s) => sum + s.lineTotal, 0);
  const downPayment = oneTimeTotal / 2;

  const servicesRows = data.selectedServices.map(service => `
    <tr>
      <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: ${getPaymentTypeColor(service.paymentType)};"></span>
          <div>
            <div style="font-weight: 500; color: #111827;">${service.name}</div>
            <div style="font-size: 11px; color: #6b7280;">${service.categoryName}</div>
          </div>
        </div>
      </td>
      <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: center;">
        <span style="font-size: 11px; padding: 2px 8px; background: #f3f4f6; border-radius: 4px;">${getPaymentTypeLabel(service.paymentType)}</span>
      </td>
      <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: center;">${service.quantity}</td>
      <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right;">₱${formatCurrency(service.unitPrice)}</td>
      <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 500;">₱${formatCurrency(service.lineTotal)}</td>
    </tr>
  `).join('');

  const getTaxStructureLabel = (structure: string) => {
    switch (structure) {
      case '8-percent': return '8% Tax Regime';
      case 'itemized': return 'Itemized Deduction';
      case 'osd': return 'Optional Standard Deduction (OSD)';
      default: return '';
    }
  };

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Service Quotation - ${data.quotationNumber}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #333;
      line-height: 1.5;
      background: #fff;
    }
    .page {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 3px solid #1B6174;
    }
    .logo-section {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .logo {
      width: 60px;
      height: 60px;
      background: #1B6174;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 28px;
      font-weight: bold;
    }
    .company-name {
      font-size: 24px;
      font-weight: 700;
      color: #1B6174;
    }
    .company-tagline {
      font-size: 12px;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .quote-title {
      text-align: right;
    }
    .quote-title h1 {
      font-size: 28px;
      font-weight: 600;
      color: #1B6174;
      margin-bottom: 4px;
    }
    .quote-number {
      font-size: 14px;
      color: #6b7280;
    }
    .meta-section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      gap: 40px;
    }
    .customer-info, .quote-info {
      flex: 1;
    }
    .section-label {
      font-size: 11px;
      font-weight: 600;
      color: #1B6174;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }
    .customer-name {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
      margin-bottom: 4px;
    }
    .customer-detail {
      font-size: 13px;
      color: #6b7280;
    }
    .quote-info-row {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      margin-bottom: 4px;
    }
    .quote-info-label {
      color: #6b7280;
    }
    .quote-info-value {
      font-weight: 500;
      color: #111827;
    }
    .services-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }
    .services-table th {
      background: #1B6174;
      color: white;
      padding: 14px 16px;
      text-align: left;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .services-table th:nth-child(2),
    .services-table th:nth-child(3),
    .services-table th:nth-child(4) {
      text-align: center;
    }
    .services-table th:last-child {
      text-align: right;
    }
    .totals-section {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 30px;
    }
    .totals-box {
      width: 300px;
    }
    .totals-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      font-size: 14px;
    }
    .totals-row.subtotal {
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 12px;
      margin-bottom: 8px;
    }
    .totals-label {
      color: #6b7280;
    }
    .totals-value {
      font-weight: 500;
      color: #111827;
    }
    .totals-row.total {
      border-top: 2px solid #1B6174;
      padding-top: 12px;
      margin-top: 8px;
    }
    .totals-row.total .totals-label {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
    }
    .totals-row.total .totals-value {
      font-size: 20px;
      font-weight: 700;
      color: #1B6174;
    }
    .notes-section {
      background: #fef3c7;
      border: 1px solid #fcd34d;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 30px;
    }
    .notes-title {
      font-size: 12px;
      font-weight: 600;
      color: #92400e;
      margin-bottom: 8px;
    }
    .notes-content {
      font-size: 12px;
      color: #78350f;
    }
    .notes-content ul {
      margin: 0;
      padding-left: 16px;
    }
    .notes-content li {
      margin-bottom: 4px;
    }
    .terms-section {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 30px;
    }
    .terms-title {
      font-size: 12px;
      font-weight: 600;
      color: #374151;
      margin-bottom: 8px;
    }
    .terms-content {
      font-size: 11px;
      color: #6b7280;
    }
    .signature-section {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      gap: 60px;
    }
    .signature-box {
      flex: 1;
      text-align: center;
    }
    .signature-line {
      border-top: 1px solid #9ca3af;
      margin-bottom: 8px;
      padding-top: 8px;
    }
    .signature-label {
      font-size: 11px;
      color: #6b7280;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      text-align: center;
    }
    .footer-contact {
      font-size: 12px;
      color: #6b7280;
    }
    .footer-contact span {
      margin: 0 12px;
    }
    .footer-disclaimer {
      font-size: 10px;
      color: #9ca3af;
      margin-top: 12px;
    }
    .payment-breakdown {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 30px;
    }
    .payment-breakdown-title {
      font-size: 11px;
      font-weight: 600;
      color: #374151;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }
    .payment-breakdown-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      padding: 6px 0;
    }
    .payment-breakdown-label {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #374151;
    }
    .payment-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .payment-breakdown-value {
      font-weight: 600;
      color: #111827;
    }
    .downpayment-row {
      border-top: 1px solid #e5e7eb;
      margin-top: 8px;
      padding-top: 8px;
      color: #d97706;
    }
    .downpayment-row .payment-breakdown-label,
    .downpayment-row .payment-breakdown-value {
      color: #d97706;
      font-weight: 600;
    }
    .business-tags {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
    .business-tag {
      font-size: 10px;
      padding: 2px 8px;
      background: #f3f4f6;
      color: #374151;
      border-radius: 4px;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <div class="page">
    <!-- Header -->
    <div class="header">
      <div class="logo-section">
        <div class="logo">B</div>
        <div>
          <div class="company-name">BACSAL</div>
          <div class="company-tagline">Business Consultancy</div>
        </div>
      </div>
      <div class="quote-title">
        <h1>SERVICE QUOTATION</h1>
        <div class="quote-number">No. ${data.quotationNumber}</div>
      </div>
    </div>

    <!-- Meta Section -->
    <div class="meta-section">
      <div class="customer-info">
        <div class="section-label">Bill To</div>
        <div class="customer-name">${data.customerInfo.businessName || '—'}</div>
        ${data.customerInfo.address ? `<div class="customer-detail">${data.customerInfo.address}</div>` : ''}
        ${data.customerInfo.contactNo ? `<div class="customer-detail">${data.customerInfo.contactNo}</div>` : ''}
        ${data.customerInfo.email ? `<div class="customer-detail">${data.customerInfo.email}</div>` : ''}
        ${(data.customerInfo.businessTax || data.customerInfo.taxStructure) ? `
        <div class="business-tags">
          ${data.customerInfo.businessTax ? `<span class="business-tag">${data.customerInfo.businessTax === 'vat' ? 'VAT' : 'Non-VAT'}</span>` : ''}
          ${data.customerInfo.taxStructure ? `<span class="business-tag">${getTaxStructureLabel(data.customerInfo.taxStructure)}</span>` : ''}
        </div>
        ` : ''}
      </div>
      <div class="quote-info">
        <div class="section-label">Quote Details</div>
        <div class="quote-info-row">
          <span class="quote-info-label">Date:</span>
          <span class="quote-info-value">${data.date}</span>
        </div>
        <div class="quote-info-row">
          <span class="quote-info-label">Valid Until:</span>
          <span class="quote-info-value">${data.validityDate}</span>
        </div>
        <div class="quote-info-row">
          <span class="quote-info-label">Items:</span>
          <span class="quote-info-value">${data.selectedServices.length} service(s)</span>
        </div>
        ${data.customerInfo.negotiationApplicable ? `
        <div class="quote-info-row" style="margin-top: 8px;">
          <span style="font-size: 11px; color: #059669; font-weight: 500;">✓ Negotiation Applicable</span>
        </div>
        ` : ''}
      </div>
    </div>

    <!-- Services Table -->
    <table class="services-table">
      <thead>
        <tr>
          <th style="width: 35%;">Description</th>
          <th style="width: 15%;">Billing</th>
          <th style="width: 10%;">Qty</th>
          <th style="width: 20%;">Unit Price</th>
          <th style="width: 20%;">Amount</th>
        </tr>
      </thead>
      <tbody>
        ${servicesRows}
      </tbody>
    </table>

    <!-- Payment Breakdown -->
    <div class="payment-breakdown">
      <div class="payment-breakdown-title">Payment Breakdown</div>
      ${monthlyServices.length > 0 ? `
      <div class="payment-breakdown-row">
        <span class="payment-breakdown-label">
          <span class="payment-dot" style="background: #3b82f6;"></span>
          Monthly Services (Ongoing)
        </span>
        <span class="payment-breakdown-value">₱${formatCurrency(monthlyTotal)}/mo</span>
      </div>
      ` : ''}
      ${quarterlyServices.length > 0 ? `
      <div class="payment-breakdown-row">
        <span class="payment-breakdown-label">
          <span class="payment-dot" style="background: #a855f7;"></span>
          Quarterly Services
        </span>
        <span class="payment-breakdown-value">₱${formatCurrency(quarterlyTotal)}/qtr</span>
      </div>
      ` : ''}
      ${oneTimeServices.length > 0 ? `
      <div class="payment-breakdown-row">
        <span class="payment-breakdown-label">
          <span class="payment-dot" style="background: #f59e0b;"></span>
          One-time / Special Projects
        </span>
        <span class="payment-breakdown-value">₱${formatCurrency(oneTimeTotal)}</span>
      </div>
      <div class="payment-breakdown-row downpayment-row">
        <span class="payment-breakdown-label">
          Required Down Payment (50%)
        </span>
        <span class="payment-breakdown-value">₱${formatCurrency(downPayment)}</span>
      </div>
      ` : ''}
    </div>

    <!-- Totals -->
    <div class="totals-section">
      <div class="totals-box">
        <div class="totals-row subtotal">
          <span class="totals-label">Subtotal</span>
          <span class="totals-value">₱${formatCurrency(data.subtotal)}</span>
        </div>
        ${data.discount > 0 ? `
        <div class="totals-row">
          <span class="totals-label">Discount (${data.discount}%)</span>
          <span class="totals-value">-₱${formatCurrency(data.discountAmount)}</span>
        </div>
        ` : ''}
        <div class="totals-row">
          <span class="totals-label">Tax (${data.taxRate}%)</span>
          <span class="totals-value">₱${formatCurrency(data.taxAmount)}</span>
        </div>
        <div class="totals-row total">
          <span class="totals-label">TOTAL</span>
          <span class="totals-value">₱${formatCurrency(data.total)}</span>
        </div>
      </div>
    </div>

    <!-- Notes -->
    <div class="notes-section">
      <div class="notes-title">Payment Terms & Instructions</div>
      <div class="notes-content">
        <ul>
          <li><strong style="color: #3b82f6;">Monthly Services:</strong> Paid in advance at the start of each month.</li>
          <li><strong style="color: #a855f7;">Quarterly Services:</strong> Paid at the start of each quarter.</li>
          <li><strong style="color: #d97706;">Special Projects (One-time):</strong> Require 50% down payment before commencement. Balance due upon project completion.</li>
          ${data.customerInfo.negotiationApplicable ? `<li><strong style="color: #059669;">Negotiation:</strong> Prices may be adjusted based on project scope and requirements.</li>` : ''}
        </ul>
      </div>
    </div>

    <!-- Terms -->
    <div class="terms-section">
      <div class="terms-title">Terms & Conditions</div>
      <div class="terms-content">
        This quotation is valid for 20 days from the date of issue. Payment will be collected after approval of this quotation and based on the terms and conditions agreed upon. Prices are subject to change without prior notice. This document is not an invoice and serves only as an estimate of services described above.
      </div>
    </div>

    <!-- Signature Section -->
    <div class="signature-section">
      <div class="signature-box">
        <div class="signature-line"></div>
        <div class="signature-label">Client Signature / Date</div>
      </div>
      <div class="signature-box">
        <div class="signature-line"></div>
        <div class="signature-label">Authorized Signature / Date</div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="footer-contact">
        <span>📞 +639 69 347 6955</span>
        <span>📍 Mariveles, Bataan, 2105</span>
        <span>✉️ bacsalcpa2024@gmail.com</span>
      </div>
      <div class="footer-disclaimer">
        Please confirm your acceptance of this quote by signing this document.
      </div>
    </div>
  </div>
</body>
</html>
`;
}

export async function POST(request: NextRequest) {
  try {
    const data: QuoteData = await request.json();

    const html = generateHTML(data);

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    });

    await browser.close();

    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Quotation-${data.quotationNumber}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
