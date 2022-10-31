import { PointLight } from 'three';

const ligth = {
  blue: {
    color: 0x0000ff,
    intensity: 1,
    distance: 0,
    decay: 1,
  },
  red: {
    color: 0xff0000,
    intensity: 1,
    distance: 0,
    decay: 1,
  },
  green: {
    color: 0x00ff00,
    intensity: 1,
    distance: 0,
    decay: 1,
  }
}

function createLigth(light) {
  return new PointLight(light.color, light.intensity, light.distance, light.decay);
}

const redLigth = createLigth(ligth.red)
redLigth.position.set(0, 0, 0);

const blueLigth = createLigth(ligth.blue)
blueLigth.position.set(6, 6, 6);

const greenLigth = createLigth(ligth.green)
greenLigth.position.set(-6, -6, 2);

export { redLigth, blueLigth, greenLigth }


