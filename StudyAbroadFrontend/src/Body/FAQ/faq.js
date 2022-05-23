import React from 'react';

import { Collapse,Button  } from 'antd';
import 'antd/dist/antd.css'; 
import './faq.css'
import { Link } from 'react-router-dom'
const { Panel } = Collapse;

function AppFaq() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Study Abroad FAQ</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Why should I study abroad?" key="1">
            <p>By studying abroad, you’ll problem solve, develop a deeper global outlook and tolerance for ambiguity, and collaborate with people with diverse backgrounds – paramount for today’s graduates. You’ll earn credit towards your degree while having a unique experience in a foreign culture</p>
          </Panel>
          <Panel header="What type of study abroad programs are available?" key="2">
            <p>The Office of Study Abroad offers a number of program options ranging from one week to a full academic year. The types of EMU-approved programs available are; Faculty-Led, Exchange, and Partner provider programs.</p>
          </Panel>
          <Panel header="How do I know what study abroad program is right for me?" key="3">
            <p>Spend some time thinking about your goals before you begin your search.  Think about why you are studying abroad and how your program will align with what you hope to achieve both personally and academically. Think about what skills you might gain in an International experience.
    Consider how long you would like to be abroad (one week, four weeks, a year?)
    Consider your finances realistically. Have you looked through the program costs and done a budgeting plan for your program?</p>
          </Panel>
          <Panel header="When can I study abroad? Can I only study abroad once?" key="4">
            <p>Determining when the best time for you to study abroad largely depends on your current major, the type of program you are interest in, and what year you are. Most programs are open to students who have completed a semester at EMU and are in good standing. Some programs will have additional requirements to consider. Transfer students should speak with an APA advisor to determine their eligibility status.</p>
          </Panel>
          <Panel header="I haven’t studied a foreign language. Can I still study abroad?" key="5">
            <p>Coursework in English is available on almost every EMU sponsored programs. Most programs do not require any prior host country language experience.</p>
          </Panel>
          <Panel header="Can students with only certain majors study abroad?" key="6">
            <p>No. All majors can study abroad especially when planning ahead. Credits are offered for general education and elective credits, or for majors or minors. During the planning process, make sure to speak with both a Study Abroad advisor and Academic advisor to determine which program will best meet your academic and professional needs.</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Book Counseling</h3>
          <p>Book an appointment now and our counsellors will contact you at the time that best suits your schedule. You can discuss with them your study options and find the best country, university and course that fits your needs, and also assist you with your application submissions - all online! Book your online counselling session now!</p>
          <Button type="primary" size="large"><Link to='/book/counseling'><i className="fas fa-envelope"></i> Book Counseling</Link></Button>
        </div>
        
      </div>
    </div>  
  );
}

export default AppFaq;