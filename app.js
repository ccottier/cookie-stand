
//makes more specific //
'use strict';
console.log('Is the code working?')
// global variables
var hourOfDay = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'];
var locations = [];

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
  tableRow.textContent = 'Grand Daily Total';
  footerRow.appendChild(tableRow);
  var tdElement;
  var DailyTotals = 0;
  var totalPerHour = 0;
  for(var i = 0; i < hourOfDay.length; i++) {
    totalPerHour = 0;
    for (var l = 0; l < locations.length; l++) {
      totalPerHour = totalPerHour + locations[l].cookiesSoldPerHour[i];
      DailyTotals += location[l].cookiesSoldPerHour[i];
    }
    tdElement = document.createElement('td');
    tdElement.textContent = totalPerHour;
    tableRow.appendChild(tdElement)
  }
}

//   function makeGrandTotal() {
//     var GrandTotal = 0;
//       for
// }

// makeGrandTotal()
makeHeaderRow()
makeColumnHeader()
makeTotalsRow()
//    ````````````````````````````````````````````````````````````````````` },
//
// //
// // function createTable(locations) {
// //   var table id = document.getElementById('Cookies Needed by Location');
// //   var storeLocationEl: document.getElementById('storeLocation'),
// //
// //       this.populate();
// //       for (i = 0; i < this.hourOfDay.length; i++) {
// //         var liRandomNumEl = document.createElement('li');
// //         console.log(liRandomNumEl);
// //         liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
// //         this.storeLocationEl.appendChild(liRandomNumEl);
// //       };
// //
// //       var liTotalCookiesEL = document.createElement('li');
// //       liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
// //       this.storeLocationEl.appendChild(liTotalCookiesEL);
// //     }
// //   };
// //
// //   this.renderRow = function() {
// //     var trElement = document.createElement('tr');
// //     locations [ ]
// //   }
// //
//
//   //
//   // this.create = function() {
//   //   var storeList = document
//   // }
// //
//
// //
// //
// //
// //
// // var southCenter = {
// //   min: 11,
// //   max: 38,
// //   avgCookiesCustomer: 1.9,
// //
// //   hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],
// //   // random customer per hour number generator
// //   getRandom: function() {
// //     //could also use: return Math.floor(Math.random() * (max - min + 1)) + min;
// //     return (Math.random() * (this.max - this.min + 1) + this.min);
// //   },
// //
// //   cookiesPerHour: [],
// //   totalCookies: 0,
// //   // cookiesPerHour generator
// //   populate: function() {
// //     for(i = 0; i < this.hourOfDay.length; i++) {
// //       var hourlyCookies = Math.floor(this.getRandom() * this.avgCookiesCustomer);
// //       this.cookiesPerHour.push(hourlyCookies);
// //       this.totalCookies += hourlyCookies;
// //     }
// //   },
// //   // call function to generate cookie totals for Pike Place
// //
// //   southCenterEl: document.getElementById('southCenter'),
// //
// //   render: function() {
// //     this.populate();
// //     for (i = 0; i < this.hourOfDay.length; i++) {
// //       var liRandomNumEl = document.createElement('li');
// //       console.log(liRandomNumEl);
// //       liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
// //       this.southCenterEl.appendChild(liRandomNumEl);
// //     };
// //
// //     var liTotalCookiesEL = document.createElement('li');
// //     liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
// //     this.southCenterEl.appendChild(liTotalCookiesEL);
// //   }
// // };
// // southCenter.render()


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
//
//
//
// var seaTac = {
//   min: 6,
//   max: 24,
//   avgCookiesCustomer: 1.2,
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
//   seaTacEl: document.getElementById('seaTac'),
//
//   render: function() {
//     this.populate();
//     for (i = 0; i < this.hourOfDay.length; i++) {
//       var liRandomNumEl = document.createElement('li');
//       console.log(liRandomNumEl);
//       liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
//       this.seaTacEl.appendChild(liRandomNumEl);
//     };
//
//     var liTotalCookiesEL = document.createElement('li');
//     liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
//     this.seaTacEl.appendChild(liTotalCookiesEL);
//   }
// };
//
// seaTac.render()
//
//
//
// var southCenter = {
//   min: 11,
//   max: 38,
//   avgCookiesCustomer: 1.9,
//
//   hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],
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
//   southCenterEl: document.getElementById('southCenter'),
//
//   render: function() {
//     this.populate();
//     for (i = 0; i < this.hourOfDay.length; i++) {
//       var liRandomNumEl = document.createElement('li');
//       console.log(liRandomNumEl);
//       liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
//       this.southCenterEl.appendChild(liRandomNumEl);
//     };
//
//     var liTotalCookiesEL = document.createElement('li');
//     liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
//     this.southCenterEl.appendChild(liTotalCookiesEL);
//   }
// };
// southCenter.render()
//
//
//
// var bellevueSquare = {
//   min: 20,
//   max: 48,
//   avgCookiesCustomer: 3.3,
//
//   hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],
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
//   bellevueSquareEl: document.getElementById('bellevueSquare'),
//
//   render: function() {
//     this.populate();
//     for (i = 0; i < this.hourOfDay.length; i++) {
//       var liRandomNumEl = document.createElement('li');
//       console.log(liRandomNumEl);
//       liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
//       this.bellevueSquareEl.appendChild(liRandomNumEl);
//     };
//
//     var liTotalCookiesEL = document.createElement('li');
//     liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
//     this.bellevueSquareEl.appendChild(liTotalCookiesEL);
//   }
// };
//
// bellevueSquare.render()
//
//
//
// var alkiBeach = {
//   min: 3,
//   max: 24,
//   avgCookiesCustomer: 3.3,
//
//   hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],
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
//   alkiBeachEl: document.getElementById('alkiBeach'),
//
//   render: function() {
//     this.populate();
//     for (i = 0; i < this.hourOfDay.length; i++) {
//       var liRandomNumEl = document.createElement('li');
//       console.log(liRandomNumEl);
//       liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
//       this.alkiBeachEl.appendChild(liRandomNumEl);
//     };
//
//     var liTotalCookiesEL = document.createElement('li');
//     liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
//     this.alkiBeachEl.appendChild(liTotalCookiesEL);
//   }
// };
//
// alkiBeach.render()
