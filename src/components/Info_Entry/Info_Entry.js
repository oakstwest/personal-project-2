import React, { Component } from 'react';
//import './Info_Entry.css'
import axios from 'axios'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const InputParent = styled.div`
    /* width: 50%; */
    /* padding: 2px 2px;
    margin: 1px 0;
    border-radius: 4px; */
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `

const Input = styled.input`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    border-radius: 4px;
    box-sizing: border-box;
    display:flex;
    align-items: center;`

const mainColor = 'black'

const Title = styled.h1`
  color: ${props => props.color || 'black'};
  font-size: 80px;
  margin:10px ;
  padding-bottom: 10px;
  display: inline-block;
  text-align: center;
  width: 100vw;
  height:10vh;
  text-shadow:
		-1px -1px 0 #FFFFFF,
		1px -1px 0 #FFFFFF,
		-1px 1px 0 #FFFFFF,
		1px 1px 0 #FFFFFF;
`
const SecTitle = styled.h2`
color: ${props => props.color || 'black'};
  font-size: 40px;
  margin: 2px;
  padding-bottom: 10px;
  display: inline-block;
  width: 100vw;
  height: 10vh;
  text-align: center;
  text-shadow:
  -1px -1px 0 #FFFFFF,
		1px -1px 0 #FFFFFF,
		-1px 1px 0 #FFFFFF,
		1px 1px 0 #FFFFFF;
`
const Lable = styled.label`
color: ${props => props.color || 'black'};
  font-size:40px;
  margin: 25px;
  padding-bottom: 20px;
  display: inline-block;
  width: 100vw;
  height: 10vh;
  text-align: center;
  text-shadow:
  -1px -1px 0 #FFFFFF,
		1px -1px 0 #FFFFFF,
		-1px 1px 0 #FFFFFF,
		1px 1px 0 #FFFFFF;
`

const Button = styled.button`
border-radius: 5px;
padding: .50em 2em ;
/* margin: 10px auto; */
background: #0156e4;
color: WHITE;
border: 2px solid BLACK;
/* display: flex;
  flex-flow: column wrap; */
  height: 100%;
  font-size: 30px;`

const ButtonContainer = styled.div`
display:flex;
`


class Info_Entry extends Component {
    constructor() {
        super();
        this.state = {
            newData: {
                friend1: '',
                email1: '',
                phone1: '',
                friend2: '',
                email2: '',
                phone2: '',
                friend3: '',
                email3: '',
                phone3: '',
                friend4: '',
                email4: '',
                phone4: '',
                doctor: '',
                doctor_email: '',
                doctor_phone: '',
                therapist: '',
                therapist_email: '',
                therapist_phone: ''
            },
            contacts: {
                userFriend: [],
                userDoctor: [],
            },
            returned: false
        }
    }

    updateDoctor(id, doctor_name, email, phone) {
        let body = { doctor_name, email, phone }
        axios.put(`/api/updateDoctor/${id}`, body)
            .then(() => {
                this.getContact()
            })
    }

    updateFriend(id, friend_name, email, phone) {
        let body = { friend_name, email, phone }
        axios.put(`/api/updateFriend/${id}`, body)
            .then(() => {
                this.getContact()
            })
    }

    delete(id) {
        axios.delete(`/api/delete/${id}`)
            .then(() => {
                this.getContact()
            })
    }

    deleteFriend(id) {
        axios.delete(`/api/deleteFriend/${id}`)
            .then(() => {
                this.getContact()
            })
    }

    componentDidMount() {
        axios.get('/api/userSession')
            .then(res => {
                console.log(res.data)
            })
        this.getContact()
    }

    saveInfo() {
        axios.post('/api/saveInfo', this.state.newData)
            .then(() => this.props.history.push('/User_Main'))
    }

    getContact() {
        axios.get('/api/getContact')
            .then(res => {
                console.log(res.data)
                this.setState({
                    contacts: res.data,
                    returned: true
                })
            })
    }

    //////////////// FRIEND1 STUFF
    handleFriendName(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { friend1: event.target.value })
        })
    }
    handleFriendEmail(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { email1: event.target.value })
        })
    }

    handleFriendPhone(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { phone1: event.target.value })
        })
    }
    //////////////FRIEND2 STUFF
    handleFriendName2(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { friend2: event.target.value })
        })
    }

    handleFriendEmail2(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { email2: event.target.value })
        })
    }

    handleFriendPhone2(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { phone2: event.target.value })
        })
    }
    //////////////FRIEND3 STUFF
    handleFriendName3(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { friend3: event.target.value })
        })
    }

    handleFriendEmail3(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { email3: event.target.value })
        })
    }

    handleFriendPhone3(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { phone3: event.target.value })
        })
    }
    ///////////////FRIEND4 STUFF   
    handleFriendName4(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { friend4: event.target.value })
        })
    }

    handleFriendEmail4(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { email4: event.target.value })
        })
    }

    handleFriendPhone4(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { phone4: event.target.value })
        })
    }
    //////////////// DOCTOR STUFF    
    handleDoctorName(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { doctor: event.target.value })
        })
    }

    handleDoctorEmail(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { doctor_email: event.target.value })
        })
    }

    handleDoctorPhone(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { doctor_phone: event.target.value })
        })
    }
    ///////////////// THERAPIST STUFF    
    handleTherapistName(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { therapist: event.target.value })
        })
    }

    handleTherapistEmail(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { therapist_email: event.target.value })
        })
    }

    handleTherapistPhone(event) {
        this.setState({
            newData: Object.assign({}, this.state.newData, { therapist_phone: event.target.value })

        })
    }
    /////////////////
    render() {
        console.log(this.state)
        const {
            returned,
            contacts,
            newData
        } = this.state

        return (

            <InputParent>
                <div>
                    <Title> Lets Set Up Your Support System</Title>
                </div>
                <SecTitle>Your Friend</SecTitle>

                <ButtonContainer>
                    <Button onClick={() => this.updateFriend(
                        contacts.userFriend[0].friend_id,
                        newData.friend1,
                        newData.email1,
                        newData.phone1
                    )}>Edit
                    </Button>
                    <Button onClick={() => this.deleteFriend(contacts.userFriend[0].friend_id)}>Delete
                    </Button>
                </ButtonContainer>

                <Input
                    placeholder={contacts.userFriend[0] ? contacts.userFriend[0].friend_name : ''}
                    onChange={(event) => this.handleFriendName(event)}
                />
                <Lable>Their Email</Lable>
                <Input
                    placeholder={contacts.userFriend[0] ? contacts.userFriend[0].email : ''}
                    onChange={(event) => this.handleFriendEmail(event)}
                />
                <Lable>Their Phone Number</Lable>
                <Input
                    placeholder={contacts.userFriend[0] ? contacts.userFriend[0].phone : ''}
                    onChange={(event) => this.handleFriendPhone(event)}
                />


                <SecTitle>Another Friend</SecTitle>

                <ButtonContainer>
                    <Button onClick={() => this.updateFriend(
                        contacts.userFriend[1].friend_id,
                        newData.friend2,
                        newData.email2,
                        newData.phone2
                    )}>Edit</Button>
                    <Button onClick={() => this.deleteFriend(contacts.userFriend[1].friend_id)}>Delete
                </Button>
                </ButtonContainer>

                <Input
                    placeholder={contacts.userFriend[1] ? contacts.userFriend[1].friend_name : ''}
                    onChange={(event) => this.handleFriendName2(event)}
                />
                <Lable>Their Email</Lable>
                <Input
                    placeholder={contacts.userFriend[1] ? contacts.userFriend[1].email : ''}
                    onChange={(event) => this.handleFriendEmail2(event)}
                />
                <Lable>Their Phone Number</Lable>
                <Input
                    placeholder={contacts.userFriend[1] ? contacts.userFriend[1].phone : ''}
                    onChange={(event) => this.handleFriendPhone2(event)}
                />


                <SecTitle>Another Friend</SecTitle>

                <ButtonContainer>
                    <Button onClick={() => this.updateFriend(
                        contacts.userFriend[2].friend_id,
                        newData.friend3,
                        newData.email3,
                        newData.phone3
                    )}>Edit</Button>
                    <Button onClick={() => this.deleteFriend(contacts.userFriend[2].friend_id)}>Delete
                </Button>
                </ButtonContainer>

                <Input
                    placeholder={contacts.userFriend[2] ? contacts.userFriend[2].friend_name : ''}
                    onChange={(event) => this.handleFriendName3(event)}
                />
                <Lable>Their Email</Lable>
                <Input
                    placeholder={contacts.userFriend[2] ? contacts.userFriend[2].email : ''}
                    onChange={(event) => this.handleFriendEmail3(event)}
                />
                <Lable>Their Phone Number</Lable>
                <Input
                    placeholder={contacts.userFriend[2] ? contacts.userFriend[2].phone : ''}
                    onChange={(event) => this.handleFriendPhone3(event)}
                />


                <SecTitle>Another Friend</SecTitle>

                <ButtonContainer>
                    <Button onClick={() => this.updateFriend(
                        contacts.userFriend[3].friend_id,
                        newData.friend4,
                        newData.email4,
                        newData.phone4
                    )}>Edit</Button>
                    <Button onClick={() => this.deleteFriend(contacts.userFriend[3].friend_id)}>Delete
                </Button>
                </ButtonContainer>

                <Input
                    placeholder={contacts.userFriend[3] ? contacts.userFriend[3].friend_name : ''}
                    onChange={(event) => this.handleFriendName4(event)}
                />
                <Lable>Their Email</Lable>
                <Input
                    placeholder={contacts.userFriend[3] ? contacts.userFriend[3].email : ''}
                    onChange={(event) => this.handleFriendEmail4(event)}
                />
                <Lable>Their Phone Number</Lable>
                <Input
                    placeholder={contacts.userFriend[3] ? contacts.userFriend[3].phone : ''}
                    onChange={(event) => this.handleFriendPhone4(event)}
                />


                <SecTitle>Your Doctor</SecTitle>

                <ButtonContainer>
                    <Button onClick={() => this.updateDoctor(
                        contacts.userDoctor[0].doctor_id,
                        newData.doctor,
                        newData.doctor_email,
                        newData.doctor_phone
                    )}>Edit</Button>
                    <Button onClick={() => this.delete(contacts.userDoctor[0].doctor_id)}>
                        Delete
                </Button>
                </ButtonContainer>

                <Input
                    placeholder={contacts.userDoctor[0] ? contacts.userDoctor[0].doctor_name : ''}
                    onChange={(event) => this.handleDoctorName(event)}
                />
                <Lable>Their Email</Lable>
                <Input
                    placeholder={contacts.userDoctor[0] ? contacts.userDoctor[0].email : ''}
                    onChange={(event) => this.handleDoctorEmail(event)}
                />
                <Lable>Their Phone Number</Lable>
                <Input
                    placeholder={contacts.userDoctor[0] ? contacts.userDoctor[0].phone : ''}
                    onChange={(event) => this.handleDoctorPhone(event)}
                />


                <SecTitle>Your Therapist</SecTitle>
                <ButtonContainer>
                    <Button onClick={() => this.updateDoctor(
                        contacts.userDoctor[1].doctor_id,
                        newData.therapist,
                        newData.therapist_email,
                        newData.therapist_phone
                    )}>Edit</Button>

                    <Button onClick={() => this.delete(contacts.userDoctor[1].doctor_id)}>
                        Delete
                </Button>
                </ButtonContainer>

                <Input
                    placeholder={contacts.userDoctor[1] ? contacts.userDoctor[1].doctor_name : ''}
                    onChange={(event) => this.handleTherapistName(event)}
                />
                <Lable>Their Email</Lable>
                <Input
                    placeholder={contacts.userDoctor[1] ? contacts.userDoctor[1].email : ''}
                    onChange={(event) => this.handleTherapistEmail(event)}
                />
                <Lable>Their Phone Number</Lable>
                <Input
                    placeholder={contacts.userDoctor[1] ? contacts.userDoctor[1].phone : ''}
                    onChange={(event) => this.handleTherapistPhone(event)}
                />
                <ButtonContainer>
                    <Button onClick={() => this.saveInfo()}>
                        <h1>Save</h1>
                    </Button>

                    <Link to={'/User_Main'}>
                        <Button>
                            <h1>Home</h1>
                        </Button>
                    </Link>
                </ButtonContainer>


            </InputParent>

        )
    }
}

export default styled(Info_Entry)`
width: 100vw;
height: 100vh;
text-align: center;
`;


