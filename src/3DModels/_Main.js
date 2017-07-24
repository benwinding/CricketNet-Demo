import React from 'react';
import Grass from "./Grass";

export class Parts3D extends React.Component {
  render() {
    return (
      <group>
        <Grass width={200} height={200} />
      </group>
    )
  }
}

