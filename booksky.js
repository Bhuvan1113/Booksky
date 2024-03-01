//Selecting popupbox,popupoverlay,button
var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")
var popupbutton=document.getElementById("popup-button")

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//Selecting CANCEL Button
var cancelbutton=document.getElementById("cancel")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//Selecting container,book-title,boo-author,book-description,add button

var container=document.querySelector(".container")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdescription=document.getElementById("book-description")
var addbutton=document.getElementById("add")
addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
     container.append(div)
     popupoverlay.style.display="none"
     popupbox.style.display="none"

})
function deletebook(event)
{
    event.target.parentElement.remove()
}

