
// absolute imports
import React from "react";
import Modal from 'react-modal';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';


// components
import MenteeModal from './MenteeModal';
import Youtube from './Youtube';
import MentorModal from './MentorModal';
import UserAuth from './UserAuth';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authModalOpen: false,
            userModalOpen: false,
            userType: '',
            authResult: {}
        };
        this.toggleUserModal = this.toggleUserModal.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleMentorAuthFlow = this.toggleMentorAuthFlow.bind(this);
        this.toggleMenteeAuthFlow = this.toggleMenteeAuthFlow.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isAuthenticated && nextProps.isAuthenticated) {
            this.setState({
                userModalOpen: true
            });
        }
    }

    getProfile(cb) {
      let accessToken = this.state.authResult.accessToken;
      console.log(this.lock);
    }

    toggleUserModal() {
        this.setState({
            userModalOpen:  !this.state.userModalOpen
        });
    }

    toggleModal() {
        console.log("toggle");
        this.setState({
            authModalOpen:  !this.state.authModalOpen
        });
    }

    toggleMentorAuthFlow() {
        this.setState({
            userType: 'MENTOR'
        }, function() {
            this.toggleModal();
        });
        //this.toggleAuthZero();
    }

    toggleMenteeAuthFlow() {
        this.setState({
            userType: 'MENTEE'
        }, function() {
            this.toggleModal();
        });
        //this.toggleAuthZero();
    }

    render() {
        return (
            <div>
                <a id="menu-toggle" href="#" className="btn btn-dark btn-lg toggle"><i className="fa fa-bars"></i></a>
                <nav id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <a id="menu-close" href="#" className="btn btn-light btn-lg pull-right toggle"><i className="fa fa-times"></i></a>
                        <li className="sidebar-brand">
                            <a href="#top">Mentor Menu</a>
                        </li>
                        <li>
                            <a href="#top">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <header id="top" className="header">
                    <div className="text-vertical-center">
                        <br/>
                        <img src="./img/Mentor.jpg" alt="" useMap="#image-map" className="img-style"/>
                        <map name="image-map" >
                            <area target="" alt="" title="" href="" coords="155,658,551,573" shape="rect"/>
                            <area target="" alt="" title="" href="" coords="735,555,1098,642" shape="rect"/>
                            <area target="" alt="" title="" href="" coords="353,390,83" shape="circle"/>
                            <area target="" alt="" title="" href="" coords="894,386,78" shape="circle"/>
                        </map>
                       <button className="mentor-img-left" onClick={this.toggleMentorAuthFlow} />
                       <button className="mentor-img-right" onClick={this.toggleMenteeAuthFlow} />
                    </div>
                </header>

                <section id="about" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                                <p className="lead">This theme features some wonderful photography courtesy of <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a>.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="services bg-primary">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-10 col-lg-offset-1">
                                <h2>Our Services</h2>
                                <hr className="small"/>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-cloud fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-light">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-compass fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-light">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-flask fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-light">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-shield fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-light">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <aside className="callout">
                    <div className="text-vertical-center">
                    <img src="./img/be-a-mentor.jpg" alt="" useMap="#image-map" className="img-style"/>
                    </div>
                </aside>

            
                <aside className="call-to-action bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <Youtube />
                            </div>
                        </div>
                    </div>
                </aside>

                <section id="contact" className="map">
                    <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;aq=0&amp;oq=mentor&amp;sll=35.228354,-80.835211&amp;ie=UTF8&amp;hq=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;t=m&amp;z=28202&amp;iwloc=A&amp;output=embed"></iframe>
                    <br />
                    <small>
                        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;aq=0&amp;oq=mentor&amp;sll=35.228354,-80.835211&amp;ie=UTF8&amp;hq=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;t=m&amp;z=28202&amp;iwloc=A"></a>
                    </small>
                </section>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-lg-offset-1 text-center">
                                <h4><strong>Mentor Connection</strong>
                                </h4>
                                <p>320 E. 9th Street, Charlotte, NC 28202
                                    <br/>Charlotte, NC 28202</p>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-phone fa-fw"></i> (123) 456-7890</li>
                                    <li><i className="fa fa-envelope-o fa-fw"></i> <a href="mailto:name@example.com">name@sample.com</a>
                                    </li>
                                </ul>
                                <br/>
                                <ul className="list-inline">
                                    <li>
                                        <a href="#"><i className="fa fa-facebook fa-fw fa-3x"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter fa-fw fa-3x"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-dribbble fa-fw fa-3x"></i></a>
                                    </li>
                                </ul>
                                <hr className="small"/>
                                <p className="text-muted">Copyright &copy; 2017</p>
                            </div>
                        </div>
                    </div>
                    <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-chevron-up fa-fw fa-1x"></i></a>
                </footer>


                <UserAuth
                    setUser={this.props.setUser}
                    open={this.state.authModalOpen && !this.props.isAuthenticated}
                    userType={this.state.userType} />

                

                <MentorModal
                    userData={this.props.userData}
                    quizScores={this.props.quizScores}
                    close={this.toggleUserModal}
                    finishQuiz={this.props.finishQuiz}
                    isOpen={this.state.userModalOpen && this.props.isAuthenticated && this.state.userType === 'MENTOR'} />

                <MenteeModal
                    userData={this.props.userData}
                    quizScores={this.props.quizScores}
                    close={this.toggleUserModal}
                    finishQuiz={this.props.finishQuiz}
                    isOpen={this.state.userModalOpen && this.props.isAuthenticated && this.state.userType === 'MENTEE'} />
                }

            </div>
        );
    }
}

Main.defaultProps = {
    clientId: 'ofVihEf0O4cOZWHVoXBz58PtCWH46Tse',
    domain: 'riley272.auth0.com'
}

export default Main;
