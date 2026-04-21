// Netlify serverless function to handle contact form submissions
// Sends email via Gmail SMTP using nodemailer

const nodemailer = require('nodemailer')

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ success: false, message: 'Method not allowed' }) }
  }

  let data
  try {
    data = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: JSON.stringify({ success: false, message: 'Invalid request body' }) }
  }

  const { name, email, subject, message } = data

  // Validate required fields
  for (const field of ['name', 'email', 'subject', 'message']) {
    if (!data[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` }),
      }
    }
  }

  if (!email.includes('@') || !email.includes('.')) {
    return { statusCode: 400, body: JSON.stringify({ success: false, message: 'Invalid email address' }) }
  }

  // If email env vars are set, send the email
  if (process.env.MAIL_USERNAME && process.env.MAIL_PASSWORD) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      })

      await transporter.sendMail({
        from: process.env.MAIL_USERNAME,
        to: 'dengalepooja8@gmail.com',
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      })

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      }
    } catch (err) {
      console.error('Email error:', err)
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Message received! (Email delivery issue — will follow up)' }),
      }
    }
  }

  // No email config — still acknowledge receipt
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: 'Message received! I will get back to you soon.' }),
  }
}
