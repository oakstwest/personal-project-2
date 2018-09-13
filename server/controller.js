module.exports = {
  create: async (req, res) => {
    const {
      friend1,
      email1,
      phone1,
      friend2,
      email2,
      phone2,
      friend3,
      email3,
      phone3,
      friend4,
      email4,
      phone4,
      doctor,
      doctor_email,
      doctor_phone,
      therapist,
      therapist_email,
      therapist_phone
    } = req.body

    const {
      user_id
    } = req.session.user


    await req.app.get('db').doctors.create_doctors([doctor, doctor_email, doctor_phone, user_id])

    await req.app.get('db').doctors.create_doctors([therapist, therapist_email, therapist_phone, user_id])

    await req.app.get('db').friend.create_friend([friend1, email1, phone1, user_id])

    await req.app.get('db').friend.create_friend([friend2, email2, email2, user_id])

    await req.app.get('db').friend.create_friend([friend3, email3, email3, user_id])

    let friendResponse = await req.app.get('db').friend.create_friend([friend4, email4, email4, user_id])

    res.status(200).send(friendResponse)
  },

  getUserData: async (req, res) => {
   const { user_id = 1 } = req.session.user
 
    let userFriend = await req.app.get('db').friend.get_friends([user_id]);
    let userDoctor = await req.app.get('db').doctors.get_doctors([user_id]);

    res.status(200).send({
      userFriend, userDoctor
    })

  },

  delete:(req, res) =>{
    console.log(req.params.contactId)
    req.app.get('db').doctors.delete_doctor([req.params.contactId])
    .then (()=> {
      res.sendStatus(200)
    })
  },

  deleteFriend:(req, res) =>{
    req.app.get('db').friend.delete_friend([req.params.contactId])
    .then (()=>{
      res.sendStatus(200)
    })
  }


}


