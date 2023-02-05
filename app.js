const head = document.getElementById('input')
const copy = document.getElementById('copy')
const screen = document.getElementById('screen')
const add = document.getElementById('add')
const del = document.getElementById('del')
const inp = document.getElementById('inp')
const scrs = document.getElementById('scrs')
let check = document.getElementById('checkOne')
let check2 = document.getElementById('checkTwo')
let check3 = document.getElementById('checkThree')
let range = document.getElementById('ranges')
let rangevalue = document.getElementById("rangevalue")

range.oninput = (v) =>{
  rangevalue.textContent = v.target.value 
}
function ItemCreate(){

    const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   
   const Names =[ 'Abdumalik', "Xosiyatxon", "Abdurahmon", "Mavjuda", "Azizaxon", "Madinaxon", "Iymonaxon", "Muhlisaxon", "Abdubannob", "Saidafzal", "Boburjon", "Rahmatjon", "Bahodirxon"  ]
   const Fruit = ["Olma", "nok", "shaftoli", "Banan", "Anor", "Xurmo", "Uzum", "Anjir", "lemon", 'behi', "gilos"] 
    let check = document.getElementById('checkOne')
    let check2 = document.getElementById('checkTwo')
    let check3 = document.getElementById('checkThree')
    let sum = ''
 
    
        let max = Number(rangevalue.textContent)
    if (check.checked){
      for(let i =0; i < max; i++){

        sum+= Numbers[Math.floor(Math.random() * Numbers.length)]
      }
      }
      else  if (check2.checked){
        sum+= Names[Math.floor(Math.random() * Names.length)]
      }
      else  if(check3.checked){
        sum+= Fruit[Math.floor(Math.random() * Fruit.length)]
      }
      head.value = sum
      inp.value = ''
     scrs.textContent = ''
screen.textContent = ''
    }
    
    copy.addEventListener('click', (e) =>{
    navigator.clipboard.writeText(head.value)
    copy.textContent = 'Copied'
    setTimeout(() => {
      e.target.innerHTML = 'Copy'
    }, 2000)
  })




function Adding(){
  let inp = document.getElementById('inp')
if (inp.value > head.value){
  screen.textContent = "Xato"
}
else if(inp.value < head.value){
  screen.textContent = 'Xato'
}
else{
  screen.textContent.style="font-size: 24px;"
  screen.textContent = "Topdingiz = " + head.value
  scrs.textContent = "O'yinni qayta boshlash uchun GENERATE  tugmasini bosing"

}
}

onkeydown = function (c){
  if(c.key === "Enter"){
   ItemCreate()
  }
  else   if(c.key === "Space"){
    Adding()
  }
}
