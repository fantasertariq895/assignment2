// Importing the 'fs' (file system) module for file reading operations
const fs = require('fs');

// Class representing the data structure
class Data {
  // Constructor to initialize the 'students' and 'courses' properties
  constructor(students, courses) {
    this.students = students;
    this.courses = courses;
  }
}

// Variable to hold the instance of the 'Data' class
let dataCollection = null;

// Function to initialize the data by reading files and creating an instance of 'Data' class
function initialize() {
  // Returning a promise to handle asynchronous file reading
  return new Promise((resolve, reject) => {
    // Reading 'students.json' file
    fs.readFile('./data/students.json', 'utf8', (err, studentDataFromFile) => {
      if (err) {
        // Rejecting the promise with an error message if file reading fails
        reject('Unable to read students.json');
        return;
      }

      // Reading 'courses.json' file
      fs.readFile('./data/courses.json', 'utf8', (err, courseDataFromFile) => {
        if (err) {
          // Rejecting the promise with an error message if file reading fails
          reject('Unable to read courses.json');
          return;
        }

        // Creating an instance of 'Data' class with parsed data from files
        dataCollection = new Data(JSON.parse(studentDataFromFile), JSON.parse(courseDataFromFile));
        // Resolving the promise with a success message
        resolve('Data initialization successful');
      });
    });
  });
}

// Function to retrieve all students
function getAllStudents() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.students.length > 0) {
      // Resolving the promise with the array of students if available
      resolve(dataCollection.students);
    } else {
      // Rejecting the promise with an error message if no students found
      reject('No students found');
    }
  });
}

// Function to retrieve TAs (Teaching Assistants)
function getTAs() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.students.length > 0) {
      // Filtering students to get only those with TA property as true
      const TAs = dataCollection.students.filter(student => student.TA === true);
      if (TAs.length > 0) {
        // Resolving the promise with the array of TAs if available
        resolve(TAs);
      } else {
        // Rejecting the promise with an error message if no TAs found
        reject('No TAs found');
      }
    } else {
      // Rejecting the promise with an error message if no students found
      reject('No students found');
    }
  });
}

// Function to retrieve all courses
function getCourses() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.courses.length > 0) {
      // Resolving the promise with the array of courses if available
      resolve(dataCollection.courses);
    } else {
      // Rejecting the promise with an error message if no courses found
      reject('No courses found');
    }
  });
}

// Exporting the functions to be used in other modules
module.exports = {
  initialize,
  getAllStudents,
  getTAs,
  getCourses,
};
