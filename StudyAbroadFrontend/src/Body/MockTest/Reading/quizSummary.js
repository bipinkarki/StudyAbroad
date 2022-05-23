import React from 'react'
import { Fragment } from 'react';
import { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import "./quizSummary.css"

class QuizSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            numberofQuestions: 0,
            numberofAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount() {
        const { state } = this.props.location;
        if (state) {

            this.setState({
                score: (state.score / state.numberofQuestions) * 100,
                numberofQuestions: state.numberofQuestions,
                numberofAnsweredQuestions: state.numberofAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
                hintsUsed: state.hintsUsed,
                fiftyFiftyUsed: state.fiftyFiftyUsed
            });
        }
    }

    render() {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score

        if (userScore <= 30) {
            remark = 'You need more practice!';
        }
        else if (userScore > 30 && userScore <= 50) {
            remark = 'Better luck next time!';
        }
        else if (userScore <= 70 && userScore > 50) {
            remark = 'You can do better!';
        }
        else if (userScore >= 71 && userScore <= 84) {
            remark = 'You did great!'
        }
        else {
            remark = 'You\'re an absolute genius!'
        }


        if (state !== undefined) {
            stats = (
                <>
                <div className='summary-box'>
                    <div className='s-icon'>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1 className='e-test'>Test has ended</h1>
                    <div className="stats">
                        <h4 className='remark'>{remark}</h4>
                        <h2 className='score-text'>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat left-stat">Total number of questions:</span>
                        <span className='right stat'>{this.state.numberofQuestions}</span><br />

                        <span className="stat left">Number of attempted questions:</span>
                        <span className='right stat'>{this.state.numberofAnsweredQuestions}</span><br />

                        <span className="stat left-">Number of Correct Answers:</span>
                        <span className='right stat'>{this.state.correctAnswers}</span><br />

                        <span className="stat left">Number of Wrong Answers:</span>
                        <span className='right stat'>{this.state.wrongAnswers}</span><br />

                        <span className="stat left">Hints Used:</span>
                        <span className='right stat'>{this.state.hintsUsed}</span><br />

                        <span className="stat left">50-50 Used:</span>
                        <span className='right stat'>{this.state.fiftyFiftyUsed}</span>
                    </div>
                    <section className='control-btns'>
                        <ul className='controls'>
                            <li ><Link to='/' className='home-btn'>Back to Home</Link></li>
                            <li><Link to='/test/reading' className='test-btn'>Start Test Again</Link></li>

                        </ul>
                    </section>
                    </div>
                </>
            );
        } else {
            stats = (
                <div className='notest'>

     
                <div className='no-statspage'>
                    <h1 className='no-stats'>No Statistics Available</h1>
                    <div className='control-btns'>

                    <ul>
                        <li><Link to='/' className='home-btn'>Back to Home</Link></li>
                        <li><Link to='/test/reading' className='test-btn'>Take a Test</Link></li>

                    </ul>
                    </div>
                </div>
                </div>
            );
        }
        return (
            <Fragment>
                <Helmet>Reading Test - Summary</Helmet>
                {stats}
            </Fragment>
        )
    }
}

export default QuizSummary;