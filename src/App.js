import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchInput from './components/searchInput/SearchInput';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }

  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className='App'>
        <h1>Monster Roledex</h1>
        <SearchInput placeholder={'search monster'}
         handleChange={(e)=>this.setState({searchField:e.target.value})}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
