import React from 'react';
import './WisdomForm.css';
class WisdomForm extends React.Component{
  state={
    content:'',
    special: false,
  }

  handleKeyUp = (e) => {
    const char = e.charCode || e.keyCode;
    if(char >= 32 && char < 127 ){
      const key = e.key;
      this.setState({content: this.state.content+key, special: key === "*" && true});
    }
    if(char === 8){
      this.setState({content: this.state.content.slice(0,-1)});
    }
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
