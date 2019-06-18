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
    console.log("NOTE", ev.target.elements["content"].value)
  }

  render() {
    const {open} = this.state
    return (
      <Modal size="small"
        onClose={this.closeModal}
        open={open}
        trigger={<div
          className="post-it"
          onClick={() => this.setState({ open: true })}>
         {this.props.category.title}</div>}
        closeIcon >
        <Header icon='pin' content={this.props.category.title} />
        <Modal.Content scrolling>
          <ul>
            {this.props.category.notes.map(note => {
              return (
                <li key={note.id}>{note.content}</li>
              )
            })}
          </ul>
        </Modal.Content>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Note</label>
              <input name="content" placeholder='Thoughts, Ideas, Links, etc.' />
            </Form.Field>
            <Button color='blue' type='submit'>
              <Icon name='plus' /> Add Note
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }

}

export default NoteItemModal;
