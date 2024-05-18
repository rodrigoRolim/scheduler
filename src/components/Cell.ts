import './Cell.css'
import VNodeBuilder, { VNode } from "../vdom";
import './Cell.css';

interface Props { children: (string | VNode)[]; class: string[] }

export default function Cell(props: Props) {
  const cellComponent = new VNodeBuilder('div')
  return cellComponent
    .setProps(
      {
        class: 'scheduler__cell' + props.class.reduce((acc: string, cur: string) => acc + ' ' +  cur, ''),
        id: 'cell'  
      }
    )
    .setChildren(props.children)
}
