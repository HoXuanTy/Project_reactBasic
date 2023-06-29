import React, { Component } from 'react'

class MyComponent extends Component {
    state = {
        name: "TY",
        Age: "20"
     }

    render() {
      
    return (
      <div>
            <h1>My name is {this.state.name}</h1>
            <h2>My age is {this.state.Age}</h2>
      </div>
    )
  }
}

export default MyComponent;
