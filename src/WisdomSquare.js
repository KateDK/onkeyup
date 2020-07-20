import React from 'react';
import wisdom from './wisdom';
import './WisdomSquare.css';

class WisdomSquare extends React.Component {
  randomWisdom = () => {
    return wisdom[Math.floor(Math.random()*wisdom.length)]
  }
  state={
    content: "😃",
    visited: false,
  }
  handleClick = ()=>{
    this.setState({clicked:true})

  handlMouseLeave = () => {
    this.setState({content: this.randomWisdom(), visited: true})
  }
  render(){
    const {content,clicked} = this.state;
    return (
    <div className='WisdomSquare'>
      <p className={visited ? 'WisdomText' : 'WisdomText new'} onMouseLeave={this.handlMouseLeave}>
        {content}
      </p>
    </div>
    )
  }
}
export default WisdomSquare;
