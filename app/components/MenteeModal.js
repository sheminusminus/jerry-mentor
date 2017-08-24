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
import JavaScriptQuiz from './quizzes/eejscript';

class MenteeModal extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            showQuiz: false,
            chosenTopic: null,
            lastScore: null
        };
        this.renderQuizScores = this.renderQuizScores.bind(this);
        this.chooseNode = this.chooseNode.bind(this);
        this.chooseMongo = this.chooseMongo.bind(this);
        this.chooseCSharp = this.chooseCSharp.bind(this);
        this.chooseJavaScript = this.chooseJavaScript.bind(this);
        this.displayQuiz = this.displayQuiz.bind(this);
        this.finishQuiz = this.finishQuiz.bind(this);
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

    chooseJavaScript() {
        this.setState({
            chosenTopic: 'JAVASCRIPT'
        });
        this.displayQuiz();
    }

    displayQuiz() {
        this.setState({
            showQuiz: !this.state.showQuiz,
        });
    }

    finishQuiz(score, type) {
        this.props.finishQuiz(score, type);
    }

    renderChoices() {
        const { quizScores } = this.props;

        let disableNode = false;
        let disableMongo = false;
        let disableC = false;
        let disableJS = false;

        for (let i = 0; i < quizScores.length; i++) {
          if (quizScores[i].type === 'NODE') disableNode = true;
          if (quizScores[i].type === 'MONGO') disableMongo = true;
          if (quizScores[i].type === 'CSharp') disableC = true;
          if (quizScores[i].type === 'JAVASCRIPT') disableJS = true;
        }

        let nodeBtn = (
          <button onClick={this.chooseNode}>
            {disableNode ? 'Node (Already Taken)' : 'Node'}
          </button>
        );

        let mongoBtn = (
          <button onClick={this.chooseMongo}>
            {disableMongo ? 'Mongo (Already Taken)' : 'Mongo'}
          </button>
        );

        let cBtn = (
          <button onClick={this.chooseCSharp}>
            {disableC ? 'C# (Already Taken' : 'C#'}
          </button>
        );

        let jsBtn = (
          <button onClick={this.chooseJavaScript}>
            {disableJS ? 'JavaScript (Already Taken)' : 'JavaScript'}
          </button>
        );

        return (
          <div
            className="quiz-choices">
              Take a Quiz:
              <br/>
            {
              disableNode ?
                React.cloneElement(nodeBtn, {
                  disabled: 'disabled'
                }) : nodeBtn
            }

            {
              disableMongo ?
                React.cloneElement(mongoBtn, {
                  disabled: 'disabled'
                }) : mongoBtn
            }
            {
              disableC ?
                React.cloneElement(cBtn, {
                  disabled: 'disabled'
                }) : cBtn
            }
            {
              disableJS ?
                React.cloneElement(jsBtn, {
                  disabled: 'disabled'
                }) : jsBtn
            }
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

    renderQuizScores() {
        const { quizScores } = this.props;

        if (!quizScores.length) return null;

        const scoreLines = quizScores.map((score, index) => (
          <tr
            key={`scores-tr-${index}`}>
              <td>
                {`${score.type[0]}${score.type.substring(1).toLowerCase()}`}
              </td>
              <td>
                {score.score} / 5
              </td>
          </tr>
        ));

        return (
          <table>
              <thead>
                <tr>
                    <th>
                        Quiz Type
                    </th>
                    <th>
                        You Scored
                    </th>
                </tr>
              </thead>
              <tbody>
              {scoreLines}
              </tbody>
          </table>
        )
    }

    render(){
        // two variables that just hold html
        // this html is returned by the methods above
        var choices = this.renderChoices();
        var quiz = this.renderQuiz();
        var quizScores = this.renderQuizScores();
        var greeting = this.props.userData.length ? `Hey, ${this.props.userData[0].FName}!` : null;
        return (
          <div>
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.toggleModal}
                contentLabel="Modal!">
                {greeting}<br/>
                {/* now we have a conditional render! */}
                {/* isThisValueTrue ? ifYesDoThis : OtherwiseDoThis */}
                {/* if this.props.isAuth, render quiz, otherwise unAuth */}
                {this.state.showQuiz ? quiz : choices}
                {this.state.showQuiz ? null : quizScores }
                {this.state.showQuiz ? <button onClick={this.displayQuiz}>Back</button> : null }
            </Modal>

            
          </div>
        );
    }
}

export default MenteeModal;
