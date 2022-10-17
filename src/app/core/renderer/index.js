import { WebGLRenderer } from 'three';

const container = document.getElementById('app');
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

container.appendChild(renderer.domElement);

export {
  renderer
}