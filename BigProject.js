var jokerpic = document.getElementById("jokerpic");
var jokerinfo = document.getElementById("jokerinfo");

jokerpic.addEventListener('click', function(){
    
    if(jokerinfo.style.display === "none"){
        jokerinfo.style.display = "block";
    }
     else {
         jokerinfo.style.display = "none";
     }
    
});

var Freezepic = document.getElementById("Freezepic");
var Freezeinfo = document.getElementById("Freezeinfo");

Freezepic.addEventListener('click',function(){
    
    if(Freezeinfo.style.display ==="none"){
        Freezeinfo.style.display = "block";
    }
    else {
        Freezeinfo.style.display = "none";
    }
});

var Deadshotpic = document.getElementById("Deadshotpic");
var Deadshotinfo = document.getElementById("Deadshotinfo");

Deadshotpic.addEventListener('click',function(){
    
    if(Deadshotinfo.style.display ==="none"){
        Deadshotinfo.style.display = "block";
    }
    else {
        Deadshotinfo.style.display = "none";
    }
});

var Banepic = document.getElementById("Banepic");
var Banetinfo = document.getElementById("Baneinfo");

Banepic.addEventListener('click',function(){
    
    if(Baneinfo.style.display ==="none"){
        Baneinfo.style.display = "block";
    }
    else {
        Baneinfo.style.display = "none";
    }
});