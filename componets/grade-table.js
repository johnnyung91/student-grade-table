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
            tBody.appendChild(this.renderGradeRow(grades[i], this.getExistingGrade, this.deleteGrade));
        }
        if (!grades.length) {
            this.noGradesElement.classList.remove("d-none");
        } else {
            this.noGradesElement.classList.add("d-none");
        }
        console.log(grades); //Not needed
    }

    onDeleteClick(deleteGrade) {
        this.deleteGrade = deleteGrade;
    }

    onEditClick(getExistingGrade) {
        this.getExistingGrade = getExistingGrade;
    }

    renderGradeRow(data, getExistingGrade, deleteGrade) {
        var dataName = document.createElement("td");
        dataName.textContent = data.name;

        var dataCourse = document.createElement("td");
        dataCourse.textContent = data.course;

        var dataGrade = document.createElement("td");
        dataGrade.textContent = data.grade;

        var dataOperations = document.createElement("td");

        var editButton = document.createElement("i");
        editButton.classList.add("fas", "fa-edit", "fa-lg", "pr-5");
        editButton.addEventListener("click", function() {
            getExistingGrade(data);
        });

        var deleteButton = document.createElement("i");
        deleteButton.classList.add("fas", "fa-trash", "fa-lg","pr-5");
        deleteButton.addEventListener("click", function() {
            deleteGrade(data.id);
        });

        dataOperations.append(editButton, deleteButton);

        var dataRow = document.createElement("tr");
        dataRow.append(dataName, dataCourse, dataGrade, dataOperations); //using jQuery

        return dataRow;
    }
}
