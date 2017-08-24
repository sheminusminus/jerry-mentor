 import React from 'react';

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

        console.log(score)

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
        var answers = ["d","d","a","b","a"];
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
            console.log(score);
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
                        <h1>CSharp Quiz</h1>
                    </header>
                    <section>
                        <div id="results"></div>
                        <form className="quizForm" onSubmit={this.submitAnswers}>
                            <h3>1.Which of the following is correct about params in C# </h3>
     
                            <input type="radio" className="q1" value="a" id="q1a" name="q1" onClick={this.saveA1} />a.By using the params keyword, a method parameter can be specified which takes a variable number of arguments or even no argument.<br /> 
                            <input type="radio" className="q1" value="b" id="q2a" name="q1" onClick={this.saveA1} />b.Additional parameters are not permitted after the params keyword in a method declaration.<br />
                            <input type="radio" className="q1" value="c" id="q3a" name="q1" onClick={this.saveA1} />c.Only one params keyword is allowed in a method declaration.<br />
                            <input type="radio" className="q1" value="d" id="q4a" name="q1" onClick={this.saveA1} />d.All of the above<br />

                            <h3>2.Which of the following is true about C# structures vs C# classes</h3>
                            <input type="radio" className="q2" value="a" id="q1a" name="q2" onClick={this.saveA2} />a.Classes are reference types and structs are value types<br /> 
                            <input type="radio" className="q2" value="b" id="q2a" name="q2" onClick={this.saveA2}/>b.Structures do not support inheritance<br />
                            <input type="radio" className="q2" value="a" id="q3a" name="q2" onClick={this.saveA2}/>a.Structures cannot have default constructor<br />
                            <input type="radio" className="q2" value="a" id="q4a" name="q2" onClick={this.saveA2}/>a.All of the above<br />
                            

                            <h3>3.Dynamic polymorphism is implemented by abstract classes and virtual functions.  </h3>
                            <input type="radio" className="q3" value="a" id="q1a" name="q3" onClick={this.saveA3}/>a.True<br />         
                            <input type="radio" className="q3" value="b" id="q2a" name="q3" onClick={this.saveA3}/>b.False()<br />
                           
                            

                            <h3>4.Which of the following preprocessor directive specifies the end of a conditional directive in C#? </h3>
                            <input type="radio" className="q4" value="a" id="q1a" name="q4" onClick={this.saveA4}/>a.elif<br /> 
                            <input type="radio" className="q4" value="b" id="q2a" name="q4" onClick={this.saveA4}/>b.endif<br />
                            <input type="radio" className="q4" value="c" id="q3a" name="q4" onClick={this.saveA4}/>c.if (true) {}<br />
                            <input type="radio" className="q4" value="d" id="q4a" name="q4" onClick={this.saveA4}/>d.else<br />

                            <h3>5.Which of the following preprocessor directive allows generating a level one warning from a specific location in your code in C#?</h3>
                            <input type="radio" className="q5" value="a" id="q1a" name="q5" onClick={this.saveA5}/>a.warning<br /> 
                            <input type="radio" className="q5" value="b" id="q2a" name="q5" onClick={this.saveA5}/>b.region<br />
                            <input type="radio" className="q5" value="c" id="q3a" name="q5" onClick={this.saveA5}/>c.line<br />
                            <input type="radio" className="q5" value="d" id="q4a" name="q5" onClick={this.saveA5}/>d.error<br />
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

export default CSharpQuiz;
     










