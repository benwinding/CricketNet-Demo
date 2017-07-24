import React from 'react';
import React3 from 'react-three-renderer';

export default class RenderView extends React.Component {
  onAnimate = () => {
    // we will get this callback every frame
    if(this.props.updateCallBack !== null)
      this.props.updateCallBack();
  };

  render() {
    return (<React3
      id="hello"
      mainCamera="maincamera"
      width={this.props.width}
      height={this.props.height}
      clearColor={0xf5f9ff}
      onAnimate={this.onAnimate}
    >
      <scene>
        {this.props.children}
      </scene>
    </React3>);
  }
}