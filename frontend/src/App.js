import React, { Component } from 'react';
import Index from './components/Operate/Index';
import Register from './components/Register';
import Signin from './components/Signin';
import 'antd/dist/antd.css'

const initialState = {
    route: 'signin',
    user: {
        email: '',
        username: '',
        password: '',
        age: '',
        gender: '',
        profile: ''
    },
}


class App extends Component {

    constructor() {
        super();
        this.state = initialState;
    }

    loadUser = (data) => {
        this.setState({
            user: {
                email: data.email,
                username: data.username,
                password: data.password,
                age: data.age,
                gender: data.gender,
                profile: data.profile
            },
        })
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState);
        }
        this.setState({ route: route });
    }

    render() {
        return (
            <div className="App">
                {this.state.route === 'signin' ?
                    <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> :
                    (this.state.route === 'register' ?
                        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> :
                        <Index data={this.state} onRouteChange={this.onRouteChange} />
                    )
                }
            </div>
        );
    }
}

export default App;