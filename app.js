
//makes more specific //
'use strict';
console.log('Is the code working?')
// global variables
var hourOfDay = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'];
var locations = [];
//added this line, might need to delete
// var grandTotal = [];
var table;

var storeTable = document.getElementById('storeTable');
var salesInput = document.getElementById('salesInput');

// Obj Constructor Function: Object & Properties (key = value)
function Store (storeName, min, max, avgSale) {
  // Properties
  this.storeName = storeName;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  // arrays
  this.customersHourly = [];
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;


  //Methods
  // random customer per hour number generator
  this.numCustomersHourly = function() {
    for (var i =0; i < hourOfDay.length; i++) {
      this.customersHourly.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
  };

  //  cookiesPerHour generator
  this.generateCookiesPerHour = function() {
    this.numCustomersHourly();
    for(var i = 0; i < hourOfDay.length; i++){
      var oneHourCookieSales = Math.floor((this.customersHourly[i]) * this.avgSale);
      // push to create instance to storeLocation array
      this.cookiesSoldPerHour.push(oneHourCookieSales);
      this.totalCookies += oneHourCookieSales;
    // return Math.floor(this.getrandomCookiesHr(this.max, this.min) * this.avgSale);
    }
  };
  // call function to push to array
  // don't need line below
  this.generateCookiesPerHour();
  // call to push stores locations to array
  locations.push(this);

  // this.render();
}
// Obj constructor saves new stores info into new variables
var pikePlace = new Store('Pike Place Market', 17, 88, 5.2);
// pikePlace.render();

var seaTac = new Store('SeaTac', 6, 24, 1.2);
// seaTac.render();

var southCenter = new Store('South Center', 11, 38, 1.9);
// southCenter.render();

var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
// bellevueSquare.render();

var alkiBeach = new Store('Alki Beach', 3, 24, 2.6);
// alkiBeach.render();


function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  tableRow.appendChild(thElement);
  for(var i = 0; i < hourOfDay.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hourOfDay[i];
    tableRow.appendChild(thElement);
  };
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Totals';
  tableRow.appendChild(thElement);
  storeTable.appendChild(tableRow);
};

//td = column //
function makeColumnHeader() {
  var tableRow;
  var tdElement;
  for (var l = 0; l < locations.length; l++){
    tableRow = document.createElement('tr');
    tdElement = document.createElement('td');
    tdElement.textContent = locations[l].storeName;
    tableRow.appendChild(tdElement);
    for(var i = 0; i < hourOfDay.length; i++) {
      tdElement = document.createElement('td');
      tdElement.textContent = locations[l].cookiesSoldPerHour[i];
      tableRow.appendChild(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = locations[l].totalCookies;
    tableRow.appendChild(tdElement);
    storeTable.appendChild(tableRow);
  }
}

function makeTotalsRow() {
  var footerRow = document.createElement('tfoot');
  storeTable.appendChild(footerRow);
  var tableRow = document.createElement('tr');
  var tdLabel = document.createElement('td');
  tdLabel.textContent = 'Hourly Compounded Total Sales';
  tableRow.appendChild(tdLabel);
  footerRow.appendChild(tableRow);
  var tableData = document.createElement('td');
  var tdElement;
  var grandTotalHr = 0;
  var totalPerHour = 0;
  for(var i = 0; i < hourOfDay.length; i++) {
    for(var l = 0; l < locations.length; l++) {
      totalPerHour = totalPerHour + locations[l].cookiesSoldPerHour[i];
      grandTotalHr += locations[l].cookiesSoldPerHour[i];
    }
    tdElement = document.createElement('td');
    tdElement.textContent = grandTotalHr;
    tableRow.appendChild(tdElement);
  }
}

makeHeaderRow()
makeColumnHeader()
makeTotalsRow()

// generate random # of customers
// Store.prototype. = function() {
//   return Math.floor(Math.random() * ((this.min - this.min + 1)) + this.min);
// }

function renderNew(storeName, min, max, avgSale) {
  table = document.getElementById('table');

  store.min = min;
  store.max = max;
  store.avgSale = avgSale;

}
//Forms
var formEl = document.getElementById('form-data');
var storeTable = document.getElementById('storeTable');

// formEl.addEventListener('submit', function(event) {
//   event.preventDefault();

  //New Store Creation on form
  document.getElementById('newStore').addEventListener('submit', function handleFormSubmit(event) {
    event.preventDefault();
    var exists = false;
    console.log(event);


  var elSubmit = document.getElementById('submit');
  var storeName = event.target.storeName.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);
  // var Store = new Store(storeName, min, max, avgSale);

  newStore.renderCookiesPerHour();
  // newStore.alternate();
  newStore.render();


  event.target.storeName.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avgSale.value = null;

  // Access Totals Row, Delete Totals Row, and Recreate Totals Row, By Calling it Again
var totalsTR = document.getElementById('totalsTR');
  totalsTR.remove(1);
  getTotals();
});

// elSubmit.addEventListener('click', handleButtonClick);
// elSubmit.addEventListener('submit', handleFormSubmit);
  // event.preventDefault();
  // console.log(event);
// this made table disapear
//   new Store(storeName, min, max, avgSale) {
//     this.storeName = storeName;
//     this.min = min;
//     this.max = max;
//     this.avgSale = avgSale;
//     allStores.push(this);
//   }
//   newStore.renderCookiesPerHour();
//   newStore.alternate();
// clearFields(event);
// });
//
// button.addEventListener('click', handleButtonClick);
// form.addEventListener('submit', handleFormSubmit);


// //followed example in class below to add form
// var formEl = document.getElementById('form-data');
// //
// // function formSubmit(event) {
// //   event.preventDefault();
// //   console.log(event);
// //
//   formSubmitEl.addEventListener('submit', function(event) {
//     event.preventDefault();
// //
//     var newStoreName = parseInt(event.target.storeName.value);
//     var newMin = parseInt(event.target.min.value);
//     var newMax = parseInt(event.target.max.value);
//     var newAvgSale = parseInt(event.target.avgSale.value);
//     var newStore = newStore(newStoreName, newMin, newMax, newAvgSale);
// //
// //     newStore.generateCookiesPerHour();
// //     newStore.render();
// //
//   });

// formSubmit.addEventListener('submit', handleFormSubmit);
// console.log('User pressed submit!');
// // Code from Lab 06 for reference

// //Global Variables estab//
// var pikePlace = {
//   min: 17,
//   max: 88,
//   avgCookiesCustomer: 5.2,
//
//   hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],
//
//   // random customer per hour number generator
//   getRandom: function() {
//     //could also use: return Math.floor(Math.random() * (max - min + 1)) + min;
//     return (Math.random() * (this.max - this.min + 1) + this.min);
//   },
//
//   cookiesPerHour: [],
//   totalCookies: 0,
//   // cookiesPerHour generator
//   populate: function() {
//     for(i = 0; i < this.hourOfDay.length; i++) {
//       var hourlyCookies = Math.floor(this.getRandom() * this.avgCookiesCustomer);
//       this.cookiesPerHour.push(hourlyCookies);
//       this.totalCookies += hourlyCookies;
//     }
//   },
//   // call function to generate cookie totals for Pike Place
//
//   pikePlaceEl: document.getElementById('pikePlace'),
//
//   render: function() {
//     this.populate();
//     for (i = 0; i < this.hourOfDay.length; i++) {
//       var liRandomNumEl = document.createElement('li');
//       console.log(liRandomNumEl);
//       liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
//       this.pikePlaceEl.appendChild(liRandomNumEl);
//     };
//
//     var liTotalCookiesEL = document.createElement('li');
//     liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
//     this.pikePlaceEl.appendChild(liTotalCookiesEL);
//   }
// };
//
// pikePlace.render()
