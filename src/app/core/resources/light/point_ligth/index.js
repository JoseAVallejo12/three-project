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

function getLigth({ color, intensity, distance, decay }) {
  return new PointLight(color, intensity, distance, decay);
}

const redLigth = getLigth(ligth.red)
redLigth.position.set(0, 0, 0);

const blueLigth = getLigth(ligth.blue)
blueLigth.position.set(6, 6, 6);

const greenLigth = getLigth(ligth.green)
greenLigth.position.set(-6, -6, 2);

export { redLigth, blueLigth, greenLigth }


