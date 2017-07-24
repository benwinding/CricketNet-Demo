import React from 'react';
import * as THREE from 'three';

export default class Wire extends React.Component {
  render() {
    let geom2 = new THREE.CylinderGeometry(this.props.size,this.props.size,this.props.length, 8);
    geom2.translate(0,this.props.length/2,0);
    let geom = <cylinderGeometry
      vertices={geom2.vertices}
      faces={geom2.faces}
    />;

    let radsToRotate = THREE.Math.degToRad(this.props.rotate);
    return (
      <mesh
        rotation = {new THREE.Euler(THREE.Math.degToRad(90),0,radsToRotate)}
        position = {new THREE.Vector3(this.props.x,this.props.z,this.props.y)}
      >
        {geom}
        <meshBasicMaterial
          color = {0x333333}
          side = {THREE.DoubleSide}
        />
      </mesh>
    )
  }
}
