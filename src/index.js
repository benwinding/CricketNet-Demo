import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import logo from './logo-quins-nets.png';
import * as THREE from 'three';
import App from "./App";
import ControlsFactory from "./Rendering/ControlsFactory";
import Dimensions from 'react-dimensions'
import {Col, Grid, Row} from "react-bootstrap";

class TestPreviewer extends React.Component {

  state = {};

  GetCamera() {
    const aspectratio = this.props.viewWidth / this.props.viewHeight;
    let cameraProps = {
      ref:"refCam",
      name:"maincamera",
      fov: 70, aspect: aspectratio,
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
      <Grid>
        <Row>
          <Col xs={3}>
            <div className="App-logo">
              <img src={logo} alt="logo" />
            </div>
          </Col>
          <Col xs={9}>
            <div className="App-title">
              <h2>Quin's Sports Nets</h2>
              <h4>Cricket Lane System</h4>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    <div className="Render-View">
      <Sup />
    </div>
  </div>
  , document.getElementById('root'));

registerServiceWorker();