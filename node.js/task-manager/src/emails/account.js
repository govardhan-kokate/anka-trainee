const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
    to: email,
    from: 'ashlesha.ashture@anka.co.in',
    subject: 'Thanks for joining in...!',
    text: `welcome to the app, ${name}. Let us know how you get along with the app.`
})
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
    to: email,
    from: 'ashlesha.ashture@anka.co.in',
    subject: 'Sorry to see you go...!',
    text: `Bye, ${name}.Hope to see you seen sometime.`
})
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}