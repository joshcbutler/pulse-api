

// imports and requires here
import React, { Component } from "react"
import { connect } from 'react-redux'
import Nav from "../components/nav"
import Header from "../components/header"
import Footer from "../components/footer"
// import Profile from "../components/profile"
import PulseButton from "./pulse-button"
import { BrowserRouter as Route } from 'react-router-dom'


// exported to the index.js
 export default class App extends Component {
  constructor(props){
    super(props)
    console.log(`this it the app props ${this.props}`)
  }
  render(){
    return (
      <div>
        <Nav/>
        <Header/>
        <div className="container">
        <PulseButton/>
        
        </div>
        <Footer/>
      </div>
    );
  }
}

// map the redux state to the props object
// function mapStateToProps(state){
//   return state
// }

// connect the new props to the container
//  export default connect({ mapStateToProps })(App);
