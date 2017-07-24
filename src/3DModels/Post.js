import React from 'react';
import * as THREE from 'three';

export default class Post extends React.Component {
  render() {
    return <mesh
      position = {new THREE.Vector3(this.props.x,this.props.height/2,this.props.y)}
    >
      <boxGeometry
        width={0.2}
        depth={0.2}
        height={this.props.height}
      />
      <meshBasicMaterial
        color = "black"
        side = {THREE.DoubleSide}
      />
    </mesh>
  }
}
