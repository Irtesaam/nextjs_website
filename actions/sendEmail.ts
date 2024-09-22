"use server";

import { getErrorMesaage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import react from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async(FormData : FormData) => {
    // To check if its running on server
//     console.log("Running on server");
//     console.log(FormData.get("senderEmail"));
//     console.log(FormData.get("message"));

const senderEmail = FormData.get("senderEmail");
const message = FormData.get("message");


// server side validation
if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
}

if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
}

try {
    await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'atfimdirtesaam@gmail.com',
        subject: "New message from website",
        replyTo: senderEmail as string,
        // text: message as string,
        // text: <ContactFormEmail message={message} senderEmail={senderEmail} />  // This will not work as it is not tsx file
        react: react.createElement(ContactFormEmail, {message: message as string, senderEmail: senderEmail as string})
    });

} catch (error: unknown) {
    return getErrorMesaage(error);
}

};
