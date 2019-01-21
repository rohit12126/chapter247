import React from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import "./RangeSlider.css"
class Rangeslider extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 2, max: 10 },
    };
  }

  render() {
    console.log(this.state.value)
    return (
      <>
      <p className="price">Price</p>
        <InputRange
        
  
          maxValue={20}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })} />
    </>
      
    );
  }
}
 export default Rangeslider