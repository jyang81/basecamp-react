import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class NoteModal extends Component {
  state = {
    open: false
  }

  closeModal = () => {
    console.log("close modal")
    this.setState({ open: false })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.createNote(ev)
    this.closeModal()
    console.log("TITLE", ev.target.elements["title"].value)
  }

  render() {
    const {open} = this.state
    return (
      <Modal size="tiny"
        onClose={this.closeModal}
        open={open}
        trigger={<Button onClick={() => this.setState({ open: true })}>
        <Icon name='plus square' /> Add New Note</Button>}
        closeIcon >
        <Header icon='sticky note outline' content='Create a Note' />
        <Modal.Content>

        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Category</label>
            <input name="title" placeholder='Blog Ideas, Project Ideas, Tips, etc.' />
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

export default NoteModal;
