require("dotenv").config();

const nodemailer = require("nodemailer");
const carriers = require("../lib/carriers");

const transporter = nodemailer.createTransport({
    host: process.env.TEXT_HOST,
    port: process.env.TEXT_PORT,
    secure: Boolean(process.env.TEXT_SECURE),
    auth: {
        user: process.env.TEXT_USER,
        pass: process.env.TEXT_PASSWORD,
    },
});

async function text(json) {
    let country = json.country || "us";
    let carrier = json.carrier || "verizon";

    let full_email = json.number + carriers[country][carrier];

    await transporter.sendMail({
        from: `"${process.env.SENDER_NAME}" <${process.env.SENDER_EMAIL}>`,
        to: full_email,
        subject: "",
        text: json.text,
    });

    return true;
}

module.exports = { text };
