import React from 'react';
import './WisdomForm.css';
class WisdomForm extends React.Component{
  state={
    content:'',
  }

  handleKeyUp = (e) => {
    const char = e.charCode || e.keyCode;

    if(char >= 32 ){
      const key = e.key;
      this.setState({content: this.state.content+key, special: key === "*" && true});
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
