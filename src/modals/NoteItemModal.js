import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class NoteItemModal extends Component {
  state = {
    open: false
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.createNoteItem(ev)
    this.closeModal()
    console.log("TITLE", ev.target.elements["title"].value)
  }

  render() {
    const {open} = this.state
    return (
      <Modal size="tiny"
        onClose={this.closeModal}
        open={open}
        trigger={<div
          className="post-it"
          onClick={() => this.setState({ open: true })}>
         {this.props.title}</div>}
        closeIcon >
        <Header icon='pin' content={this.props.title} />
        <Modal.Content>

        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Category</label>
            <input name="title" placeholder='Blog Ideas, Project Ideas, etc.' />
          </Form.Field>

          <Button color='green' type='submit'>
            <Icon name='checkmark' /> Submit
          </Button>
        </Form>

        </Modal.Content>
      </Modal>
    )
  }

}

export default NoteItemModal;
