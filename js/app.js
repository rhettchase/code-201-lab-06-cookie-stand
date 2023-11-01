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
  locationNameCell.classList.add("body-data");

  // add data cells
  for (let i = 0; i < this.hourlyCookies.length; i++) {
    const salesDataCell = document.createElement("td");
    dataRow.appendChild(salesDataCell);
    salesDataCell.classList.add("body-data");
    salesDataCell.textContent = this.hourlyCookies[i];
  }

  // add daily total for the location row
  const locationDailyTotal = document.createElement("td");
  dataRow.appendChild(locationDailyTotal);
  locationDailyTotal.textContent = this.totalCookies;
  locationDailyTotal.classList.add("total-data");
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
    hourlyTotalData.classList.add("total-data");
  }

  const overallTotalCell = document.createElement("td");
  headerRowTotal.appendChild(overallTotalCell);
  overallTotalCell.textContent = totalAllLocations;
  overallTotalCell.classList.add("total-data");
  // console.log(totalAllLocations);

}

renderHeader();
seattle.renderLocationData();
tokyo.renderLocationData();
dubai.renderLocationData();
paris.renderLocationData();
lima.renderLocationData();
renderFooter();


