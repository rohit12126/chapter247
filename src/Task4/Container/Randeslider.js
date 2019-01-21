import React from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import "./../../App.css"
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
      <form className="form">
        <InputRange
         formatLabel={value => `${5}cm`}
  
          maxValue={20}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })} />
          <div>Min: </div>
      </form>
    );
  }
}
 export default Rangeslider