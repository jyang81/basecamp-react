import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

const URL = 'http://localhost:5000/api/v1/'

class Signup extends Component {
  // constructor() {
  //   super()
  //
  // }

  createUser = (ev) => {
    ev.preventDefault()

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
      console.log("1. created:", data.user)
      if (data && data.jwt) {
        this.saveToken(data.jwt)
        this.getProfile()
      }
    })
    .catch(error => console.error(error))
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
      <div>
        <form onSubmit={this.createUser}>
          <div>
            <label htmlFor="name">Name</label><br />
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label><br />
            <input type="text" name="email" placeholder="Enter your email" ref={this.props.email} />
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" placeholder="Password" ref={this.props.password} />
          </div>
          <div>
            <label htmlFor="password_confirmation">Confirm Password</label><br />
            <input type="password" name="password_confirmation" placeholder="Re-enter Password" />
          </div>
          <div>
            <label htmlFor="school">School</label><br />
            <select name="school">
              <option>Select your school</option>
              <option value="Flatiron School">Flatiron School</option>
              <option value="Code Fellows">Code Fellows</option>
              <option value="General Assembly">General Assembly</option>
              <option value="Galvanize">Galvanize</option>
            </select>
          </div>
          <div>
            <label htmlFor="course">Course</label><br />
            <select name="course_id">
              <option>Select your course</option>
              <option value="1">Software Engineering Immersive</option>
              <option value="2">Software Engineering Online</option>
              <option value="3">Data Science</option>
              <option value="4">UX/UI Design</option>
            </select>
          </div>
          <div>
            <label htmlFor="dates">Dates</label><br />
            Start <input type="date" name="start_date" placeholder="Start Date" /><br/>
          End <input type="date" name="end_date" placeholder="End Date" />
          </div>
          <input type="submit" value="Sign up" />
        </form>
      </div>
    )
  }


}

export default Signup;
