//DOM Queries
var table = document.querySelector(".table");
var header = document.querySelector("header");
var form = document.querySelector("form");
var noGradeText = document.querySelector("p");

var newForm = new GradeForm(form);
var newHeader = new PageHeader(header);
var newGradeTable = new GradeTable(table, noGradeText);
var newApp = new App(newGradeTable, newHeader, newForm);

newApp.start();
