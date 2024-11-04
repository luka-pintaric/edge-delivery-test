import { addChildElement } from "../../utils/htmlUtils";

export default function decorate(block: HTMLElement) {
  const data = fetchData(block);

  let wrapper = document.createElement("div");

  let titleEl = addChildElement(wrapper, "h1");
  titleEl.innerHTML = "Custom";

  block.replaceChildren(wrapper);
}

const fetchData = (block: HTMLElement) => {
  const [titleContainer, referenceContainer] = block.children;
  
  const title = titleContainer?.querySelector('p')?.textContent?.trim();
  const reference = referenceContainer?.querySelector('a')?.getAttribute('href') ?? referenceContainer?.querySelector('p')?.textContent?.trim();

  const data = {
    title: title,
    reference: reference
  };

  return data;
}