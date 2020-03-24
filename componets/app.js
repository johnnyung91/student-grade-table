class App {
    constructor(gradeTable, pageHeader, gradeForm) {
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
        this.deleteGrade = this.deleteGrade.bind(this);
        this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
        this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
        this.getExistingGrade = this.getExistingGrade.bind(this);
        this.editGrade = this.editGrade.bind(this)
        this.handleEditGradeError = this.handleEditGradeError.bind(this);
        this.handleEditGradeSuccess = this.handleEditGradeSuccess.bind(this);
    }

    //Methods related to getting grades
    getGrades() {
        $.ajax({
            method: "GET",
            url: "https://sgt.lfzprototypes.com/api/grades",
            headers: {
                "X-Access-Token": "mVY16rXc"
            },
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError
        });
    }

    handleGetGradesError(error) {
        console.error(error);
    }

    handleGetGradesSuccess(grades) {
        this.gradeTable.updateGrades(grades);
        //Average all grades
        var sum = 0;
        for (var i = 0; i < grades.length; i++) {
            sum += grades[i].grade;
        }
        var average = (sum / grades.length).toFixed(1); // average = Average of the grades
        if (isNaN(average)) {
            average = "--";
        }
        this.pageHeader.updateAverage(average);
    }

    //Methods related to adding a new grade
    createGrade(name, course, grade) {
        $.ajax({
            method: "POST",
            url: "https://sgt.lfzprototypes.com/api/grades",
            data: {
                name: name,
                course: course,
                grade: grade
            },
            headers: {
                "X-Access-Token": "mVY16rXc"
            },
            success: this.handleCreateGradeSuccess,
            error: this.handleCreateGradeError
        });
    }

    handleCreateGradeError(error) {
        console.error(error);
    }

    handleCreateGradeSuccess() {
        this.getGrades();
    }

    //Methods related to deleting a grade
    deleteGrade(id) {
        $.ajax({
            method: "DELETE",
            url: "https://sgt.lfzprototypes.com/api/grades/" + id,
            headers: {
                "X-Access-Token": "mVY16rXc"
            },
            success: this.handleDeleteGradeSuccess,
            error: this.handleDeleteGradeError
        });
    }

    handleDeleteGradeError(error) {
        console.error(error);
    }

    handleDeleteGradeSuccess() {
        this.getGrades();
    }

    //Methods related to editing a grade
    getExistingGrade(data) {
        this.gradeForm.startEditing(data)
    }

    editGrade(id, name, course, grade) {
        $.ajax({
            method: "PATCH",
            url: "https://sgt.lfzprototypes.com/api/grades/" + id,
            data: {
                name: name,
                course: course,
                grade: grade
            },
            headers: {
                "X-Access-Token": "mVY16rXc"
            },
            success: this.handleEditGradeSuccess,
            error: this.handleEditGradeError
        });
    }

    handleEditGradeError(error) {
        console.error(error);
    }

    handleEditGradeSuccess() {
        this.getGrades();
    }

    start() {
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade);
        this.gradeForm.onEdit(this.editGrade);
        this.gradeTable.onDeleteClick(this.deleteGrade);
        this.gradeTable.onEditClick(this.getExistingGrade);
    }
}
