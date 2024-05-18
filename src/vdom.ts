export interface VNode {
  name: string;
  props: { [key: string]: string };
  children: (VNode | string)[];
  events: { [key: string]: Function };
  render(): Element;
}

class VNodeBuilder {
  private name: string;
  private props: { [key: string]: string } = {};
  private children: (VNode | string)[] = [];
  private events: { [key: string]: Function } = {};

  constructor(name: string) {
    this.name = name
  }

  // Set properties to the Vnode
  setProps(props: { [key: string]: string }) {
    this.props = props
    return this
  }

  // Set childrens to the VNode
  setChildren(children: (VNode | string)[]) {
    this.children = children
    return this
  }

  // Set events to the VNode
  setEvent(events: { [key: string]: Function }) {
    this.events = events
    return this
  }

  // Build the VNode
  build(): VNode {
    return {
      name: this.name, 
      props: this.props, 
      children: this.children, 
      events: this.events,
      render() {
        const element = document.createElement(this.name)

        for (const [prop, value] of Object.entries(this.props)) {
          element.setAttribute(prop, value)
        }

        for (const [eventName, implementations] of Object.entries(this.events)) {
          element.addEventListener<keyof HTMLElementEventMap>(eventName as keyof HTMLElementEventMap, implementations as (this: HTMLElement, ev: any) => any)
        }

        for (const child of this.children) {
          if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child))
          } else {
            element.appendChild(child.render())
          }
        }

        return element
      }
    }
    
  }
}
export default VNodeBuilder;
