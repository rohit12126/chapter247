import React, { Component } from 'react';
import CharStyle from './char.module.css';

class Char extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.removeEle = this.removeEle.bind(this);
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    let newList = [...prevState.list];
    newList = nextProps.name.split('');
    return {
      list: newList
    }
  }


  removeEle(index) {
    this.props.removeFromInput(index);
  }


  render() {
    return (
      <div>
        <h1>Char component</h1>
        <ul>
          {this.state.list.map((val, index) => {
            return <li onClick={() => this.removeEle(index)} key={index} className={CharStyle.charList}>{val}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Char;
