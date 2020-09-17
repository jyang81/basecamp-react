import React, { Component } from 'react'
import { Segment, Header, Modal } from 'semantic-ui-react'

class ProfileModal extends Component {

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.updateUser(ev)
    ev.target.reset()
  }

  handleErrors = (res) => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
  }

  updateUser = (ev) => {
    ev.preventDefault()
    fetch(`${URL}users/${this.props.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.jwt
      },
      body: JSON.stringify({user: {
        name: ev.target.elements.name.value,
        email: ev.target.elements.email.value,
        password: ev.target.elements.password.value,
        password_confirmation: ev.target.elements.password_confirmation.value,
        school: ev.target.elements.school.value,
        course_id: ev.target.elements.course_id.value,
        start_date: ev.target.elements.start_date.value,
        end_date: ev.target.elements.end_date.value
      }})
    })
    .then(this.handleErrors)
    .then(res => res.json())
    .then(data => {
      console.log("new data", data);
      this.props.updateUserInfo(data);
      this.props.closeModal()
    })
    .catch(errors => console.log(errors))
  }

  deleteUser = (id) => {
    fetch(`${URL}users/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwt
      }
    })
    .then(res => res.text())
    .then(this.setState({
      user: {
      }
    }))
  }

  render() {
    return (
      <Modal size="small"
        onClose={this.props.closeModal}
        open={this.props.open}
        closeIcon >
        <Header icon='edit' content='Edit Profile' />
        <Modal.Content scrolling>
          <div>

          <div className="form-container-2">
            <Segment>
                <form className="ui form formMargin" onSubmit={this.updateUser}>
                  <div className="required field">
                    <label>Name</label>
                    <input className="ui input" type="text" name="name" defaultValue={this.props.user.name} onChange={this.handleChange} />
                  </div>
                  <div className="required field">
                    <label>Email</label>
                    <input className="ui input" type="text" name="email" defaultValue={this.props.user.email} ref={this.props.email} onChange={this.handleChange} />
                  </div>
                  <div className="required field">
                    <label>Password</label>
                    <input className="ui input" type="password" name="password" required />
                  </div>
                  <div className="required field">
                    <label>Confirm Password</label>
                    <input className="ui input" type="password" name="password_confirmation" required />
                  </div>
                  <div className="field">
                    <label>School</label>
                      <select className="ui selection dropdown" name="school" defaultValue={this.props.user.school} >
                        <option value="Flatiron School">Flatiron School</option>
                        <option value="Code Fellows">Code Fellows</option>
                        <option value="General Assembly">General Assembly</option>
                        <option value="Galvanize">Galvanize</option>
                      </select>
                  </div>
                  <div className="field">
                    <label>Course</label>
                      <select className="ui selection dropdown" name="course_id" defaultValue={this.props.user.course_id} >
                        <option value="1">Software Engineering Immersive</option>
                        <option value="2">Software Engineering Online</option>
                        <option value="3">Data Science</option>
                        <option value="4">UX/UI Design</option>
                      </select>
                  </div>
                  <div className="required field">
                    <label>Start Date</label>
                      <div className="ui calendar">
                        <div className="ui input left icon">
                          <i className="calendar alternate icon"></i>
                          <input type="date" name="start_date"
                            defaultValue={this.props.user.start_date}
                             />
                        </div>
                      </div>
                  </div>
                  <div className="required field">
                    <label>End Date</label>
                      <div className="ui calendar">
                        <div className="ui input left icon">
                          <i className="calendar alternate icon"></i>
                          <input type="date" name="end_date"
                            defaultValue={this.props.user.end_date}
                            />
                        </div>
                      </div>
                  </div><br/>
                  <div id="error"></div>
                  <div className="centered"><button type="submit" className="ui primary button">Update Profile</button></div>
                </form>
            </Segment>
          </div>
          </div>
        </Modal.Content>
      </Modal>
    )
  }

}

export default ProfileModal;
