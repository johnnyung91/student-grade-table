class GradeForm {
    constructor(formElement) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener("submit", this.handleSubmit)
    }
    onSubmit(createGrade) {
        this.createGrade = this.createGrade;
    }
    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData(event.target);
    }
}
