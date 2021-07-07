import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './Components/Form'
import Show from './Components/Show'
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: '',

    }

  
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers = () => {
    axios
    .get("http://localhost:5000/api/restricted/data")
    .then(res => {
        console.log('Data Received', res)
        // this.setState({data: res.data})
        this.setState({data: res.data})
    })   
    .catch(err => {
        console.log('Request failed')
    })
  }

  render(){
    return (
    <div className="App">
     <UserForm data={this.state.data}/>
     {/* {this.state.data
    ? this.state.data.map(object => (
      <div key={object.id}>{object.name}</div>
    )): null} */}
    {/* {this.state.data
      ? this.state.data.map(object => (
       <UserForm
        name={object.name}/>
      )): null} */}
       {/* {this.state.data
    ? this.state.data.map(object => (
      <Show name={object.name}/>
    )): null} */}


    </div>
  );
  }
  
}

export default App;
