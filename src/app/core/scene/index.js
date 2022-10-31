import { Scene, Color } from 'three';
import { cube } from '../resources/geometries/cube';
import { plane } from '../resources/geometries/plane';
import { light } from '../resources/light';
import { blueLigth, greenLigth, redLigth } from '../resources/light/point_ligth';

function createScene(background = 0xe1edea) {
  const scene = new Scene();

  scene.background = new Color(background);
  return scene;
}

export {
  createScene
}