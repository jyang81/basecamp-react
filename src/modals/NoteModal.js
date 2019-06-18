import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class NoteModal extends Component {
  state = {
    showModal: false
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }



  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.createToDo(ev)
    console.log("ITEM", ev.target.elements["todoitem"].value)
    console.log("CAT", ev.target.elements["category"].value)
    console.log("DUE", ev.target.elements["due_date"].value)
  }

  render() {
    return (
      <Modal size="tiny" trigger={<Button><Icon name='plus square' />
      Add New Note</Button>} closeIcon>
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

export default NoteModal;
