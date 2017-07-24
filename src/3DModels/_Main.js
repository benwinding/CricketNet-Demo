import React from 'react';
import Grass from "./Grass";

export default class Main3DParts extends React.Component {
  render() {
    return (
      <group>
        <Grass width={200} height={200} />
      </group>
    )
  }
}

