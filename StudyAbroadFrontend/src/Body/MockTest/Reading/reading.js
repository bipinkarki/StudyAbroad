import { Component } from "react";
import { Link } from 'react-router-dom'
import  './reading.css'

class Reading extends Component{
    render(){
        return(
            <div className='Reading-sectiontitle'>
                <h1 className='title'>Reading Test</h1>
                <div className='instructions'>
                    <p className='Ins'>IELTS Reading tests a variety of reading skills, and although the question formats are the same, the text styles are different for Academic and General Training.
                         You will be given around 60 minutes to answer 40 questions, and there are 3 different reading texts to read.</p>
                         <iframe width="560" height="315" src="https://www.youtube.com/embed/Q_iv4wRuZpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         <h1 className='Tips'>Top 5 Tips for IELTS Reading</h1>
                         <br></br>
                         <strong className='Time'>1. Timing is key.</strong>
                         <br></br>
                         <p className='Tp'>You will have just 1 hour to complete 40 questions, so you must use your time wisely. I advise my students to try and get each section finished in 20 minutes.
                              This will give you 16-17 minutes to read and answer the questions and 3-4 minutes to transfer and check your answers. You’ll find more help with time management here.</p>
                              
                              <strong className='Time'>2. Read the instructions carefully.</strong>
                         <br></br>
                         <p className='Tp'>Many strong candidates lose marks in IELTS Reading because they don’t read the instructions properly.
                          Pay close attention to the instructions you’re given to avoid losing easy marks..</p>
                              <strong className='Time'>3. Don’t panic.</strong>
                         <br></br>
                         <p className='Tp'>Some of the questions will be easy and some will be extremely difficult.
                          (I knew many IELTS teachers who had to check the answers to some questions because they are so challenging!)</p>

                              <strong className='Time'>4. It’s really a vocabulary test.</strong>
                         <br></br>
                         <p className='Tp'>In many ways, IELTS Reading is more of a vocabulary test than a reading test.
                          The reason is that you need a wide range of vocabulary to understand the passages of text given to you. You must also have an awareness of synonyms and paraphrasing if you wish to identify the information required to answer the questions correctly.</p>
                              <strong className='Time'>5. Don’t expect to understand every word.</strong>
                         <br></br>
                         <p className='Tp'>If you don’t understand a word in the test, you should look at the words and sentences around it for clues as to its meaning. Alternatively, you can move on and forget about it.</p>
                    <button className='viewins'><Link to={'/instruction/page'}>View Complete Instruction</Link></button>
                </div>

                <div className='reading-test'>
                    <h1 className='Buttonhead'>Take a Test</h1>
                    <button>START TEST</button>
                </div>
                
            </div>
        )
    }
}

export default Reading;