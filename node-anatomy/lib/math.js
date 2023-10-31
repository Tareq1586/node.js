/*
 * Title: Math library
 * Description: Utility library for performing math-related functions
 * Author: Md. Tareq Munawar
 * Date: 29/10/2023
 * 
*/

// Math object- module scaffolding
const math = {};

// Funtion to generte a random number
math.getRandomNumber = function getRandomNumber(min, max){
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

// Export the library
module.exports = math;