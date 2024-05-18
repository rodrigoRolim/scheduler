import './EventCell.css'
import Cell from './Cell'
import EventScheduled from './EventScheduled'
import VNodeBuilder, { VNode } from '../vdom'

interface Props { children: (string | VNode)[]; class: string[] }

export default function EventCells (props: Props) {
  const EventCells = new VNodeBuilder('div')
  return EventCells
    .setProps({
      class: "scheduler__cell-event"
    })
    .setChildren(emptyCells())
}

function emptyCells() {
  const otherCells: string[] = Array(7*23).fill('')
  return otherCells.map(emptyCell => Cell({ children: [emptyCell], class: [] }).build())
}

