import { BoxGeometry, MeshBasicMaterial, Mesh, MeshPhongMaterial } from 'three';

const geometry = new BoxGeometry(3, 3, 1);
const material = new MeshPhongMaterial({ color: 0x2e3030 });
const cube = new Mesh(geometry, material);

// cube config
cube.position.set(3, 0, 0);

export {
  cube
}