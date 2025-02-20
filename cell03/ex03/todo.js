var div = document.getElementById("ft_list");
var button = document.getElementById("button");

// Tableau pour stocker les tâches
var todos = [];

function myFunction() {
    let todo = prompt("Veuillez entrer une nouvelle to do");
    if (todo != null && todo.trim() !== "") {
        // Ajouter la tâche au début du tableau
        todos.unshift(todo);
        div.innerHTML = '';  // Réinitialise la liste  
        todos.forEach(function(task) {
            var taskElement = document.createElement("div");
            taskElement.textContent = task;
            taskElement.style.cursor = 'pointer';
            taskElement.addEventListener("click", function() {
            const result = confirm("Voulez vous vraiment supprimer la to do : " + task + " ? ");
            if (result){
                div.removeChild(taskElement);
            }
        });
        div.appendChild(taskElement);
      });
    }
  }  