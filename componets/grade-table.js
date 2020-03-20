class GradeTable {
    constructor(tableElement) {
        this.tableElement = tableElement;
    }

    updateGrades(grades) {
        //Removes tbody children
        var tBody = this.tableElement.querySelector("tbody");
        while (tBody.firstChild) {
            tBody.removeChild(tBody.lastChild);
        }
        //Loop through grades and dynamically create tr
        for (var i = 0; i < grades.length; i++) {
            var studentName = document.createElement("td");
            studentName.textContent = grades[i].name;
            var studentCourse = document.createElement("td");
            studentCourse.textContent = grades[i].course;
            var studentGrade = document.createElement("td");
            studentGrade.textContent = grades[i].grade;
            var studentRow = document.createElement('tr')
            studentRow.append(studentName, studentCourse, studentGrade) //using jQuery

            tBody.appendChild(studentRow)
        }
        console.log(grades); //Not needed
    }
}
