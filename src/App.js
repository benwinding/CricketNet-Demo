import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RenderView from "./Rendering/RenderView";
import {Parts3D} from "./3DModels/_Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Quin's Sports Nets</h2>
        </div>
        <div className="Render-View">
          <RenderView
            width={this.props.width}
            height={this.props.height}
            updateCallBack={this.props.updateCallBack}
          >
            {this.props.cam}
            <Parts3D />
          </RenderView>
          <pre>
            Click and drag to rotate the shed
          </pre>
        </div>
      </div>
    );
  }
}

export default App;


