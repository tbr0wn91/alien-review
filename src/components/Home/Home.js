import React, { Component } from 'react';
import Axios from 'axios';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            aliens: []
        }
    }


    componentDidMount(){
        Axios.get('/api/aliens').then(res => {
            console.log('alieeens', res.data)
        })
    }


    render(){
        return (
            <div>
                Home Component
            </div>
        )
    }
}



export default Home;