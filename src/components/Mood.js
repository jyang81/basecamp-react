import React, {Component} from 'react';
import { Card, Icon, Dropdown, Button } from 'semantic-ui-react'
import moment from 'moment'
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import '../heatmap.css';
// import 'react-calendar-heatmap/dist/styles.css';

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


class Mood extends Component {
  state = {
    moods: [],
    todaysMood: {},
    moodSubmitted: false
  }

  componentDidMount() {
    let newMoods = []
    this.props.user.moods.map(mood => {
      let newMood = { date: mood.date, count: mood.rating }
      newMoods.push(newMood)
      return newMoods
    })
      this.setState({
        moods: newMoods
    })
  }

  appendMood = (mood) => {
    let newMood = { date: mood.date, count: mood.rating }
    this.setState({
      moods: [...this.state.moods, newMood],
      moodSubmitted: true
    })
  }

  submitMood = () => {
    fetch(URL + 'moods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.jwt
      },
      body: JSON.stringify({mood: {
        date: this.state.todaysMood.date,
        rating: this.state.todaysMood.rating,
        user_id: this.props.user.id
      }})
    })
    .then(res => res.json())
    .then(mood => {
      console.log("created mood:", mood )
      this.appendMood(mood)
    })
    .catch(error => console.error(error))
  }

  getValues = () => {
    fetch(URL + 'moods')
    .then(res => res.json())
    .then(moods => console.log(moods))
  }

  moodSelector = (
    <div>
    <Dropdown
      placeholder='Select your Mood'
      fluid
      selection
      options={moodOptions}
      onChange={(ev) => {this.handleChange(ev.target.textContent)}}
    /><br/>
  <Button onClick={this.submitMood}>
    <Icon name='check' /> Submit Mood</Button>
    </div>
  )

  moodRating = (mood) => {
    let regex = /[^0-9]+/gm
    let result = mood.replace(regex, "")
    let moodNum = parseInt(result)
    return moodNum
  }

  handleChange = (mood) => {
    this.setState({
      todaysMood: {
        date: moment().format('YYYY-MM-DD'),
        rating: this.moodRating(mood)
      }
    })
  }

  SELECTOR_CARD = (
    <div className="div2">
    <Card fluid className="fullsize">
      <Card.Content header='Daily Mood' />
      <Card.Content className="no-top-line">
        {this.moodSelector}
      </Card.Content>
       <Card.Content extra>
         <Icon name='smile' />
         How do you feel today?
       </Card.Content>
     </Card>
     </div>
  )

  HEATMAP_CARD = (
    <div className="div2">
    <Card fluid className="fullsize">
      <Card.Content header='Daily Mood' />
      <Card.Content className="no-top-line moodchart">
        <CalendarHeatmap
          startDate={new Date(this.props.user.start_date)}
          endDate={new Date(this.props.user.end_date)}
          values={this.props.user.moods}
          showWeekdayLabels={true}
          showOutOfRangeDays={true}
          classForValue={value => {
            if (!value) {
              return 'color-empty';
            }
              return `color-github-${value.rating}`;
          }}
          tooltipDataAttrs={value => {
              return {
                'data-tip': `${value.date}, Mood: ${value.rating}`
            };
          }}
        />
      <ReactTooltip />
     </Card.Content>
      <Card.Content extra>
        <Icon name='smile' />
        How do you feel today?
      </Card.Content>
    </Card>
    </div>
  )

  render() {
    if (this.state.moodSubmitted === false) {
      return this.HEATMAP_CARD
    } else {
      return this.SELECTOR_CARD
    }
  }

}

export default Mood;

    // <MyResponsiveCalendar className="moodchart" user={this.props.user} moods={this.state.moods} />
//
// if (this.state.todaysMood) {
//   <MoodChart />
// } else {
//   {moodSelector}
// }
          // <MoodChart />

// <div className='content'>
//   <select className="ui dropdown">
//     <option value="">Select Your Mood</option>
//     <option value="10">10 - I should be teaching!</option>
//     <option value="9">9 - Relax Day</option>
//     <option value="8">8 - Learning is fun!</option>
//     <option value="7">7 - Comfortable- All caught up</option>
//     <option value="6">6 - Just barely keeping up</option>
//     <option value="5">5 - Playing catch up</option>
//     <option value="4">4 - I have so much to do!</option>
//     <option value="3">1 - What am I doing here?!</option>
//     <option value="2">2 - Starting to panic!</option>
//     <option value="1">1 - What am I doing here?!</option>
//   </select>
//  </div>

// [{date: '2019-06-01', count: 7},{date: '2019-05-01', count: 5},{date: '2019-04-01', count: 3}]
