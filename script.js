

let ul = document.getElementById('myUL');

//load list
if (localStorage["toDoItems"]) {
  ul.innerHTML = localStorage["toDoItems"];
  document.getElementById("delBtn").style.display="inline";  
}

function updateClock() {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();  
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("date").innerHTML=date+" "+time;
  setTimeout(updateClock, 1000);
}
updateClock();


var list = document.querySelector('ul');
// del list while click close button
list.addEventListener('click', function(ev) {
  if (ev.target.className == 'close') {
    ev.target.parentElement.remove();
    localStorage["toDoItems"] = ul.innerHTML;
    if(!localStorage["toDoItems"])document.getElementById("delBtn").style.display="none";
  }
}, false);
// Add a "checked" symbol when clicking on a list item

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    localStorage["toDoItems"] = ul.innerHTML;
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  // Create a "close" button and append it to each list item
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
 
  localStorage["toDoItems"] = ul.innerHTML
  document.getElementById("delBtn").style.display="inline";  
  
}
//delallbtn
function del(){
  localStorage["toDoItems"]="";   
  ul.innerHTML = localStorage["toDoItems"];
  document.getElementById("delBtn").style.display="none";  
    
}
//enterbtn
function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); 
        newElement();

    }
}

  

