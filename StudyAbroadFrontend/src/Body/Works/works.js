import React from 'react';

import { Button, Modal } from 'antd';
import './works.css'

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>Watch video</p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}><i className="fas fa-play"></i></Button>
          </div>
          <Modal
            title="Woocommerce Tutorial"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose = {true}
          >
            <iframe title="Study Abroad" width="100%" height="350" src="https://www.youtube.com/watch?v=0PwNW7PAUzQ"></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;