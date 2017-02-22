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

  cookiesPerHour: [],
  totalCookies: 0,

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

//Global Variables estab//
var seaTac = {
  min: 6,
  max: 24,
  avgCookiesCustomer: 1.2,

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
      var seaTacEl = document.getElementById('seaTac');
      var liRandomNumEl = document.createElement('li');
      console.log(liRandomNumEl);
      liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
      seaTacEl.appendChild(liRandomNumEl);
    }
  }
};

seaTac.render()


//Global Variables estab//
var southCenter = {
  min: 11,
  max: 38,
  avgCookiesCustomer: 1.9,

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
      var southCenterEl = document.getElementById('southCenter');
      var liRandomNumEl = document.createElement('li');
      console.log(liRandomNumEl);
      liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
      southCenterEl.appendChild(liRandomNumEl);
    }
  }
};

southCenter.render()


//Global Variables estab//
var bellevueSquare = {
  min: 20,
  max: 48,
  avgCookiesCustomer: 3.3,

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
      var bellevueSquareEl = document.getElementById('bellevueSquare');
      var liRandomNumEl = document.createElement('li');
      console.log(liRandomNumEl);
      liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
      bellevueSquareEl.appendChild(liRandomNumEl);
    }
  }
};

bellevueSquare.render()


//Global Variables estab//
var alkiBeach = {
  min: 20,
  max: 48,
  avgCookiesCustomer: 3.3,

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
      this.totalCookies += this.rand;//this line might be wrong!! total is working//
    }
  },
  //call function to generate cookie totals for Pike Place


  render: function() {
    this.populate()
    for (i = 0; i < this.hourOfDay.length; i++) {
      var alkiBeachEl = document.getElementById('alkiBeach');
      var liRandomNumEl = document.createElement('li');
      console.log(liRandomNumEl);
      liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
      alkiBeachEl.appendChild(liRandomNumEl);
    }
  }
};

alikBeach.render()

//Need to fix, alki is not showing data now for some reason, look to last sumit, also toatls are not showing up
//add tables instead of lists
