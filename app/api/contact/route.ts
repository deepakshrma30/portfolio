import emailTemplate from "@/components/template";
import { sendInvoiceEmail } from "@/lib/emailService";
import { NextRequest, NextResponse } from "next/server";

const handleMessage = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const mailOptions = {
      from: process.env.NEXT_EMAIL_ID,
      to: process.env.NEXT_EMAIL_ID_RECEIVE,
      subject: "Portfolio Reach out Message",
      html: emailTemplate({
        name: body.name,
        email: body.email,
        message: body.message,
      }),
    };

    const userMailOptions = {
      from: process.env.NEXT_EMAIL_ID,
      to: body.email,
      subject: "✅ Thanks for reaching out!",
      text: `Hi ${body.name},\n\nThank you for contacting me. I’ve received your message and will get back to you shortly.\n\n- Deepak`,
      html: `
        <h2>Hi ${body.name},</h2>
        <p>Thank you for reaching out via my portfolio site. I have received your message:</p>
        <blockquote>${body.message}</blockquote>
        <p>I’ll get back to you as soon as possible.</p>
        <br/>
        <p>Best regards,<br/><strong>Deepak</strong></p>
      `,
    };

    await Promise.all([
      sendInvoiceEmail(mailOptions),
      sendInvoiceEmail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: "Mail Sent Successfully", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
};

export { handleMessage as POST };
