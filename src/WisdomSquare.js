import React from 'react';
import wisdom from './wisdom';

class WisdomSquare extends React.Component {
  randomWisdom = () => {
    return wisdom[Math.floor(Math.random()*wisdom.length)]
  }
  render(){
    return (
    <div className='WisdomSquare'>
      {wizsom[0]}
    </div>
    )
  }
}
export default WisdomSquare;
