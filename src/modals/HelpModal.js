import React, { Component } from 'react'
import { Image, Modal } from 'semantic-ui-react'

class HelpModal extends Component {
  state = {
    open: false
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  render() {
    const {open} = this.state
    return (
      <Modal basic size="small"
        onClose={this.closeModal}
        open={open}
        trigger={<Image className="pointer" src='./images/help-button.svg' onClick={() => this.setState({ open: true })} />}
      >
        <Modal.Content>
          <div className="center-all">
          <h2>Looks like you need help.</h2>
          <div>Try explaining it to me.</div>
          <Image src='./images/duck.png' />
          <p>If that doesn't work, go ask Rylan.</p>
          </div>
        </Modal.Content>
      </Modal>
    )
  }

}

export default HelpModal;
