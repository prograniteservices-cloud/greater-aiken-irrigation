import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts"

serve(async (req) => {
  try {
    const { record, secrets } = await req.json()
    const { name, email, phone_number, brief_description } = record

    // Use secrets from the payload instead of Deno.env
    const GMAIL_USER = secrets?.GMAIL_USER
    const GMAIL_APP_PASSWORD = secrets?.GMAIL_APP_PASSWORD
    const RECIPIENT_EMAIL = secrets?.RECIPIENT_EMAIL || 'GreaterAikenIrrigation@gmail.com'

    console.log(`New lead received: ${name} (${email})`)

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      throw new Error('Missing SMTP credentials in request payload')
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

    return new Response(JSON.stringify({ message: 'Email sent successfully via payload secrets' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
