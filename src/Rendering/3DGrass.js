import React from 'react';
import * as THREE from 'three';

class Grass extends React.Component {
  GetTexture(){
    const texture = new THREE.TextureLoader().load("textures/grass.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 4, 4 );
    texture.anisotropy = 5;
    return texture;
  }
  
  render() {
    return <mesh
      rotation = {new THREE.Euler(-Math.PI / 2,0,0)}
    >
      <planeGeometry
        width={100}
        height={100}
      />
      <meshBasicMaterial
        map = {this.GetTexture()}
        side = {THREE.DoubleSide}
      />
    </mesh>
  }
}

export default Grass;