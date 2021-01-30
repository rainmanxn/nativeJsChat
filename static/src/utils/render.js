function render(query, block) {
    const root = document.querySelector(query);
    root && root.appendChild(block.getContent());
    return root || null;
}
export default render;
