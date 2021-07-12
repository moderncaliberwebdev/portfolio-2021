import nodemailer from 'nodemailer'
import mailGun from 'nodemailer-mailgun-transport'
import validator from 'validator'
import dotenv from 'dotenv'

dotenv.config()

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_API_DOMAIN,
  },
}

const transporter = nodemailer.createTransport(mailGun(auth))

export const mailTo = (
  projecttype,
  price,
  time,
  prompted,
  goals,
  ideas,
  name,
  email,
  callback
) => {
  //validation
  if (
    !projecttype ||
    !price ||
    !time ||
    !prompted ||
    !goals ||
    !ideas ||
    !name ||
    !email
  ) {
    return callback('Please fill in all fields', undefined)
  } else if (!validator.isEmail(email)) {
    return callback('Provide a valid email', undefined)
  } else {
    const output = `
                <h3>What type of project do you need completed?</h3> ${projecttype}
                <h3>What are your budget expectations for this project?</h3> ${price}
                <h3>When do you want this project completed?</h3> ${time}
                <h3>What prompted you to start this project?</h3> ${prompted}
                <h3>What business goals are you trying to achieve?</h3> ${goals}
                <h3>Tell me a little bit about what you want me to do for you.</h3> ${ideas}
                <h3>Full Name:</h3> ${name}
                <h3>Email:</h3> ${email}
            `
    const mailOptions = {
      from: email,
      to: 'cmartin@moderncaliber.com',
      subject: 'Modern Caliber Project Request',
      html: output,
    }
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        callback('Internal Error', undefined)
      } else {
        callback(undefined, data)
      }
    })
  }
}

export default mailTo
