import { saveLead, getAllLeads } from './leadsDb.js';
import { sendLeadEmail } from './mailSender.js';

/**
 * Handle incoming API requests in both Vite middleware and Express
 */
export async function handleApiEnquiry(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        let data = {};
        if (body) {
          try {
            data = JSON.parse(body);
          } catch {
            // Parse URL-encoded format if form submission wasn't JSON
            const params = new URLSearchParams(body);
            data = Object.fromEntries(params.entries());
          }
        }

        // 1. Save to local Database (JSON + CSV)
        const { lead } = saveLead(data);

        // 2. Send email via SMTP (non-blocking so response is fast, but logged)
        sendLeadEmail(lead)
          .then(info => {
            console.log(`[SMTP] Email successfully sent to shiva77work@gmail.com for lead ${lead.id}:`, info.messageId);
          })
          .catch(err => {
            console.error(`[SMTP Warning] Could not send email for lead ${lead.id}:`, err.message);
          });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          success: true,
          message: 'Lead received and recorded successfully.',
          leadId: lead.id
        }));
      } catch (err) {
        console.error('[API Error] Failed processing lead:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          success: false,
          error: 'Failed to process lead.'
        }));
      }
    });
  } else if (req.method === 'GET') {
    // Return all leads as JSON
    const leads = getAllLeads();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(leads, null, 2));
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
}
