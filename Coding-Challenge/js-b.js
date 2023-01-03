// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
const calcAverage = (a,b,c) => a + b + c / 3 ;
// 2. Usethefunctiontocalculatetheaverageforbothteams
let avgDolhins = calcAverage(44,23,71);  // Dolphins score
let avgKoalas =  calcAverage(65,54,49);  // Koalas
// calcAverage(85,54,41);  // Dolphins score 
// calcAverage(23,34,27);  // Koalas
// console.log(avgDolhins, avgKoalas);
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
const checkWinner = (avgDolhins , avgKoalas) => avgDolhins >= 2 *  avgKoalas ? `Dolphins  wins (${avgDolhins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})` : avgKoalas >= 2 * avgDolhins ? `koalas wins ${avgKoalas.toFixed(2)} vs. ${avgDolhins.toFixed(2)}` : ` no team wins`



 
console.log(checkWinner(avgDolhins , avgKoalas))
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
avgDolhins = calcAverage(85,54,41);  // Dolphins score 
avgKoalas  = calcAverage(23,34,27);  // Koalas
console.log(checkWinner(avgDolhins,avgKoalas))
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100

const calcTip = bill => {
    let tip = bill > 50 && bill < 300 ? bill * 0.15 : 0.2 * bill;
    return  tip;
}
console.log(calcTip(100));

// 2. And now let's use arrays! So create an array 'bills' containing the test data below
const bills = [125,555,44];

// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[bills.length - 1])];

// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

// Test data: 125, 555 and 44
console.log(bills + "\n" + tips + "\n" + total)

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

