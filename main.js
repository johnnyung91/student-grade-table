//DOM Queries
var table = document.querySelector(".table");
var header = document.querySelector("header")
var form = document.querySelector("form")

var newForm = new GradeForm(form)
var newHeader = new PageHeader(header)
var newGradeTable = new GradeTable(table)
var newApp = new App(newGradeTable, newHeader, newForm);

newApp.start();
