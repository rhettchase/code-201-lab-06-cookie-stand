"use strict";

const seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customers: 0, // to be randomly generated
  hourlyCookies: 0,
  generateCustomers: function () {
    this.customers = random(this.minCustomers, this.maxCustomers);
    console.log(this.customers);
  },
  generateCookies: function () {
    this.hourlyCookies = this.avgCookies * this.customers;
  }
//   hourlyCookies: this.avgCookies * this.customers,
};
seattle.generateCustomers();
seattle.generateCookies();
console.log(seattle);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
