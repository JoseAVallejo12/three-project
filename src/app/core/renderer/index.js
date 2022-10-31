import { WebGLRenderer } from 'three';

function createRenderer(containerId) {
  const container = document.getElementById(containerId);
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth / 1.2, window.innerHeight);
  container.appendChild(renderer.domElement);
  return renderer;
}

export {
  createRenderer
}