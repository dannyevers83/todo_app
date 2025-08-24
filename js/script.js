const input=document.getElementById("taskInput");
const btn=document.getElementById("addTaskBtn");
const list=document.getElementById("taskList");
btn.addEventListener("click",()=>{
    const taskText=input.value.trim();
    if(!taskText)return;
    const li=document.createElement("li");
    li.textContent=taskText;
    li.addEventListener("click",()=>li.classList.toggle("completed"));
    list.appendChild(li);
    input.value="";
    localStorage.setItem("tasks",JSON.stringify([...list.querySelectorAll("li")].map(li=>({text:li.textContent,completed:li.classList.contains("completed")}))));
});
const savedTasks=JSON.parse(localStorage.getItem("tasks")||"[]");
savedTasks.forEach(t=>{
    const li=document.createElement("li");
    li.textContent=t.text;
    if(t.completed)li.classList.add("completed");
    li.addEventListener("click",()=>li.classList.toggle("completed"));
    list.appendChild(li);
});