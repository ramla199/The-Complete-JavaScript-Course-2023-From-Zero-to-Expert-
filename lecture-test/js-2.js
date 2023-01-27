// LECTURE: Functions
// 1. Writeafunctioncalled'describeCountry'whichtakesthreeparameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
function describeCountry(country, population, capitalCity) {
 return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
// 2. Callthisfunction3times,withinputdatafor3differentcountries.Storethe returned values in 3 different variables, and log them to the console
let country1 = describeCountry('Ethiopia', 3, 'Addis Ababa');
let country2 = describeCountry('Somalia', 2, 'Mogadishu');
let country3 = describeCountry('UK', 4, 'London');
console.log(country1, '\n',country2, '\n',country3)
// LECTURE: Function Declarations vs. Expressions
// 1. Theworldpopulationis7900millionpeople.Createafunctiondeclaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
function percentageOfWorld1(population) {
    return  ((population * 100)/ 7900).toFixed(1)
}
// console.log(percentageOfWorld1(1441));
// 2. Tocalculatethepercentage,dividethegiven'population'valueby7900 and then multiply by 100


// 3. Call'percentageOfWorld1'for3populationsofcountriesofyourchoice, store the results into variables, and log them to the console
let world11 = percentageOfWorld1(2342);
let world12 = percentageOfWorld1(6543);
let world13 = percentageOfWorld1(5467);
console.log(world11, '\n', world12, '\n', world13);
// 4. Createafunctionexpressionwhichdoestheexactsamething,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
const percentageOfWorld2 = function(population) {
    return `this country  has ${population} million people, so it's about ${((population * 100)/ 7900).toFixed(1)}% `
}
let world21 = percentageOfWorld2(2342);
let world22 = percentageOfWorld2(6543);
let world23 = percentageOfWorld2(5467);
console.log(world21, '\n', world22, '\n', world23);
// LECTURE: Arrow Functions
// 1. Recreatethelastassignment,butthistimecreateanarrowfunctioncalled
//    'percentageOfWorld3'
//   The Complete JavaScript Course 14
const percentageOfWorld3 = population => ((population * 100)/ 7900).toFixed(1)
let world31 = percentageOfWorld1(2342);
let world32 = percentageOfWorld1(6543);
let world33 = percentageOfWorld1(5467);
console.log(world31, '\n', world32, '\n', world33);

// LECTURE: Functions Calling Other Functions
// 1. Createafunctioncalled'describePopulation'.Usethefunctiontypeyou like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
const describePopulation = (country,population) => {
    return `${country}  has ${population} million people, so it's about ${percentageOfWorld1}% of the world`
}

// 2. Tocalculatethepercentage,'describePopulation'callthe 'percentageOfWorld1' you created earlier

// 3. Call'describePopulation'withdatafor3countriesofyourchoice
console.log(describePopulation('China', 1441))
console.log(describePopulation('UK', 2342))
console.log(describePopulation('India', 5467))


// LECTURE: Introduction to Arrays
// 1. Createanarraycontaining4populationvaluesof4countriesofyourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'
const populations = [2340, 4569, 5543,3245];
// 2. Logtotheconsolewhetherthearrayhas4elementsornot(trueorfalse)
console.log(populations.length >= 4);
// 3. Createanarraycalled'percentages'containingthepercentagesofthe
// world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
const percentages = [((populations[0] * 100)/ 7900), ((populations[1] * 100)/ 7900), ((populations[2] * 100)/ 7900), ((populations[3] * 100)/ 7900)];
console.log(percentages,populations);
// LECTURE: Basic Array Operations (Methods)
// 1. Createanarraycontainingalltheneighbouringcountriesofacountryofyour choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
const neighbouring = ['Somalia','kenya','sudan']
// 2. Atsomepoint,anewcountrycalled'Utopia'iscreatedintheneighbourhoodof your selected country. So add it to the end of the 'neighbours' array
neighbouring.push('Utopia');
// 3. Unfortunately,aftersometime,thenewcountryisdissolved.Soremoveitfrom the end of the array
neighbouring.pop();
// 4. Ifthe'neighbours'arraydoesnotincludethecountry‘Germany’,logtothe console: 'Probably not a central European country :D'
console.log(!neighbouring.includes('Germany') ? 'Probably not a central European country :D' : 'central European countries');
// 5. Changethenameofoneofyourneighbouringcountries.Todothat,findthe index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
//   The Complete JavaScript Course 15
neighbouring.includes('kenya') ? neighbouring[neighbouring.indexOf('kenya')]  = 'Republic od kenya' : console.log('none');
console.log(neighbouring);
// LECTURE: Introduction to Objects
// 1. Createanobjectcalled'myCountry'foracountryofyourchoice,containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)
const myCountry = {
    country: 'Ethiopia',
    capital: 'Addis Ababa',
    language: 'Amharic',
    population: 7,
    neighbouring: ['Somalia','Kenya', 'Sudan'],
    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbouring.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function() {
        this.isIsland = this.neighbouring.length <= 0 ? true : false;
    }
}
// LECTURE: Dot vs. Bracket Notation
// 1. Usingtheobjectfromthepreviousassignment,logastringlikethistothe console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbouring.length} neighbouring countries and a capital called ${myCountry.capital}.`);
// 2. Increasethecountry'spopulationbytwomillionusingdotnotation,andthen decrease it by two million using brackets notation.
myCountry.population += 2;
console.log(myCountry['describe']());
// LECTURE: Object Methods
// 1. Addamethodcalled'describe'tothe'myCountry'object.Thismethod will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
// 2. Callthe'describe'method
// 3. Addamethodcalled'checkIsland'tothe'myCountry'object.This
// method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

// LECTURE: Iteration: The for Loop
// 1. Thereareelectionsinyourcountry!Inasmalltown,thereareonly50voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
// for(let voter = 0; voter <= 50; voter++){
    // console.log(`Voter number ${voter} is currently voting`);
// }
//   The Complete JavaScript Course 16
// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let'sbringbackthe'populations'arrayfromapreviousassignment
// const populations = [2340, 4569, 5543,3245];
// 2. Useaforlooptocomputeanarraycalled'percentages2'containingthe
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
let percentages2=[];
// console.log(percentageOfWorld1());
for(let i=0; i <  populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
} 
console.log(percentages2);
// 3. Confirmthat'percentages2'containsexactlythesamevaluesasthe
// 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution isf

// LECTURE: Looping Backwards and Loops in Loops
// 1. Storethisarrayofarraysintoavariablecalled'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Logonlytheneighbouringcountriestotheconsole,onebyone,nottheentire arrays. Log a string like 'Neighbour: Canada' for each country
// 3. Youwillneedaloopinsidealoopforthis.Thisisactuallyabittricky,sodon't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

// LECTURE: The while Loop
// 1. Recreatethechallengefromthelecture'LoopingArrays,BreakingandContinuing', but this time using a while loop (call the array 'percentages3')
// 2. Reflectonwhatsolutionyoulikebetterforthistask:theforlooporthewhile loop?