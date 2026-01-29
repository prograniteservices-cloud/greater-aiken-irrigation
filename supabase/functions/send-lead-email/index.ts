import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts"

serve(async (req) => {
  try {
    const { record } = await req.json()
    const { name, email, phone_number, brief_description } = record

    const GMAIL_USER = Deno.env.get('GMAIL_USER')
    const GMAIL_APP_PASSWORD = Deno.env.get('GMAIL_APP_PASSWORD')
    const RECIPIENT_EMAIL = Deno.env.get('RECIPIENT_EMAIL') || 'prograniteservices@gmail.com'

    console.log(`New lead received: ${name} (${email})`)

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error('Missing SMTP credentials in Deno.env')
      throw new Error('Server configuration error: Missing SMTP credentials')
    }

    const client = new SmtpClient()
    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 465,
      username: GMAIL_USER,
      password: GMAIL_APP_PASSWORD,
    })

    await client.send({
      from: GMAIL_USER,
      to: RECIPIENT_EMAIL,
      subject: `New Lead: ${name}`,
      content: `New Lead Captured\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone_number}\nDescription: ${brief_description}`,
    })

    await client.close()

    console.log(`Email successfully sent to ${RECIPIENT_EMAIL} for lead: ${name}`)
    
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
