import axios from "axios";
import { Component } from "react";
import { Helmet } from 'react-helmet';
import './test.css'
import isEmpty from "../../../utils/isEmpty";
import questions from '../../../question.json'
import M from 'materialize-css'
import correctNotification from '../../../assets/audio/correct-answer.mp3'
import wrongNotification from '../../../assets/audio/wrong-answer.mp3'
import buttonSound from '../../../assets/audio/button-sound.mp3'
import { Fragment } from "react";
import classnames from '../../../../node_modules/classnames/index'
import React from "react";


class ReadingTest extends Component {
    // state = {
    //     ReadingTest: [],
    //     config: {
    //         headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            ReadingTest:[],
            questions,
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberofQuestions: 0,
            numberofAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 2,
            useFiftyFifty: false,
            time: {},
            nextButtonDisabled: false,
            perviousButtonDisabled: true,
            previousRandomNumbers: [],
            paragraph: [],
                config: {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        }
        };
        this.interval = null
        this.correctSound = React.createRef();
        this.wrongSound = React.createRef();
        this.buttonSound = React.createRef();
    }

    componentDidMount() {
        axios.get('http://localhost:90/test/showall')
            .then((response) => {
                console.log(response)
                this.setState({
                    ReadingTest: response.data.data
                    // questions: response.data.data

                })


            })
            .catch((err) => {
                console.log(err.response)
            })



        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
        this.startTimer();
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
        let { currentQuestionIndex } = this.state;
        if (!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberofQuestions: questions.length,
                answer,
                previousRandomNumbers: []
            }, () => {
                this.showOptions();
                this.handleDisabledButton();
            });
        }
    };

    handleOptionClick = (e) => {
        console.log("option clicked!")
        if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
            setTimeout(() => {
                this.correctSound.current.play();
            }, 500);
            this.correctAnswer();
        }
        else {
            setTimeout(() => {
                this.wrongSound.current.play();
            }, 500);
            this.wrongAnswer();
        }
    }

    handleNextButtonCLick = () => {
        this.playButtonSound();
        if (this.state.nextQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex + 1
            }), () => {
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
            });

        }
    }

    handlePreviousButtonCLick = () => {
        this.playButtonSound();
        if (this.state.previousQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex - 1
            }), () => {
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
            });

        }
    }

    handleQuitButtonClick = () => {
        this.playButtonSound();
        if (window.confirm('Are you sure you want to quit?')) {
            this.props.history.push('/');
        }
    }

    handleButtonClick = (e) => {
        switch (e.target.id) {
            case 'next-button':
                this.handleNextButtonCLick();
                break;

            case 'previous-button':
                this.handlePreviousButtonCLick();
                break;

            case 'quit-button':
                this.handleQuitButtonClick();
                break;
            default:
                break;
        }
        this.playButtonSound();
    }

    playButtonSound = () => {
        this.buttonSound.current.play();
    }


    correctAnswer = () => {
        M.toast({
            html: 'Correct Answer!',
            classes: 'toast-valid',
            displayLength: 1500
        });
        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberofAnsweredQuestions: prevState.numberofAnsweredQuestions + 1
        }), () => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            }else{
                this.displayQuestions(
                    this.state.questions,
                    this.state.currentQuestion,
                    this.state.nextQuestion,
                    this.state.previousQuestion);
            }
        });
    }

    wrongAnswer = () => {
        navigator.vibrate(1000);
        M.toast({
            html: 'Wrong Answer!',
            classes: 'toast-invalid',
            displayLength: 1500
        });
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberofAnsweredQuestions: prevState.numberofAnsweredQuestions + 1
        }), () => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            }else{
                this.displayQuestions(
                    this.state.questions,
                    this.state.currentQuestion,
                    this.state.nextQuestion,
                    this.state.previousQuestion);
            }
         
        });
    }

    showOptions = () => {
        const options = Array.from(document.querySelectorAll('.option'));

        options.forEach(option => {
            option.style.visibility = 'visible';
        });


        this.setState({
            useFiftyFifty: false
        })

    }

    handleHints = () => {
        console.log("hints clicked")
        if (this.state.hints > 0) {
            const options = Array.from(document.querySelectorAll('.option'));
            let indexOfAnswer;

            options.forEach((option, index) => {
                if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                    indexOfAnswer = index;
                }
            });
            while (true) {
                const randomNumber = Math.round(Math.random() * 3);
                if (randomNumber !== indexOfAnswer && !this.state.previousRandomNumbers.includes(randomNumber)) {
                    options.forEach((option, index) => {
                        if (index === randomNumber) {
                            option.style.visibility = 'hidden';
                            this.setState((prevState) => ({
                                hints: prevState.hints - 1,
                                previousRandomNumbers: prevState.previousRandomNumbers.concat(randomNumber)
                            }));
                        }

                    });
                    break;
                }
                if (this.state.previousRandomNumbers.length >= 3) break;
            }
        }

    }

    handleFiftyFifty = () => {
        if (this.state.fiftyFifty > 0 && this.state.useFiftyFifty === false) {
            const options = document.querySelectorAll('.option');
            const randomNumbers = [];
            let indexOfAnswer;

            options.forEach((option, index) => {
                if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                    indexOfAnswer = index;
                }
            });

            let count = 0;
            do {
                const randomNumber = Math.round(Math.random() * 3);
                if (randomNumber !== indexOfAnswer) {
                    if (randomNumbers.length < 2 && !randomNumbers.includes(randomNumber) && !randomNumbers.includes(indexOfAnswer)) {
                        randomNumbers.push(randomNumber);
                        count++;
                    } else {
                        while (true) {
                            const newRandomNumber = Math.round(Math.random() * 3);
                            if (randomNumbers.includes(newRandomNumber) && !randomNumbers.includes(indexOfAnswer)) {
                                randomNumbers.push(newRandomNumber);
                                count++;
                                break;
                            }

                        }
                    }
                }
            } while (count < 2);
            options.forEach((option, index) => {
                if (randomNumbers.includes(index)) {
                    option.style.visibility = 'hidden';
                }
            });
            this.setState(prevState => ({
                fiftyFifty: prevState.fiftyFifty - 1,
                useFiftyFifty: true
            }))
        }
    }

    startTimer = () => {
        const countDownTime = Date.now() + 180000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.endGame();
                })
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                })
            }
        }, 1000);
    }

    handleDisabledButton = () => {
        if (this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0) {
            this.setState({
                perviousButtonDisabled: true
            });
        } else {
            this.setState({
                perviousButtonDisabled: false
            });
        }

        if (this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberofQuestions) {
            this.setState({
                nextButtonDisabled: true
            });
        } else {
            this.setState({
                nextButtonDisabled: false
            });
        }
    }

    endGame = () => {
        alert ('Quiz has ended');
        const  { state } = this;
        const playerStats = {
            score: state.score,
            numberofQuestions : state.numberofQuestions,
            numberofAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
            correctAnswers: state.correctAnswers,
            wrongAnswers : state.wrongAnswers,
            fiftyFiftyUsed : 2 - state.fiftyFifty,
            hintsUsed : 5 - state.hints
        };
        setTimeout(()=>{
            this.props.history.push('/quizSummary', playerStats);
        })
    }

    render() {
        // console.log(questions)

        // console.log(paragraph)
        const {
            currentQuestion,
            currentQuestionIndex,
            hints,
            numberofQuestions,
            fiftyFifty,
            time
        } = this.state;
        // const currentQuestion = this.state.questions[0]



        const paragraph = this.state.ReadingTest[1];

        // let question = paragraph[questionIndex];


        return (
            // <>
            //     <Helmet><title>Reading MockTest</title></Helmet>
            //     <p className='topic'>Read this passage and answer these MCQ questions</p>

            //     <div className='reading-para'>
            //         {
            //             paragraph &&
            //             (
            //                 <>

            //                     <h1>{paragraph.readingTitle}</h1>
            //                     <p>{paragraph.readingPara}</p>

            //                 </>
            //             )
            //         }

            //     </div>



            //     <div className='readingTest-section'>
            //         {this.state.questions.map((readingtest) => {
            //             return (
            //                 <>



            //                 <div className='questions'>
            //                     <h2 className='test-mode'>Test Mode</h2>
            //                     <div className='lifeline-container'>
            //                         <p>
            //                             <span className='mdi mdi-set-center mdi-24px lifeline-icon'><span className="lifeline">2</span></span>
            //                         </p>
            //                         <p>
            //                             <span className='mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon'><span className="lifeline">5</span></span>
            //                         </p>

            //                     </div>
            //                     <div className="timer-container">
            //                         <p>
            //                             <span className="left">1 of 10</span>
            //                             <span className='right'>2:15<span className='mdi mdi-clock-outline mdi-24px'></span></span>
            //                         </p>
            //                     </div>
            //                     <h5 className='question'>{readingtest.rquestion[0]}</h5>
            //                     <div className='options-container'>
            //                         <p className='option'>{currentQuestion.roption}</p>
            //                         <p className='option'>{readingtest.roption}</p>
            //                     </div>
            //                     <div className='options-container'>
            //                         <p className='option'>{readingtest.roption}</p>
            //                         <p className='option'>{readingtest.roption}</p>
            //                     </div>
            //                     <div className='button-container'>
            //                         <button className='question-btn'>Previous</button>
            //                         <button className='question-btn'>Next</button>
            //                         <button className='question-btn'>Quit</button>
            //                     </div>
            //                 </div>

            //         </>
            //             )
            //         })}
            //     </div>
            // </>



            //     <>
            //     <Helmet><title>Reading MockTest</title></Helmet>
            //     <p className='topic'>Read this passage and answer these MCQ questions</p>

            //     <div className='readingTest-section'>{this.state.questions.map((Questions) => {
            //         return (
            //             <>
            //                 <div className='reading-para'>
            //                     <h1>{Questions.readingTitle}</h1>
            //                     <p>{Questions.readingPara1}</p>
            //                     <p>{Questions.readingPara2}</p>
            //                     <p>{Questions.readingPara3}</p>
            //                     <p>{Questions.readingPara4}</p>
            //                     <p>{Questions.readingPara5}</p>
            //                 </div>
            //                 <div className='questions'>
            //                     <h2 className='test-mode'>Test Mode</h2>
            //                     <div className='lifeline-container'>
            //                         <p>
            //                             <span className='mdi mdi-set-center mdi-24px lifeline-icon'><span className="lifeline">2</span></span>
            //                         </p>
            //                         <p>
            //                             <span className='mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon'><span className="lifeline">5</span></span>
            //                         </p>

            //                     </div>
            //                     <div className="timer-container">
            //                         <p>
            //                             <span className="left">1 of 10</span>
            //                      <span className='right'>2:15<span className='mdi mdi-clock-outline mdi-24px'></span></span>
            //                         </p>
            //                     </div>
            //                     <h5 className='question'>{Questions.rquestion}</h5>
            //                     <div className='options-container'>
            //                         <p className='option'>{Questions.roption1}</p>
            //                         <p className='option'>{Questions.roption2}</p>
            //                     </div>
            //                     <div className='options-container'>
            //                         <p className='option'>{Questions.roption3}</p>
            //                         <p className='option'>{Questions.roption4}</p>
            //                     </div>
            //                     <div className='button-container'>
            //                         <button className='question-btn'>Previous</button>
            //                         <button className='question-btn'>Next</button>
            //                         <button className='question-btn'>Quit</button>
            //                     </div>
            //                 </div>
            //             </>
            //         )
            //     })}
            //     </div>
            // </>








            <>
                <Helmet><title>Reading MockTest</title></Helmet>
                <audio ref={this.correctSound} src={correctNotification}></audio>
                <audio ref={this.wrongSound} src={wrongNotification}></audio>
                <audio ref={this.buttonSound} src={buttonSound}></audio>
                <p className='topic'>Read this passage and answer these MCQ questions</p>

                <div className='reading-para'>
                   {
                        paragraph &&
                        (
                            <>

                                <h1>{paragraph.readingTitle}</h1>
                                <p>{paragraph.readingPara}</p>

                            </>
                        )
                    }

                </div>

                <div className='readingTest-section'>
                    {/* {this.state.questions.map((Questions) => {
                    return ( */}
                    <>

                        <div className='questions'>
                            <h2 className='test-mode'>Test Mode</h2>
                            <div className='lifeline-container'>
                                <p>
                                    <span onClick={this.handleFiftyFifty} className='mdi mdi-set-center mdi-24px lifeline-icon'>
                                        <span className="lifeline">{fiftyFifty}</span>
                                    </span>

                                </p>
                                <p>
                                    <span onClick={this.handleHints} className='mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon'>
                                        <span className="lifeline">{hints}</span>
                                    </span>

                                </p>

                            </div>
                            <div className="timer-container">
                                <p>
                                    <span className="left">{currentQuestionIndex + 1} of {numberofQuestions}</span>
                                    <span className='right'>{time.minutes}:{time.seconds}<span className='mdi mdi-clock-outline mdi-24px'></span></span>
                                </p>
                            </div>
                            <h5 className='question'>{currentQuestion.question}</h5>
                            <div className='option-section'>

                            <div className='options-container'>
                                <p onClick={this.handleOptionClick} className='option'>{currentQuestion.optionA}</p>
                                <p onClick={this.handleOptionClick} className='option'>{currentQuestion.optionB}</p>
                            </div>
                            <div className='options-container'>
                                <p onClick={this.handleOptionClick} className='option'>{currentQuestion.optionC}</p>
                                <p onClick={this.handleOptionClick} className='option'>{currentQuestion.optionD}</p>
                            </div>
                            </div>
                            <div className='button-container'>
                                <button
                                    className={classnames('question-btn', { 'disable': this.state.perviousButtonDisabled })}
                                    // className={('question-btn', {'disable': this.state.perviousButtonDisabled})}
                                    id='previous-button'
                                    onClick={this.handleButtonClick} >
                                    Previous
                                </button>
                                <button
                                    className={classnames('question-btn', { 'disable': this.state.nextButtonDisabled })}
                                    // className={('question-btn', {'disable': this.state.nextButtonDisabled})}
                                    id='next-button'
                                    onClick={this.handleButtonClick} >
                                        Next
                                </button>
                                <button id='quit-button' onClick={this.handleButtonClick} className='question-btn'>Quit</button>
                            </div>
                        </div>
                    </>
                    {/* )
                })} */}
                </div>
            </>
        )
    }
}

export default ReadingTest