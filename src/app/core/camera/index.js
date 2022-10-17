import { PerspectiveCamera } from 'three';
import { OrbitControls } from '../../../utilities/orbitControls';
import { renderer } from '../renderer';

const aspectRatio = window.innerWidth / window.innerHeight;

// Create a camera
const camera = new PerspectiveCamera(75, aspectRatio, 0.1, 1000);

// Set the camera position
const cameraPositionControl = new OrbitControls(camera, renderer.domElement);

// Movements of the camera
camera.position.set(0.16, 14, -11);
cameraPositionControl.update();

export {
  camera, cameraPositionControl
}