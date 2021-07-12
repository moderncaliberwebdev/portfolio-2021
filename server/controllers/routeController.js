// Imports
import asyncHandler from 'express-async-handler'

// MailGun
import mailTo from '../mail.js'

export const mail = asyncHandler(async (req, res) => {
  const { projecttype, price, time, prompted, goals, ideas, name, email } =
    req.query
  mailTo(
    projecttype,
    price,
    time,
    prompted,
    goals,
    ideas,
    name,
    email,
    (err, data) => {
      res.send({
        projecttype,
        price,
        time,
        prompted,
        goals,
        ideas,
        name,
        email,
        formResponse: err,
      })
    }
  )
})
