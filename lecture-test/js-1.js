// LECTURE: Values and Variables
// 1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
let country = 'ethiopia', continent = 'any thing', population= 100000;
// 2. Logtheirvaluestotheconsole
console.log(country,continent,population);

// LECTURE: Data Types
// 1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
let isIsland = false, language;
// 2. Logthetypesof'isIsland','population','country'and'language' to the console
console.log(typeof isIsland,typeof population, typeof language);

// LECTURE: let, const and var
// 1. Setthevalueof'language'tothelanguagespokenwhereyoulive(some countries have multiple languages, but just choose one)
language='amharic;'
// 2. Thinkaboutwhichvariablesshouldbeconstvariables(whichvalueswillnever change, and which might change?). Then, change these variables to const.
// 3. Trytochangeoneofthechangedvariablesnow,andobservewhathappens

// LECTURE: Basic Operators
// 1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?
console.log(`each half will be ${population / 2}`)
// 2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole
Console.log|(population + 1)
// 3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
// Finland?
population < 6000000 ? console.log("my country has less population than finland") : console.log("my country has more population than finland");
// 4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
// have less people than the average country?
population < 33000000 ? console.log("my country has less population than the average") : console.log("my country has more or same average  population")
// 5. Basedonthevariablesyoucreated,createanewvariable'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
let description = "Portugal is in Europe, and its 11 million people speak portuguese";
//   The Complete JavaScript Course 5
// LECTURE: Strings and Template Literals
// 1. Recreatethe'description'variablefromthelastassignment,thistime using the template literal syntax
description = `Portugal is in Europe, and its 11 million people speak portuguese`
// LECTURE: Taking Decisions: if / else Statements
// 1. Ifyourcountry'spopulationisgreaterthat33million,logastringlikethistothe console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
// 2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original
// LECTURE: Type Conversion and Coercion
// 1. Predicttheresultofthese5operationswithoutexecutingthem:
//      '9' - '5';  => 4
//      '19' - '13' + '17'; => 617
//      '19' - '13' + 17; => 23
//      '123' < 57; => false
//      5 + 6 + '4' + 9 - 4 - 2; => 1143
// 2. Executetheoperationstocheckifyouwereright
//   The Complete JavaScript Course 6

// LECTURE: Equality Operators: == vs. ===
// 1. Declareavariable'numNeighbours'basedonapromptinputlikethis: prompt('How many neighbour countries does your country have?');
// 2. Ifthereisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)
// 3. Useanelse-ifblocktolog'Morethan1border'incase'numNeighbours' is greater than 1
// 4. Useanelseblocktolog'Noborders'(thisblockwillbeexecutedwhen 'numNeighbours' is 0 or any other value)
// 5. Testthecodewithdifferentvaluesof'numNeighbours',including1and0.
// 6. Change==to===,andtestthecodeagain,withthesamevaluesof
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally,convert'numNeighbours'toanumber,andwatchwhathappensnow
// when you input 1
// 8. Reflectonwhyweshouldusethe===operatorandtypeconversioninthis
// situation
// LECTURE: Logical Operators
// 1. Commentoutthepreviouscodesothepromptdoesn'tgetintheway
// 2. Let'ssaySarahislookingforanewcountrytolivein.Shewantstoliveina
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. WriteanifstatementtohelpSarahfigureoutifyourcountryisrightforher.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. Ifyoursistherightcountry,logastringlikethis:'YoushouldliveinPortugal:)'.If
// not, log 'Portugal does not meet your criteria :('
// 5. Probablyyourcountrydoesnotmeetallthecriteria.Sogobackandtemporarily
// change some variables in order to make the condition true (unless you live in Canada :D)
//   The Complete JavaScript Course 7

// LECTURE: The switch Statement
// 1. Useaswitchstatementtologthefollowingstringforthegiven'language': chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'
// LECTURE: The Conditional (Ternary) Operator
// 1. Ifyourcountry'spopulationisgreaterthan33million,usetheternaryoperator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
// 2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original







