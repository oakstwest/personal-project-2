import React, { Component } from 'react';
import { updateUser } from "./../../ducks/users";
import { connect } from "react-redux";
import axios from 'axios'
import { Link } from 'react-router-dom'
//import './User_Main.css'
import styled, { css,} from 'styled-components'


//css styling start//


const mainColor = 'black'

const Title = styled.h1`
  color: ${props => props.color || 'goldenrod'};
  font-size: 5em;
  margin: 25px ;
  padding-bottom: 20px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
  text-align: center;
  width: 100vw;
  height:10vh;
`
const SecTitle = styled.h2`
color: ${props => props.color || 'black'};
  font-size: 50px;
  margin: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
  width: 100vw;
  height: 10vh;
  text-align: center;
`
const Button = styled.button`
border-radius: 5px;
padding: .50em 2em ;
margin: 10px auto;
background: #0156e4;
color: WHITE;
border: 2px solid BLACK;
display: flex;
  flex-flow: row nowrap;
  height: 100%;
  font-size: 30px

${props =>
        props.button1 &&
        css`
    background: red;
    color: white;
  `};

${props =>
        props.button2 &&
        css`
    background: blue;
    color: white;
  `};

${props =>
        props.button3 &&
        css`
    background: gray;
    color: white;
  `};

${props =>
        props.green &&
        css`
    background: green;
    color: white;
    `};`


//css styling ending//

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


    render() {
        let { user } = this.props
        console.log(this.props)
        return (

            <div className={this.props.className}>
                <Title color={mainColor}>
                    <h1>Hey You Have Made It Here! Welcome!</h1>
                </Title>

                <SecTitle>
                    <h2>How Are You ?</h2>
                </SecTitle>

                <div>
                    <Link to={'./Video'}>
                        <Button button2>
                            <h4>I'm Feeling A Little Blue</h4>
                        </Button>
                    </Link>

                    <Link to={'./Video'}>
                        <Button button3>
                            <h4>The Clouds Are Rolling In</h4>
                        </Button>
                    </Link>

                    <Link to={'./Video'}>
                        <Button button1>
                            <h4>I'm In Crisis</h4>
                        </Button>
                    </Link>
                </div>

                <div>
                    <a href={process.env.REACT_APP_INFO}>
                        <Button green>
                            <h3>Your Information Page</h3>
                        </Button>
                    </a>

                    <a href={process.env.REACT_APP_LOGOUT}>
                        <Button green>
                            <h3>Logout</h3>
                        </Button>
                    </a>
                </div>

            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.users.user
    }
}


export default connect(mapStateToProps, { updateUser })(User_Main)



