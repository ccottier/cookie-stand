
//Global Variables estab//
var pikePlace = {
  min: 17,
  max: 88,
  avgCookiesCustomer: 5.2,

  hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],

  // random customer per hour number generator
  getRandom: function (min, max) {
    //could also use: return Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.round(Math.round) * (max - min + 1) + min;
  },

  cookiesPerHour: [],
  totalCookies = 0,
  // cookiesPerHour generator
  populate: function() {
    for(var i=0; i < hourOfDay.length, i++) {
      var randomNum = this.getRandom ();
      this.cookiesPerHour.push(randomNum);
      this.totalCookies += rand;
    }
  }
};
//call function to generate cookie totals for Pike Place
pikePlace.generateCookies();

var parent = document.getElementById('pikePlace');
var child;
var
    // render your object data to the DOM as an unordered list of data points!!
    // 1. Get an element by Id from your html
    // 2. Create a UL element
    // 3. Create and populate an LI element for each of the data points that you want to render
    // 4. Append the LI to the UL
    // 5. Append the UL to the element that you stored in step 1
