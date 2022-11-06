import { DirectionalLight } from 'three';

// create light
const lightIntensity = 100;
const lightColor = 0xffffff;
const light = new DirectionalLight(lightColor, lightIntensity);


export {
  light
}