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




function CookieStand(
  name,
  minCustomers,
  maxCustomers,
  avgCookies,
  totalCookies
) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalCookies = totalCookies;
  this.hourlyCookies = this.estimate();
}

// add methods
CookieStand.prototype.estimate = function () {
  this.hourlyCookies = esimateSales(this);
  return this.hourlyCookies;
};

// CookieStand.prototype.total = function () {
//   this.totalCookies = totalSales(this);
//   return this.totalCookies;
// };

const seattle = new CookieStand("Seattle", 23, 65, 6.3, 0);
const tokyo = new CookieStand("Toyko", 3, 24, 1.2, 0);
const dubai = new CookieStand("Dubai", 11, 38, 3.7, 0);
const paris = new CookieStand("Paris", 20, 38, 2.3, 0);
const lima = new CookieStand("Lima", 2, 16, 4.6, 0);

const cities = [seattle, tokyo, dubai, paris, lima];

console.log(seattle);
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

const locationContainerElem = document.getElementById("locationSales");
const tableElem = document.createElement("table");
locationContainerElem.appendChild(tableElem);

// add the table header
function renderHeader() {
  // add table head
  const tableHeadElem = document.createElement("thead");
  tableElem.appendChild(tableHeadElem);

  // add header Row
  const headerRow = document.createElement("tr");
  tableHeadElem.appendChild(headerRow);

  const locationHeadingCell = document.createElement("th");
  headerRow.appendChild(locationHeadingCell);
  locationHeadingCell.textContent = "Location";

  // create store hours hours table heading
  for (let i = 0; i < time.length; i++) {
    const storeHoursCell = document.createElement("th");
    headerRow.appendChild(storeHoursCell);
    storeHoursCell.textContent = time[i];
  }

  const storeTotalCell = document.createElement("th");
  headerRow.appendChild(storeTotalCell);
  storeTotalCell.textContent = "Daily Total";
}

CookieStand.prototype.renderLocationData = function () {
  // let totalSalesbyHour = [];
  for (let i = 0; i < this.hourlyCookies.length; i++) {
    const cookiesSoldThisHour = this.hourlyCookies[i];
    this.totalCookies += cookiesSoldThisHour; // cumulative sum of total cookies sold
  }

  // add tbody element
  const tableBodyElem = document.createElement("tbody");
  tableElem.appendChild(tableBodyElem);

  // add data row
  const dataRow = document.createElement("tr");
  tableBodyElem.appendChild(dataRow);

  const locationNameCell = document.createElement("td");
  dataRow.appendChild(locationNameCell);
  locationNameCell.textContent = this.name;

  // add data cells
  for (let i = 0; i < this.hourlyCookies.length; i++) {
    const salesDataCell = document.createElement("td");
    dataRow.appendChild(salesDataCell);
    salesDataCell.textContent = this.hourlyCookies[i];
  }

  // add daily total for the location row
  const locationDailyTotal = document.createElement("td");
  dataRow.appendChild(locationDailyTotal);
  locationDailyTotal.textContent = this.totalCookies;
};


// add table footer
function renderFooter() {
  const tableFooter = document.createElement("tfoot");
  tableElem.appendChild(tableFooter);

  // add table row
  const headerRowTotal = document.createElement("tr");
  tableFooter.appendChild(headerRowTotal);

  const totalHeadingCell = document.createElement("th");
  headerRowTotal.appendChild(totalHeadingCell);
  totalHeadingCell.textContent = "Hourly Totals for All Locations";

  let totalAllLocations = 0;

  // calculate Daily hourly total and overall total for all locations
  for (let i = 0; i < time.length; i++) {
    let hourTotal = 0;
    const hourlyTotalData = document.createElement("td");
    headerRowTotal.appendChild(hourlyTotalData);
    for (let j = 0; j < cities.length; j++) {
      hourTotal += cities[j].hourlyCookies[i];
      // console.log(cities[j].hourlyCookies[i]);
    }
    hourlyTotalData.textContent = hourTotal;
    totalAllLocations += hourTotal;
    // console.log(hourTotal);
  }

  const overallTotalCell = document.createElement("td");
  headerRowTotal.appendChild(overallTotalCell);
  overallTotalCell.textContent = totalAllLocations;
  // console.log(totalAllLocations);

}

renderHeader();
seattle.renderLocationData();
tokyo.renderLocationData();
dubai.renderLocationData();
paris.renderLocationData();
lima.renderLocationData();
renderFooter();

/*
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
