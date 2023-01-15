import './style.css'


const height = document.getElementById("height");

const breadth1 = document.querySelector("#Breadth1");

const breadth2 = document.querySelector("#Breadth2");

const btn = document.getElementById("calculate");


const output = document.getElementById("output")

const DIVISOR = 2;

function calculateArea() {
  if (height.value && breadth1.value && breadth2.value) {
    const val = ((breadth1.value + breadth2.value) / DIVISOR) * height.value
    output.textContent = val
  } else {
    alert("please input all values")
  }

}

btn.addEventListener("click", calculateArea)



// const demo = document.querySelectorAll("input")


