import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactUsData{
name: string;
email: string;
phone?: string;
company?: string;
service?: string;
message: string;


}

export async function POST(request: NextRequest){

    try {
            const body: ContactUsData = await request.json();

            if (!body.name || !body.email || !body.message) {
                return NextResponse.json(
                    { error: "Name, email, and message are required."},
                    { status: 400}
                );


    }
    const {data, error } = await resend.emails.send({
        from: "Bacsal Contact Form <onboarding@resend.dev>",
        to: ["bbconit01@gmail.com"],
        replyTo: body.email,
        subject: `New Contact Form Submission from ${body.name}`,
        html:`
           <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1B6174, #3BA3B8); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #1B6174;">Name:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">
                  ${body.name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #1B6174;">Email:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">
                  <a href="mailto:${body.email}" style="color: #1B6174;">${body.email}</a>
                </td>
              </tr>
              ${body.phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #1B6174;">Phone:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">
                  ${body.phone}
                </td>
              </tr>
              ` : ''}
              ${body.company ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #1B6174;">Company:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">
                  ${body.company}
                </td>
              </tr>
              ` : ''}
              ${body.service ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #1B6174;">Service Interested:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">
                  ${body.service}
                </td>
              </tr>
              ` : ''}
            </table>
            
            <div style="margin-top: 24px;">
              <strong style="color: #1B6174;">Message:</strong>
              <div style="margin-top: 8px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; line-height: 1.6;">
                ${body.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the Bacsal Business Consultancy website contact form.</p>
          </div>
        </div>
      `, 


        
    });
if (error){
        console.error("Resend error:", error)
        return NextResponse.json(
            { error: " Failed to send email."},
            { status: 500 }
        );

}
return NextResponse.json({
    success: true,
    message: "Email sent successfully",
    id: data?.id
});

} catch (error) {
    console.error( "Contact form error:", error);
    return NextResponse.json(
        {error: "Internal server error" },
        { status: 500}
    );
}
}