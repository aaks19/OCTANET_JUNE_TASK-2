const inputBox = document.getElementById("inputb");
const listCon = document.getElementById("listcon");
function AddTask(){
    if(inputBox.value === ''){
        alert("Please write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCon.appendChild(li);

        // edit button
        let editbutton = document.createElement("span");
        editbutton.className = "edit-btn";
        editbutton.innerHTML = "&#9998"

        // delete button
        li.appendChild(editbutton);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}



// click function
listCon.addEventListener("click",function(e){
    
    if(e.target.classList.contains("edit-btn")){
        let taskText = e.target.parentElement.firstChild;
        let newText = prompt("Edit task:", taskText.textContent);
        if (newText !== null) {
          taskText.textContent = newText;
          saveData();
        }
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listCon.innerHTML);
}

function showList(){
    listCon.innerHTML = localStorage.getItem("data")
}
showList();
