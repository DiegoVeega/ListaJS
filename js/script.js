window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             let element1 = document.createElement("button");
             let element2 = document.createElement("button");
             let texto= task;
             element.innerText = texto;
             element.appendChild(document.body.appendChild(element1));
             element1.innerHTML='Realizada.';
             element.appendChild(document.body.appendChild(element2));
             element2.innerHTML='Eliminar.';
             /**Boton para eliminar tarea de la lista */
             element2.addEventListener("click", function(){
                console.log(this);
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });
             /**Boton para marcar tarea como realizada (Trachar) */
             element1.addEventListener("click", function(){
                element.innerHTML=texto.strike();
             });

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }