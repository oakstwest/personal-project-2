import React from 'react'
import { Link } from 'react-router-dom'

 class Crisis extends React.Component{
    render(){
        return(
            <div>
          <header><h1>Im In Crisis</h1></header>
                <Link to={'./User_Main'}><button><h1>Home</h1></button></Link>
            </div>
        )
    }
}
export default Crisis