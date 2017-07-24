import * as THREE from 'three';

export class Textures {
  static GetTexture(L,H,s,loc) {
    const texture = new THREE.TextureLoader().load(loc);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( L*s,H*s );
    texture.anisotropy = 5;
    return texture;
  }
}