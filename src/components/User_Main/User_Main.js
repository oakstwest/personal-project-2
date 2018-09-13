import React, { Component } from 'react';
import { updateUser } from "./../../ducks/users";
import { connect } from "react-redux";
import axios from 'axios'
import { Link } from 'react-router-dom'
import './User_Main.css'

class User_Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }
    async componentDidMount() {
        let userData = await axios.get('/api/user-data');
        this.props.updateUser(userData.data)
    }

sendMail(){
    axios
}
    
    render() {
        let { user } = this.props
        console.log(this.props)
        return (
            <div>
                <h1>Hey You Have Made It Here! Welcome!</h1>
                <h1></h1>
                <h2>How Are You Feeling?</h2>
                <div>
                    <Link to={'./Video'}><button className="blue"><h4>I'm Feeling A Little Blue</h4></button></Link>
                    <Link to={'./Video'}><button className="grey" onClick={this.sendMail}><h4>The Clouds Are Rolling In</h4></button></Link>
                    <Link to={'./Video'}><button className="red"><h4>I'm In Crisis</h4></button></Link>
                </div>
                <a href={process.env.REACT_APP_INFO}><button><h3>Your Information Page</h3></button></a>
                <a href={process.env.REACT_APP_LOGOUT}>
                    <button><h3>Logout</h3></button>
                </a>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.users.user
    }
}


export default connect(mapStateToProps, { updateUser })(User_Main);


