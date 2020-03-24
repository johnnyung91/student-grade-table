class GradeForm {
    constructor(formElement) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener("submit", this.handleSubmit);
    }
    onSubmit(createGrade) {
        this.createGrade = createGrade;
    }
    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData(event.target);
        var name = formData.get("name");
        var course = formData.get("course");
        var grade = formData.get("grade");
        this.createGrade(name, course, grade);
        event.target.reset();
    }

    startEditing(data) {
        var formHeading = document.querySelector("form h3")
        var updateButton = document.querySelector("input.btn-success")
        var nameValue = document.getElementById("student-name-input");
        var nameCourse = document.getElementById("student-name-course")
        var nameGrade = document.getElementById("student-name-grade")

        formHeading.textContent = "Update Student"
        nameValue.value = data.name;
        nameCourse.value = data.course;
        nameGrade.value = data.grade
        updateButton.value = "Update"
    }
}
