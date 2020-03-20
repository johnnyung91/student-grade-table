class App {
    constructor(gradeTable, pageHeader) {
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }

    handleGetGradesError(error) {
        console.error(error);
    }
    handleGetGradesSuccess(grades) {
        this.gradeTable.updateGrades(grades);
    }

    getGrades() {
        $.ajax({
            method: "GET",
            url: "https://sgt.lfzprototypes.com/api/grades",
            headers: {
                "X-Access-Token": "mVY16rXc"
            },
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError,
        })
    }

    start() {
        this.getGrades();
    }
}
