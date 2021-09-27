const dotenv = require('dotenv').config();
const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.API_KEY);

const message = {
  to: 'ranjanbhattarai659@gmail.com',
  from: {
    name: 'Student Task Testing',
    email: 'ranjanbhattarai660@gmail.com'
  },
  subject: 'Testing again',
  text: "Testing from sendgrid",
  html: "<h1> This is testing of Sendgrid </h1>"
}

sgMail.send(message)
.then(response => console.log('Email sent'))
.catch(error => console.log(error.message))