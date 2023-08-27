
// let btn = document.getElementById("loginbtn");
// let formBody = document.querySelector("form");
// let emailme = document.getElementById("myemail").value;

// btn.addEventListener("click", test);

// function test() {
//   alert("welcome " + emailme);
//   console.log(emailme);
//   formBody.style.background = "#ee9400";
//   btn.textContent = "Click Me Not!";
// }



var testdiv = document.getElementById("test")
var div = document.createElement("div")

var inputtext = document.createElement("input")
inputtext.setAttribute('type', 'text')
inputtext.setAttribute('id', 'inputname')
inputtext.setAttribute('placeholder', 'Input Name')
inputtext.style.borderRadius = "15px"
inputtext.style.padding = "15px"


var btn = document.createElement("button")
btn.setAttribute('id', 'btnid');
btn.style.color = "yellow"
btn.textContent = "Click Me!"
btn.style.background = "black"
btn.style.borderRadius = "20px"
btn.style.border = "1px #5a81a8 solid"
btn.style.padding = "10px"
btn.style.margin = "10px"

div.appendChild(inputtext)
div.appendChild(btn)
testdiv.appendChild(div)

inputtext.addEventListener('keyup', inputval)
function inputval() {
  console.log(inputtext.value)
}

btn.addEventListener('click', heyhi)
function heyhi() {
  let name = inputtext.value;
  if (name == "") {
    alert("Please input Your Name! ");
  } else {
    alert("Hi " + name + ", Just Do it! ");
    inputtext.value = "";
    
  }


}

