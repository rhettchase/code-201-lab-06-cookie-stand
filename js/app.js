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

const seattle = {
  name: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  hourlyCookies: [],
  totalSales: 0,
  generateCustomers: function () {
    return random(this.minCustomers, this.maxCustomers);
  },
  generateCookies: function () { // worked with Larry L. on this function
    for (let i = 6; i <= 19; i++) {
      this.hourlyCookies.push(
        Math.floor(this.avgCookies * this.generateCustomers())
      );
    }
  },
  generateTotalSales: function () {
    this.totalSales = totalSales(this.hourlyCookies);
  },
};
seattle.generateCustomers();
seattle.generateCookies();
seattle.generateTotalSales();
// console.log(seattle);

const tokyo = {
  name: "Tokyo",
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  hourlyCookies: [],
  totalSales: 0,
  generateCustomers: function () {
    return random(this.minCustomers, this.maxCustomers);
  },
  generateCookies: function () {
    for (let i = 6; i <= 19; i++) {
      this.hourlyCookies.push(
        Math.floor(this.avgCookies * this.generateCustomers())
      );
    }
  },
  generateTotalSales: function () {
    this.totalSales = totalSales(this.hourlyCookies);
  },
};
tokyo.generateCustomers();
tokyo.generateCookies();
tokyo.generateTotalSales();
// console.log(tokyo);

const dubai = {
  name: "Dubai",
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  hourlyCookies: [],
  totalSales: 0,
  generateCustomers: function () {
    return random(this.minCustomers, this.maxCustomers);
  },
  generateCookies: function () {
    for (let i = 6; i <= 19; i++) {
      this.hourlyCookies.push(
        Math.floor(this.avgCookies * this.generateCustomers())
      );
    }
  },
  generateTotalSales: function () {
    this.totalSales = totalSales(this.hourlyCookies);
  },
};
dubai.generateCustomers();
dubai.generateCookies();
dubai.generateTotalSales();
// console.log(dubai);

const paris = {
  name: "Paris",
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  hourlyCookies: [],
  totalSales: 0,
  generateCustomers: function () {
    return random(this.minCustomers, this.maxCustomers);
  },
  generateCookies: function () {
    for (let i = 6; i <= 19; i++) {
      this.hourlyCookies.push(
        Math.floor(this.avgCookies * this.generateCustomers())
      );
    }
  },
  generateTotalSales: function () {
    this.totalSales = totalSales(this.hourlyCookies);
  },
};
paris.generateCustomers();
paris.generateCookies();
paris.generateTotalSales();
// console.log(paris);

const lima = {
  name: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hourlyCookies: [],
  totalSales: 0,
  generateCustomers: function () {
    return random(this.minCustomers, this.maxCustomers);
  },
  generateCookies: function () {
    for (let i = 6; i <= 19; i++) {
      this.hourlyCookies.push(
        Math.floor(this.avgCookies * this.generateCustomers())
      );
    }
  },
  generateTotalSales: function () {
    this.totalSales = totalSales(this.hourlyCookies);
  },
};
lima.generateCustomers();
lima.generateCookies();
lima.generateTotalSales();
// console.log(lima);

// Randomly generate number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Calculate Total Sales
function totalSales(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const locationContainerElement = document.getElementById("locationSales");

function renderSalesData(location) {
  // create new elements
  const article = document.createElement("article");
  locationContainerElement.appendChild(article);

  const h2 = document.createElement("h2");
  h2.textContent = location.name;
  article.appendChild(h2);

  const ul = document.createElement("ul");
  article.appendChild(ul);

  for (let i = 0; i < location.hourlyCookies.length; i++) {
    const li = document.createElement("li");
    li.textContent = time[i] + ": " + location.hourlyCookies[i];
    li.classList.add("sales-data");
    ul.appendChild(li);
  }

  const li = document.createElement("li");
  li.textContent = `Total: ${location.totalSales}`;
  li.classList.add("sales-total");
  ul.appendChild(li);
}

renderSalesData(seattle);
renderSalesData(tokyo);
renderSalesData(dubai);
renderSalesData(paris);
renderSalesData(lima);
