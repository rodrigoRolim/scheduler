import './TimeZone.css'
import VNode from '../vdom'
import Cell from './Cell'

const TimeZone = new VNode(
  'div',
  {
    class: 'scheduler__time-zone'
  },
  [insertTimeZoneCell()],
  () => { console.log("Oi Time Zone") }
)

function insertTimeZoneCell() {
  return Cell({ children: ['GMT-03'], class: []})
}

export default TimeZone
