import React from 'react'; //import React, { Component } from 'react';//

class CSharpQuiz extends React.Component {
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
        this.props.finishQuiz(this.state.totalScore, 'CSharp');
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
        var answers = ["c","b","a","b","d"];
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
                        <h1>Mentee C# Quiz</h1>
                    </header>
                    <section>
                        <div id="results"></div>
                        <form className="quizForm" onSubmit={this.submitAnswers}>
                            <h3>1.Which of the following is correct about variable naming conventions in C# :</h3>
                        <input type="radio" className="q1" value="a" id="q1a" name="q1" onClick={this.saveA1} />a.It should not be a C# keyword<br /> 
                        <input type="radio" className="q1" value="b" id="q2a" name="q1" onClick={this.saveA1} />b.It must not contain any embedded space or symbol such as? - + ! @ # % ^ & * ( ) [ ] { }<br />
                        <input type="radio" className="q1" value="c" id="q3a" name="q1" onClick={this.saveA1} />c.Both of the above<br />
                        <input type="radio" className="q1" value="d" id="q4a" name="q1" onClick={this.saveA1} />d.None of the above<br />

                        <h3>2.Which of the following converts a type to a byte value in C#  </h3>
                        <input type="radio" className="q2" value="a" id="q1a" name="q2" onClick={this.saveA2} />a.ToSingle<br /> 
                        <input type="radio" className="q2" value="b" id="q2a" name="q2" onClick={this.saveA2} />b.ToByte <br />
                        <input type="radio" className="q2" value="c" id="q3a" name="q2" onClick={this.saveA2}/>c.ToChar<br />
                        <input type="radio" className="q2" value="d" id="q4a" name="q2" onClick={this.saveA2}/>d.ToDateTime<br />

                        <h3>3.Which of the following converts a type to a 64-bit integer in C#  </h3>
                        <input type="radio" className="q3" value="a" id="q1a" name="q3" onClick={this.saveA3} />a.ToInt64<br /> 
                        <input type="radio" className="q3" value="b" id="q2a" name="q3" onClick={this.saveA3}/>b.ToByte<br />
                        <input type="radio" className="q3" value="a" id="q1a" name="q3" onClick={this.saveA3}/>c.ToSingle<br /> 
                        <input type="radio" className="q3" value="a" id="q1a" name="q3" onClick={this.saveA3}/>d.ToDateTime<br /> 
                        

                        <h3>4.Which of the following operator returns the type of a class in C#  </h3>
                        <input type="radio" className="q4" value="a" id="q1a" name="q4" onClick={this.saveA4} />a.sizeof <br /> 
                        <input type="radio" className="q4" value="b" id="q2a" name="q4" onClick={this.saveA4}/>b. typeof<br />
                        <input type="radio" className="q4" value="c" id="q3a" name="q4" onClick={this.saveA4}/>c. &<br />
                        <input type="radio" className="q4" value="d" id="q4a" name="q4" onClick={this.saveA4}/>d. *<br />

                        <h3>5.Which of the following statements is correct about encapsulation  </h3>
                        <input type="radio" className="q5" value="a" id="q1a" name="q5" onClick={this.saveA5} />a.Encapsulation is defined as the process of enclosing one or more items within a physical or logical package. <br /> 
                        <input type="radio" className="q5" value="b" id="q2a" name="q5" onClick={this.saveA5}/>b.Encapsulation, in object oriented programming methodology, prevents access to implementation details. <br />
                        <input type="radio" className="q5" value="c" id="q3a" name="q5" onClick={this.saveA5}/>c.Abstraction allows making relevant information visible and encapsulation enables a programmer to implement the desired level of abstraction. <br />
                        <input type="radio" className="q5" value="d" id="q4a" name="q5" onClick={this.saveA5}/>d.All of the above <br />
                        <br /><br />
                            <input type="submit" value="Submit Answers" />
                        </form>
                        <br/>
                        <button>Back</button>
                    </section>
                </div>
            );
        } else {
            return (
                <div>You scored {this.state.totalScore}.
                    <br/>
                    <button onClick={this.finishQuiz}>Okay</button>
                </div>
            );
        }
    }  
}

export default CSharpQuiz; 
 

