import React from 'react';
import * as THREE from 'three';

export default class NetWall extends React.Component {
  GetTexture(){
    const texture = new THREE.TextureLoader().load("textures/net-pattern.png");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 4, 4 );
    texture.anisotropy = 5;
    return texture;
  }

  render() {
    let radsToRotate = THREE.Math.degToRad(this.props.rotate);
    return <mesh
      rotation = {new THREE.Euler(0,radsToRotate,0)}
      position = {new THREE.Euler(this.props.x,this.props.height/2,this.props.y+this.props.length/2)}
    >
      <planeGeometry
        width={this.props.length}
        height={this.props.height}
      />
      <meshBasicMaterial
        map = {this.GetTexture()}
        side = {THREE.DoubleSide}
        transparent = {true}
        opacity = {0.5}
      />
    </mesh>
  }
}
