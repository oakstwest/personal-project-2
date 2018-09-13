
// import Blue from './component/Blue/Blue';
// import Clouds from './component/Clouds/Clouds';
// import Crisis from './component/Crisis/Crisis';

// <Blue />
//     <Clouds />
//     <Crisis />


//
// const nodemailer = require('nodemailer'),
// config = require('./config');

// module.exports = {
//     sendEmail(req, res) {
//         console.log('req.bod', req.body)
//         let transporter = nodemailer.createTransport({
//             service: config.nodemailer.user_email,
//             pass: config.nodemailer.user_pass
//         })


//         let mailOptions = {
//             from: '"chris" <${config.nodemailer.user_email}>',
//             to: 'ohvauk@gmail.com',
//             subject: req.body.subject,
//             text: 'food is good',
//             html: `<b>${ req.body.body }</b>` 
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 res.send(error)
//             }
//             res.status(200).send(info);
//         })
//     }
// }


// 'use strict';
// const nodemailer = require('nodemailer');


// nodemailer.createTestAccount((err, account) => {

//     let transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         secure: false,
//         auth: {
//             user: account.user,
//             pass: account.pass
//         }
//     });

//     let mailOptions = {
//         from: '"Fred Foo 👻" <foo@example.com>',
//         to: 'bar@example.com, baz@example.com',
//         subject: 'Hello ✔',
//         text: 'Hello world?',
//         html: '<b>Hello world?</b>'
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }

//         console.log('Message sent: %s', info.messageId);
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//     });
// });

