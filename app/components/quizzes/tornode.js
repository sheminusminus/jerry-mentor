import React from 'react';

class NodeQuiz extends React.Component {
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
        this.props.finishQuiz(this.state.totalScore, 'NODE');
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
                        <h1>Mentor Node Quiz</h1>
                    </header>
                    <section>
                        <div id="results"></div>
                        <form className="quizForm" onSubmit={this.submitAnswers}>
                            <h3>1.What is Express?</h3>
     
                            <input type="radio" className="q1" value="a" id="q1a" />a. Express is a application framework that provides a robust set of features to develop desktop based applications.<br /> 
                            <input type="radio" className="q1" value="b" id="q2a" />b.Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.<br />
                            <input type="radio" className="q1" value="c" id="q3a" />c.Both of the above<br />
                            <input type="radio" className="q1" value="d" id="q4a" />d.None of the above<br />

                            <h3>2.Each type of Stream is an EventEmitter. </h3>
                            <input type="radio" className="q2" value="a" id="q1a" />a.TRUE<br /> 
                            <input type="radio" className="q2" value="b" id="q2a" />b.FALSE<br />
                            

                            <h3>3.Which method of fs module is used to read a file? </h3>
                            <input type="radio" className="q3" value="a" id="q1a" />a.fs.open(path, flags[, mode], callback)<br />
     
                            <input type="radio" className="q3" value="b" id="q2a" />b.fs.openFile(path, flags[, mode], callback)<br />
                            <input type="radio" className="q3" value="a" id="q1a" />c.fs.openPath(path, flags[, mode], callback)<br /> 
                            <input type="radio" className="q3" value="a" id="q1a" />d.fs.read(fd, buffer, offset, length, position, callback)<br /> 
                            

                            <h3>4.Which of the following module is required for operating system specific operations?</h3>
                            <input type="radio" className="q4" value="a" id="q1a" />a.os module<br /> 
                            <input type="radio" className="q4" value="b" id="q2a" />b.fs module<br />
                            <input type="radio" className="q4" value="c" id="q3a" />c.net module<br />
                            <input type="radio" className="q4" value="d" id="q4a" />d.None of the above<br />

                            <h3>5.Which of the following is true about _dirname global object </h3>
                            <input type="radio" className="q5" value="a" id="q1a" />a.name of directory for currently executing script<br /> 
                            <input type="radio" className="q5" value="b" id="q2a" />b.represents the resolved absolute path of code file<br />
                            <input type="radio" className="q5" value="c" id="q3a" />c.Both of the Above<br />
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

export default NodeQuiz;
     