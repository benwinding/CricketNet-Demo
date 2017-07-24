import React, {Component} from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import Dimensions from 'react-dimensions'
import Grass from "./3DGrass";
import Posts from "./3DPosts";

class RenderView extends Component {

  render() {
    const width = this.props.containerWidth;
    const height = this.props.containerHeight;

    return (<React3
      mainCamera="camera"
      width={width}
      height={height}
    >
      <scene>
        <perspectiveCamera
          ref="refCam"
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={new THREE.Vector3(1,2,2)}
          lookAt={new THREE.Vector3(0,0,0)}
        />
        <Grass />
        <Posts />
      </scene>
    </React3>);
  }
}

export default Dimensions()(RenderView)
