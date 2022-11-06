import { createCamara } from '../camera';
import { createScene } from '../scene';
import { createRenderer } from '../renderer';

import { configCamera } from './configCamera';
import { configScene } from './configScene';
import getFieldsetElements from './configLight'

import { OrbitControls } from '../../../utilities/orbitControls';

export function initializeCoreElements() {
  const { renderer, scene, camera, cameraControl } = window['threeJsCore'];
  threeJsCore.renderer = createRenderer('container');

  threeJsCore.scene = createScene();
  configScene(threeJsCore.scene);

  threeJsCore.camera = createCamara();
  threeJsCore.cameraControl = new OrbitControls(threeJsCore.camera, threeJsCore.renderer.domElement);
  configCamera(threeJsCore.camera, threeJsCore.cameraControl);

  getFieldsetElements();

}


export function animate() {
  const { renderer, scene, camera, cameraControl } = window['threeJsCore'];
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  // camera animations
  cameraControl.update();

}
