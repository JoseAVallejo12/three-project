import './style.css'
import 'flowbite';
// import 'tw-elements';
import WebGL from './src/utilities/webGl';
import { animate, initializeCoreElements } from './src/app/core/animations';
import { htmlRender } from './src/utilities/htmlRender';

// Global ThreeJs core elements
window['threeJsCore'] = {
  renderer: null,
  scene: null,
  camera: null,
  cameraControl: null,
}

if (WebGL.isWebGLAvailable()) {
  console.log('WebGL is available');
  initializeHtmlPages();
  initializeCoreElements();
  animate();

} else {
  console.warn('WebGL is not available');
  window['threeJsCore'] = null;
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('#app').appendChild(warning);
}

function initializeHtmlPages() {
  htmlRender("./src/app/pages/home.html", "app");
  htmlRender("./src/app/pages/three-render-container.html", "app");
}