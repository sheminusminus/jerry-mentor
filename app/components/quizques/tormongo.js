

<div id="container">
                <header>
                    <h1>Mongo Mentor Quiz</h1>
                </header>
                <section>
                    <div id="results"></div>
                    <form className="quizForm" onsubmit="return submitAnswers()">
                        <h3>1.Point out the correct statement </h3>

                        <input type="radio" className="q1" value="a" id="q1a" />a.ObjectIds are small, likely unique, fast to generate, and ordered<br /> 
                        <input type="radio" className="q1" value="b" id="q2a" />b.ObjectIds are large, likely unique, and ordered<br />
                        <input type="radio" className="q1" value="c" id="q3a" />c.ObjectIds values consists of 18-byte<br />
                        <input type="radio" className="q1" value="d" id="q4a" />d.All of the mentioned<br />

                        <h3>2.Which of the following data type is depreciated ?
 </h3>
                        <input type="radio" className="q2" value="a" id="q1a" />a.Double<br /> 
                        <input type="radio" className="q2" value="b" id="q2a" />b.String<br />
                        <input type="radio" className="q2" value="c" id="q3a" />c.Object<br />
                        <input type="radio" className="q2" value="d" id="q4a" />d.Undefined<br />

                        <h3>3.___________ is used to determine whether a query is a covered query </h3>
                        <input type="radio" className="q3" value="a" id="q1a" />a.explainstats()<br /> 
                        <input type="radio" className="q3" value="b" id="q2a" />b.explain()<br />
                        <input type="radio" className="q3" value="a" id="q1a" />c.explainall()<br />
                        <input type="radio" className="q3" value="a" id="q1a" />d.All of the above<br />
                        

                        <h3>4.Which of the following collection do not support the TTL property ?
 </h3>
                        <input type="radio" className="q4" value="a" id="q1a" />a.Compound indexes<br /> 
                        <input type="radio" className="q4" value="b" id="q2a" />b.Primary indexes<br />
                        <input type="radio" className="q4" value="c" id="q3a" />c.Composite indexes<br />
                        <input type="radio" className="q4" value="d" id="q4a" />d.All of the above<br />

                        <h3>5.If the indexed field in a document is not a _____ or an array that holds a date value(s), the document will not expire. </h3>
                        <input type="radio" className="q5" value="a" id="q1a" />a.DATE<br /> 
                        <input type="radio" className="q5" value="b" id="q2a" />b.TIME<br />
                        <input type="radio" className="q5" value="c" id="q3a" />c.DATETIME<br />
                        <input type="radio" className="q5" value="d" id="q4a" />d.ALL OF THE ABOVE<br />
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
                        var answers = ["a","d","b","a","a"];
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
            
     