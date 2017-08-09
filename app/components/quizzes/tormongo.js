import React from 'react';

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
        var answers = ["a","d","b","a","a"];
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
                        <h1>Mentor Mongo Quiz</h1>
                    </header>
                    <section>
                        <div id="results"></div>
                        <form className="quizForm" onSubmit={this.submitAnswers}>
                            <h3>1.Point out the correct statement</h3>
     
                            <input type="radio" className="q1" value="a" id="q1a" />a.ObjectIds are small, likely unique, fast to generate, and ordered <br /> 
                            <input type="radio" className="q1" value="b" id="q2a" />b.ObjectIds are large, likely unique, and ordered<br />
                            <input type="radio" className="q1" value="c" id="q3a" />c.ObjectIds values consists of 18-byte<br />
                            <input type="radio" className="q1" value="d" id="q4a" />d.None of the above<br />

                            <h3>2.Which of the following data type is depreciated ? </h3>
                            <input type="radio" className="q2" value="a" id="q1a" />a.Double<br /> 
                            <input type="radio" className="q2" value="b" id="q2a" />b.String<br />
                            <input type="radio" className="q2" value="a" id="q3a" />a.Object<br />
                            <input type="radio" className="q2" value="a" id="q4a" />a.Undefined<br />
                            

                            <h3>3.3.___________ is used to determine whether a query is a covered query </h3>
                            <input type="radio" className="q3" value="a" id="q1a" />a.explainstats()<br />
     
                            <input type="radio" className="q3" value="b" id="q2a" />b.explain()<br />
                            <input type="radio" className="q3" value="a" id="q1a" />c.explainall()<br /> 
                            <input type="radio" className="q3" value="a" id="q1a" />d.All of the above<br /> 
                            

                            <h3>4.Which of the following collection do not support the TTL property ?</h3>
                            <input type="radio" className="q4" value="a" id="q1a" />a.Compound indexes<br /> 
                            <input type="radio" className="q4" value="b" id="q2a" />b.Primary indexes<br />
                            <input type="radio" className="q4" value="c" id="q3a" />c.Composite indexes<br />
                            <input type="radio" className="q4" value="d" id="q4a" />d.All of the above<br />

                            <h3>5.If the indexed field in a document is not a _____ or an array that holds a date value(s), the document will not expire.</h3>
                            <input type="radio" className="q5" value="a" id="q1a" />a.DATE<br /> 
                            <input type="radio" className="q5" value="b" id="q2a" />b.TIME<br />
                            <input type="radio" className="q5" value="c" id="q3a" />c.DATETIME<br />
                            <input type="radio" className="q5" value="d" id="q4a" />d.None of the Above<br />
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

export default MongoQuiz;
     

