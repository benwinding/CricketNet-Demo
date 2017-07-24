import React from 'react';
import * as THREE from 'three';

export default class NetWall extends React.Component {
  GetTexture(L,W){
    const texture = new THREE.TextureLoader().load("textures/net-pattern.png");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( L, W );
    texture.anisotropy = 5;
    return texture;
  }

  render() {
    let geom2 = new THREE.PlaneGeometry(this.props.length, this.props.height, 1);
    geom2.translate(this.props.length/2,this.props.height/2,0);
    let geom = <planeGeometry
        height={this.props.height}
        width={this.props.length}
        vertices={geom2.vertices}
        faces={geom2.faces}
      />;

    let radsToRotate = THREE.Math.degToRad(this.props.rotate);
    return (
      <mesh
        rotation = {new THREE.Euler(0,radsToRotate,0)}
        position = {new THREE.Vector3(this.props.x,0,this.props.y)}
      >
        {geom}
        <meshBasicMaterial
          map = {this.GetTexture()}
          side = {THREE.DoubleSide}
          transparent = {true}
          opacity = {0.5}
        />
      </mesh>
    )
  }
}
