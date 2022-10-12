const shop = document.getElementById("shop");
const drobdv = document.getElementById("drobdv");
const minus = document.getElementById("minus");
const pulus = document.getElementById("pulus");
const number = document.getElementById("number");
const modal = document.querySelector(".madal");
const none = document.querySelector('.none');
let add_number = 1;
minus.addEventListener("click", () => {
    add_number++
  number.innerText = add_number;
});
pulus.addEventListener("click", () => {
    if (add_number > 0) {
    add_number--
        number.innerText = add_number;
    }
});

drobdv.addEventListener("click", () => {
    modal.classList.toggle("none")
});