import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'
import ToDoItem from './ToDoItem';
import ToDoModal from '../modals/ToDoModal';
const URL = 'http://localhost:5000/api/v1/'

class ToDo extends Component {
  state = {
    to_dos: []
  }

  componentWillMount(){
    this.setState({
      to_dos: this.props.user.to_dos
    })
  }

  createToDo = (ev) => {
    fetch(URL + 'to_dos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.jwt
      },
      body: JSON.stringify({to_do: {
        item: ev.target.elements["todoitem"].value,
        category: ev.target.elements["category"].value,
        due_date: ev.target.elements["due_date"].value,
        user_id: this.props.user.id
      }})
    })
    .then(res => res.json())
    .then(to_do => {
      console.log("created to do:", to_do )
      this.setState({
        to_dos: [...this.state.to_dos, to_do]
      })
    })
    .catch(error => console.error(error))
  }

  deleteToDo = (id) => {
    fetch(`${URL}to_dos/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwt
      }
    })
    .then(res => res.text())
    .then(this.setState({
      to_dos: this.state.to_dos.filter(to_do => to_do.id !== id)
    }))
  }

  render() {
    return (
      <div className="div4" >
        <Card fluid className="fullsize" >
          <Card.Content header='To Dos' />
          <div className="list">
          {this.state.to_dos.map(to_do => {
            return (
              <ToDoItem key={to_do.id} to_do={to_do} deleteToDo={this.deleteToDo}/>
            )
          })}
          </div>
          <Card.Content extra>
             <ToDoModal user={this.props.user} createToDo={this.createToDo}/>
          </Card.Content>
        </Card>

      </div>
    )
  }

}

export default ToDo;
