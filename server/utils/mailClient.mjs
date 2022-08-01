import "dotenv/config"
import nodemailer from "nodemailer"

async function registrationDispatch(recipient){

    /*
    let mailAccount = await nodemailer.createTestAccount((err, account) => 

    )*/

    const mailTransporter = mailAccount.createTransport({
        host: "smtp.ethereal.mail",
        port: 587,
        secure: false,
        auth: {
            user: process.env.ETHEREAL_EMAIL_USER,
            pass: process.env.ETHEREAL_EMAIL_PASS
        }
    })

    let notice = await mailTransporter.sendMail({
        from: `Zeus admin <${proces.env.ETHEREAL_EMAIL_USER}>`,
        to: recipient,
        subject: "Your Zeus account is registered!",
        text: "Hi! welcome to Zeusdex! your account is now registered."
    })
}

export const mailNode = registrationDispatch