import './app.css'
import Elements from './src'
import VNode from './src/vdom';

// Render the virtual DOM
function render(container: HTMLElement, vnodes: VNode[]) {
  container.innerHTML = '';
  vnodes.forEach(vnode => {
    container.appendChild(vnode.render());
    vnode.runAllScripts()
  })
}

// Render the virtual DOM in the app container
const appContainer = document.getElementById('app');
if (appContainer) {
  render(appContainer, Elements);
} else {
  console.error("App container not found");
}