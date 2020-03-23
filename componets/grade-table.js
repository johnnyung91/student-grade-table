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
            tBody.appendChild(this.renderGradeRow(grades[i], this.editGrade, this.deleteGrade));
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

    onEditClick(editGrade) {
        this.editGrade = editGrade;
    }

    renderGradeRow(data, editGrade, deleteGrade) {
        var dataName = document.createElement("td");
        dataName.textContent = data.name;

        var dataCourse = document.createElement("td");
        dataCourse.textContent = data.course;

        var dataGrade = document.createElement("td");
        dataGrade.textContent = data.grade;

        var dataOperations = document.createElement("td");

        var editButton = document.createElement("button");
        editButton.setAttribute("type", "button")
        editButton.classList.add("btn", "btn-warning", "mr-1");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
            editGrade(data.id);
        })

        var deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button")
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            deleteGrade(data.id);
        });

        dataOperations.append(editButton, deleteButton);

        var dataRow = document.createElement("tr");
        dataRow.append(dataName, dataCourse, dataGrade, dataOperations); //using jQuery

        return dataRow;
    }
}
