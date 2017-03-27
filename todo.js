//This tells the variable  to point at the HTML element
var textinput = document.getElementById("textinput");
var buttoninput = document.getElementById("buttoninput");
var button2input = document.getElementById("button2input");
var display = document.getElementById("display");
var selectinput = document.getElementById("selectinput");

//
buttoninput.addEventListener("click", function() {
        
        //
        var text =textinput.value
        var select = selectinput.value
        
        display.innerHTML += "<div style='color:"+select+"'>"+text+"</div>"; 
});

//
button2input.addEventListener("click", function() {
        
        display.innerHTML = ""
        
});

//
display.addEventListener("click", function(evt) {
    evt.target.parentNode.removeChild(evt.target);
});
        