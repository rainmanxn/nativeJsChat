// ToDo сделать возможность принимать массив элементов

import Block from '../lib/block';
function render(query: string, block: Block): HTMLElement | null {
  const root: HTMLElement | null = document.querySelector(query);
  root?.appendChild(block.getContent());
  return root || null;
}

export default render;
