import React, { Component } from 'react'
import axios from 'axios'

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
    getJoke(){
        axios.get('https://icanhazdadjoke.com/', {headers: {'Accept':'application/json'}})
        .then(res => {
             console.log(res.data)
            this.setState({ jokes: res.data })
             
        })
       
    }
   
    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={()=> this.getJoke()}>Get A New Joke</button>
                <span className='quote'>
                    {this.state.jokes.joke}
                </span>
            </div>
        )
    }

}

export default Quotes



