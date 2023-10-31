"use strict";

const time = [
  "6 am",
  "7 am",
  "8 am",
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
  "6 pm",
  "7 pm",
];

function CookieStand(name, minCustomers, maxCustomers, avgCookies, totalCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalCookies = totalCookies;
  this.hourlyCookies = this.estimate();
}

// add methods
CookieStand.prototype.estimate = function() {
  this.hourlyCookies = esimateSales(this);
  return this.hourlyCookies;
};

const seattle = new CookieStand('Seattle', 23, 65, 6.3, 0);
const tokyo = new CookieStand('Toyko', 3, 24, 1.2, 0);
const dubai = new CookieStand('Dubai', 11, 38, 3.7);
const paris = new CookieStand('Paris', 20, 38, 2.3);
const lima = new CookieStand('Lima', 2, 16, 4.6);

// console.log(seattle);
// console.log(tokyo);
// console.log(dubai);
// console.log(paris);
// console.log(lima);


// helper function - Randomly generate number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// helper function - estimate sales
function esimateSales(store) {
  const hourlyCookies = [];
  for (let i = 0; i < time.length; i++) {
    const numCustomers = random(store.minCustomers, store.maxCustomers);
    const hourSales = Math.ceil(numCustomers * store.avgCookies);
    hourlyCookies.push(hourSales);
  }
  return hourlyCookies;
}



const locationContainerElement = document.getElementById("locationSales");
// create element
// appendChild to element
// add text to element

function renderSalesData(store) {
  // create new elements
  const article = document.createElement("article");
  locationContainerElement.appendChild(article);

  const cityHeading = document.createElement("h2");
  cityHeading.textContent = store.name;
  article.appendChild(cityHeading);

  const hoursList = document.createElement("ul");
  article.appendChild(hoursList);


  for (let i = 0; i < store.hourlyCookies.length; i++) {
    const salesListItem = document.createElement("li");
    salesListItem.classList.add("sales-data");
    hoursList.appendChild(salesListItem);
    const cookiesSoldThisHour = store.hourlyCookies[i];
    store.totalCookies += cookiesSoldThisHour; // cumulative sum of total cookies sold
    const salesInfo = `${time[i]}: ${cookiesSoldThisHour} cookies`;
    salesListItem.textContent = salesInfo;
  }
  // total line
  const salesTotalListItem = document.createElement("li");
  salesTotalListItem.classList.add("sales-total");
  hoursList.appendChild(salesTotalListItem);
  const totalInfo = `Total: ${store.totalCookies} cookies`;
  salesTotalListItem.textContent = totalInfo;
}

renderSalesData(seattle);
renderSalesData(tokyo);
renderSalesData(dubai);
renderSalesData(paris);
renderSalesData(lima);

/*
const seattle = {
  name: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  hourlyCookies: [],
  totalCookies: 0,
  estimate: function () {
    this.hourlyCookies = esimateSales(this);
  },
};

seattle.estimate();

const tokyo = {
  name: "Tokyo",
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  hourlyCookies: [],
  totalCookies: 0,
  estimate: function () {
    this.hourlyCookies = esimateSales(this);
  },
};

tokyo.estimate();

const dubai = {
  name: "Dubai",
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  hourlyCookies: [],
  totalCookies: 0,
  estimate: function () {
    this.hourlyCookies = esimateSales(this);
  },
};

dubai.estimate();

const paris = {
  name: "Paris",
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  hourlyCookies: [],
  totalCookies: 0,
  estimate: function () {
    this.hourlyCookies = esimateSales(this);
  },
};
paris.estimate();

const lima = {
  name: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hourlyCookies: [],
  totalCookies: 0,
  estimate: function () {
    this.hourlyCookies = esimateSales(this);
  },
};

lima.estimate();

*/