class PageHeader {
    constructor(headerElement) {
        this.headerElement = headerElement;
    }

    updateAverage(newAverage) {
        var badgeElement = document.querySelector(".badge");
        badgeElement.textContent = newAverage;
    }
}
