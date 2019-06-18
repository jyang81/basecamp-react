import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class ToDoModal extends Component {
  state = {
    open: false
  }

  closeModal = () => {
    console.log("close modal")
    this.setState({ open: false })
  }



  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.createToDo(ev)
    this.closeModal()
    console.log("ITEM", ev.target.elements["todoitem"].value)
    console.log("CAT", ev.target.elements["category"].value)
    console.log("DUE", ev.target.elements["due_date"].value)
  }

  render() {
    const {open} = this.state
    return (
      <Modal size="tiny"
        onClose={this.closeModal}
        open={open}
        trigger={<Button onClick={() => this.setState({ open: true })}>
        <Icon name='plus square' /> Add New To Do Item</Button>}
        closeIcon >
        <Header icon='list' content='Create a To Do' />
        <Modal.Content>

        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>To Do Item</label>
            <input name="todoitem" placeholder='Write second blog, Resume first draft, etc.' />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input name="category" placeholder='Blogs, Project, FSP, etc.' />
          </Form.Field>
          <Form.Field>
            <label>Due Date</label>
            <input name="due_date" type="date" />
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

export default ToDoModal;
