import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
    state = {
        jokes: [],
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const endpoint = 'http://localhost:3300/api/jokes';
        const options = {
            headers: {
                Authorization: token
            }
        }

        axios.get(endpoint, options)
        .then( res => {
            console.log(res)
            this.setState({ jokes: res.data });
        })
        .catch (err => {
            console.log('error from /api/jokes', err);
        });
    };

    render() {
        console.log(this.state)
        if (localStorage.getItem ('jwt')){
        return (
            <div className='joke-page'>
               
                <h1>Jokes</h1>
                
                    {this.state.jokes.map(jokes => 
                        
                        ( <p className={'card-1'} key = {jokes.id}> {jokes.joke}</p> )
                         
                    )}
            </div>
        )}else{
            return (<div>
                <h4>Must be logged in to see jokes.</h4>
            </div>)
            
        }
    }
}
export default Jokes;