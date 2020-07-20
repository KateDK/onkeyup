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

  handlMouseLeave = () => {
    this.setState({content: this.randomWisdom(), visited: true})
  }

  render(){
    const {content,visited} = this.state;
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
