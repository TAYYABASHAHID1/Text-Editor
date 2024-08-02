

var bold=document.getElementById("bold")
var italic=document.getElementById("italic")
var underline=document.getElementById("underline")
var alignl=document.getElementById("align-left")
var alignc=document.getElementById("align-center")
var alignr=document.getElementById("align-right")
var strikethrough=document.getElementById("strikethrough");
var font =document.getElementById("font-case")
var color=document.getElementById("font-color")
var input=document.getElementById("inp")


bold.addEventListener("click", function() {
  var textarea = document.getElementsByClassName("text-editor")[0];
  var currentWeight = textarea.style.fontWeight;
  textarea.style.fontWeight = (currentWeight === "bold") ? "normal" : "bold";
});

italic.addEventListener("click", function() {
  var textarea = document.getElementsByClassName("text-editor")[0];
  var currentStyle = textarea.style.fontStyle;
  textarea.style.fontStyle = (currentStyle === "italic") ? "normal" : "italic";
});

underline.addEventListener("click", function() {
  var textarea = document.getElementsByClassName("text-editor")[0];
  var currentDecoration = textarea.style.textDecoration;
  textarea.style.textDecoration = (currentDecoration === "underline") ? "none" : "underline";
});

alignl.addEventListener("click", function() {
  var textarea=document.getElementsByClassName("text-editor")[0];
   textarea.style.textAlign='left';
});

alignc.addEventListener("click", function() {
  var textarea=document.getElementsByClassName("text-editor")[0];
   textarea.style.textAlign='center';
});

alignr.addEventListener("click", function() {
  var textarea=document.getElementsByClassName("text-editor")[0];
   textarea.style.textAlign='right';
});

strikethrough.addEventListener("click", function() {
  var textarea = document.getElementsByClassName("text-editor")[0];
  var currentDecoration = textarea.style.textDecoration;
  
  if (currentDecoration === "line-through") {
    textarea.style.textDecoration = "none";
  } else {
    textarea.style.textDecoration = "line-through";
  }
});

font.addEventListener("click", function() {
   var textarea = document.getElementsByClassName("text-editor")[0];
      var currentTransform = textarea.style.textTransform;
      
      if (currentTransform === 'uppercase') {
        textarea.style.textTransform = 'lowercase';
      } else {
        textarea.style.textTransform = 'uppercase';
      }
});


// input.addEventListener("click", function() {
//   var textarea=document.getElementsByClassName("text-editor")[0];
// input.innerHTML=`<input type="color" id="colorPicker" value="#ff0000">`
   
// var color = document.getElementById("colorPicker").value;
//     document.getElementById("textEditor").style.color = color;

// });
input.addEventListener("click", function() {
            if (!document.getElementById("colorPicker")) {
              var textarea=document.getElementsByClassName("text-editor")[0];
                input.innerHTML += `<input type="color" id="colorPicker" value="#ff0000" style="margin-left: 10px;">`;
                var colorPicker = document.getElementById("colorPicker");

                colorPicker.addEventListener("input", function() {
                    textarea.style.color = colorPicker.value;
                });
            }
        });



