<div id="container">
                <header>
                    <h1>Mentee Node Quiz</h1>
                </header>
                <section>
                    <div id="results"></div>
                    <form className="quizForm" onsubmit="return submitAnswers()">
                        <h3>1. What is node.js?</h3>
                        <input type="radio" className="q1" value="a" id="q1a" />a.web server<br /> 
                        <input type="radio" className="q1" value="b" id="q2a" />b.JavaScript based framework<br />
                        <input type="radio" className="q1" value="c" id="q3a" />c.Java based framework<br />
                        <input type="radio" className="q1" value="d" id="q4a" />d.None of the Above<br />

                        <h3>2. What is a callback?</h3>
                        <input type="radio" className="q2" value="a" id="q1a" />a.Asynchronous eqiv to a function<br /> 
                        <input type="radio" className="q2" value="b" id="q2a" />b.Method calls back the caller method<br />
                        <input type="radio" className="q2" value="c" id="q3a" />c.Both of the above<br />
                        <input type="radio" className="q2" value="d" id="q4a" />d.None of the Above<br />

                        <h3>3. Node.js is a single threaded application but supports concurrency?</h3>
                        <input type="radio" className="q3" value="a" id="q1a" />a.true<br /> 
                        <input type="radio" className="q3" value="b" id="q2a" />b.false<br />
                        

                        <h3>4. Which of the following is true about _dirname global object ?</h3>
                        <input type="radio" className="q4" value="a" id="q1a" />a.name of directory for currently executing script<br /> 
                        <input type="radio" className="q4" value="b" id="q2a" />b.represents the resolved absolute path of code file<br />
                        <input type="radio" className="q4" value="c" id="q3a" />c.Both of the Above<br />
                        <input type="radio" className="q4" value="d" id="q4a" />d.None of the Above<br />

                        <h3>5. Which of the following is the correct way to get an absolute path?</h3>
                        <input type="radio" className="q5" value="a" id="q1a" />a.os.resolve('main.js')<br /> 
                        <input type="radio" className="q5" value="b" id="q2a" />b.path.resolve('main.js')<br />
                        <input type="radio" className="q5" value="c" id="q3a" />c.fs.resolve('main.js')<br />
                        <input type="radio" className="q5" value="d" id="q4a" />d.None of the Above<br />
                        <br /><br />
                        <input type="submit" value="Submit Answers" />
                    </form>

                    function submitAnswers() {
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
                </section>
            </div>


