import { addChildElement } from "../../utils/htmlUtils";

export default function decorate(block) {
  // const data = fetchData(block);

  let wrapper = document.createElement("div");

  let titleEl = createElement("h1");
  titleEl.innerHTML = "Custom";
  wrapper.appendChild(titleEl);

  block.replaceChildren(wrapper);
}

// const fetchData = (block: HTMLElement) => {
//   const [titleContainer, referenceContainer] = block.children;
  
//   const title = titleContainer?.querySelector('p')?.textContent?.trim();
//   const reference = referenceContainer?.querySelector('a')?.getAttribute('href') ?? referenceContainer?.querySelector('p')?.textContent?.trim();

//   const data = {
//     title: title,
//     reference: reference
//   };

//   return data;
// }