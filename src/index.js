import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as THREE from 'three';
import App from "./App";
import ControlsFactory from "./Rendering/ControlsFactory";

class TestPreviewer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cam: this.GetCamera()
    }
  }

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

ReactDOM.render(
  <TestPreviewer
    viewHeight={500}
    viewWidth={500}
  />, document.getElementById('root'));

registerServiceWorker();