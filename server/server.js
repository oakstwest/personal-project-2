require('dotenv').config();
const express = require('express')
  , session = require('express-session')
  , massive = require('massive')
  , axios = require('axios')
  , controller = require('./controller')


const app = express();

app.use(express.static(`${__dirname}/../build`));

const {
  SERVER_PORT,
  SECRET,
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  CLIENT_SECRET,
  CONNECTION_STRING,
  NODE_ENV,
  AUTH_URI
} = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
})

app.use(express.json());
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
  })
);

//ENDPOINTS
app.get('/auth/callback', async (req, res) => {
  const payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: `authorization_code`,
    redirect_uri: AUTH_URI
  };
  let resWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );
  let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`);


  let {
    email,
    name,
    phone,
    sub
  } = resWithUserData.data;
  let db = req.app.get('db');
  let foundUser = await req.app.get('db').user.find_user([sub])
  if (foundUser[0]) {
    req.session.user = foundUser[0];
    res.redirect('/#/User_Main')
  } else {
    let createdUser = await db.user.create_user([name, email, phone, sub])
    req.session.user = createdUser[0];
    res.redirect('/#/Info');
  }
})

// function envCheck(req, res, next) {
//   if (NODE_ENV === 'dev') {
//     req.app.get('db').user.get_user_by_id().then(userWithIdOne => {
//       req.session.user = userWithIdOne[0]
//       next();
//     })
//   } else {
//     next()
//   }
// }

app.get('/api/user-data', (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(400).send("Now it's broken!")
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect = process.env.REACT_APP_LOGIN
})

// lets make some data manipulating end points //

app.post('/api/saveInfo', controller.create)

app.get('/api/getContact', controller.getUserData)

app.get('/api/userSession', (req, res) => {
  res.status(200).send(req.session.user)
})

app.delete('/api/delete/:contactId', controller.delete)

app.delete('/api/deleteFriend/:contactId', controller.deleteFriend)

// app.get('/test', controller.sendEmail)



app.listen(SERVER_PORT, () => {
  console.log(`Still alive on port: ${SERVER_PORT}`);
})


