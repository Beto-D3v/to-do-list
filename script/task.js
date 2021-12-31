let addItem = document.getElementsByTagName("input")[1]
let delAll = document.getElementById("delAll")


addItem.addEventListener("click", addList)
addItem.addEventListener("click", cleanText)


function addList(){
    
    let textId = document.getElementsByTagName("input")[0].value
    let list = []
    let id = String(Math.random()) + String(Math.random())

    if(textId != "") {
        textId.innerHTML = ""
        let buttonX = document.createElement("button")
        let taskList = document.createElement("li")
        taskList.setAttribute('id', id)
        buttonX.addEventListener("click", ()=>delTask(id))
        taskList.innerHTML = textId 
        buttonX.innerText = "X"
        let uList = document.getElementById("taskList").appendChild(taskList).appendChild( buttonX)
        list.push(uList)   
}   
    else{
        alert("Please, before clicking, put your task in the text field!")
    }

}

function cleanText(){
let textId = document.getElementsByTagName("input")[0]

if(textId.value.length != 0){
    textId.innerHTML = ""
}

}

const delTask = (id) =>{
    document.getElementById(id).remove()
}

const deleteAll = () =>{
    const ul = document.getElementById("taskList")
    ul.innerHTML = ""
  }

 delAll.addEventListener("click", deleteAll)

addEventListener('click', () => {
    const ul = document.getElementById("taskList").innerHTML
    localStorage.setItem('saveList',ul)
})

addEventListener('DOMContentLoaded', () =>{
    const saveUl = localStorage.getItem('saveList')
    document.getElementById("taskList").innerHTML = saveUl
})
  
addEventListener('keypress',e=>{
    if(e.key=="Enter") addList()
})
