import axios from 'axios'

// In dev: Vite proxy forwards /contact to Flask (localhost:5000)
// In production (Netlify): /contact is redirected to /.netlify/functions/contact via netlify.toml
const API_BASE = import.meta.env.VITE_API_URL || ''

/**
 * Send contact form data to the Flask backend.
 * @param {{ name: string, email: string, subject: string, message: string }} data
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function sendContactMessage(data) {
  const response = await axios.post(`${API_BASE}/contact`, data)
  return response.data
}
