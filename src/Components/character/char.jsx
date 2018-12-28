import React, { Component } from 'react';
import CharStyle from './char.module.css';

class Char extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }


  componentWillReceiveProps() {
    let newList = [...this.state.list];
    newList = this.props.name.split('');
    this.setState({
      list: newList
    });
  }


  render() {
    return (
      <div>
        <h1>Char component</h1>
        <ul>
          {this.state.list.map((val, index) => {
            return <li key={index} className={CharStyle.charList}>{val}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Char;
