import React, { Component } from 'react';
import AnimalCard from './AnimalCard'

class Zoo extends Component {
  render() {
    return (
      <div>
        <h2>My Zoo</h2>
        <div className="container-row">
          {this.props.zooAnimals.map(animal => {
            return <AnimalCard animal={animal}
              handleSelect={this.props.handleSelect}
              key={animal.id}
                   location='zoo'/>
          })}
        </div>
      </div>
    );
  }
}

export default Zoo;
