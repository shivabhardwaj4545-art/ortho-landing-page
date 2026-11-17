import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { handleApiEnquiry } from './server/apiHandler.js';

function enquiryApiPlugin() {
  return {
    name: 'enquiry-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/enquiry', (req, res, next) => {
        handleApiEnquiry(req, res);
      });
      server.middlewares.use('/api/leads', (req, res, next) => {
        handleApiEnquiry(req, res);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/enquiry', (req, res, next) => {
        handleApiEnquiry(req, res);
      });
      server.middlewares.use('/api/leads', (req, res, next) => {
        handleApiEnquiry(req, res);
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), enquiryApiPlugin()],
  server: {
    host: true,
    allowedHosts: true
  },
  preview: {
    host: true,
    allowedHosts: true
  }
});
