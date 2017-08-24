import React from 'react';

class JavaScriptQuiz extends React.Component {
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
        this.props.finishQuiz(this.state.totalScore, 'JAVASCRIPT');
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
        var answers = ["a","a","a","a","d"];
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
                        <h1>JavaScript Quiz</h1>
                    </header>
                    <section>
                        <div id="results"></div>
                        <form className="quizForm" onSubmit={this.submitAnswers}>
                            <h3>1.Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?</h3>
     
                            <input type="radio" className="q1" value="a" id="q1a" name="a1" onClick={this.saveA1}/>a. Eval<br /> 
                            <input type="radio" className="q1" value="b" id="q2a" name="a1" onClick={this.saveA1}/>b.ParseDouble<br />
                            <input type="radio" className="q1" value="c" id="q3a" name="a1" onClick={this.saveA1}/>c.ParseObject <br />
                            <input type="radio" className="q1" value="d" id="q4a" name="a1" onClick={this.saveA1}/>d.Efloat<br />

                            <h3>2.Javascript is an object oriented language? </h3>
                            <input type="radio" className="q2" value="a" id="q1a" name="a2" onClick={this.saveA2}/>a.TRUE<br /> 
                            <input type="radio" className="q2" value="b" id="q2a" name="a2" onClick={this.saveA2}/>b.FALSE<br />
                            

                            <h3>3.Which of the following is used to capture all click events in a window? </h3>
                            <input type="radio" className="q3" value="a" id="q1a" name="a3" onClick={this.saveA3}/>a.window.captureEvents(Event.CLICK);<br />
     
                            <input type="radio" className="q3" value="b" id="q2a" name="a3" onClick={this.saveA3}/>b.window.routeEvents(Event.CLICK );<br />
                            <input type="radio" className="q3" value="a" id="q1a" name="a3" onClick={this.saveA3}/>c. window.handleEvents (Event.CLICK);<br /> 
                            <input type="radio" className="q3" value="a" id="q1a" name="a3" onClick={this.saveA3}/>d.window.raiseEvents(Event.CLICK );<br /> 
                            

                            <h3>4.C-style block-level scoping is not supported in Java script</h3>
                            <input type="radio" className="q4" value="a" id="q1a" name="a4" onClick={this.saveA4}/>a.true<br /> 
                            <input type="radio" className="q4" value="b" id="q2a" name="a4" onClick={this.saveA4}/>b.false<br />
                           

                            <h3>5.Which of the following statements are true for Java script? </h3>
                            <input type="radio" className="q5" value="a" id="q1a" name="a5" onClick={this.saveA5}/>a.JavaScript is case sensitive<br /> 
                            <input type="radio" className="q5" value="b" id="q2a" name="a5" onClick={this.saveA5}/>b.JavaScript statements can be grouped together in blocks<br />
                            <input type="radio" className="q5" value="c" id="q3a" name="a5" onClick={this.saveA5}/>c.semicolon at the end of statement is mandatory<br />
                            <input type="radio" className="q5" value="d" id="q4a" name="a5" onClick={this.saveA5}/>d.Both a and b above<br />
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

export default JavaScriptQuiz;
     

