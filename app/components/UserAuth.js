
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

      if (!this.state.email || !this.state.password || !this.state.first || !this.state.last) return;

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

        if (!this.state.email.length || !this.state.password.length) return;

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
        const buttonDisabled = !(this.state.email.length && this.state.password.length);

        return (
            <form className="login-form" onSubmit={this.handleLogin}>
                <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
                <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
                <input type="submit" value="Go" disabled={buttonDisabled} />
            </form>
        );
    }

    renderSignUp() {
      const buttonDisabled = !(this.state.email && this.state.password && this.state.first && this.state.last);

      return (
            <form className="signup-form" onSubmit={this.handleSignup}>
                <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
                <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
                <input type="text" placeholder="First Name" value={this.state.first} onChange={this.handleFirst} />
                <input type="text" placeholder="Last Name" value={this.state.last} onChange={this.handleLast} />
                <input type="submit" value="Go" disabled={buttonDisabled} />

            </form>
        );
    }

    renderSwitchButton() {
        if (this.state.authType === 'SIGN_UP') {
            return (
                <button
                    className="nav-button"
                    onClick={this.switchAuthType}>
                    Already have an account?
                </button>
            );
        } else {
            return (
                <button
                    className="nav-button"
                    onClick={this.switchAuthType}>
                    Need to sign up first?
                </button>
            );
        }
    }

    render() {
        let title = 'Welcome back! 🤙';
        let contents = null;

        if (this.state.authType === 'SIGN_UP') {
            contents = this.renderSignUp();
            title = '👍 Join Mentor Connection';
        } else {
            contents = this.renderSignIn();
        }

        const switchButton = this.renderSwitchButton();

        return (
            <Modal
                isOpen={this.props.open}
                contentLabel="Signup/Login">
                <h4
                    className="auth-form-title">{title}</h4>
                {contents}
                <br/>
                {switchButton}
            </Modal>
        );
    }
}

export default UserAuth;