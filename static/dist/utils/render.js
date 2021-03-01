function render(query, block) {
    const root = document.querySelector(query);
    root === null || root === void 0 ? void 0 : root.appendChild(block.getContent());
    return root || null;
}
export default render;
