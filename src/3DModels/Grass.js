import React from 'react';
import * as THREE from 'three';

class Grass extends React.Component {
  GetTexture(L,H){
    const texture = new THREE.TextureLoader().load("textures/grass.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( L,H );
    texture.anisotropy = 5;
    return texture;
  }

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
        map = {this.GetTexture(this.props.length, this.props.width)}
        side = {THREE.DoubleSide}
      />
    </mesh>
  }
}

export default Grass;