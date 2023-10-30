"use strict";

const seattle = {
  location: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  //   customers: 0, // to be randomly generated
  hourlyCookies: [],
  generateCustomers: function () {
    return random(this.minCustomers, this.maxCustomers);
    // console.log(this.customers);
  },
  generateCookies: function () {
    for (let i = 6; i < 19; i++) {
      this.hourlyCookies.push(
        Math.floor(this.avgCookies * this.generateCustomers())
      );
    }
  },
  generateTotalSales: function() {
    return totalSales(this.hourlyCookies);
  },
};
// seattle.generateCustomers();
seattle.generateCookies();
console.log(seattle);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function totalSales(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// function hourlySales() {
//   for (let i = 6; i < 19; i++) {
//     let cookies = this.hourlyCookies.push(
//       Math.floor(this.avgCookies * this.generateCustomers())
//     );
//     this.hourlyCookies.push(cookies);
//   }
// }
