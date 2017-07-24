import React from 'react';
import * as THREE from 'three';

export default class Posts extends React.Component {
  render() {
    return <mesh
      rotation = {new THREE.Euler(-Math.PI / 2,0,0)}
      position = {new THREE.Euler(0,1,0)}
    >
      <boxGeometry
        width={0.1}
        depth={2}
        height={0.1}
      />
      <meshBasicMaterial
        color = "black"
        side = {THREE.DoubleSide}
      />
    </mesh>
  }
}
