import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import logo from './logo-quins-nets.png';
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
      fov: 90, aspect: aspectratio,
      near: 0.01, far: 500,
      position: new THREE.Vector3(50, 15, 0),
      lookAt: new THREE.Vector3(0, 0, 0)
    };
    return <perspectiveCamera {...cameraProps} />;
  }

  componentDidMount() { this.state.controls = ControlsFactory.GetControls(this.refs.refCam); }
  updateCallBack = () => { this.state.controls.update(); };

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
        viewHeight={height}
        viewWidth={width}
      />
    )
  }
}

var Sup = Dimensions()(Supa)

ReactDOM.render(
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Quin's Sports Nets</h3>
    </div>
    <div className="Render-View">
      <Sup />
    </div>
  </div>
  , document.getElementById('root'));

registerServiceWorker();