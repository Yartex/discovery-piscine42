var div = document.getElementById("ft_list");
var button = document.getElementById("button");

// Fonction Cookies
function getCookie(name){
  let decodedCookies = decodeURIComponent(document.cookie);
  let cookiesArray = decodedCookies.split(';');
  for (let i = 0; i < cookiesArray.length; i++){
    let cookie = cookiesArray[i].trim();
    if(cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}
// Fonction def cookie
function setCookie(name, value, days) {
  let d = new Date();
  d.setTime(d.getTime() + (days *24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function updateTodoList() {
    div.innerHTML = '';  // Réinitialise la liste
    todos.forEach(function(task, index) {
        var taskElement = document.createElement("div");
        taskElement.textContent = task;
        taskElement.style.cursor = 'pointer';
        taskElement.addEventListener("click", function() {
            const result = confirm("Voulez-vous vraiment supprimer la to do : " + task + " ?");
            if (result) {
                // Supprimer la tâche du tableau
                todos.splice(index, 1); 
                // Mettre à jour les cookies
                setCookie("todos", JSON.stringify(todos), 7);
                updateTodoList();
            }
        });
        div.appendChild(taskElement);
    });
}
//Recuperation des to do
function loadTasksFromCookies(){
    todos = JSON.parse(getCookie("todos") || "[]");
    updateTodoList();
}
// Tableau pour stocker les tâches
var todos = [];

function myFunction() {
    let todo = prompt("Veuillez entrer une nouvelle to do");
    if (todo != null && todo.trim() !== "") {
        // Ajouter la tâche au début du tableau
        todos.unshift(todo);
        // MAJ cookies
        setCookie("todos", JSON.stringify(todos), 7);
        updateTodoList();
    }
}
//Chargement des taches
loadTasksFromCookies();