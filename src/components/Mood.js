import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'
import moment from 'moment'
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import '../heatmap.css';
import MoodModal from '../modals/MoodModal';
// import 'react-calendar-heatmap/dist/styles.css';


class Mood extends Component {
  state = {
    moods: [],
    todaysMood: {}
  }

  componentDidMount() {
    let newMoods = []
    this.props.user.moods.map(mood => {
      let newMood = { date: mood.date, rating: mood.rating }
      newMoods.push(newMood)
      return newMoods
    })
    this.setState({
      moods: newMoods
    })
  }

  appendMood = (mood) => {
    let newMood = { date: mood.date, rating: mood.rating }
    this.setState({
      moods: [...this.state.moods, newMood]
    })
    console.log('added mood', newMood)
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

  moodRating = (mood) => {
    let regex = /[^0-9]+/gm
    let result = mood.replace(regex, "")
    let moodNum = parseInt(result)
    return moodNum
  }

  handleChange = (mood) => {
    this.setState({
      todaysMood: {
        // date: '2019-10-01',
        date: moment().format('YYYY-MM-DD'),
        rating: this.moodRating(mood)
      }
    })
  }

  render() {
    return (
      <div className="div2">
        <Card fluid className="fullsize">
          <Card.Content header='Daily Mood' />
          <Card.Content className="no-top-line moodchart">
            <CalendarHeatmap
              startDate={new Date(this.props.user.start_date)}
              endDate={new Date(this.props.user.end_date)}
              values={this.state.moods}
              showWeekdayLabels={true}
              showOutOfRangeDays={true}
              classForValue={value => {
                if (!value) {
                  return 'color-empty';
                }
                return `color-github-${value.rating}`;
              }}
              tooltipDataAttrs={value => {
                if (value.date === null) {
                  return {
                    'data-tip': 'No mood recorded'
                  }
                }
                return {
                  'data-tip': `${value.date}, Mood: ${value.rating}`
                };
              }}
            />
            <ReactTooltip />
          </Card.Content>
          <Card.Content extra>
            <MoodModal 
            user={this.props.user} 
            submitMood={this.submitMood}
            handleChange={this.handleChange}
             />
          </Card.Content>
        </Card>
      </div>
    ) 
  }

}

export default Mood;

