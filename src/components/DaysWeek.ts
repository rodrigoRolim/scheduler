import './DaysWeek.css'
import Cell from './Cell'
import VNodeBuilder, { VNode } from '../vdom'

interface Props { children: (string | VNode)[]; class: string[] }

export default function WeekDays(props: Props) {
  const weekDays = new VNodeBuilder('div')
  return weekDays
    .setProps(
      {
        class: 'scheduler__days-week'
      }
    )
    .setChildren(getDays())
}

function getDays() {
  const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
  return days.map(day => Cell({ children: [day], class: [] }).build())
}
