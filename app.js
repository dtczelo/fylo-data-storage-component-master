let signature = document.getElementById("signature");

window.onload = function () {
    document.getElementById("loadBar").classList.add("onload");
    counter();
};

function counter() {
    const count = document.getElementById("count");
    let number = 0;
    let inc = function () {
        number === 185 ? clearInterval() : count.innerHTML = (number += 1) + "<span> GB LEFT</span>";
    };
    setInterval(() => inc(), 8)
}

signature.addEventListener("click", () => {
    signature.classList.toggle("signature-active")
});
