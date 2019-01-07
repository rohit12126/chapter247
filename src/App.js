import React, { Component } from 'react';
import './App.css';
import Person from './Persons/Person';
import PersonDetail from './Persons/PersonDetail';

let persons = [
  { id: '1', name: 'Rohit', age: 28 },
  { id: '2', name: 'Amitesh', age: 34 },
  { id: '3', name: 'Ayushi', age: 60 },
  { id: '4', name: 'Soahil', age: 28 }
]
class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showList: true,
      data: '',
      formshow: false,
      person_name: '',
      person_age: '',
      errorMsgPersone: '',
      errorMsgAge: '',
      persons: [],
      searchString: "",
      searchListPerson: []
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      searchListPerson: persons
    })
  }

  toggle = (data) => {
    const show = this.state.show;
    this.setState({
      show: true,
      showList: false,
      data
    });
  }

  handleBack = () => {
    this.setState({
      show: false,
      showList: true,
    });
  }

  clickFormShow = () => {
    this.setState({
      formshow: !this.state.formshow
    });
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.person_name === '' || this.state.person_age === '') {
      console.log("personAdd");
      this.setState({
        errorMsgPersone: 'Please enter name',
        errorMsgAge: 'Please enter age'
      });
    }
    else {
      let personAdd = [...this.state.searchListPerson];
      const contArray = personAdd.length + 1;
      personAdd.push({
        name: this.state.person_name,
        age: this.state.person_age,
        id: contArray
      });

      console.log(personAdd);
      this.setState({
        person_name: '',
        person_age: '',
        searchListPerson: personAdd,
        errorMsgPersone: '',
        errorMsgAge: ''
      });
    }
  }

  searchHandler() {
    this.setState({
      searchString: this.refs.search.value
    });
  }
  handelDelete = (id) => {
    const searchListPerson = this.state.searchListPerson.filter(c => c.id !== id);
    this.setState({
      searchListPerson: searchListPerson
    })
  }
  render() {
    let _users = this.state.searchListPerson;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _users = _users.filter(function (user) {
        return user.name.toLowerCase().match(search);
      });
    }

    const person = _users.map((person, index) => {
      return (
        <Person name={person.name} age={person.age} id={person.id} toggle={this.toggle} onDelete={this.handelDelete} />
      )
    }
    );

    return (
      <div className="App">
        <h1 className="pb-5">Person List</h1>
        <div className="card bg-light p-3 col-md-6">
          <input type="text" value={this.state.searchString} ref="search" onChange={this.searchHandler} placeholder="Start Typing Here" className="form-control" />
        </div>
        <div className="p-2">
          <button className="btn btn-warning" onClick={this.clickFormShow}>+ Add</button>
        </div>
        <div className="">
          <div className={this.state.formshow ? "show" : "hide"}>
            <div className="col-md-4  bg-light">
              <form>
                <br />
                <input type="text" name="person_name" placeholder="Name" value={this.state.person_name} className="form-control" onChange={this.onChange} />
                <p className="text-danger">{this.state.errorMsgPersone}</p>
                <br />
                <input type="text" name="person_age" placeholder="Age" value={this.state.person_age} className="form-control" onChange={this.onChange} />
                <p className="text-danger">{this.state.errorMsgAge}</p>
                <br />
                <div className="col-md-6">
                  <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
        {this.state.showList ?
          <div className="col-md-6 p-0">
            <table className="table table-bordered">
              <tbody>
                <tr className="bg-dark text-white">
                  <td>#Id</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td colSpan="2">Action</td>
                </tr>
                {person}
              </tbody>
            </table>
          </div>
          : null}

        {/*  <button onClick={this.toggle} className="btn btn-danger">Show Div</button>
        <br/>
        <br/>
        */}

        {this.state.show ?
          <PersonDetail data={this.state.data} handleBack={this.handleBack} /> : null}
      </div>
    );
  }
}

//https://codepen.io/hoehoe/pen/dReKLX?editors=1010

export default App;
