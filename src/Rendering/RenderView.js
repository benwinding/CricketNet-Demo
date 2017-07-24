import React, {Component} from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import Dimensions from 'react-dimensions'

class RenderView extends Component {
  constructor(props, context) {
    super(props, context);
    this.cameraPosition = new THREE.Vector3(1, 1, 1);
  }

  render() {

    const width = this.props.containerWidth; // canvas width
    const height = this.props.containerHeight; // canvas height

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
          lookAt={new THREE.Vector3(0,0,0)}
        />
        <mesh
          rotation={new THREE.Vector3(0,0,0)}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

export default Dimensions()(RenderView)
