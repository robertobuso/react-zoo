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
        if (this.validateGender(animal)===true) {
          alert('YOU CANNOT HAVE TWO ANIMALS OF THE SAME GENDER IN YOUR ZOO YOU PREVERTED PERVERT')
        } else {
        const idx = this.state.catalogueAnimals.indexOf(animal)
        this.state.catalogueAnimals.splice(idx,1)
        this.setState({
          catalogueAnimals: this.state.catalogueAnimals,
          zooAnimals:[...this.state.zooAnimals, animal]
        })
      }} else if (location === 'zoo') {
        const idx = this.state.zooAnimals.indexOf(animal)
        this.state.zooAnimals.splice(idx,1)
        this.setState({
          catalogueAnimals:[...this.state.catalogueAnimals, animal],
          zooAnimals:this.state.zooAnimals})
      }
    }

    validateGender = (thisAnimal) => {
      return this.state.zooAnimals.map(animal => animal.sex).includes(thisAnimal.sex)
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
