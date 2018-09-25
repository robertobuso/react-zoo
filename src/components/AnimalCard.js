import React, { Component } from 'react';

class AnimalCard extends Component {

  render() {
    return (
      <div
        className="animal-card"
        onClick={() => this.props.handleSelect(this.props.animal, this.props.location)}>
        {this.props.animal ?
          <div>
            <img src={this.props.animal.img} alt='Animal Pic' width='200'
              id={this.props.animal.id}/>
            <span>
              <p>{this.props.animal.name}</p>
              <p>{this.props.animal.type}</p>
              <p>{this.props.animal.sex}</p>
              <p>{this.props.animal.id}</p>
            </span>
          </div>
        : null
        }
      </div>
    );
  }
}

export default AnimalCard
