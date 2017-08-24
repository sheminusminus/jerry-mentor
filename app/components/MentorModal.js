import React from 'react'; //import React, { Component } from 'react';//
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './header';
import Home from './home';

import NodeQuiz from './quizzes/tornode';
import CSharpQuiz from './quizzes/torc';
import MongoQuiz from './quizzes/tormongo';
import JavaScript from './quizzes/torjscript';

class MentorModal extends React.Component {      
    constructor(props)  {
        super(props);
        this.state = {
            showQuiz: false,
            chosenTopic: null
        };
        this.chooseNode = this.chooseNode.bind(this);
        this.chooseMongo = this.chooseMongo.bind(this);
        this.chooseCSharp = this.chooseCSharp.bind(this);
        this.chooseJavaScript = this.chooseJavaScript.bind(this);
        this.displayQuiz = this.displayQuiz.bind(this);
        this.finishQuiz = this.finishQuiz.bind(this);
    }

    chooseNode() {
        this.setState({
            chosenTopic: 'NODE'
        });
        this.displayQuiz();
    }

    chooseMongo(){
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

    chooseJavaScript() {
        this.setState({
            chosenTopic: 'JAVASCRIPT'
        });
        this.displayQuiz();
    }



    displayQuiz() {
        this.setState({
            showQuiz: !this.state.showQuiz
        });
    }

    finishQuiz(score, type) {
        this.props.finishQuiz(score, type);
        this.displayQuiz();
    }

    renderChoices() {
        return(
            <div
                className="quiz-choices">
                Choices
                <br/>
                <button onClick={this.chooseNode}>
                    Node
                </button>
                <button onClick={this.chooseMongo}>
                    Mongo
                </button>
                <button onClick={this.chooseCSharp}>
                    C#
                </button>
                <button onClick={this.chooseJavaScript}>
                    JScript
                </button>    
            </div>                     
        );
    }    

    renderQuiz() {
        if (this.state.chosenTopic === 'NODE') {
            return (
                <NodeQuiz 
                    finishQuiz={this.finishQuiz} />
            );
        } else if (this.state.chosenTopic === 'MONGO') {
            return (
                <MongoQuiz 
                    finishQuiz={this.finishQuiz} />
            );
        } else if (this.state.chosenTopic === 'CSharp') {
            return (
                <CSharpQuiz
                    finishQuiz={this.finishQuiz} />
            );
        } else if (this.state.chosenTopic === 'JAVASCRIPT') {
            return (
                 <JavaScriptQuiz
                    finishQuiz={this.finishQuiz} />
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
                contentLabel="Topic Quizzes">
                {/* now we have a conditional render! */}
                {/* isThisValueTrue ? ifYesDoThis : OtherwiseDoThis */}
                {/* if this.props.isAuth, render quiz, otherwise unAuth */}
                {this.state.showQuiz ? quiz : choices}
                {this.state.showQuiz ? <button onClick={this.displayQuiz}>Back</button> : null }
            </Modal>

            
          </div>
        );
    }
}

export default MentorModal;
