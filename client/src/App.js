import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './Components/Form'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: ''
    }
  }

  render(){
    return (
    <div className="App">
     <UserForm />
    </div>
  );
  }
  
}

export default App;
