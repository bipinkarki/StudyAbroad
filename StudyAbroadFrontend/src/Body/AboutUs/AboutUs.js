import React from 'react';
import './AboutUs.css';
import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i class="fas fa-search"></i>,
    title: ' University & program search ',
    content: 'Find the right program for you and your career aspirations.',
  },
  {
    key: '2',
    icon: <i class="fas fa-book-open"></i>,
    title: 'Application guidance',
    content: 'We will get you to the right place to start your application.',
  },
  {
    key: '3',
    icon: <i class="fab fa-cc-visa"></i>,
    title: 'Visa & travel advice',
    content: 'Get help after application, all the way to your first day at university.',
  },
]

function AboutUs() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How StudyAbroad can help you?</h2>
        </div>
        <div className="contentHolder">
          <p>We help international students find their dream university online. Once a student has filled out our enquiry form we’ll get in touch within 24 hours to chat through the information provided to us via our admissions center, providing advice and guidance to help reach a decision about where to study. We’ll then liaise with the university to help get students enrolled.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AboutUs;