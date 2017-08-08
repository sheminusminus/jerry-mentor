 
 

<div id="container">
                <header>
                    <h1> Quiz</h1>
                </header>
                <section>
                    <div id="results"></div>
                    <form className="quizForm" onsubmit="return submitAnswers()">
                        <h3>1.Which of the following is correct about variable naming conventions in C#</h3>
                        <input type="radio" className="q1" value="a" id="q1a" />a.It should not be a C# keyword<br /> 
                        <input type="radio" className="q1" value="b" id="q2a" />b.It must not contain any embedded space or symbol such as? - + ! @ # % ^ & * ( ) [ ] { }<br />
                        <input type="radio" className="q1" value="c" id="q3a" />c.Both of the above<br />
                        <input type="radio" className="q1" value="d" id="q4a" />d.None of the above<br />

                        <h3>2.Which of the following converts a type to a byte value in C# </h3>
                        <input type="radio" className="q2" value="a" id="q1a" />a.ToSingle<br /> 
                        <input type="radio" className="q2" value="b" id="q2a" />b.ToByte<br />
                        <input type="radio" className="q2" value="c" id="q3a" />c.ToChar<br />
                        <input type="radio" className="q2" value="d" id="q4a" />d.ToDateTime<br />

                        <h3>3.Which of the following converts a type to a 64-bit integer in C# </h3>
                        <input type="radio" className="q3" value="a" id="q1a" />a.ToInt64<br /> 
                        <input type="radio" className="q3" value="b" id="q2a" />b.ToByte<br />
                        <input type="radio" className="q3" value="a" id="q1a" />c.ToSingle<br />
                        <input type="radio" className="q3" value="a" id="q1a" />d.ToInt64<br />
                        

                        <h3>4.Which of the following operator returns the type of a class in C# </h3>
                        <input type="radio" className="q4" value="a" id="q1a" />a.sizeof<br /> 
                        <input type="radio" className="q4" value="b" id="q2a" />b. typeof<br />
                        <input type="radio" className="q4" value="c" id="q3a" />c.&</a><br />
                        <input type="radio" className="q4" value="d" id="q4a" />d.*<br />

                        <h3>5.Which of the following statements is correct about encapsulation </h3>
                        <input type="radio" className="q5" value="a" id="q1a" />a.Encapsulation is defined as the process of enclosing one or more items within a physical or logical package.<br /> 
                        <input type="radio" className="q5" value="b" id="q2a" />b.Encapsulation, in object oriented programming methodology, prevents access to implementation details.<br />
                        <input type="radio" className="q5" value="c" id="q3a" />c.Abstraction allows making relevant information visible and encapsulation enables a programmer to implement the desired level of abstraction.<br />
                        <input type="radio" className="q5" value="d" id="q4a" />d.All of the above<br />
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
                        var answers = ["c","b","a","b","d"];
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
            
     

<div id="container">
                <header>
                    <h1> Quiz</h1>
                </header>
                <section>
                    <div id="results"></div>
                    <form className="quizForm" onsubmit="return submitAnswers()">
                        <h3>1. :</h3>
                        <input type="radio" className="q1" value="a" id="q1a" />a.<br /> 
                        <input type="radio" className="q1" value="b" id="q2a" />b.<br />
                        <input type="radio" className="q1" value="c" id="q3a" />c.<br />
                        <input type="radio" className="q1" value="d" id="q4a" />d.<br />

                        <h3>2. </h3>
                        <input type="radio" className="q2" value="a" id="q1a" />a.<br /> 
                        <input type="radio" className="q2" value="b" id="q2a" />b.<br />
                        <input type="radio" className="q2" value="c" id="q3a" />c.<br />
                        <input type="radio" className="q2" value="d" id="q4a" />d.<br />

                        <h3>3. </h3>
                        <input type="radio" className="q3" value="a" id="q1a" />a.<br /> 
                        <input type="radio" className="q3" value="b" id="q2a" />b.<br />
                        

                        <h3>4. </h3>
                        <input type="radio" className="q4" value="a" id="q1a" />a.<br /> 
                        <input type="radio" className="q4" value="b" id="q2a" />b.<br />
                        <input type="radio" className="q4" value="c" id="q3a" />c.<br />
                        <input type="radio" className="q4" value="d" id="q4a" />d.<br />

                        <h3>5. </h3>
                        <input type="radio" className="q5" value="a" id="q1a" />a.<br /> 
                        <input type="radio" className="q5" value="b" id="q2a" />b.<br />
                        <input type="radio" className="q5" value="c" id="q3a" />c.<br />
                        <input type="radio" className="q5" value="d" id="q4a" />d.<br />
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
                        var answers = ["b","a","a","b","a"];
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
            
     