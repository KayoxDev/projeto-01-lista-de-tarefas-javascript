const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function adicionarTarefa() {
    if (inputBox.value.trim() === '') {
        alert("Você precisa escrever alguma coisa!");
    }
    else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    salvarData();
}
inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("marcada");
        salvarData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        salvarData()
    }
}, false);

function salvarData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function mostrarTarefas() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
mostrarTarefas();