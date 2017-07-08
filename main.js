// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let count = 0;
  let total = 0;
  while(count < data.length) {
    total = total + data[count]["price"];
    count = count + 1;
  }
  let averagePrice = total / data.length;
  averagePrice = Math.round(100*averagePrice)/100;
  console.log("The average price is $" + averagePrice);
  return averagePrice;
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let count = 0;
  let priceRangeItems = [];
  while(count < data.length) {
    if(data[count]["price"] >= 14 && data[count]["price"] <= 18){
      priceRangeItems.push(data[count]);
      console.log(data[count]["title"]);
    }
    count = count + 1;
  }

  return priceRangeItems;
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let count = 0;
  let currencyItems = [];

  while(count < data.length) {
    if(data[count]["currency_code"] === "GBP"){
      currencyItems.push(data[count]);
      console.log(data[count]["title"] + " costs " + Math.round(data[count]["price"]) + " pounds.");
    }
    count = count + 1;
  }
  return currencyItems;

}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let count = 0;
  let items = [];
  while(count < data.length) {
    let innerCount = 0;
    while(innerCount < data[count]["materials"].length){
      if(data[count]["materials"][innerCount] === "wood"){
        items.push(data[count]);
        console.log(data[count]["title"]);
      }
      innerCount = innerCount + 1;
    }

    count = count + 1;
  }
  console.log(items);
  return items;
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let count = 0;
  let items = [];
  while(count < data.length) {
    if(data[count]["materials"].length >= 8){
      items.push(data[count]);
      console.log(data[count]["title"]);
      let innerCount = 0;
      while(innerCount < data[count]["materials"].length){
        console.log("- " + data[count]["materials"][innerCount]);
        innerCount = innerCount + 1;
      }
    }
    count = count + 1;
  }

  return items;

}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let count = 0;
  let items = [];

  while(count < data.length) {
    if(data[count]["who_made"] == "i_did"){
      items.push(data[count]);
    }
    count = count + 1;
  }
  console.log(items.length + " items were made by their sellers.");
  return items;

}
