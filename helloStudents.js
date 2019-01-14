'use strict'

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1




//read the students.json file

const students = require("./students.json")


//print the student the name with hello

const say = function (message) {
    console.log(message)
}


students.forEach(function (student) {

    say(`hello  ${student.firstName} ${student.lastName}`)
})


//print the number of last name starting with letter D


const jsonstudent = JSON.stringify(students)

const counter = 0
for (int i = 0; i < jsonstudent(lastName).length(); i++) {
    if (jsonstudent(lastName).charAt(i)) {
        counter++
    }

    console.log("Count of last names start with D is" + counter)
}
