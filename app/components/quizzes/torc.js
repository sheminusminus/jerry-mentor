 







Which of the following preprocessor directive allows generating a level one warning from a specific location in your code in C#?

A - warning

B - region

C - line

D - error

<div id="container">
                <header>
                    <h1> Quiz</h1>
                </header>
                <section>
                    <div id="results"></div>
                    <form className="quizForm" onsubmit="return submitAnswers()">
                        <h3>1.Which of the following is correct about params in C# :</h3>
                        <input type="radio" className="q1" value="a" id="q1a" />a.By using the params keyword, a method parameter can be specified which takes a variable number of arguments or even no argument.<br /> 
                        <input type="radio" className="q1" value="b" id="q2a" />b.Additional parameters are not permitted after the params keyword in a method declaration.<br />
                        <input type="radio" className="q1" value="c" id="q3a" />c.Only one params keyword is allowed in a method declaration.<br />
                        <input type="radio" className="q1" value="d" id="q4a" />d.All of the above.<br />

                        <h3>2.Which of the following is true about C# structures vs C# classes </h3>
                        <input type="radio" className="q2" value="a" id="q1a" />a.Classes are reference types and structs are value types<br /> 
                        <input type="radio" className="q2" value="b" id="q2a" />b.Structures do not support inheritance<br />
                        <input type="radio" className="q2" value="c" id="q3a" />c.Structures cannot have default constructor<br />
                        <input type="radio" className="q2" value="d" id="q4a" />d.All of the above.<br />

                        <h3>3.Dynamic polymorphism is implemented by abstract classes and virtual functions. </h3>
                        <input type="radio" className="q3" value="a" id="q1a" />a.true<br /> 
                        <input type="radio" className="q3" value="b" id="q2a" />b.false<br />
                        

                        <h3>4.Which of the following preprocessor directive specifies the end of a conditional directive in C#? </h3>
                        <input type="radio" className="q4" value="a" id="q1a" />a.elif<br /> 
                        <input type="radio" className="q4" value="b" id="q2a" />b.endif<br />
                        <input type="radio" className="q4" value="c" id="q3a" />c.if<br />
                        <input type="radio" className="q4" value="d" id="q4a" />d.else<br />

                        <h3>5.Which of the following preprocessor directive allows generating a level one warning from a specific location in your code in C#? </h3>
                        <input type="radio" className="q5" value="a" id="q1a" />a.warning<br /> 
                        <input type="radio" className="q5" value="b" id="q2a" />b.region<br />
                        <input type="radio" className="q5" value="c" id="q3a" />c.line<br />
                        <input type="radio" className="q5" value="d" id="q4a" />d.error<br />
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
                        var answers = ["d","d","a","b","a"];
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
            
     