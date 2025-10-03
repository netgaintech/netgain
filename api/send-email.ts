import { Resend } from 'resend';

const resend = new Resend('re_5Q2d5d8R_CwdXZiA7KWN9ax8nVPnJpgfv');

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, budget, message } = req.body;

    const data = await resend.emails.send({
      from: 'Netgain Studio <onboarding@resend.dev>',
      to: ['mail.netgain@gmail.com'],
      subject: 'New Contact Form Submission - Netgain Studio',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
}