import Block from "./block.js";

function render(query: string, block: Block): HTMLElement {
  const root: HTMLElement = document.querySelector(query);
  root.appendChild(block.getContent());
  return root;
}

export default render;
