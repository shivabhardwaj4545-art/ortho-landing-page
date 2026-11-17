import nodemailer from 'nodemailer';

// Dedicated SMTP Transporter using Shiva's verified Google App Password
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: (process.env.SMTP_SECURE || 'true') === 'true',
  auth: {
    user: process.env.SMTP_USER || 'shiva77work@gmail.com',
    pass: (process.env.SMTP_PASS || 'rbbxdcyhwmkykfyu').replace(/\s+/g, '')
  }
});

/**
 * Send new lead notification email
 */
export async function sendLeadEmail(lead) {
  const recipient = process.env.LEADS_TO_EMAIL || 'shiva77work@gmail.com';
  const cleanPhone = (lead.whatsappNumber || '').replace(/[^0-9]/g, '');
  const whatsappLink = cleanPhone ? `https://wa.me/${cleanPhone}` : '';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #0a4c95 0%, #0284c7 100%); padding: 24px; color: #ffffff; text-align: center; }
        .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.01em; }
        .header p { margin: 0; font-size: 14px; opacity: 0.9; }
        .badge { display: inline-block; background-color: #ef4444; color: #ffffff; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-top: 10px; }
        .content { padding: 28px 24px; }
        .lead-id-bar { background-color: #f8fafc; border-left: 4px solid #0a4c95; padding: 10px 14px; font-size: 13px; color: #475569; margin-bottom: 22px; }
        .data-table { width: 100%; border-collapse: collapse; margin-bottom: 22px; }
        .data-table td { padding: 12px 10px; border-bottom: 1px solid #edf2f7; font-size: 14.5px; vertical-align: top; }
        .data-table td.label { width: 38%; font-weight: 700; color: #475569; }
        .data-table td.value { width: 62%; color: #0f172a; font-weight: 600; }
        .highlight-phone { color: #16a34a !important; font-size: 16px; font-weight: 800 !important; }
        .action-button-wrap { text-align: center; margin: 26px 0 10px 0; }
        .wa-btn { display: inline-block; background-color: #25d366; color: #ffffff !important; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-size: 15px; font-weight: 700; box-shadow: 0 4px 12px rgba(37,211,102,0.35); }
        .footer { background-color: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚨 New Patient Consultation Request</h1>
          <p>LWE Patient Care – International Medical Tourism</p>
          <div class="badge">Immediate Response Required (10 Min SLA)</div>
        </div>

        <div class="content">
          <div class="lead-id-bar">
            <strong>Lead Reference:</strong> ${lead.id || 'N/A'} | 
            <strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)
          </div>

          <table class="data-table">
            <tr>
              <td class="label">Patient Name:</td>
              <td class="value">${lead.patientName || 'N/A'}</td>
            </tr>
            <tr>
              <td class="label">WhatsApp Number:</td>
              <td class="value highlight-phone">${lead.whatsappNumber || 'N/A'}</td>
            </tr>
            <tr>
              <td class="label">Email Address:</td>
              <td class="value">${lead.email || 'N/A'}</td>
            </tr>
            <tr>
              <td class="label">Country / City:</td>
              <td class="value">${lead.country || 'International'}</td>
            </tr>
            <tr>
              <td class="label">Treatment Required:</td>
              <td class="value">${lead.treatmentRequired || 'General Consultation'}</td>
            </tr>
            <tr>
              <td class="label">Preferred Hospital:</td>
              <td class="value">${lead.preferredHospital || 'Any Accredited Hospital (Apollo / Fortis / Max)'}</td>
            </tr>
            <tr>
              <td class="label">Form Source:</td>
              <td class="value">${lead.source || 'Website Landing Page'}</td>
            </tr>
            ${lead.message ? `
            <tr>
              <td class="label">Medical History / Message:</td>
              <td class="value" style="font-weight: 400; color: #334155;">${lead.message}</td>
            </tr>
            ` : ''}
          </table>

          ${whatsappLink ? `
          <div class="action-button-wrap">
            <a href="${whatsappLink}?text=${encodeURIComponent(`Hello ${lead.patientName}, this is LWE Patient Care coordinator following up on your consultation request for ${lead.treatmentRequired}.`)}" class="wa-btn" target="_blank">
              👉 Click to Open WhatsApp Chat with ${lead.patientName}
            </a>
          </div>
          ` : ''}
        </div>

        <div class="footer">
          This enquiry was received from LWE Patient Care Google Ads Campaign.<br/>
          All leads are permanently archived in <code>data/leads.json</code> & <code>data/leads.csv</code>.
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"LWE Patient Leads" <${process.env.SMTP_USER || 'shiva77work@gmail.com'}>`,
    to: recipient,
    subject: `🚨 [New Patient Lead] ${lead.patientName} - ${lead.treatmentRequired} (${lead.country || 'International'})`,
    html: htmlContent
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}
