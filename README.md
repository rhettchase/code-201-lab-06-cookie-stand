# LAB - 06 (class-06, class-07, class-08)

## Salmon Cookie Stand

I build a web application with the purpose of helping with the branding of a Salmon Cookie business and help with internal sales data management. The public-facing website includes the brand's color scheme, fonts, branded images, and key information for each location.

For the sales data, the application will need to be adaptable and able to add and remove locations from the daily projections report. To do this, the application utilizes the DOM and allows the data to be dynamically called.

### Author: Rhett Chase

### Links and Resources

- [submission PR](https://github.com/rhettchase/code-201-lab-06-cookie-stand)
- [W3C - Manipulating CSS with JavaScript](https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript)
- [W3C - CSS Forms](https://www.w3schools.com/css/css_form.asp)
- [MDN - styling web forms](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms)
[MDN - .some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- ChatGPT

### Lighthouse Accessibility Report Score

![Acessibility Score](img/accessibility-sales.png)

### Reflections and Comments

- I converted all object literals with a single constructor function that created new instances when called
- I built a single table of data that contained all sales data for all locations. This required building multiple functions to render different parts of the table: rendering the header, render the location data, and render the footer. All of these were appended to be part of the table.
- I initiated the table styling by utilizing the `[elementName].classList.add("class-name");` in my javaScript code to be able to style using the `external css stylesheet`
- I used a `nested for loop` to iterate through each of the locations by the hour and total the total sales for each hour and calculate a cumulative total of sales
- I converted the detailed information for each location (name, address, hours, contact) from hard code in the HTML to be *dynamically rendered* from the location objects
  - This required adding `if statements` to only render the information, `appendChild`, and call the rendering functions if the `document container element` was referenced on each page
- I created a `form` to collect key information for new locations. This `input` *dynamically renders* a new row to the sales data table and recalculates the daily totals and overall total of cookies sold
- The `.addEventListener` function takes in the values submitted by the user, checks them (using `if statements` to see if the following conditions are met
  1. The location exists already on the cities array of cookie stand objects
  2. If the max cookies is > than the min cookies
- If either of these two conditions above are true, the user is alerted to resubmit and the form is prevented from being submitted using `.preventDefault()`
- I used the `document.querySelector()` method to be able to render the footer repeatedly. The `renderfooter()` function was modified to remove the children of existing `tfoot` if the table footer already exists. If it does not exist, it creates the `tfoot` and continues on with the rest of the function
