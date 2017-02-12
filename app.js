//Global Variables estab//
var pikePlace = {
  min: 17,
  max: 88,
  avgCookiesCustomer: 5.2,

  hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],

  // random customer per hour number generator
  getRandom: function(min, max) {
    //could also use: return Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.round((Math.random() * (this.max - this.min + 1) + this.min));
  },

  cookiesPerHour: [],
  totalCookies: 0,
  // cookiesPerHour generator
  populate: function() {
    for(i = 0; i < this.hourOfDay.length; i++) {
      var randomNum = this.getRandom();
      this.cookiesPerHour.push(randomNum);
      this.totalCookies += this.rand;
    }
  },
  //call function to generate cookie totals for Pike Place


  render: function() {
    this.populate()
    for (i = 0; i < this.hourOfDay.length; i++) {
      var pikePlaceEl = document.getElementById('pikePlace');
      var liRandomNumEl = document.createElement('li');
      console.log(liRandomNumEl);
      liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
      pikePlaceEl.appendChild(liRandomNumEl);
    }
  }
};

pikePlace.render()
// var child;
// var
// render your object data to the DOM as an unordered list of data points!!
// 1. Get an element by Id from your html
// 2. Create a UL element
// 3. Create and populate an LI element for each of the data points that you want to render
// 4. Append the LI to the UL
// 5. Append the UL to the element that you stored in step 1
