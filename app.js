// global variable
hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'];
locations ['pikePlace', 'seaTac', 'southCenter', 'bellevueSquare','alkiBeach'];
var grandTotalCookies = 0;


// Obj Constructor Function: Object & Properties (key = value)
function Store (storeLocation, min, max, avgCookiesCustomer, cookiesPerHour, totalCookies, cookiesPerHour) {
  this.storeLocation = storeLocation;
  this.min = min;
  this.max = max;
  this.avgCookiesCustomer = avgCookiesCustomer;
  this.cookiesPerHour = cookiesPerHour[];
  this.totalCookies = 0;
  this.cookiesPerHour = 0;
  // this.hourlyCookies = []; ???
};

  this.render = function(){
    var locations = document.getElementById('locations');
    var liElement = document.createElement('li')

  }

  // Obj Constructor Methods / Formulas:
    // random customer per hour number generator
    this.getrandomCookiesHr: function() {
      return (Math.random() * (this.max - this.min + 1) + this.min);
    },

    // cookiesPerHour generator
    this.cookiesPerHour = function() {
      return Math.floor(this.getrandomCookiesHr(this.max, this.min) * this.avgCookiesCustomer);
    };
    // populate: function() {
    //   for(i = 0; i < this.hourOfDay.length; i++) {
    //     var hourlyCookies = Math.floor(this.getrandomCookiesHr() * this.avgCookiesCustomer);
    //     this.cookiesPerHour.push(hourlyCookies);
    //     this.totalCookies += hourlyCookies;
    //   }
    // },
    // call function to generate cookie totals for Pike Place

    storeLocationEl: document.getElementById('storeLocation'),

    render: function() {
      this.populate();
      for (i = 0; i < this.hourOfDay.length; i++) {
        var liRandomNumEl = document.createElement('li');
        console.log(liRandomNumEl);
        liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
        this.pikePlaceEl.appendChild(liRandomNumEl);
      };

      var liTotalCookiesEL = document.createElement('li');
      liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
      this.storeLocationEl.appendChild(liTotalCookiesEL);
    }
  };

  storeLocation.render()


// Obj constructor saves new stores info into new variables
var pikePlace = new Store('Pike Place Market', 17, 88, 5.2);
pikePlace.render();

var seaTac = new Store('SeaTac', 6, 24, 1.2);
seaTac.render();

var southCenter = new Store('South Center', 11, 38, 1.9);
southCenter.render();

var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
bellevueSquare.render();

var alkiBeach = new Store('Alki Beach', 3, 24, 2.6);
alkiBeach.render();






// code block example from lab 6:
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
//
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
