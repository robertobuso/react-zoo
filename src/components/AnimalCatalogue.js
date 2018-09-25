import React, { Component } from 'react';
import AnimalCard from './AnimalCard'

class AnimalCatalogue extends Component {
  render() {
    return (
      <div>
        <h2>Animal Catalogue</h2>
        <div className="container-row">
          {this.props.catalogueAnimals.map(animal => {
            return <AnimalCard animal={animal}
              handleSelect={this.props.handleSelect}
              key={animal.id}
                   location='catalogue'/>
          })}
        </div>
      </div>
    );
  }
}

export default AnimalCatalogue;
