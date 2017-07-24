import React from 'react';
import Grass from "./Grass";
import Post from "./Post";
import NetWall from "./NetWall";
import NetRoof from "./NetRoof";
import Wire from "./Wire";

export default class Main3DParts extends React.Component {
  render() {
    let wireSize = 0.03;
    return (
      <group>
        <Grass x={30} y={0} width={100} length={100} />
        {/*End posts*/}
        <Post x={0} y={-12} height={4}/>
        <Post x={0} y={0} height={4}/>
        <Post x={0} y={12} height={4}/>
        {/*Lonely post*/}
        <Post x={54} y={0} height={4}/>
        {/*Side posts*/}
        <Post x={0} y={-24} height={4}/>
        <Post x={8} y={-24} height={4}/>
        <Post x={16} y={-24} height={4}/>
        <Post x={24} y={-24} height={4}/>
        <Post x={0} y={24} height={4}/>
        <Post x={8} y={24} height={4}/>
        <Post x={16} y={24} height={4}/>
        <Post x={24} y={24} height={4}/>
        {/*Back wall*/}
        <NetWall x={0} y={24} height={4} length={24*2} rotate={90}/>
        {/*Side walls*/}
        <NetWall x={0} y={24} height={4} length={24} rotate={0}/>
        <NetWall x={0} y={-24} height={4} length={24} rotate={0}/>
        {/*Center walls*/}
        <NetWall x={0} y={-12} height={4} length={24} rotate={0}/>
        <NetWall x={0} y={0} height={4} length={24} rotate={0}/>
        <NetWall x={0} y={12} height={4} length={24} rotate={0}/>
        {/*Roof*/}
        <NetRoof x={0} y={24} z={4} length={48} height={24} rotate={-90} />
        {/*Long Wire*/}
        <Wire x={0} y={0} z={4} length={54} size={wireSize} rotate={-90}/>
        {/*Side Wires*/}
        <Wire x={0} y={-24} z={4} length={48} size={wireSize} rotate={0}/>
        <Wire x={8} y={-24} z={4} length={48} size={wireSize} rotate={0}/>
        <Wire x={16} y={-24} z={4} length={48} size={wireSize} rotate={0}/>
        <Wire x={24} y={-24} z={4} length={48} size={wireSize} rotate={0}/>
      </group>
    )
  }
}

