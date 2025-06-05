var sidenav = document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var icon=document.getElementById("closenav")
menuicon.addEventListener("click",function(){
  sidenav.style.right=0;
  
})
icon.addEventListener("click",function(){
  sidenav.style.right="-50%";
  
})