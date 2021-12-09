function gradeEvaluation() {
    var x = parseFloat(document.getElementById('grade').value);
    if (x >= 99 && x <= 100) {
       document.getElementById("gradefinal").textContent = "Your Average is 1.00";
    } else if (x >= 96 && x <= 98) {
        document.getElementById("gradefinal").textContent = "Your Average is 1.25";

    } else if (x >= 93 && x <= 95) {
        document.getElementById("gradefinal").textContent = "Your Average is 1.50";

    } else if (x >= 90 && x <= 92) {
        document.getElementById("gradefinal").textContent = "Your Average is 1.75";

    } else if (x >= 86 && x <= 89) {
        document.getElementById("gradefinal").textContent = "Your Average is 2.00";

    } else if (x >= 83 && x <= 85) {
        document.getElementById("gradefinal").textContent = "Your Average is 2.25";

    } else if (x >= 80 && x <= 82) {
        document.getElementById("gradefinal").textContent = "Your Average is 2.5";

    } else if (x >= 76 && x <= 79) {
        document.getElementById("gradefinal").textContent = "Your Average is 2.75";

    } else if (x <= 75 && x == 73) {
        document.getElementById("gradefinal").textContent = "Your Average is 3.00";

    } else if (x >= 50 && x <= 74) {
        document.getElementById("gradefinal").textContent = "Your Average is 5.00";

    } else {
        document.getElementById("gradefinal").textContent = "Invalid Input";
    }
}