let getApis = async () => {
  const res = await fetch("https://api.publicapis.org/entries");
  const apis = await res.json();
  console.log(apis.entries);
  return apis.entries;
};

let getApiHtml = (api) => {
  return `
    <div class='my-api'>
    <div class='my-api-title'>Name: <a class='api-link' href=${
      api.Link
    } target='_blank' >${api.API} (${api.Category})</a> </div>
    <div class='my-api-description'>Description: ${api.Description}</div>
    <div class='my-api-auth'>Authentication: ${
      api.Auth != "" ? api.Auth : "none"
    }</div>
    <div class='my-api-https'>${
      api.HTTPS ? "Supports Https" : "No Https support"
    }</div>
    </div>
    `;
};

let displayApi = (apis) => {
  document.body.innerHTML += `<div class='my-api-list'>${apis
    .map((api) => getApiHtml(api))
    .join("")}</div>`;
};

getApis()
  .then(displayApi)
  .catch((e) => console.log(e));
