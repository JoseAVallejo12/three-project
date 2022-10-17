// import { scene, camera, renderer } from '../resources';
import { DragControls } from 'Utilities/dragControls';
import { camera, cameraPositionControl } from '../camera';
import { renderer } from '../renderer';
import { cube } from '../resources/geometries/cube';
import { light } from '../resources/light';
import { scene } from '../scene';
import { loader } from '../resources/geometries/obj_files/desk';
import '../../../assets/desk.obj';

loader.load('src/assets/desk.obj', function (object) {
  console.log('JVC', object);
  object.rotateX(0.46);
  object.position.set(2, 0, 0);
  light.target = object;
  scene.add(object);
});

export function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  // cube animations
  cube.rotateX(0.01);
  // cube.rotateY(0.01);
  // cube.rotateZ(0.01);

  // camera animations
  // console.log(camera.position);
  cameraPositionControl.update();

}