import * as THREE from 'three';

const OrbitControls = require('three-orbit-controls')(THREE);

export default class ControlsFactory {
  static GetControls(refCamera){
    let refRenderElement = document.getElementsByTagName("canvas")[0];
    const controls = new OrbitControls(refCamera, refRenderElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.05;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.07;
    controls.zoomSpeed = 0.5;
    controls.minDistance = 30;
    controls.maxDistance = 80;
    controls.maxPolarAngle = THREE.Math.degToRad(88);
    return controls;
  }
}