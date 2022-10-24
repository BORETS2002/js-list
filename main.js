let Elinput = document.querySelector(".form-control");
let Ellist = document.querySelector(".list")
let ElBtn = document.querySelector(".btn")
let ElForm = document.querySelector(".form")


let arr  =[]
let son = 1 
console.log(arr);

const ElTest = function(array, box){

  box.innerHTML = "";
  array.forEach (  function ( element , i )   {
    arr[i].id = i;
    let id = document.createElement("span");
    id.setAttribute("class", "me-2");
    id.textContent = (arr[i].id + 1 ) ;
  
   
    const li =  document.createElement("li")
    li.setAttribute("class" , "items" )
   
    const elCheck =  document.createElement("input")
    elCheck.classList.add("form-check-input", "ms-3" , "me-2");
    elCheck.setAttribute("type", "checkbox");
    elCheck.setAttribute("class", "check");
    
    const elDelet =  document.createElement("button")
    elDelet.setAttribute("class" , "btndel" )
    elDelet.textContent="delete"
    elDelet.dataset.id = element.id


   
    const elAdd =  document.createElement("button")
    elAdd.setAttribute("class" , "btnAd" )
    elAdd.textContent="edit"
    elAdd.dataset.id = element.id
 

    li.textContent = element.text
    li.prepend(id)
    li.append(elCheck)
    li.appendChild(elDelet)
    li.appendChild(elAdd)   
    box.appendChild(li)
    
  });
} 

const formTypes = {
  SAVE : "save",
  EDIT : "edit",
};
let formType = formTypes.SAVE
let editingId = null;

 ElForm.addEventListener("submit",function(evt){
evt.preventDefault()
if (formType === formType.SAVE){
arr.push({
  id: (arr[i].id + 1 ),
  title: Elinput.value,
iscomlete : false,})
ElTest(arr, Ellist);
ElForm.reset()
}

})


Ellist.addEventListener("click", function(evt){
   

 if (evt.target.matches(".btndel")){
   const deleteTodooId = Number (evt.target.dataset.id);
   const foundIndexTodo = arr.findIndex(function(element){
return element.id === deleteTodooId;
});
arr.splice(foundIndexTodo , 1)
ElTest(arr , Ellist)
}
if(evt.target.matches(".elAdd")){
  const edittodoid = Number (evt.target.dataset.id)
  const addTodo = arr.find(function (yig) {
return yig.id === edittodoid ;
  })
  Elinput.value =  addTodo.title ;
  ElBtn.textContent = "edit";
  editingId = addTodo.id;
  formType = formTypes.EDIT;
 
}
console.log(formType);
// else if(evt.target.matches(".edit-btn")){
//   const EdnitBtnId = Number(evt.target.dataset.id);

//   const Edited = arr.find(function(todo){
//       return todo.id === EdnitBtnId;
//   });

//   elInput.value = Edited.title
//   elFormBtn.textContent = "Edit";
//   formType = FormTypes.edit;
//   editId = EdnitBtnId
// }

});





ElForm.addEventListener("submit", function (evt){
  evt.preventDefault()
  
  let obj = {
    id: son,
    text:Elinput.value
  }
  arr.push(obj)
Elinput.value = "" 

ElTest(arr , Ellist)
 console.log(arr);


})


//////////////////////////////////////////////////////






// FileList.addEventListener("click", function (evt){

// if (evt.target.matches(".btndel")){
//   const deletedTodoId = Number (evt.target.dataset.id);
//   const foundIndexTodo = arr.findIndex(function(element){
// return element.id === deletedTodoId
//   });
// arr.splice(founfIndexTodo , 1);
// renderArray(todo , list)

// }

// } ) 


// } )


