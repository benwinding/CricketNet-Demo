import React from 'react';
import Grass from "./Grass";
import Post from "./Post";
import NetWall from "./NetWall";
import NetRoof from "./NetRoof";

export default class Main3DParts extends React.Component {
  render() {
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
        {/*Roof*/}
        <NetRoof x={0} y={24} height={4} length={48} width={24} rotate={-90} />
      </group>
    )
  }
}

