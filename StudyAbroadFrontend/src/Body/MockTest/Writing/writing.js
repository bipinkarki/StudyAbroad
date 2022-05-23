import { Component } from "react";
import { Link } from 'react-router-dom'
import './writing.css'

class Writing extends Component{
    render(){
        return(
            <div className='Writing-sectiontitle'>
            <h1 className='Writetitle'>Writing Test Section</h1>
            <div className='Writeinstructions'>
                <p className='WriteIns'>IELTS Writing Task 1 Academic requires you to write at least 150 words in response to a graph, table, chart or process. 
                You will be presented with factual information and asked to select and report the main features of the data in under 20 minutes.  </p>
                     <h1 className='WriteTips'>Academic Writing Task 1 Strategy</h1>
                     <br></br>
                     <strong className='WriteTime'>1. Understand how the test is marked.</strong>
                     <br></br>
                     <p className='WriteTp'>Being aware of the marking criteria will allow you to give the examiner exactly what they need.</p>
                          
                          <strong className='WriteTime'>2. Paraphrase the question.</strong>
                     <br></br>
                     <p className='WriteTp'>It is best to paraphrase the question in the first paragraph. 
                     You can do this by using synonyms.</p>
                          <strong className='WriteTime'>3. Write the overview.</strong>
                     <br></br>
                     <p className='WriteTp'>To write your overview,
                      pick 3 or 4 of the main features and write about them generally, without referencing any data.</p>

                          <strong className='WriteTime'>4. Support the main features.</strong>
                     <br></br>
                     <p className='WriteTp'>In a new paragraph, support the key features with the data in the information given to you.</p>
                          <strong className='WriteTime'>5. Check your work.</strong>
                     <br></br>
                     <p className='WriteTp'>Check your report for spelling and grammar mistakes. Make sure that the data you mentioned is also accurate!</p>
                <button className='Writeviewins'><Link to={'/instruction/page'}>View Complete Instruction</Link></button>
            </div>

            <div className='Writing-test'>
            <h2>Take test by clicking below sample questions:</h2>

            <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1592212046IELTS%20ACADEMIC%20WRITING%20TASK%201%20P2.pdf" class="button">Writing Practice Test 1</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1592212033IELTS%20ACADEMIC%20WRITING%20TASK%201%20P1.pdf" class="button">Writing Practice Test 2</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1615525492IELTS%20Writing%20Task%202%20Practice%20Paper%209.pdf" class="button">Writing Practice Test 3</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1602767230IELTS%20Writing%20Task%202%20Questions%20Sample%205.pdf" class="button">Writing Practice Test 4</a>
    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1601400692IELTS%20Writing%20Task%202%20-%20Children%20&%20countryside.pdf" class="button">Writing Practice Test 5</a>
</div>
        </div>
        )
    }
}

export default Writing;