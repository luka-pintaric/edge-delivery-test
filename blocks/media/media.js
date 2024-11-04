import { StringUtils } from "../../utils/stringUtils";

export default function decorate(block) {
  const data = fetchData(block);
  let wrapper = document.createElement("div");

  if(StringUtils.isNotEmpty(data.title)) {
    let titleEl = document.createElement("h2");
    titleEl.innerHTML = data.title;
    wrapper.appendChild(titleEl);
  }

  if(StringUtils.isNotEmpty(data.reference)){
    let referenceEl = document.createElement("img");
    referenceEl.src = data.reference;
    wrapper.appendChild(referenceEl);
  }

  block.replaceChildren(wrapper);
}

const fetchData = (block) => {
  const [titleContainer, referenceContainer] = block.children;
  
  const title = titleContainer?.querySelector('p')?.textContent?.trim();
  const reference = referenceContainer?.querySelector('a')?.getAttribute('href') ?? referenceContainer?.querySelector('p')?.textContent?.trim();

  const data = {
    title: title,
    reference: reference
  };

  return data;
}