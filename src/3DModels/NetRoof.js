import React from 'react';
import * as THREE from 'three';
import {Textures} from "./Textures";

export default class NetRoof extends React.Component {
  render() {
    let radsToRotate = THREE.Math.degToRad(this.props.rotate);
    return (
      <group
        rotation = {new THREE.Euler(THREE.Math.degToRad(90),0,radsToRotate)}
        position = {new THREE.Vector3(this.props.x,this.props.z,this.props.y)}
      >
        <RoofBase
          trans={this.props.trans}
          height={this.props.height}
          width={this.props.length}
        />
      </group>
    )
  }
}

class RoofBase extends React.Component {
  render() {
    return (
      <mesh
        position = {new THREE.Vector3(this.props.width/2,this.props.height/2,0)}
      >
        <planeGeometry
          height={this.props.height}
          width={this.props.width}
        />
        <meshBasicMaterial
          side = {THREE.DoubleSide}
          transparent = {true}
          opacity = {this.props.trans}
          depthWrite={false}
        >
          {Textures.GetTexture(this.props.width, this.props.height, 0.5, "textures/net-pattern.png")}
        </meshBasicMaterial>
      </mesh>
    )
  }
}
