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
