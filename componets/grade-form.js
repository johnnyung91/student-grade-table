class GradeForm {
    constructor(formElement) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.formElement.addEventListener("submit", this.handleSubmit);
        this.formElement.addEventListener("reset", this.handleCancel);
        this.currentGrade = null;
        this.editingMode = false;
    }
    onSubmit(createGrade) {
        this.createGrade = createGrade;
    }

    onEdit(editGrade) {
        this.editGrade = editGrade;
    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData(event.target);
        var name = formData.get("name");
        var course = formData.get("course");
        var grade = formData.get("grade");
        if (this.editingMode) {
            this.editGrade(this.currentGrade, name, course, grade);
            this.resetForm();
            event.target.reset();
        } else {
            this.createGrade(name, course, grade);
            event.target.reset();
        }
    }

    handleCancel(event) {
        event.target.reset();
        this.resetForm();
    }

    startEditing(data) {
        this.editingMode = true;
        this.currentGrade = data.id;
        var formHeading = document.querySelector("form h3");
        var formButton = document.querySelector("input.btn-success");
        var nameValue = document.getElementById("student-name-input");
        var nameCourse = document.getElementById("student-name-course");
        var nameGrade = document.getElementById("student-name-grade");

        formHeading.textContent = "Update Student";
        nameValue.value = data.name;
        nameCourse.value = data.course;
        nameGrade.value = data.grade;
        formButton.value = "Update";
    }

    resetForm() {
        var formHeading = document.querySelector("form h3");
        var formButton = document.querySelector("input.btn-success");
        formHeading.textContent = "Add Student";
        formButton.value = "Add";
        this.currentGradeId = null;
        this.editingMode = false;
    }
}
