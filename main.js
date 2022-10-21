let Elinput = document.querySelector(".form-control");
let Ellist = document.querySelector(".list")
let ElBtn = document.querySelector(".btn")
let ElForm = document.querySelector(".form")


let arr  =[]
let son = 1 

ElForm.addEventListener("submit", function (evt){
  evt.preventDefault()
  
  let obj = {
    text:Elinput.value
  }
  arr.push(obj)
Elinput.value = "" 

  let id = document.createElement("span");
 id.setAttribute("class", "me-2");

  id.textContent = son++;

  
 const li =  document.createElement("li")
 li.setAttribute("class" , "items" )


 const elCheck =  document.createElement("input")
 elCheck.classList.add("form-check-input", "ms-3" , "me-2");
 elCheck.setAttribute("type", "checkbox");
 elCheck.setAttribute("class", "check");


 const elDelet =  document.createElement("button")
 elDelet.setAttribute("class" , "btndel" )
 elDelet.textContent="delete"

 const elAdd =  document.createElement("button")
 elAdd.setAttribute("class" , "btnAd" )
 elAdd.textContent="Add"


 
 li.textContent = obj.text
 li.prepend(id)
 li.append(elCheck)
 li.appendChild(elDelet)
 li.appendChild(elAdd)

 Ellist.appendChild(li)
 
 


} )


