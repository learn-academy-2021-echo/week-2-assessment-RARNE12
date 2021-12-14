// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.split(""))

// a) Your answer:  The log will convert the string into an array using the split method. ['E', 'c', 'h', 'o', ' ', '2', '0', '2', '1']
// b) Verify and explain:  The accessor method of, .split(""), conveted the string "Echo 2021", into an array of individual string characters. 


// --------------------2) What will this log?

function greeter(name) {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This log will more than likely yield a result of undefined as the string "LEARN Student"has not been delcared in this code, also it does not have return.

//(b) Verify and explain:  The code ran undefined as indicated in my answer. The functions does not meet the criterias of a function. The code is missing, the single equal sign, the arrow function syntax, and the names are not camelCased.  In retrospect, I took this code more as a function but, I know it is an string interpolation, please advise :) 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:   The log will return the the values of the array multiplied by 2: [8, 19, 12, 14, 16]
// b) Verify and explain: The Higher Order Function, .map, interates through the array with the multiplieer of 2 and returns each element within the array, doubling in value; creates a new array.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)   

// a) Your answer: The log will return a filtered version of the array, resulting in the return of only the odd elements in the arraly; {11, 13, 15. 
// b) Verify and explain:  The .filter function loops through each element of the array and will only return the truthy values. 


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: This log will only return the "JavaScript" because of the argument is set to return the string at the zero lenghth 
// b) Verify and explain: JavaScript was the correct answer, and I know ith has to do with the key, but I do not have a complete undeerstanding of the key method. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: I believe this will log: (student: "George", cohort: "Delta", year: 2021)
// b) Verify and explain: The constructor seems to have created and a new object ("George") within the class of class Learn, thus initializing an object instance into the class.s.
