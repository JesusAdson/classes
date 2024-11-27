function adicionaTarefa() {
  const inputTarefa = document.getElementById("inputTarefa");
  const descricaoTarefa = inputTarefa.value;

  if (descricaoTarefa === "") {
    alert("Por favor, insira uma tarefa!!!");

    return;
  }

  const liTarefa = document.createElement("li");
  liTarefa.textContent = descricaoTarefa;

  const ulListaTarefas = document.getElementById("listaTarefas");
  ulListaTarefas.appendChild(liTarefa);

  inputTarefa.value = "";
}
