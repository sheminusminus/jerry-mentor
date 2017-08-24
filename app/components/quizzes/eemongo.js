
import React from 'react'; //import React, { Component } from 'react';//

class MongoQuiz extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            a1: '',
            a2: '',
            a3: '',
            a4: '',
            a5: '',
            totalScore: null
        };
        this.submitAnswers = this.submitAnswers.bind(this);
        this.saveA1 = this.saveA1.bind(this);
        this.saveA2 = this.saveA2.bind(this);
        this.saveA3 = this.saveA3.bind(this);
        this.saveA4 = this.saveA4.bind(this);
        this.saveA5 = this.saveA5.bind(this);
        this.finishQuiz = this.finishQuiz.bind(this);
    }

    finishQuiz() {
        this.props.finishQuiz(this.state.totalScore, 'MONGO');
    }

    submitAnswers(evt) {
        evt.preventDefault();
        var total = 5;
        var score = 0;

        //Get user input
        var q1 = this.state.a1;
        var q2 = this.state.a2;
        var q3 = this.state.a3;
        var q4 = this.state.a4;
        var q5 = this.state.a5;

        //Validation
        for(var i = 1; i <= total;i++) {
            if(eval ('q'+i) == null || eval ('q'+i) == ' ') {
                alert('You missed question ' + i);
                return false;
            }

        }
        //Set correct answers
        var answers = ["b","a","a","b","a"];
        //Check Answers
        for(i = 1; i <= total;i++) {
            if(eval('q'+i) == answers[i-1]) {
                score++;
            }
        } 
        //Display Results
        //var results = document.getElementById('results');
        //results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
        //alert('You scored '+score+' out of '+total);
        this.setState({
            totalScore: score
        }, () => {
            this.finishQuiz();
        });
    }

    saveA1(evt) {
        this.setState({
            a1: evt.target.value
        });
    }

    saveA2(evt) {
        this.setState({
            a2: evt.target.value
        });
    }

    saveA3(evt) {
        this.setState({
            a3: evt.target.value
        });
    }

    saveA4(evt) {
        this.setState({
            a4: evt.target.value
        });
    }

    saveA5(evt) {
        this.setState({
            a5: evt.target.value
        });
    }

    render() {
        if (this.state.totalScore === null) {
            return (
                <div id="container">
                    <header>
                        <h1>Mongo Quiz</h1>
                    </header>
                    <section>
                        <div id="results"></div>
                        <form className="quizForm" onSubmit={this.submitAnswers}>
                            <h3>1.MongoDB stores all documents in :</h3>
                        <input type="radio" className="q1" value="a" id="q1a" name="q1" onClick={this.saveA1} />a.<br /> 
                        <input type="radio" className="q1" value="b" id="q2a" name="q1" onClick={this.saveA1} />b.<br />
                        <input type="radio" className="q1" value="c" id="q3a" name="q1" onClick={this.saveA1} />c.<br />
                        <input type="radio" className="q1" value="d" id="q4a" name="q1" onClick={this.saveA1} />d.<br />

                        <h3>2.In MongoDB, _________ operations modify the data of a single collection. </h3>
                        <input type="radio" className="q2" value="a" id="q1a" name="q2" onClick={this.saveA2} />a.CRUD<br /> 
                        <input type="radio" className="q2" value="b" id="q2a" name="q2" onClick={this.saveA2} />b.GRID <br />
                        <input type="radio" className="q2" value="c" id="q3a" name="q2" onClick={this.saveA2}/>c.READ<br />
                        <input type="radio" className="q2" value="d" id="q4a" name="q2" onClick={this.saveA2}/>d.All of the above<br />

                        <h3>3.Point out the wrong statement : </h3>
                        <input type="radio" className="q3" value="a" id="q1a" name="q3" onClick={this.saveA3} />a.Indexes cannot enforce uniqueness in collection<br /> 
                        <input type="radio" className="q3" value="b" id="q2a" name="q3" onClick={this.saveA3}/>b.CRUD stands for create, read, update, and delete<br />
                        <input type="radio" className="q3" value="a" id="q1a" name="q3" onClick={this.saveA3}/>c.CRUD application is the most simplest application<br /> 
                        <input type="radio" className="q3" value="a" id="q1a" name="q3" onClick={this.saveA3}/>d.All of the mentioned<br /> 
                        

                        <h3>4.Which of the following operation adds a new document to the users collection ? </h3>
                        <input type="radio" className="q4" value="a" id="q1a" name="q4" onClick={this.saveA4} />a. add<br /> 
                        <input type="radio" className="q4" value="b" id="q2a" name="q4" onClick={this.saveA4}/>b. insert<br />
                        <input type="radio" className="q4" value="c" id="q3a" name="q4" onClick={this.saveA4}/>c. truncate<br />
                        <input type="radio" className="q4" value="d" id="q4a" name="q4" onClick={this.saveA4}/>d. drop<br />

                        <h3>5.Which of the following preference determines how the client direct read operations to the set ? </h3>
                        <input type="radio" className="q5" value="a" id="q1a" name="q5" onClick={this.saveA5} />a. read<br /> 
                        <input type="radio" className="q5" value="b" id="q2a" name="q5" onClick={this.saveA5}/>b. write<br />
                        <input type="radio" className="q5" value="c" id="q3a" name="q5" onClick={this.saveA5}/>c. update<br />
                        <input type="radio" className="q5" value="d" id="q4a" name="q5" onClick={this.saveA5}/>d. delete<br />
                        <br /><br />
                            <input type="submit" value="Submit Answers" />
                        </form>
                        <br/>
                    </section>
                </div>
            );
        } else {
            return (
              <div>
                  You scored {this.state.totalScore}.
              </div>
            );
        }
    }  
}

export default MongoQuiz;