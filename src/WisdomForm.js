import React from 'react';
import './WisdomForm.css';
class WisdomForm extends React.Component{
  render(){
    return(
      <div className='WisdomForm'>
        <textarea placeholder="Share your own wisdom:"/>
      </div>
    )
  }
}

export default WisdomForm;
