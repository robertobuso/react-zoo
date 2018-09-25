import React, { Component } from 'react';
import './App.css';
import AnimalCatalogue from './components/AnimalCatalogue'
import Zoo from './components/Zoo'

class App extends Component {
    state = {
      catalogueAnimals: [],
      zooAnimals: []
    }

  componentDidMount() {
    fetch('http://localhost:3000/animals')
    .then(r => r.json())
    .then(r => this.setState({catalogueAnimals: [...this.state.catalogueAnimals, ...r]}))
  }

    handleSelect = (animal, location) => {
      if (location === 'catalogue') {
        const idx = this.state.catalogueAnimals.indexOf(animal)
        this.state.catalogueAnimals.splice(idx,1)
        this.setState({
          catalogueAnimals: this.state.catalogueAnimals,
          zooAnimals:[...this.state.zooAnimals, animal]
        })
      } else if (location === 'zoo') {
        const idx = this.state.zooAnimals.indexOf(animal)
        this.state.zooAnimals.splice(idx,1)
        this.setState({
          catalogueAnimals:[...this.state.catalogueAnimals, animal],
          zooAnimals:this.state.zooAnimals})
      }
    }

  render() {
    return (
      <div className="App">
        <AnimalCatalogue catalogueAnimals={this.state.catalogueAnimals}
          handleSelect={this.handleSelect}/>
        <Zoo
          zooAnimals={this.state.zooAnimals}
          handleSelect={this.handleSelect}/>
      </div>
    );
  }
}

export default App;
