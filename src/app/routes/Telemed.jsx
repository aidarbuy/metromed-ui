import React from 
  'react'

// import TeleMed from 
  // '../components/TeleMed'

// var Tornado = function(category, affectedAreas, windGust) {
//   this.category = category;
//   this.affectedAreas = affectedAreas;
//   this.windGust = windGust;
// };

// var cities = [
//   ["Kansas City", 464310],
//   ["Topeka",      127939],
//   ["Lenexa",       49398]
// ];

// var twister = new Tornado("F5", cities, 220);

// Tornado.prototype.valueOf = function() {
//   var sum = 0;
//   for (var i = 0; i< this.affectedAreas.length; i++) {
//     sum += this.affectedAreas[i][1];
//   }
//   return sum;
// };

// console.debug(twister.valueOf()); 

// cities.push(["Olathe", 130045]);
// console.debug(twister.valueOf()); 

// Tornado.prototype.toString = function() {
//   var list = "";
//   for (var i = 0; i < this.affectedAreas.length; i++) {
//     if (i < this.affectedAreas.length - 1) {
//       list = list + this.affectedAreas[i][0] + ", ";
//     } else {
//       list = list + "and " + this.affectedAreas[i][0];
//     }
//   }
//   return "This tornado has been classified as an " + this.category +
//     ", with wind gusts up to " + this.windGust + "mph. Affected areas are: " +
//     list + ", potentially affecting a population of " + this.valueOf() + ".";
// };

// console.log(twister.toString());

// console.debug(twister.constructor.prototype);
// console.debug(twister.__proto__);

// Tornado.prototype.findOwnerOfProperty = function( propName ) {
//   var currentObject = this;
//   while (currentObject !== null) {
//     if (currentObject.hasOwnProperty(propName)) {
//       return currentObject;
//     } else {
//       currentObject = currentObject.__proto__;
//     }
//   }
//   return "No property found!";
// };

// console.debug(twister.findOwnerOfProperty("goToOz"));

export default React.createClass({
  render() {
    return (
      <div id="telemed">

        <h3>Telemed</h3>

        {/*
        <TeleMed/>
        */}

      </div>
    )
  }
})