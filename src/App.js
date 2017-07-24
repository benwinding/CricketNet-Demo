import React, {Component} from 'react';
import './App.css';
import RenderView from "./Rendering/RenderView";
import Main3DParts from "./3DModels/_Main";

class App extends Component {
  render() {
    return (
      <RenderView
        width={this.props.width}
        height={this.props.height}
        updateCallBack={this.props.updateCallBack}
      >
        {this.props.cam}
        <Main3DParts />
      </RenderView>
    );
  }
}

export default App;


