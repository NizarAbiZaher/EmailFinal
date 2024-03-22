import NizzyEmail from "@/emails";
import { render } from "@react-email/render"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST (request: Request, res: Response) {
    const { email } = await request.json()
    
    const { data, error } = await resend.emails.send({
        from: "Nizar <noreply@nizarlanding.com>",
        to: [email],
        subject: "Your Developer Roadmap",
        html: render(NizzyEmail()),
    });

    if (error) {
        return Response.json(error)
    }
    return Response.json({ message: "Email sent successfully" })
}

