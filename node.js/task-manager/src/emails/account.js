const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'ashlesha.ashture@anka.co.in',
    from: 'ashlesha.ashture@anka.co.in',
    subject: 'this is my first creation',
    text: 'I hope this actually get to you'
})