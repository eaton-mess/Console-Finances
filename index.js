//given numbers
var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

//function to caculate total number of months
//takes one parameter 'data'
//return statement gives us the length property of the 'data' array above, returning the number of elements in the array
//total months is assigned '86' here because there are that number of elemtents in the array, each representing a month's data
function calculateTotalMonths(data) {
  return data.length;
}

//function to calculate net total amount of profits/losses
//takes array 'data' and calculates net total of profits/losses
//the 'let' makes the variable a zero, it will be used to gather the net total
//using for.each over the data array. For each entry it adds the value at index 1 to the total variable
//the entry[1] corresponds to the profit/losses value of that current month
function calculateNetTotal(data) {
  let total = 0;
  data.forEach(entry => {
    total += entry[1];
  });
  return total;
}

//function to calcuklate average change in profits/losses
//for loops that starts from index '1' and goes through each elemtent of the data array
//for each iterati0on, it caculates the profit/losses between the current month (data[i][1]) and the previous month (data[i-1][1])
//data[i][1] represents profits/losses value of the current month
//data[i - 1][1] represents profits/losses value of the previous month
//the result of subtracting previous month's value from the current is added to the 'totalChange' variable. 
function calculateAverageChange(data) {
  let totalChange = 0;
  for (let i = 1; i < data.length; i++) {
    totalChange += data[i][1] - data[i - 1][1];
  }
  return totalChange / (data.length - 1);
}

//function to find the greatest increase in profits/losses 
//creates variable greatestIncrease as an object with 'date' and 'amount', it uses these to keep track of months with the greatest increase in profits/losses
//uses for loop starting from index 1
//using the method previously for the data representation of current and previous months
//if the calculated change is greater than the current greatest increase, the 'if' variable below will update the greatestIncrease with the new date and value
function findGreatestIncrease(data) {
  let greatestIncrease = { date: "", amount: 0 };
  for (let i = 1; i < data.length; i++) {
    const change = data[i][1] - data[i - 1][1];
    if (change > greatestIncrease.amount) {
      greatestIncrease.date = data[i][0];
      greatestIncrease.amount = change;
    }
  }
  return greatestIncrease;
}

//function to find the greatest decrease in profits.losses
//uses the same methodology as the amount, but for decreases instead
//if variable is changed from more than to less than to reflect this change
function findGreatestDecrease(data) {
  let greatestDecrease = { date: "", amount: 0 };
  for (let i = 1; i < data.length; i++) {
    const change = data[i][1] - data[i - 1][1];
    if (change < greatestDecrease.amount) {
      greatestDecrease.date = data[i][0];
      greatestDecrease.amount = change;
    }
  }
  return greatestDecrease;
}

//
console.log("Financial Analysis");
console.log("------------------------------------------------------------")
console.log("Total Months:", calculateTotalMonths(finances));
console.log("Total: $", calculateNetTotal(finances));

console.log("Average Change: $", calculateAverageChange(finances).toFixed(2));
//using 'to fixed' here returns a number with a specific number of decimal places, here it's two

//greatest increase in profits/losses
const greatestIncrease = findGreatestIncrease(finances);
console.log("Greatest Increase in Profits/Losses:", greatestIncrease.date, "($", greatestIncrease.amount, ")");

//greatest decrease in profits/losses
const greatestDecrease = findGreatestDecrease(finances);
console.log("Greatest Decrease in Profits/Losses:", greatestDecrease.date, "($", greatestDecrease.amount, ")");
