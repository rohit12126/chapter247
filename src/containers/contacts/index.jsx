import React, { Component } from 'react';
import ContactStyle from './contact.module.css';
import ContactDetailsComponent from '../../components/contactDetails/contactDetails';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contactList: [],
      addContactForm: false,
      name: '',
      number: '',
      showDetails: false,
      showData: {}
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.showAddItem = this.showAddItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.showContactDetails = this.showContactDetails.bind(this);
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




  handleInputs(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }




  showAddItem() {
    this.setState({
      addContactForm: true
    });
  }




  addItem(e) {
    let newList = [...this.state.contactList];
    newList.push({
      name: this.state.name,
      number: this.state.number
    });
    this.setState({ contactList: newList, addContactForm: false, name: '', number: '' });
    e.preventDefault(); // stop refresh of page on submit
  }



  removeItem(index) {
    if (index > -1) {
      let newList = [...this.state.contactList];
      newList.splice(index, 1);
      this.setState({ contactList: newList });
    }
  }



  showContactDetails(index) {
    const newList = [...this.state.contactList];
    const showData = newList[index];
    this.setState({ showDetails: !this.state.showDetails, showData });
  }


  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <div className={ContactStyle.listDiv}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.contactList.map((val, ind) => {
                  return <tr key={ind} onClick={() => this.showContactDetails(ind)}>
                    <th scope="row">{ind + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.number}</td>
                    <td>
                      <button className="btn btn-danger" type="button" onClick={() => this.removeItem(ind)}>Remove</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
        <br/>
        {
          !this.state.addContactForm ?
            <button type="button" className="btn btn-primary" onClick={this.showAddItem}>Add contact</button>
            :
            <div className={ContactStyle.formContainer}>
              <form onSubmit={this.addItem}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" aria-describedby="name" placeholder="Enter name" value={this.state.name} onChange={this.handleInputs} name="name" />
                </div>
                <div className="form-group">
                  <label>Number</label>
                  <input type="text" className="form-control" aria-describedby="number" placeholder="Enter mobile number" value={this.state.number} onChange={this.handleInputs} name="number" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
        }
        <br/>
        {
          this.state.showDetails ?
          <ContactDetailsComponent data={this.state.showData} />
          :
          null
        }
      </div>
    )
  }
}

export default Contacts;
