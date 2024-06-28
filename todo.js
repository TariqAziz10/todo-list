let inputs = document.getElementById("inp");

let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Tasks")
    }else{
        let newE = document.createElement("ul");
        newE.innerHTML = `${inputs.value} <i class="fa-solid fa-trash-can"></i>`;
        text.appendChild(newE);
        inputs.value = "";
        
        newE.querySelector("i").addEventListener("click" , function(){
            newE.remove()
            
        });
        
    }
}
function saveData(){
    localStorage.setItem("data", newE.innerHTML);
}
function showTask(){
    newE.innerHTML = localStorage.getItem("data");
}
showTask();