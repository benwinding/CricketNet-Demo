import React from 'react';
import Post from "./Post";
import NetWall from "./NetWall";
import NetRoof from "./NetRoof";
import Wire from "./Wire";
import CricketLane from "./CricketLane";
import Beam from "./Beam";

export default class Main3DParts extends React.Component {
  render() {
    let wireSize = 0.03;
    return (
      <group>
        <Post x={0} y={-24} height={4}/>
        <Post x={8} y={-24} height={4}/>
        <Post x={16} y={-24} height={4}/>
        <Post x={24} y={-24} height={4}/>
        <Post x={0} y={24} height={4}/>
        <Post x={8} y={24} height={4}/>
        <Post x={16} y={24} height={4}/>
        <Post x={24} y={24} height={4}/>

        <NetWall x={0} y={24} height={4} length={24*2} rotate={90} trans={0.4}/>

        <NetWall x={0} y={24} height={4} length={24} rotate={0} trans={0.4}/>
        <NetWall x={0} y={-24} height={4} length={24} rotate={0} trans={0.4}/>

        <NetRoof x={0} y={24} z={4} height={24} length={48} rotate={-90} trans={0.3}/>

        <Wire x={0} y={-24} z={4} length={48} size={wireSize} rotate={0}/>
        <Wire x={4} y={-24} z={4} length={48} size={wireSize} rotate={0}/>
        <Wire x={8} y={-24} z={4} length={48} size={wireSize} rotate={0}/>
        <Wire x={12} y={-24} z={4} length={48} size={wireSize} rotate={0}/>
        <Wire x={16} y={-24} z={4} length={48} size={wireSize} rotate={0}/>
        <Wire x={20} y={-24} z={4} length={48} size={wireSize} rotate={0}/>
        <Wire x={24} y={-24} z={4} length={48} size={wireSize} rotate={0}/>

        <Beam x={0} y={-24} z={4-0.1} length={24}/>
        <Beam x={0} y={24} z={4-0.1} length={24}/>

        <CricketLane x={2} y={9}/>
        <CricketLane x={2} y={3}/>
        <CricketLane x={2} y={-3}/>
        <CricketLane x={2} y={-9}/>
      </group>
    )
  }
}

