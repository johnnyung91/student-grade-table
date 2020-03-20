class App {
    constructor(gradeTable) {
        this.gradeTable = gradeTable;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }

    handleGetGradesError(error) {
        console.error(error);
    }
    handleGetGradesSuccess(grades) {
        console.log(grades);
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
