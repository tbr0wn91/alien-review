import React, { Component } from 'react';
import axios from 'axios';
import './Home.css'

class Home extends Component {
    constructor(){
        super();
        this.state = {
            aliens: []
        }
    }


    componentDidMount(){
        axios.get('/api/aliens').then(res => {
            this.setState({
                aliens: res.data
            })
        })
    }


    render(){
        const mappedAliens = this.state.aliens.map(alien => {
            return <div className="aliens">
                <h1>{alien.name}</h1>
                <img src={alien.photo}></img>
                <p>Race: {alien.race}</p>
            </div>
        })
        return (
            <div className="alien_container">
                ALIENS!
                {mappedAliens}
            </div>
        )
    }
}



export default Home;