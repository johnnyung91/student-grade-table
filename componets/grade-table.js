class GradeTable {
    constructor(tableElement, noGradesElement) {
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
    }

    updateGrades(grades) {
        //Removes tbody children
        var tBody = this.tableElement.querySelector("tbody");
        while (tBody.firstChild) {
            tBody.removeChild(tBody.lastChild);
        }
        //Loop through grades and dynamically create tr
        for (var i = 0; i < grades.length; i++) {
            tBody.appendChild(this.renderGradeRow(grades[i], this.deleteGrade));
        }
        console.log(grades); //Not needed
    }

    onDeleteClick(deleteGrade) {
        this.deleteGrade = deleteGrade;
    }

    renderGradeRow(data, deleteGrade) {
        var dataName = document.createElement("td");
        dataName.textContent = data.name;

        var dataCourse = document.createElement("td");
        dataCourse.textContent = data.course;

        var dataGrade = document.createElement("td");
        dataGrade.textContent = data.grade;

        var dataDelete = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            console.log("hello")
            deleteGrade(data.id)
        })

        dataDelete.appendChild(deleteButton);

        var dataRow = document.createElement("tr");
        dataRow.append(dataName, dataCourse, dataGrade, dataDelete); //using jQuery

        return dataRow;
    }
}
