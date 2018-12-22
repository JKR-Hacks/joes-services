import React from 'react';

var Schedule = (props) => (
  <div className="col-xs-12" id="sticky-sidebar">
  {/* start with rendering data in a list, then refactor to a table layout */}
    <ul>
      {props.ramsSchedule.map((schedule) => {
        return(
          <li className='team-list-item'key={schedule.id}>
            <div className='team-list-item-teamname'><img src={`${schedule.teamlogo}`}/>@{schedule.team}</div>
            <div>OPPONENT: <img src={`${schedule.opponentlogo}`}></img> @ {schedule.opponent}</div>
            <div>WEEK: {schedule.week}</div>
            <div>DATE: {schedule.date}</div>
            <div>W/L: {schedule.result} Score:{schedule.winloss}</div>
            <div>HIGH PASS: {schedule.players} {schedule.stats.pass} yards</div>
            <div>HIGH REC: {schedule.players} {schedule.stats.rec} yards</div>
            <div>HIGH RUSH: {schedule.players} {schedule.stats.rush} yards</div>
          </li>
        )
      })}
    </ul>
  </div>
)
export default Schedule;