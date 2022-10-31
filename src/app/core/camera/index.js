import { PerspectiveCamera } from 'three';

function createCamara() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const camera = new PerspectiveCamera(75, aspectRatio, 0.1, 1000);

  return camera;
}

export {
  createCamara
}