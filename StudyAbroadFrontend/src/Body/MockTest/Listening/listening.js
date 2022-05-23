import { Component } from "react";
import { Link } from 'react-router-dom'
import  './listening.css'

class Listening extends Component{
        render(){
            return(
                <div className='Listening-sectiontitle'>
                    <h1 className='Listitle'>Listening Test Section</h1>
                    <div className='Lisinstructions'>
                        <p className='LisIns'>IELTS Listening is divided into four sections, with 10 questions in each section. The test takes around 30 minutes to complete, with each section getting increasingly more difficult. 
                        You will have 10 minutes at the end of the listening test to transfer your answers to the answer sheet. </p>
                             <h1 className='LisTips'>Top 5 IELTS Listening Tips</h1>
                             <br></br>
                             <strong className='LisTime'>1. Familiarise yourself with a range of accents.</strong>
                             <br></br>
                             <p className='LisTp'>The IELTS Listening test will feature a range of accents to reflect the international nature of English.
                              Therefore, you should get used to listening to accents from a range of English-speaking countries.</p>
                                  
                                  <strong className='LisTime'>2. Don’t lose your concentration.</strong>
                             <br></br>
                             <p className='LisTp'>It can be difficult to stay focused during your IELTS Listening test,
                              but it’s also extremely important if you want to score a Band 7 or above.
                            To improve your concentration you need to practice active listening.
                            This involves setting yourself small tasks when you are practising and actually doing something when you are listening, just like you will be in your test.</p>
                                  <strong className='LisTime'>3. Follow the instructions carefully.</strong>
                             <br></br>
                             <p className='LisTp'>This especially applies when it comes to the word limit. 
                             If the question states ‘No more than three words’ then you can’t write any more than this. 
                             If your answer is four words it will be incorrect.</p>
    
                                  <strong className='LisTime'>4. Familiarise yourself with the different question types.</strong>
                             <br></br>
                             <p className='LisTp'>Doing so will mean you’ll know exactly what to expect on test day and how to react to the question types you’re given. 
                             To help you with this, you should use genuine practice IELTS past papers.</p>
                                  <strong className='LisTime'>5. Practice listening to things only once.</strong>
                             <br></br>
                             <p className='LisTp'>Lots of teachers allow their students to listen to a recording 3 or 4 times. 
                             However, I would strongly recommend practising the exam under exam conditions and that means listening just once.</p>
                        <button className='Lisviewins'><Link to={'/instruction/page'}>View Complete Instruction</Link></button>
                    </div>
    
                    <div className='Listening-test'>
                    <h2>Take test by clicking below sample questions:</h2>

    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1628000894IELTS%20LISTENING%20PRACTICE%20PAPER%2042.pdf" class="button">Listening Practice Test 1</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1615453119IELTS%20Listening%20Practice%20Paper%2011.pdf" class="button">Listening Practice Test 2</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1615453119IELTS%20Listening%20Practice%20Paper%2010.pdf" class="button">Listening Practice Test 3</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1628000894IELTS%20LISTENING%20PRACTICE%20PAPER%2042.pdf" class="button">Listening Practice Test 4</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1604466900IELTS%20listening%20practice%207-IELTS%20Material.pdf" class="button">Listening Practice Test 5</a>
        </div>
                </div>
            )
        }
    }

export default Listening;