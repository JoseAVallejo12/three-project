import './style.css'
import javascriptLogo from './javascript.svg'
import WebGL from './src/utilities/webGl';
import { animate } from './src/app/core/animations';


if (WebGL.isWebGLAvailable()) {
  console.log('WebGL is available');
  animate();

} else {
  console.log('WebGL is not available');
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('#app').appendChild(warning);
}
