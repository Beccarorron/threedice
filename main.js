import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const params = {
	segments: 50,
	edgeRadius: 0.07,
};
let boxGeometry = new THREE.BoxGeometry(
	1,
	1,
	1,
	params.segments,
	params.segments,
	params.segments
);

const cube = new THREE.Mesh(boxGeometry, material);

scene.add(cube);
camera.position.z = 5;
