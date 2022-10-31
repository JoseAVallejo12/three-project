/**
 * Render the html file, to the selected container.
 * @param {*} pagePath - html file name
 * @param {*} containerId - HTML element name
 */
function htmlRender(pagePath, containerId) {
  const template = document.createElement("template");
  var ajax = new XMLHttpRequest();

  ajax.open("GET", pagePath, false);
  ajax.send();

  template.innerHTML += ajax.responseText.replace(/<script.*?>.*?<\/script>/g, "");

  document.getElementById(containerId).append(template.content);
}

export { htmlRender };