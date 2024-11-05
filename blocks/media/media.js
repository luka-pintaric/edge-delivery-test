export default async function decorate(block) {
  const data = fetchData(block);
  let wrapper = document.createElement("div");

  if(isStringNotEmpty(data.title)) {
    let titleEl = document.createElement("h2");
    titleEl.innerHTML = data.title;
    wrapper.appendChild(titleEl);
  }

  if(isStringNotEmpty(data.reference)){
    const assetInfoJson = await fetchAssetInfo(data.reference);
    if(assetInfoJson.valid) {
      if(assetInfoJson.type === "image") {
        let imageEl = document.createElement("img");
        imageEl.src = data.reference;
        wrapper.appendChild(imageEl);
      } else {
        let videoEl = document.createElement("video");
        videoEl.width = "320";
        videoEl.height = "240";
        videoEl.controls = true;
        let videoSourceEl = document.createElement("source");
        videoSourceEl.src = data.reference;
        videoEl.appendChild(videoSourceEl);
        wrapper.appendChild(videoEl);
      }
      
    }
  }

  block.replaceChildren(wrapper);
}

const fetchData = (block) => {
  const [titleContainer, referenceContainer] = block.children;
  
  const title = titleContainer?.querySelector('p')?.textContent?.trim();
  const reference = referenceContainer?.querySelector('img')?.getAttribute('src') ?? referenceContainer?.querySelector('p')?.textContent?.trim();

  const data = {
    title: title,
    reference: reference
  };

  return data;
}

const fetchAssetInfo = async (assetPath) => {
  const url = `https://localhost:8443/bin/edgeDelivery/assetChecker?assetPath=${assetPath}`;
  const jsonResponse = await fetch(url).then((response) => response.json());
  return jsonResponse;
}

function isStringNotEmpty(string) {
  return string != null && string != "";
}
