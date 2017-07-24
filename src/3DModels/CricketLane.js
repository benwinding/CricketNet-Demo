import React from 'react';
import * as THREE from 'three';

class Stump extends React.Component {
  render() {
    return (
      <mesh
        rotation = {new THREE.Euler(0,THREE.Math.degToRad(90),0)}
        position = {new THREE.Vector3(this.props.x,this.props.height/2,this.props.y)}
      >
        <cylinderGeometry
          radiusTop={this.props.size}
          radiusBottom={this.props.size}
          height={this.props.height}
        />
        <meshBasicMaterial
          color = {0xff9e4c}
          side = {THREE.DoubleSide}
        />
      </mesh>
    )
  }
}

class Lane extends React.Component {
  render() {
    return (
      <mesh
        rotation = {new THREE.Euler(THREE.Math.degToRad(90),0,0)}
        position = {new THREE.Vector3(this.props.x+this.props.height/2,0.1,this.props.y)}
      >
        <planeGeometry
          width={this.props.height}
          height={this.props.width}
        />
        <meshBasicMaterial
          color = {0xffd7b5}
          side = {THREE.DoubleSide}
        />
      </mesh>
    )
  }
}

export default class CricketLane extends React.Component {
  render() {
    let stumpSpacing = 0.25;
    let stumpHeight = 1.5;

    let x = this.props.x;
    let y = this.props.y;

    return (
      <group
        position = {new THREE.Vector3(this.props.x,this.props.z,this.props.y)}
      >
        <Stump x={x+1} y={-stumpSpacing+y} height={stumpHeight} size={0.05}/>
        <Stump x={x+1} y={0+y} height={stumpHeight} size={0.05}/>
        <Stump x={x+1} y={stumpSpacing+y} height={stumpHeight} size={0.05}/>

        <Lane x={x} y={y} width={6} height={21} />
      </group>
    )
  }
}
