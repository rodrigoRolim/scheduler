import './HoursCell.css'
import VNode from "../vdom"
import Cell from "./Cell"

const HoursCells = new VNode(
  'div',
  {
    class: 'scheduler__hours-cell'
  },
  insertHours(),
  () => { console.log("Oi HoursCells") }
)

function insertHours() {
  const hours: string[] = Array(23).fill(0).map((_, i) => i < 12 ? (++i) + 'am': (++i - 12) + 'pm')
  return hours.map(hour => Cell({ children: [hour], class: [] }))
}

export default  HoursCells
