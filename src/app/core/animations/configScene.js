import { Color } from "three";
import { loader } from "../resources/geometries/obj_files/desk";
import { plane } from "../resources/geometries/plane";
import { light } from "../resources/light";
import { blueLigth, greenLigth, redLigth } from "../resources/light/point_ligth";
import '../../../assets/desk.obj';

window.addEventListener('load', () => {
  const colorPickers = document.querySelectorAll('input[type=color]')
  const configSceneObject = {
    background: setBackground,
    floor: setFloorColor,
    light: setLightColor,
  }
  for (const colorPicker of colorPickers) {
    colorPicker.addEventListener('input', ({ target }) => {
      const { id, value } = target;
      configSceneObject[id](value)
    })
  }
})

function setBackground(color) {
  const { scene } = window['threeJsCore'];
  scene.background = new Color(color);
}

function setFloorColor(color) {
  plane.material.color = new Color(color)
}

function setLightColor(color) {
  light.color = new Color(color)
}

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
  // scene.add(helper);
  load3dElement(scene);
}