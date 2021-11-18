// from data.js
var tableData = data;

// Select the input elements and get the raw HTML node
var tbody = d3.select("tbody");
var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInputer = d3.select("#shape");

console.log(tableData);

function init(tableData) {
tableData.forEach((ufos) => {
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(([key, value]) => {
         row.append("td").text(value);
    });
  });}

  // Part 1 for just date time filter.
  // Event Handler
  // var submit = d3.select("#filter-btn");
  // submit.on("click", function() {
  //   // Prevent the page from refreshing
  //   d3.event.preventDefault();
  //   // Clear the full data table with soon to be replaced filtered data.
  //   d3.selectAll("td").remove()
  //   // Select the input element and get the raw HTML node
  //   // Get the value property of the input element
  //   var inputValue = dateInput.property("value");
  //   console.log(inputValue);
  //   // Clearing the Filter value
  //   var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  //   // Creating the new table for the filtered the data.
  //   init(filteredData)
  //   // Clearing the the Input Value
  //   d3.select("#datetime").node().value = "";
  // });
    
  init(tableData);

    

// The bonus for the html filters beyond date.

function table(dataOutput) {
  dataOutput.forEach((ufos) => {
      var row = tbody.append("tr");
      Object.entries(ufos).forEach(([key, value]) => {
           row.append("td").text(value);
      });
    });
  }

var searchButton = d3.select("#filter-btn");

// add an event listener to searchbutton and resetbutton and add a function
searchButton.on("click", search);

function search(event){
	  //to prevent the page from refreshing
    d3.event.preventDefault();
    // Clear the full data table with soon to be replaced filtered data.
    d3.selectAll("td").remove()
    var filterDict = {};

    if (dateInput.property("value") != ""){
        filterDict = {...filterDict,...{"datetime":dateInput.property("value")}};
    }

    if (cityInput.property("value") != ""){
        filterDict = {...filterDict,...{"city":cityInput.property("value")}};
    }

    if (stateInput.property("value") != ""){
        filterDict = {...filterDict,...{"state":stateInput.property("value")}};
    }

    if (countryInput.property("value") != ""){
        filterDict = {...filterDict,...{"country":countryInput.property("value")}};
    }

    if (shapeInputer.property("value") != ""){
        filterDict = {...filterDict,...{"shape":shapeInputer.property("value")}};
    }

    console.log(filterDict);
    var dataOutput = tableData;

    Object.entries(filterDict).forEach(function([key,value]) {

        console.log(key,value);
        dataOutput = dataOutput.filter(dataDict => dataDict[key] === value);

    })

    if (dataOutput.length > 0) {
        table(dataOutput);
    }

}  
  



