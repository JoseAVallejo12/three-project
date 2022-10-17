import { PlaneGeometry, MeshBasicMaterial, Mesh, DoubleSide } from 'three';


const angleRotation = 90;
const geometry = new PlaneGeometry(20, 20);
const material = new MeshBasicMaterial({ color: 0xffff00, side: DoubleSide });

// Create a plane
const plane = new Mesh(geometry, material);

// Plane config
plane.rotateX(angleRotation)
// plane.position.y = -3;

export {
  plane
}