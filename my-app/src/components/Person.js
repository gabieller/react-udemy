import React, { Component } from "react"
import propTypes from "prop-types"
import "../styles/Person.css"
import AuthContext from "../context/auth-context"

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext

  componentDidMount() {
    this.inputElementRef.current.focus()
  }
  render() {
    return (
      <div className="person">
        {this.context.authenticated ? (
          <p>Autheticated!</p>
        ) : (
          <p>Please log in</p>
        )}
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef} //special property to select an element
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    )
  }
}

Person.propTypes = {
  //organize the props
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func,
}

export default Person
