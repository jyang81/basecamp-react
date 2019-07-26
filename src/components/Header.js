import React, { Component } from 'react';
import { Dropdown, Image } from 'semantic-ui-react'
import ProfileModal from '../modals/ProfileModal'

class Header extends Component {

  state = {
    modalOpen: false
  }

  schoolLogo = (school) => {
    switch (this.props.user.school) {
      case 'Flatiron School':
        return './images/fis.png'
      case 'Code Fellows':
        return './images/cf.png'
      case 'General Assembly':
        return './images/ga.png'
      case 'Galvanize':
        return './images/gv.jpg'
      default:
        return './images/fis.png'
    }
  }

  openModal = () => {
    this.setState({
      modalOpen: true
    })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  render () {

    const trigger = (
      <span>
        <i className="small circular inverted red user icon"></i> {this.props.user.name}
      </span>
    )


    const options = [
      { key: 'user', text: 'Edit Profile', icon: 'user', onClick: this.openModal },
      { key: 'sign-out', text: 'Log Out', icon: 'sign out', onClick: this.props.logOut }
    ]

    return (
      <div className="div6">
        <div><Image src='./images/bc-logo-horz.svg' alt='BaseCamp logo' /></div>
        <div><Image src={this.schoolLogo(this.props.user.school)} avatar /> {this.props.user.course.name} @ {this.props.user.school}</div>
        <div><Dropdown trigger={trigger} options={options} pointing='top right' icon={null} /></div>
        <ProfileModal
          closeModal={this.closeModal} open={this.state.modalOpen}
          user={this.props.user} updateUserInfo={this.props.updateUserInfo}
          />
      </div>
    )
  }

}

export default Header;
