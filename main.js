//DOM Queries
var table = document.querySelector(".table");
var header = document.querySelector("header")

var newHeader = new PageHeader(header)
var newGradeTable = new GradeTable(table)
var newApp = new App(newGradeTable, newHeader);

newApp.start();
