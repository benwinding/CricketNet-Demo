import React, {Component} from 'react';
import './App.css';
import RenderView from "./Rendering/RenderView";

class App extends Component {
  render() {
    return (
      <RenderView
        width={this.props.width}
        height={this.props.height}
        updateCallBack={this.props.updateCallBack}
      >
        {this.props.cam}
      </RenderView>
    );
  }
}

export default App;


