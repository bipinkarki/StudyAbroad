import { Component } from "react";
import { Link } from 'react-router-dom'
import './speaking.css'

class Speaking extends Component{
    render(){
        return(
            <div className='Speaking-sectiontitle'>
            <h1 className='Speaktitle'>Speaking Test Section</h1>
            <div className='Speakinstructions'>
                <p className='SpeakIns'>IELTS Speaking is a face-to-face, informal discussion with an IELTS examiner, and is the same for both Academic and General Training. 
                The test is divided into 3 parts and is designed to test your pronunciation, fluency, grammar and vocabulary.  </p>
                     <h1 className='SpeakTips'>Top 5 IELTS Speaking Tips</h1>
                     <br></br>
                     <strong className='SpeakTime'>1. Speak some English every day.</strong>
                     <br></br>
                     <p className='SpeakTp'>It is better to practice a little bit every day and improve your skills gradually than to speak your native language all week until you have IELTS class. 
                     You’ll find more advice for IELTS Speaking practice here..</p>
                          
                          <strong className='SpeakTime'>2. Ask the examiner questions if you don’t understand.</strong>
                     <br></br>
                     <p className='SpeakTp'>Your IELTS Speaking test is meant to be like a normal conversation between 2 people. Therefore, if you don’t understand a word you can ask the examiner to explain what it means.
                      Just say ‘I’m sorry, could you explain what X means?’</p>
                          <strong className='SpeakTime'>3. Do a 24-hour English warm up.</strong>
                     <br></br>
                     <p className='SpeakTp'>It takes most IELTS students 10-15 minutes to ‘warm-up’ and perform to the best of their ability on test day. 
                     Just like an athlete needs to warm up before a sporting event, you also need to warm up before your IELTS exam.</p>

                          <strong className='SpeakTime'>4. Give full answers.</strong>
                     <br></br>
                     <p className='SpeakTp'>‘Yes’ and ‘No’ are NOT satisfactory answers in your IELTS Speaking test – you need to show the examiner how good your English is.
If you give very short answers, there is no way the examiner can know how good you are. </p>
                          <strong className='SpeakTime'>5. Correct your mistakes.</strong>
                     <br></br>
                     <p className='SpeakTp'>People make small mistakes when they speak all the time, especially when they are nervous in an exam.
                      By correcting your mistakes as you make them, you can show the examiner that you really do know your grammar and vocabulary.</p>
                <button className='Speakviewins'><Link to={'/instruction/page'}>View Complete Instruction</Link></button>
            </div>

            <div className='Speaking-test'>
            <h2>Take test by clicking below sample questions:</h2>

            <a href="https://www.eltexampreparation.com/sites/default/files/Speaking%20task.pdf" class="button">Speaking Test Guide</a>
    <a href="https://www.lancaster.ac.uk/fass/projects/examreform/Media/InterviewQ.pdf" class="button">Speaking Practice Test 1</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1581597852Speaking%201.pdf" class="button">Speaking Practice Test 2</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1613024334IELTS%20Speaking%20Practice%20Paper%208.pdf" class="button">Speaking Practice Test 3</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1619788340IELTS%20Speaking%20Practice%20Paper%2010.pdf" class="button">Speaking Practice Test 4</a>
</div>
        </div>
    )
}
}

export default Speaking;