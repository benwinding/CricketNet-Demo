import React from 'react';
import * as THREE from 'three';
import {Textures} from "./Textures";

export default class NetRoof extends React.Component {
  render() {
    let geom2 = new THREE.PlaneGeometry(this.props.length, this.props.height, 1);
    geom2.translate(this.props.length/2,this.props.height/2,0);
    let geom = <planeGeometry
        height={this.props.length}
        width={this.props.height}
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
          //color = {"black"}
          side = {THREE.DoubleSide}
          transparent = {true}
          opacity = {0.5}
        >
          {Textures.GetTexture(this.props.length, this.props.height, 1, "textures/net-pattern.png")}
        </meshBasicMaterial>
      </mesh>
    )
  }
}
