import React, {Component} from 'react';
import './App.css';

///////////// A CLASS BASED COMPONENT ////////////////////

class Hello extends Component {

  constructor(props) {
    super(props);
    this.name = "Lauren";
  }
    greeting() {
      // var name ="Lauren";
      var date = new Date();
      var hour = date.getHours();
      var say = "Hello";
      if (hour < 12) {
        say = "Good morning";
      } else if (hour > 18) {
        say = "Good evening"
      }
      return say;
    };

  render () {
    return (
      <div>
        <img src="http://lorempixel.com/200/200/cats"/>
        <h1>{this.greeting()}, {this.name}!</h1>
        <p>Here is some text to fill out my paragraph. This is cool.</p>
        <p>Two plus two equals {2+2}.</p>
      </div>
    )
  }
}


////////////////// A FUNCTIONAL COMPONENT /////////////////////////


//always capitalize the function name because it is a function acting like a Class

// function Hello(props){
//   return (
//     <div>
//       <img src="http://lorempixel.com/200/200/cats"/>
//     </div>
//   )
// }






export default Hello;
