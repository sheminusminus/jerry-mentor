import React from 'react'; //import React, { Component } from 'react';//
import Modal from 'react-modal';
import axios from 'axios';

// props: user type, auth type (sign in or sign up)
class UserAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first: '',
            last: '',
            authType: 'SIGN_UP'
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handleFirst = this.handleFirst.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLast = this.handleLast.bind(this);
        this.switchAuthType = this.switchAuthType.bind(this);
    }   

    handleEmail(evt) {
        this.setState({
            email: evt.target.value
        });
    } 

    handlePassword(evt) {
        this.setState({
            password: evt.target.value
        });
    } 

    handleFirst(evt) {
        this.setState({
            first: evt.target.value
        });
    } 

    handleLast(evt) {
        this.setState({
            last: evt.target.value
        });
    } 

    handleSignup(evt) {
        evt.preventDefault();
        console.log(this.state, this.props);
        axios.post('/users', {
            first: this.state.first,
            last: this.state.last,
            email: this.state.email,
            password: this.state.password,
            userType: this.props.userType
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    } 

    handleLogin(evt) {
        const me = this;
        evt.preventDefault();
        axios.get('/users', {
            params: {
                email: this.state.email,
                password: this.state.password,
                userType: this.props.userType
            }
          })
          .then(function (response) {
            console.log(response);
            me.props.setUser(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(this.state, this.props);
    }

    switchAuthType() {
        this.setState({
            authType: this.state.authType === 'SIGN_UP' ? 'LOGIN' : 'SIGN_UP'
        });
    }

    renderSignIn() {
        return (
            <form onSubmit={this.handleLogin}>
                <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
                <input type="password" />
                <input type="submit" value="Go" value={this.state.password} onChange={this.handlePassword} />
            </form>
        );
    }

    renderSignUp() {
        return (
            <form onSubmit={this.handleSignup}>
                <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
                <input type="password" placeholder="Pass" value={this.state.password} onChange={this.handlePassword} />
                <input type="text" placeholder="First" value={this.state.first} onChange={this.handleFirst} />
                <input type="text" placeholder="Last" value={this.state.last} onChange={this.handleLast} />
                <input type="submit" value="Go" />

            </form>
        );
    }

    renderSwitchButton() {
        if (this.state.authType === 'SIGN_UP') {
            return (
                <button
                    onClick={this.switchAuthType}>
                    Go to Login
                </button>
            );
        } else {
            return (
                <button
                    onClick={this.switchAuthType}>
                    Go to Sign Up
                </button>
            );
        }
    }

    render() {
        let contents = null;
        if (this.state.authType === 'SIGN_UP') {
            contents = this.renderSignUp();
        } else {
            contents = this.renderSignIn();
        }

        const switchButton = this.renderSwitchButton();

        return (
            <Modal
            isOpen={this.props.open}
            contentLabel="Auth Stuff">
            {contents}
            <br/>
            {switchButton}
            </Modal>
        );
    }
}

export default UserAuth;