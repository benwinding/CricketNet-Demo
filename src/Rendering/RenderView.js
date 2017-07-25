import React from 'react';
import React3 from 'react-three-renderer';
import Main3DParts from "../3DModels/_Main";
import NetWall from "../3DModels/NetWall";
import * as THREE from "three";

export default class RenderView extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.InitWalls();

    this.clock = new THREE.Clock();
    this.mult = 1;

    this.onAnimate = () => {
      let delta = this.clock.getDelta()*3;
      if((this.state.w1 + delta*3) > 36)
        this.mult = -1;
      else if((this.state.w1 - delta*3) < 0)
        this.mult = 1;
      this.setState({
        w1: (this.state.w1 + this.mult*delta*3) % 36,
        w2: (this.state.w2 + this.mult*delta*2) % 24,
        w3: (this.state.w3 + this.mult*delta) % 12,
      });

      // we will get this callback every frame
      if(this.props.updateCallBack !== null)
        this.props.updateCallBack();
    };

  }

  InitWalls() {
    this.state = {
      w1: 0,
      w2: 0,
      w3: 0,
    }
  }

  render() {
    return (<React3
      mainCamera="maincamera"
      width={this.props.width}
      height={this.props.height}
      clearAlpha={0}
      alpha={true}
      onAnimate={this.onAnimate}
    >
      <scene>
        {this.props.children}
        <group
          position={new THREE.Vector3(-10,0,0)}
        >
          {/*Center walls*/}
          <NetWall x={0} y={this.state.w1-12} height={4} length={24} rotate={0}/>
          <NetWall x={0} y={this.state.w2} height={4} length={24} rotate={0}/>
          <NetWall x={0} y={this.state.w3+12} height={4} length={24} rotate={0}/>
          <Main3DParts/>
        </group>
      </scene>
    </React3>);
  }
}