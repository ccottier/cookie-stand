// code from Lab06

//Global Variables estab//
var pikePlace = {
  min: 17,
  max: 88,
  avgCookiesCustomer: 5.2,

  hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],

  // random customer per hour number generator
  getRandom: function() {
    //could also use: return Math.floor(Math.random() * (max - min + 1)) + min;
    return (Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPerHour: [],
  totalCookies: 0,
  // cookiesPerHour generator
  populate: function() {
    for(i = 0; i < this.hourOfDay.length; i++) {
      var hourlyCookies = Math.floor(this.getRandom() * this.avgCookiesCustomer);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookies += hourlyCookies;
    }
  },
  // call function to generate cookie totals for Pike Place

  pikePlaceEl: document.getElementById('pikePlace'),

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
    this.pikePlaceEl.appendChild(liTotalCookiesEL);
  }
};

pikePlace.render()



var seaTac = {
  min: 6,
  max: 24,
  avgCookiesCustomer: 1.2,

  hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],

  // random customer per hour number generator
  getRandom: function() {
    //could also use: return Math.floor(Math.random() * (max - min + 1)) + min;
    return (Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPerHour: [],
  totalCookies: 0,
  // cookiesPerHour generator
  populate: function() {
    for(i = 0; i < this.hourOfDay.length; i++) {
      var hourlyCookies = Math.floor(this.getRandom() * this.avgCookiesCustomer);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookies += hourlyCookies;
    }
  },
  // call function to generate cookie totals for Pike Place

  seaTacEl: document.getElementById('seaTac'),

  render: function() {
    this.populate();
    for (i = 0; i < this.hourOfDay.length; i++) {
      var liRandomNumEl = document.createElement('li');
      console.log(liRandomNumEl);
      liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
      this.seaTacEl.appendChild(liRandomNumEl);
    };

    var liTotalCookiesEL = document.createElement('li');
    liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
    this.seaTacEl.appendChild(liTotalCookiesEL);
  }
};

seaTac.render()



var southCenter = {
  min: 11,
  max: 38,
  avgCookiesCustomer: 1.9,

  hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],
  // random customer per hour number generator
  getRandom: function() {
    //could also use: return Math.floor(Math.random() * (max - min + 1)) + min;
    return (Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPerHour: [],
  totalCookies: 0,
  // cookiesPerHour generator
  populate: function() {
    for(i = 0; i < this.hourOfDay.length; i++) {
      var hourlyCookies = Math.floor(this.getRandom() * this.avgCookiesCustomer);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookies += hourlyCookies;
    }
  },
  // call function to generate cookie totals for Pike Place

  southCenterEl: document.getElementById('southCenter'),

  render: function() {
    this.populate();
    for (i = 0; i < this.hourOfDay.length; i++) {
      var liRandomNumEl = document.createElement('li');
      console.log(liRandomNumEl);
      liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
      this.southCenterEl.appendChild(liRandomNumEl);
    };

    var liTotalCookiesEL = document.createElement('li');
    liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
    this.southCenterEl.appendChild(liTotalCookiesEL);
  }
};
southCenter.render()



var bellevueSquare = {
  min: 20,
  max: 48,
  avgCookiesCustomer: 3.3,

  hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],
  // random customer per hour number generator
  getRandom: function() {
    //could also use: return Math.floor(Math.random() * (max - min + 1)) + min;
    return (Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPerHour: [],
  totalCookies: 0,
  // cookiesPerHour generator
  populate: function() {
    for(i = 0; i < this.hourOfDay.length; i++) {
      var hourlyCookies = Math.floor(this.getRandom() * this.avgCookiesCustomer);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookies += hourlyCookies;
    }
  },
  // call function to generate cookie totals for Pike Place

  bellevueSquareEl: document.getElementById('bellevueSquare'),

  render: function() {
    this.populate();
    for (i = 0; i < this.hourOfDay.length; i++) {
      var liRandomNumEl = document.createElement('li');
      console.log(liRandomNumEl);
      liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
      this.bellevueSquareEl.appendChild(liRandomNumEl);
    };

    var liTotalCookiesEL = document.createElement('li');
    liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
    this.bellevueSquareEl.appendChild(liTotalCookiesEL);
  }
};

bellevueSquare.render()



var alkiBeach = {
  min: 3,
  max: 24,
  avgCookiesCustomer: 3.3,

  hourOfDay: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm'],
  // random customer per hour number generator
  getRandom: function() {
    //could also use: return Math.floor(Math.random() * (max - min + 1)) + min;
    return (Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPerHour: [],
  totalCookies: 0,
  // cookiesPerHour generator
  populate: function() {
    for(i = 0; i < this.hourOfDay.length; i++) {
      var hourlyCookies = Math.floor(this.getRandom() * this.avgCookiesCustomer);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookies += hourlyCookies;
    }
  },
  // call function to generate cookie totals for Pike Place

  alkiBeachEl: document.getElementById('alkiBeach'),

  render: function() {
    this.populate();
    for (i = 0; i < this.hourOfDay.length; i++) {
      var liRandomNumEl = document.createElement('li');
      console.log(liRandomNumEl);
      liRandomNumEl.textContent = this.hourOfDay[i] + ':' + ' ' + this.cookiesPerHour[i];
      this.alkiBeachEl.appendChild(liRandomNumEl);
    };

    var liTotalCookiesEL = document.createElement('li');
    liTotalCookiesEL.textContent = 'Total Cookies:' + this.totalCookies;
    this.alkiBeachEl.appendChild(liTotalCookiesEL);
  }
};

alkiBeach.render()
