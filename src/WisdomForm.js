import React from 'react';
import './WisdomForm.css';
class WisdomForm extends React.Component{
  state={
    content:'',
  }

  handleKeyUp = (e) => {
    this.setState({content: this.statecontent+e.key})

  }

  render(){
    return(
      <div className='WisdomForm'>
        <textarea placeholder="Share your own wisdom:" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}

export default WisdomForm;
