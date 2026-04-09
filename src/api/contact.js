import axios from 'axios'

// Base URL: empty string uses Vite proxy in dev, or set VITE_API_URL in .env for production
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
