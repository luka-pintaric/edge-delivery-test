export default async function decorate(block) {
  const [wrapper] = block.children;

  const content = `
  <div>
    <h1>Header</h1>
  </div>
  `;

  wrapper.innerHTML = content;
}
