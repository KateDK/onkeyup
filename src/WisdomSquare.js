import React from 'react';
import wisdom from './wisdom';
import './WisdomSquare.css';

class WisdomSquare extends React.Component {
  randomWisdom = () => {
    return wisdom[Math.floor(Math.random()*wisdom.length)]
  }
  state={
    content: "😃",
    clicked: false,
  }
  handleClick = ()=>{
    this.setState({clicked:true})
  }
  render(){
    return (
    <div className='WisdomSquare'>
      {/* {wisdom[0]} */}
      {this.randomWisdom()}
    </div>
    )
  }
}
export default WisdomSquare;
