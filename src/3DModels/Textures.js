import * as React from "react";
import * as THREE from 'three';

export class Textures {
  static GetTexture(L,H,s,loc) {
    return(
      <texture
        url={loc}
        wrapS={THREE.RepeatWrapping}
        wrapT={THREE.RepeatWrapping}
        anisotropy={5}
        repeat={new THREE.Vector2(L*s,H*s)}
      />
    );
  }
}
