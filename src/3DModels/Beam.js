import React from 'react';
import * as THREE from 'three';

export default class Beam extends React.Component {
  render() {
    return (
      <mesh
        rotation = {new THREE.Euler(0,0,THREE.Math.degToRad(90))}
        position = {new THREE.Vector3(this.props.x+this.props.length/2,this.props.z,this.props.y)}
      >
        <boxGeometry
          width={0.2}
          depth={0.1}
          height={this.props.length}
        />
        <meshBasicMaterial
          color = "black"
          side = {THREE.DoubleSide}
        />
      </mesh>
    )
  }
}
