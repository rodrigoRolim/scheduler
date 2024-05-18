import './EventScheduled.css'
import VNode from "../vdom";
import VNodeBuilder from '../vdom';

interface Props { children: (string | VNode)[]; class: string[] }

export default function EventScheduled(props: Props) {
  const EventScheduled = new VNodeBuilder('div')
  return EventScheduled
    .setProps(
      {
        class: 'scheduler__event',
      }
    )
}

async function pushEvents() {
  for await (const event of generateEvents([{ day: 2, start: 1.5, end: 3.8 }, { day: 3, start: 1.5, end: 3.8 }, { day: 4, start: 1.5, end: 3.8 }])) {
    return event
  }
  return null
}
async function* generateEvents(props: { day: number, start: number, end: number }[]): AsyncGenerator<HTMLElement | null, void, undefined> {
  const scheduler = document.querySelector("#scheduler")

  for (const prop of props) {
    yield createEvent({ day: prop.day, start: prop.start, end: prop.end, node: scheduler })
  }
}

function createEvent({ day, start, end, node }: { day: number, start: number, end: number, node: Element | null }) {
  const [top, left, width, height] = calculeDimensionsEvent({
    day,
    start,
    end,
    node
  })
  
  const eventNode = EventScheduled({
    children: [],
    class: []
  })

  return setupDimensionsEvent({ top, left, width, height, node: eventNode.build() })
}
function getWidthCell(element: Element | null) {
  const cellsFrameWidth = element?.getBoundingClientRect().width ?? 0
  const dayWidth = (cellsFrameWidth / 7) - 8
  return dayWidth
}

function getLengthPerSecs(element: Element | null) {
  const allEventsLength = element?.getBoundingClientRect().height ?? 0
  return (allEventsLength / (23*3600))
}

function calculeDimensionsEvent({ day, start, end, node }: { day: number, start: number, end: number, node: Element | null }) {
  const width = getWidthCell(node)
  const lengthPerSecs = getLengthPerSecs(node)
  const top = (start*lengthPerSecs*3600) - Math.ceil(start) - 1
  const left = day*width  + 2
  const height = (end - start)*3600*lengthPerSecs

  return [top, left, width, height]
}

function setupDimensionsEvent({ top, left, width, height, node }: { top: number, left: number, width: number, height: number, node: HTMLElement | null }) {

  if (node) {
    node.style.left =  left + 'px'
    node.style.top = top + 'px'
    node.style.width = width + 'px'
    node.style.height = height + 'px'
  }

  return node
}