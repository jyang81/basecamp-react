import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Signup extends Component {
  // constructor() {
  //   super()
  //
  // }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="name">Name</label><br />
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label><br />
            <input type="text" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="school">School</label><br />
            <select>
              <option>Select your school</option>
              <option value="Flatiron School">Flatiron School</option>
              <option value="Code Fellows">Code Fellows</option>
              <option value="General Assembly">General Assembly</option>
              <option value="Galvanize">Galvanize</option>
            </select>
          </div>
          <div>
            <label htmlFor="course">Course</label><br />
            <select>
              <option>Select your course</option>
              <option value="Software Engineering Immersive">Software Engineering Immersive</option>
              <option value="Software Engineering Online">Software Engineering Online</option>
              <option value="Data Science">Data Science</option>
              <option value="UX/UI Design">UX/UI Design</option>
            </select>
          </div>
          <div>
            <label htmlFor="dates">Dates</label><br />
            Start <input type="date" name="dates" placeholder="Start Date" /><br/>
            End <input type="date" name="dates" placeholder="End Date" />
          </div>
          <input type="submit" value="Sign up" />
        </form>
      </div>
    )
  }


}

export default Signup;
