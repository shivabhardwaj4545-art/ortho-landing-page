import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleApiEnquiry } from './server/apiHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5175;

// Parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lead API Endpoints
app.all('/api/enquiry', handleApiEnquiry);
app.all('/api/leads', handleApiEnquiry);

// Serve static built files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 LWE Patient Care Production Server running on port ${PORT}`);
  console.log(`📧 Leads Email: shiva77work@gmail.com`);
  console.log(`💾 Leads Database: data/leads.json & data/leads.csv`);
});
