import { Scene, Color } from 'three';
import { cube } from '../resources/geometries/cube';
import { plane } from '../resources/geometries/plane';
import { light } from '../resources/light';
import { blueLigth, greenLigth, redLigth } from '../resources/light/point_ligth';

// create scene
const scene = new Scene();

// config scene
scene.background = new Color(0xe1edea);

// add elements to scene
// scene.add(cube);
// scene.add(light);
scene.add(plane);
scene.add(greenLigth);
scene.add(redLigth);
scene.add(blueLigth);

export {
  scene
}