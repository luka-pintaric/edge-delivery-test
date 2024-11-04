export default function decorate(block) {
  const data = fetchData(block);

  let content = `
  <div>
    <p>${data.title}</p>
  </div>
  `

  block.innerHTML = content;
}

const fetchData = (block) => {
  const [titleContainer, referenceContainer] = block.children;
  
  const title = titleContainer?.querySelector('p')?.textContent.trim();
  const reference = referenceContainer?.querySelector('a')?.getAttribute('href') ?? referenceContainer?.querySelector('p')?.textContent.trim();

  const data = {
    title: title,
    reference: reference
  };

  return data;
}

<div>
<p>Some dummy content</p>
</div>