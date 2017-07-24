import React from 'react';
import * as THREE from 'three';
import {Textures} from "./Textures";

class Grass extends React.Component {
  render() {
    return <mesh
      rotation = {new THREE.Euler(-Math.PI / 2,0,0)}
      position = {new THREE.Vector3(this.props.x,0,this.props.y)}
    >
      <planeGeometry
        width={this.props.width}
        height={this.props.length}
      />
      <meshBasicMaterial
        map = {Textures.GetTexture(this.props.length, this.props.width,0.1,"textures/grass.jpg")}
        side = {THREE.DoubleSide}
      />
    </mesh>
  }
}

export default Grass;