import React, { Component } from 'react'
import axios from 'axios'
import styled, { css, } from 'styled-components'

const mainColor = 'black'
const Span =styled.span`
color: ${props => props.color || 'black'};
  font-size: 2.8em;
  margin: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
`


const Button = styled.button`
border-radius: 5px;
padding: .50em 2em ;
margin: 10px auto;
background: #0156e4;
color: WHITE;
border: 2px solid BLACK;
display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;`



class Quotes extends Component {
    constructor() {
        super()

        this.state = {
            jokes: {}

        }
    }
    componentDidMount() {
        this.getJoke()
    }
    getJoke() {
        axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
            .then(res => {
                console.log(res.data)
                this.setState({ jokes: res.data })
            })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Button onClick={() => this.getJoke()}>
                    Get A New Joke
                </Button>

                    <Span className='quote'>
                        {this.state.jokes.joke}
                    </Span>
                

            </div>
        )
    }
}

export default Quotes



