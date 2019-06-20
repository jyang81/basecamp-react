import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Segment, Dropdown } from 'semantic-ui-react'

const schoolOptions = [
  {
    key: "Flatiron School",
    text: "Flatiron School",
    value: "Flatiron School",
    image: { avatar: true, src: './images/fis.png' },
  },
  {
    key: "Code Fellows",
    text: "Code Fellows",
    value: "Code Fellows",
    image: { avatar: true, src: './images/cf.png' },
  },
  {
    key: "General Assembly",
    text: "General Assembly",
    value: "General Assembly",
    image: { avatar: true, src: './images/ga.png' },
  },
  {
    key: "Galvanize",
    text: "Galvanize",
    value: "Galvanize",
    image: { avatar: true, src: './images/gv.jpg' },
  }
]

class Signup extends Component {

  createUser = (ev) => {
    ev.preventDefault()
    console.log("school", ev.target.elements.school.value)
    fetch(URL + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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
    .then(res => res.json())
    .then(data => {
      console.log("1. created:", data)
      if (data && data.jwt) {
        this.saveToken(data.jwt)
        this.getProfile()
      } else {
        const error = document.getElementById("error")
        error.textContent = data.exception
      }
    })
  }

  getProfile = () => {
    let token = this.getToken()
    fetch(URL + 'profile', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log("2. get profile:", data.user)
      this.props.setUser(data)
    })
  }

  saveToken(jwt) {
    localStorage.setItem('jwt', jwt)
  }

  getToken(jwt) {
    return localStorage.getItem('jwt')
  }

  render() {
    return (
      <div className="form-container-2">
        <Segment>
            <form className="ui form formMargin" onSubmit={this.createUser}>
              <div className="required field">
                <label>Name</label>
                <input className="ui input" type="text" name="name" placeholder="Enter your name" />
              </div>
              <div className="required field">
                <label>Email</label>
                <input className="ui input" type="text" name="email" placeholder="Enter your email" ref={this.props.email} />
              </div>
              <div className="required field">
                <label>Password</label>
                <input className="ui input" type="password" name="password" placeholder="Password" ref={this.props.password} />
              </div>
              <div className="required field">
                <label>Confirm Password</label>
                <input className="ui input" type="password" name="password_confirmation" placeholder="Re-enter Password" />
              </div>
              <div className="required field">
                <label>School</label>
                <input type='hidden' name="school" value="" />
                <Dropdown
                  placeholder='Select your school'
                  fluid
                  selection
                  options={schoolOptions}
                />
              </div>
              <div className="required field">
                <label>Course</label>
                <select name="course_id">
                  <option>Select your course</option>
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
                      <input type="date" name="start_date" />
                    </div>
                  </div>
              </div>
              <div className="required field">
                <label>End Date</label>
                  <div className="ui calendar">
                    <div className="ui input left icon">
                      <i className="calendar alternate icon"></i>
                      <input type="date" name="end_date" />
                    </div>
                  </div>
              </div><br/>
              <div id="error"></div>
              <div className="centered"><button type="submit" className="ui primary button">Sign Up</button></div>
            </form>
            <div className="centered"><Link to="/login">Back to Log In</Link></div>
        </Segment>
      </div>
    )
  }


}

export default Signup;


// ==== OLD CODE =====

// <label>School</label>
// <select className="ui selection dropdown" name="school">
//   <option>Select your school</option>
//   <option value="Flatiron School">Flatiron School</option>
//   <option value="Code Fellows">Code Fellows</option>
//   <option value="General Assembly">General Assembly</option>
//   <option value="Galvanize">Galvanize</option>
// </select>

// <div className='inline field'>Start <input type="date" name="start_date" /></div>
// <div className='inline field'>End <input type="date" name="end_date" placeholder="End Date" /></div>
