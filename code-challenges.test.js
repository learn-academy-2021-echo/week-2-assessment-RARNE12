// ASSESSMENT 2: Coding Practical Questions with Jest

const { getConsoleOutput } = require("@jest/console")
const { expect } = require("@jest/globals")
const { conditionalExpression } = require("babel-types")
const { create } = require("combined-stream")
const { array } = require("yargs")

// const { jest } = require("@jest/globals")
// const { object } = require("webidl-conversions")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// Pseudo code:
// 1. Use Jest test: 
// describe method: provides an argument of the set function.
// test method: provides an argument in plain words, explains what the function does.
// expect method: provides an argument of the function call, set .toEqual().
// 2. Declare function name
// 3. Test divisability of 3 or not 

// a) Create a test with expect statements for each of the variables provided.

describe("divByThree", () => {
    var num1 = 15
    // Expected output: "15 is divisible by three"
    var num2 = 0
    // Expected output: "0 is divisible by three"temperature", "database", "chopsticks", "mango", "deduction"
    var num3 = -7
    // Expected output: "-7 is not divisible by three"

    it("decides if the number is evenly divisble by three or not", () => {
        expect(divByThree(num1)).toEqual("15 is divisible by three")
        expect(divByThree(num2)).toEqual("0 is divisible by three")
        expect(divByThree(num3)).toEqual("-7 is not divisible by three")
    })
})
// Result: Test failed, divByThree is not defined.

// b) Create the function that makes the test pass.

//Pseudo code: 
// Create a function diveByThree
// this function take a number as an input argument 
// verify if a number is divByThree 


// const divByThree = (number) => {
//     if (number % 3 === 0) {
//         return `${number} is divisible by three`

//     } else if (number % 3 !== 0) {
//         return `${number} is not divisible by three`
//     }

//Result: Test passed; divByThree defined. 



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("randomNouns", () => {
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expect output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expect output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


    it("decide function that takes in an array of words and returns an array with all the words capitalized", () => {
        expect(randomNouns1.upperCase("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew")
        expect(randomNouns2.upperCase("Temperature", "Database", "Chopsticks", "Mango", "Deduction")

    })
    // 
    // Test had a faulty failure due to the return in line 103 which is blank. Not sure what is in that line. 

    // b) Create the function that makes the test pass.


    const randomNouns(array) = => {
        let randomNouns1 = ("streetlamp", "potato", "teeth", "conclusion", "nepheww");

        console.log("randomNouns1.toUpperCase())

        temperature", "database", "chopsticks", "mango", "deduction
        let randomNouns2 = (temperature", "database", "chopsticks", "mango", "deduction)
        console.log(randomNouns1.toUpperCase);


        // I got a litte confused on how to create this function. I save this one for last, my terminal locked up on VS 


        // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

        // create a function called firstVowel
        // have function take in a parameter with string getConsoleOutput
        // use if conditionalExpression
        // use of .push and .index 

        // a) Create a test with expect statements for each of the variables provided.


        describe("firstVowel", () => {
            var vowelTester1 = "learn"
            expect(firtvowelTester1).toEqual(1)
            expect(firtvowelTester1).toEqual(0)
            expect(firtvowelTester1).toEqual(2)

            var vowelTester2 = "academy"
            // Expected output: 0
            var vowelTester3 = "challenges"
            // Expected output: 2

            // b) Create the function that makes the test pass. 
            const first vowel = string => {
                let vowArr = []
                if (string.indexOf("a") !== -1) {
                    vowArr.push(string.indexOf("a"))
                } if (string.indexOf("e") !== -1) {
                    vowArr.push(string.indexOf("e"))
                } if (string.indexOf("i") !== -1) {
                    vowArr.push(string.indexOf("i"))
                } if (string.indexOf("o") !== -1) {
                    vowArr.push(string.indexOf("o"))
                } if (string.indexOf("u") !== -1) {
                    vowArr.push(string.indexOf("u"))
                }
                return Math.min(...vowArr)
            }