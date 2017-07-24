import React from 'react';
import * as THREE from 'three';

export default class NetRoof extends React.Component {
  GetTexture(){
    const texture = new THREE.TextureLoader().load("textures/net-pattern.png");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 10, 1 );
    texture.anisotropy = 5;
    return texture;
  }

  render() {
    let geom2 = new THREE.PlaneGeometry(this.props.length, this.props.width, 1);
    geom2.translate(this.props.length/2,this.props.width/2,0);
    let geom = <planeGeometry
        vertices={geom2.vertices}
        faces={geom2.faces}
      />;

    let radsToRotate = THREE.Math.degToRad(this.props.rotate);
    return (
      <mesh
        rotation = {new THREE.Euler(THREE.Math.degToRad(90),0,radsToRotate)}
        position = {new THREE.Euler(this.props.x,this.props.height,this.props.y)}
      >
        {geom}
        <meshBasicMaterial
          map = {this.GetTexture()}
          // color = {"black"}
          side = {THREE.DoubleSide}
          transparent = {true}
          opacity = {0.5}
        />
      </mesh>
    )
  }
}
