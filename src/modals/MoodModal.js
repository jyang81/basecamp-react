import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react'
// import moment from 'moment'


const moodOptions = [
  {
    key: "10 - I should be teaching!",
    text: "10 - I should be teaching!",
    value: 10,
  },
  {
    key: "9 - Relax Day",
    text: "9 - Relax Day",
    value: 9,
  },
  {
    key: "8 - Learning is fun!",
    text: "8 - Learning is fun!",
    value: 8,
  },
  {
    key: "7 - Comfortable- All caught up",
    text: "7 - Comfortable- All caught up",
    value: 7,
  },
  {
    key: "6 - Just barely keeping up",
    text: "6 - Just barely keeping up",
    value: 6,
  },
  {
    key: "5 - Playing catch up",
    text: "5 - Playing catch up",
    value: 5,
  },
  {
    key: "4 - I have so much to do!",
    text: "4 - I have so much to do!",
    value: 4,
  },
  {
    key: "3 - Stressed out, but not panicking",
    text: "3 - Stressed out, but not panicking",
    value: 3,
  },
  {
    key: "2 - Starting to panic!",
    text: "2 - Starting to panic!",
    value: 2,
  },
  {
    key: "1 - What am I doing here?!",
    text: "1 - What am I doing here?!",
    value: 1,
  }
]


class MoodModal extends Component {
  state = {
    open: false
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  // appendMood = (mood) => {
  //   let newMood = { date: mood.date, count: mood.rating }
  //   this.setState({
  //     moods: [...this.state.moods, newMood],
  //     moodSubmitted: true
  //   })
  // }

  moodRating = (mood) => {
    let regex = /[^0-9]+/gm
    let result = mood.replace(regex, "")
    let moodNum = parseInt(result)
    return moodNum
  }

handleSubmit = () => {
  this.props.submitMood()
  this.closeModal()
}

  render() {
    const {open} = this.state
    return (
      <Modal size="tiny"
        onClose={this.closeModal}
        open={open}
        trigger={<Button onClick={() => this.setState({ open: true })}>
        <Icon name='smile' />Log your mood</Button>}
        closeIcon >
        <Header icon='smile outline' content='How are you feeling today?' />
        <Modal.Content>

            <div>
            <Dropdown
              placeholder='Select your Mood'
              fluid
              selection
              options={moodOptions}
              onChange={(ev) => {this.props.handleChange(ev.target.textContent)}}
            /><br/>
          <Button onClick={this.handleSubmit}>
            <Icon name='check' />Submit Mood</Button>
            </div>

        </Modal.Content>
      </Modal>
    )
  }

}

export default MoodModal;
