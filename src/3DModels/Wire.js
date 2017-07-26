import React from 'react';
import * as THREE from 'three';

export default class Wire extends React.Component {
  render() {
    let radsToRotate = THREE.Math.degToRad(this.props.rotate);
    return (
      <group
        rotation = {new THREE.Euler(THREE.Math.degToRad(90),0,radsToRotate)}
        position = {new THREE.Vector3(this.props.x,this.props.z,this.props.y)}
      >
        <WireBase
          height={this.props.length}
          size={this.props.size}
        />
      </group>
    )
  }
}

class WireBase extends React.Component {
  render() {
    return (
      <mesh
        position = {new THREE.Vector3(this.props.size/2,this.props.height/2,0)}
      >
        <cylinderGeometry
          radiusTop={this.props.size}
          radiusBottom={this.props.size}
          height={this.props.height}
          radialSegments={8}
        />
        <meshBasicMaterial
          color = {0x000000}
        />
      </mesh>
    )
  }
}