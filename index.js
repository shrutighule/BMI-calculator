const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const button = document.querySelector("#button")
const results = document.querySelector("#results")
const validity = document.querySelector("#validity")
let height2 = ''
let weight2 = ''

button.addEventListener("click", function heightWeight(event){
  event.preventDefault()
  calculate()
} )

function calculate(){
  height2 = height.value
  weight2 = weight.value
if(height2 === ''|| height2<0 || isNaN(height2)){
  validity.innerHTML = "Please give a valid height."
}else if(weight2 === '' || weight2<0 || isNaN(weight2)){
  validity.innerHTML = "Please give a valid weight."
}else{
let heightMeter = height2/100
let Bmi = weight2/(heightMeter*heightMeter)
results.innerText = Bmi.toFixed(1)
}

}



