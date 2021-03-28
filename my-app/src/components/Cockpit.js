import React, { useEffect } from "react"
import "../styles/App.css"

const Cockpit = (props) => {
  useEffect(() => {
    console.log(["Cockpit.js useEffect"])
    const timer = setTimeout(() => {
      alert("Saved data to cloud!")
    }, 1000)
    return () => {
      clearTimeout(timer) //cleanup work in useEffect
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
        style={style}
        // Here the function used are in the other component (App.js), so we need to pass as props and created the props there
        onClick={props.clicked}
        className="btn-app"
      >
        Toggle Person
      </button>
    </div>
  )
}

export default Cockpit
