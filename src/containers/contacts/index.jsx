import React, { Component } from 'react';
import ContactStyle from './contact.module.css';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contactList: []
    };
  }


  componentDidMount() {
    let list = [...this.state.contactList];
    list = [
      {name: 'Tushar', number: '8748237434'},
      {name: 'Yash', number: '9567546435'},
      {name: 'Rishab', number: '34654654654'},
      {name: 'Sohit', number: '68546643543'}
    ];

    this.setState({
      contactList: list
    });
  }


  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <div className={ContactStyle.listDiv}>
          <ul className="list-group">
            {this.state.contactList.map((val, ind) => {
              return <li className="list-group-item" key={ind}>{val.name} - {val.number}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }


}

export default Contacts;
