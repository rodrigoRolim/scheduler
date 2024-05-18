import './Scheduler.css'
import VNode from '../vdom'
import EventCells from './EventCell';
import HoursCells from './HoursCells';
import TimeZone from './TimeZone';
import DaysWeek from './DaysWeek';
import EventScheduled from './EventScheduled';

const scheduler = new VNode(
  'div',
  {
    class: 'scheduler',
    id: 'scheduler'
  },
  [TimeZone, DaysWeek, HoursCells, EventCells],
  null
)



export default scheduler;
