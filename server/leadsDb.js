import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../data');
const JSON_DB_FILE = path.join(DATA_DIR, 'leads.json');
const CSV_DB_FILE = path.join(DATA_DIR, 'leads.csv');

// Ensure data folder and files exist
function initDb() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(JSON_DB_FILE)) {
    fs.writeFileSync(JSON_DB_FILE, JSON.stringify([], null, 2), 'utf-8');
  }

  if (!fs.existsSync(CSV_DB_FILE)) {
    const csvHeader = 'ID,Date,Patient Name,WhatsApp / Phone,Email,Country / City,Treatment Required,Preferred Hospital,Source,Message\n';
    fs.writeFileSync(CSV_DB_FILE, csvHeader, 'utf-8');
  }
}

initDb();

/**
 * Save a new patient lead to both JSON Database and Excel-compatible CSV file
 */
export function saveLead(lead) {
  try {
    initDb();

    const timestamp = new Date().toISOString();
    const leadId = `LWE-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;

    const newRecord = {
      id: leadId,
      createdAt: timestamp,
      patientName: lead.patientName || lead.name || 'Anonymous Patient',
      whatsappNumber: lead.whatsappNumber || lead.phone || '',
      email: lead.email || '',
      country: lead.cityCountry || lead.country || 'International',
      treatmentRequired: lead.treatmentRequired || lead.treatment || 'General Consultation',
      preferredHospital: lead.preferredHospital || lead.hospital || 'Any Accredited Hospital',
      source: lead.source || 'Website Form',
      message: lead.message || lead.medicalHistory || '',
      userAgent: lead.userAgent || ''
    };

    // 1. Save to JSON Database
    let allLeads = [];
    try {
      const raw = fs.readFileSync(JSON_DB_FILE, 'utf-8');
      allLeads = JSON.parse(raw);
    } catch {
      allLeads = [];
    }

    allLeads.unshift(newRecord);
    fs.writeFileSync(JSON_DB_FILE, JSON.stringify(allLeads, null, 2), 'utf-8');

    // 2. Append to CSV for easy Excel viewing
    const escapeCsv = (str) => `"${String(str || '').replace(/"/g, '""')}"`;
    const csvLine = [
      escapeCsv(newRecord.id),
      escapeCsv(new Date(newRecord.createdAt).toLocaleString()),
      escapeCsv(newRecord.patientName),
      escapeCsv(newRecord.whatsappNumber),
      escapeCsv(newRecord.email),
      escapeCsv(newRecord.country),
      escapeCsv(newRecord.treatmentRequired),
      escapeCsv(newRecord.preferredHospital),
      escapeCsv(newRecord.source),
      escapeCsv(newRecord.message)
    ].join(',') + '\n';

    fs.appendFileSync(CSV_DB_FILE, csvLine, 'utf-8');

    return { success: true, lead: newRecord };
  } catch (error) {
    console.error('Error saving lead to database:', error);
    throw error;
  }
}

/**
 * Retrieve all stored leads
 */
export function getAllLeads() {
  try {
    initDb();
    const raw = fs.readFileSync(JSON_DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
