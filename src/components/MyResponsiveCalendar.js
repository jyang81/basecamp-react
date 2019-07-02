import React, {Component} from 'react';
import { ResponsiveCalendar } from '@nivo/calendar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveCalendar = (props) => (
    <ResponsiveCalendar
        data={props.moods}
        from={props.user.start_date}
        to={props.user.end_date}
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 1, right: 1, bottom: 1, left: 1 }}
        monthBorderColor="#ffffff"
        dayBorderWidth={1}
        monthBorderWidth={1}
        dayBorderColor="#ffffff"

    />
)

// class MoodChart extends Component {
//   render() {
//     return(
//       <MyResponsiveCalendar />
//     )
//   }
//
//
// }

export default MyResponsiveCalendar;

// legends={[
//     {
//         anchor: 'bottom-right',
//         direction: 'row',
//         translateY: 36,
//         itemCount: 4,
//         itemWidth: 42,
//         itemHeight: 36,
//         itemsSpacing: 14,
//         itemDirection: 'right-to-left'
//     }
// ]}
