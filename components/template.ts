function emailTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>New Message</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
        margin: 0;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      h2 {
        color: #333333;
      }
      .info {
        margin: 15px 0;
      }
      .info strong {
        display: inline-block;
        width: 80px;
      }
      .message {
        background: #f1f1f1;
        padding: 15px;
        border-radius: 8px;
        white-space: pre-wrap;
      }
      .footer {
        margin-top: 20px;
        font-size: 12px;
        color: #666666;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>📩 New Contact Form Submission</h2>
      <div class="info">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      </div>
      <div class="message">
        ${message}
      </div>
      <div class="footer">
        <p>This email was generated automatically. Please do not reply.</p>
      </div>
    </div>
  </body>
  </html>
  `;
}

export default emailTemplate;
