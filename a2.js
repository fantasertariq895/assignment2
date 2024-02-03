/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _Fantaser Tariq__ Student ID: __134314236_____ Date: __Feb 3rd, 2024_______
*
********************************************************************************/ 

// Importing the collegeData module
const collegeData = require('./modules/collegedata');

// Initializing the collegeData module
collegeData.initialize()
  .then(successMessage => {
    // Logging success message when data initialization is successful
    console.log(successMessage);

    // Testing functions

    // Retrieving all students
    collegeData.getAllStudents()
      .then(students => console.log(`Successfully retrieved ${students.length} students`))
      .catch(error => console.error(error));

    // Retrieving TAs
    collegeData.getTAs()
      .then(TAs => console.log(`Successfully retrieved ${TAs.length} TAs`))
      .catch(error => console.error(error));

    // Retrieving all courses
    collegeData.getCourses()
      .then(courses => console.log(`Successfully retrieved ${courses.length} courses`))
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
