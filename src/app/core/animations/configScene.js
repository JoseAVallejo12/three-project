import { loader } from "../resources/geometries/obj_files/desk";
import { plane } from "../resources/geometries/plane";
import { light } from "../resources/light";
import { blueLigth, greenLigth, redLigth } from "../resources/light/point_ligth";
import '../../../assets/desk.obj';


function load3dElement(scene) {
  loader.load('src/assets/desk.obj', function (object) {
    console.log('JVC', object);
    object.rotateX(0.46);
    object.position.set(2, 0, 0);
    light.target = object;
    scene.add(object);
  });
}

function safeLight() {
  window['threeJsCore'].lights = [
    { color: 'blue', blueLigth },
    { color: 'green', greenLigth },
    { color: 'red', redLigth }
  ];
}

export function configScene(scene) {
  safeLight();
  scene.add(plane);
  scene.add(light);
  scene.add(greenLigth);
  scene.add(redLigth);
  scene.add(blueLigth);
  load3dElement(scene);
}