

<div id="container">
                <header>
                    <h1>Mongo Mentee Quiz</h1>
                </header>
                <section>
                    <div id="results"></div>
                    <form className="quizForm" onsubmit="return submitAnswers()">
                        <h3>1.MongoDB stores all documents in :</h3>
                        <input type="radio" className="q1" value="a" id="q1a" />a.<br /> 
                        <input type="radio" className="q1" value="b" id="q2a" />b.<br />
                        <input type="radio" className="q1" value="c" id="q3a" />c.<br />
                        <input type="radio" className="q1" value="d" id="q4a" />d.<br />

                        <h3>2.In MongoDB, _________ operations modify the data of a single collection. </h3>
                        <input type="radio" className="q2" value="a" id="q1a" />a.CRUD<br /> 
                        <input type="radio" className="q2" value="b" id="q2a" />b.GRID <br />
                        <input type="radio" className="q2" value="c" id="q3a" />c.READ<br />
                        <input type="radio" className="q2" value="d" id="q4a" />d.All of the above<br />

                        <h3>3.Point out the wrong statement : </h3>
                        <input type="radio" className="q3" value="a" id="q1a" />a.Indexes cannot enforce uniqueness in collection<br /> 
                        <input type="radio" className="q3" value="b" id="q2a" />b.CRUD stands for create, read, update, and delete<br />
                        <input type="radio" className="q3" value="a" id="q1a" />c.CRUD application is the most simplest application<br /> 
                        <input type="radio" className="q3" value="a" id="q1a" />d.All of the mentioned<br /> 
                        

                        <h3>4.Which of the following operation adds a new document to the users collection ? </h3>
                        <input type="radio" className="q4" value="a" id="q1a" />a. add<br /> 
                        <input type="radio" className="q4" value="b" id="q2a" />b. insert<br />
                        <input type="radio" className="q4" value="c" id="q3a" />c. truncate<br />
                        <input type="radio" className="q4" value="d" id="q4a" />d. drop<br />

                        <h3>5.Which of the following preference determines how the client direct read operations to the set ? </h3>
                        <input type="radio" className="q5" value="a" id="q1a" />a. read<br /> 
                        <input type="radio" className="q5" value="b" id="q2a" />b. write<br />
                        <input type="radio" className="q5" value="c" id="q3a" />c. update<br />
                        <input type="radio" className="q5" value="d" id="q4a" />d. delete<br />
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
            
     
