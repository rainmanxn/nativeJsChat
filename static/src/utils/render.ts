import Block from "./block.js";

function render(query: string, block: Block): HTMLElement | null {
  const root: HTMLElement | null = document.querySelector(query);
  root && root.appendChild(block.getContent());
  return root || null
}

export default render;
