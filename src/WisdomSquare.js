import React from 'react';
import wizsom from './wisdom';

class WisdomSquare extends React.Component {
  render(){
    return (
    <div className='WisdomSquare'>
      {wizsom[0]}
    </div>
    )
  }
}
export default WisdomSquare;
