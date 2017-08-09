import React from 'react'; //import React, { Component } from 'react';//
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from './header';
import Home from './home';

import NodeQuiz from './quizzes/eenode';
import MongoQuiz from './quizzes/eemongo';
import CSharpQuiz from './quizzes/eec';

class MenteeModal extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            showQuiz: false,
            chosenTopic: null
        };
        this.chooseNode = this.chooseNode.bind(this);
        this.chooseMongo = this.chooseMongo.bind(this);
        this.chooseCSharp = this.chooseCSharp.bind(this);
        this.displayQuiz = this.displayQuiz.bind(this);
    }

    chooseMongo() {
        this.setState({
            chosenTopic: 'MONGO'
        });
        this.displayQuiz();
    }

    chooseCSharp() {
        this.setState({
            chosenTopic: 'CSharp'
        });
        this.displayQuiz();
    } 

    chooseNode() {
        this.setState({
            chosenTopic: 'NODE'
        });
        this.displayQuiz();
    }

    displayQuiz() {
        this.setState({
            showQuiz: true
        });
    }

    submitAnswers() {
        var total = 5;
        var score = 0;

        //Get user input
        var q1 = document.forms["quizForm"][q1].value;
        var q2 = document.forms["quizForm"][q2].value;
        var q3 = document.forms["quizForm"][q3].value;
        var q4 = document.forms["quizForm"][q4].value;
        var q5 = document.forms["quizForm"][q5].value;

        //Validation
        for(i = 1; i <= total;i++) {
            if(eval ('q'+i) == null || eval ('q'+i) == ' ') {
                alert('You missed question ' + i);
                return false;
            }

        }
        //Set correct answers
        var answers = ["b","a","a","b","b"];
        //Check Answers
        for(i = 1; i <= total;i++) {
            if(eval('q'+i) == answers[i-1]) {
                score++;
            }
        } 
        //Display Results
        var results = document.getElementById('results');
        results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
        alert('You scored '+score+' out of '+total);

        return false;
    }

    renderChoices() {
        return(
            <div>
                Choices
                <br/>
                <button onClick={this.chooseNode}>
                    Node
                </button>
                <button onClick={this.chooseMongo}>
                    Mongo
                </button>
                <button onClick={this.chooseCSharp}>
                    c#
                </button>
            </div>                     
        );
    }

    renderQuiz() {
        if (this.state.chosenTopic === 'NODE') {
            return (
                <NodeQuiz 
                    finishQuiz={this.props.finishQuiz} />
            );
        } else if (this.state.chosenTopic === 'MONGO') {
            return (
                <MongoQuiz 
                    finishQuiz={this.props.finishQuiz} />
            );
        } else if (this.state.chosenTopic === 'CSharp') {
            return (
                <CSharpQuiz
                    finishQuiz={this.props.finishQuiz} />
            );
        }
    }  
        

    render(){
        // two variables that just hold html
        // this html is returned by the methods above
        var choices = this.renderChoices();
        var quiz = this.renderQuiz();

        return (
          <div>
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.toggleModal}
                contentLabel="Modal!">
                {/* now we have a conditional render! */}
                {/* isThisValueTrue ? ifYesDoThis : OtherwiseDoThis */}
                {/* if this.props.isAuth, render quiz, otherwise unAuth */}
                {this.state.showQuiz ? quiz : choices}
                <button onClick={this.props.close}>Back</button>
            </Modal>

            
          </div>
        );
    }
}

export default MenteeModal;
