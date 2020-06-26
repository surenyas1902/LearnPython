const sgMail = require('@sendgrid/mail');
const sendgridApiKey = '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';
sgMail.setApiKey(sendgridApiKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'surenyas1902@gmail.com',
        subject: 'Welcome to the Task App',
        text: `Welcome to the App ${name}. Let us know the experience`,
        html: ''
    })
}

module.exports = {
    sendWelcomeEmail
}