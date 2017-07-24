import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as THREE from 'three';
import App from "./App";
import ControlsFactory from "./Rendering/ControlsFactory";
import Dimensions from 'react-dimensions'

class TestPreviewer extends React.Component {

  state = {};

  GetCamera() {
    const aspectratio = this.props.viewWidth / this.props.viewHeight;
    let cameraProps = {
      ref:"refCam",
      name:"maincamera",
      fov: 75, aspect: aspectratio,
      near: 0.1, far: 10000,
      position: new THREE.Vector3(200, 200, 200),
      lookAt: new THREE.Vector3(0, 0, 0)
    };
    return <perspectiveCamera {...cameraProps} />;
  }

  componentDidMount() { this.controls = ControlsFactory.GetControls(this.refs.refCam); }
  updateCallBack = () => { this.controls.update(); };

  render() {
    this.state.cam = this.GetCamera();

    return (
      <App
        height={this.props.viewHeight}
        width={this.props.viewWidth}
        cam={this.state.cam}
        updateCallBack={this.updateCallBack}
      />
    )
  }
}

class Supa extends React.Component {
  render(){
    const width = this.props.containerWidth;
    const height = this.props.containerHeight;

    return(
      <TestPreviewer
        viewHeight={500}
        viewWidth={width}
      />
    )
  }
}

var Sup = Dimensions()(Supa)

ReactDOM.render(<Sup />, document.getElementById('root'));

registerServiceWorker();