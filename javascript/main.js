const adviceNum = document.querySelector("#advice-number");
const adviceText = document.querySelector("p");
const button = document.querySelector(".button");
window.onload = showQuote;
button.addEventListener("click", showQuote);
function showQuote() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => data.slip)
        .then((data) => {
            adviceNum.textContent = data.id;
            adviceText.textContent = `"${data.advice}"`;
        })
        .catch((error) => {
            alert(`Error ${error}`);
        })
}