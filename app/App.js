// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
//import routes from "./config/routes";
import Landing from './components/Landing';

class App extends React.Component {
    constructor(props){
        super(props)
        // invent a state value to track whether the user is authenticated
        this.state={
            isAuthenticated: false,
            userType: '',
            userData: [],
            userId: null,
            quizScores: []
        };
        this.getPreviousScores = this.getPreviousScores.bind(this);
        this.setUser = this.setUser.bind(this);
        this.setAuth = this.setAuth.bind(this);
        this.finishQuiz = this.finishQuiz.bind(this);
        //this.checkUser();
    }

    finishQuiz(score, type) {
        const me = this;
        const idKey = this.state.userType.toLowerCase() + 'ID';

        axios.post('/users/quizzes', {
            type: type,
            score: score,
            userId: this.state.userData[0][idKey],
            userType: this.state.userType
          })
          .then(function (response) {
            if (response.data && response.data.length) {
                const scores = [];
                for (let i = 0; i < response.data.length; i++) {
                    const quiz = response.data[i];
                    scores.push({
                      score: quiz.score,
                      type: quiz.type
                    });
                }
                me.setState({
                  quizScores: scores
                });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        // let scores = this.state.quizScores;
        // scores.push({type: type, score: score});
        // this.setState({
        //     quizScores: scores
        // });
    }

    checkUser() {
        const me = this;
        const id = localStorage.getItem('userId');
        const userType = localStorage.getItem('userType');
        const endpoint = userType == 'MENTOR' ? '/mentors' : '/mentees';
        if (id != null && id != undefined && id != 'undefined') {
            axios.get(endpoint, {
                params: {
                    userId: id
                }
            })
            .then(function (response) {
                console.log(response);
                me.setUser(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    setAuth() {
        // this function's only job is to flip this value to true
        // (made this in the constructor above)
        this.setState({isAuthenticated:true}) 
    }

    setUser(userData, type) {
        //localStorage.setItem('userType', userData.menteeID ? 'MENTEE' : 'MENTOR');
        // localStorage.setItem('userId', userData.menteeID != null ? userData.menteeID : userData.mentorID);
        this.setState({
            isAuthenticated: true,
            userData: userData,
            userType: type,
            userId: userData.menteeID ? userData.menteeID : userData.mentorID
        }, () => {
            this.getPreviousScores(type);
        });
    }

    getPreviousScores(type) {
        const me = this;
        const idKey = this.state.userType.toLowerCase() + 'ID';
        const userId = this.state.userData[0][idKey];
        axios.get(`/users/${userId}/quizzes`, {
            params: {
                type,
            }
        })
        .then(function (response) {
          console.log(response);
          if (response.data && response.data.length) {
            const scores = [];
            for (let i = 0; i < response.data.length; i++) {
              const quiz = response.data[i];
              scores.push({
                score: quiz.score,
                type: quiz.type
              });
            }
            me.setState({
              quizScores: scores
            });
          }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        // in render, we return the html we want to render --> Landing
        // landing page should know about authentication
        // it should be able to set the authentication also
        // invent some props!
        // isAuthenticated becomes a prop inside the Landing class
        // from Landing --> this.props.isAuthenticated

        return(
            <Landing
                quizScores={this.state.quizScores}
                finishQuiz={this.finishQuiz}
                setUser={this.setUser} 
                userData={this.state.userData}
                isAuthenticated={this.state.isAuthenticated} 
                setAuth={this.setAuth} />
        ) 
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));

