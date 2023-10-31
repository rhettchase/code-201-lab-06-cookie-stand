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
seattle.generateCustomers();
seattle.generateCookies();
seattle.generateTotalSales();
console.log(seattle);

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

const locationContainerElementSales = document.getElementById("locationSales");

function renderSalesData(location) {
  const article = document.createElement("article");
  locationContainerElementSales.appendChild(article);

  const h2 = document.createElement("h2");
  h2.textContent = location.name;
  article.appendChild(h2);

  const ul = document.createElement("ul");
  article.appendChild(ul);

  for (let i = 0; i < location.hourlyCookies.length; i++) {
    const li = document.createElement("li");
    li.textContent = time[i] + ": " + location.hourlyCookies[i];
    ul.appendChild(li);
  }
}

renderSalesData(seattle);
