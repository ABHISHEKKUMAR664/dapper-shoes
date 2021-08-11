import React, { Component } from 'react'
import about from './img/About.png'

export class About extends Component {
    render() {
        return (
            <div>
                
                <img style={{width:"100%",height:"75vh"}} src={about}/>
                
               
            </div>
        )
    }
}

export default About;