import React, { useEffect, useRef, useContext } from "react"
import "../styles/App.css"
import AuthContext from "../context/auth-context"

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null) //get access to DOM elements
  const authContext = useContext(AuthContext)

  //run AFTER each render cycle
  useEffect(() => {
    console.log(["Cockpit.js useEffect"])
    toggleButtonRef.current.click() //here to execute just after the button was created
    return () => {
      console.log("[Cockpit.js] cleanup")
    }
  }, [])

  useEffect(() => {
    console.log(["Cockpit.js] 2nd useEffect"])
    return () => {
      console.log("[Cockpit.js] cleanup 2nd ")
    }
  })

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  }

  if (props.showPerson) {
    style.backgroundColor = "red"
  }

  // let classes = ["red", "bold"].join(" ") turn this array into one string -> "red bold"
  //ClassName Dynamically
  const classes = []
  if (props.persons.length <= 2) {
    classes.push("red")
  }

  if (props.persons.length <= 1) {
    classes.push("bold")
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>I'm working now</p>{" "}
      {/* transform into string */}
      <button
        ref={toggleButtonRef}
        style={style}
        // Here the function used are in the other component (App.js), so we need to pass as props and created the props there
        onClick={props.clicked}
        className="btn-app"
      >
        Toggle Person
      </button>
      <button onClick={authContext.login} className="btn-app">
        Log In
      </button>
    </div>
  )
}

export default Cockpit
