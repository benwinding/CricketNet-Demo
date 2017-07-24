import React from 'react';
import * as THREE from 'three';

export default class Post extends React.Component {
  render() {
    return <mesh
      position = {new THREE.Euler(this.props.x,this.props.height/2,this.props.y)}
    >
      <boxGeometry
        width={0.1}
        depth={0.1}
        height={this.props.height}
      />
      <meshBasicMaterial
        color = "black"
        side = {THREE.DoubleSide}
      />
    </mesh>
  }
}
