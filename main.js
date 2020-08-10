function openNav() {
    document.getElementById("mySidenav").style.width = "210px";
    document.getElementById("content").classList.add("content")
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").classList.remove("content")
  }


//Begining of Maze Game

function mazeGame()

{

x = document.getElementById("canvas")
x.classList.remove("hidden")

docText = document.getElementById("chooseGame")
docText.innerHTML = "Maze Game"

let points = 0
const canvas = document.querySelector('canvas')
canvas.width = 450
canvas.height = 300

const ctx = canvas.getContext('2d')

//player origin

let player_x = 80
let player_y = 20
let base_x = Math.floor(Math.random()*250)
let base_y = Math.floor(Math.random()*250)



function plusOne(){if(player_x >= base_x && player_y >= base_y -10 && player_x <= base_x + 50
  && player_y <=base_y + 50 ) {
    ++points
    base_x = Math.floor(Math.random()*250)
    base_y = Math.floor(Math.random()*250)

  }
}
requestAnimationFrame(step)

//contrain the player within canvas
function playerReset(){if(player_x >= 440){
  player_x = 440
} else if (player_x <= 0) {
  player_x = 0
} else if (player_y >= 290){
  player_y = 290
} else if(player_y <= 0){
  player_y = 0
  }
}
var ourPoints = document.getElementById("insert")
ctx.fillStyle = 'red'
ctx.fillRect(player_x, player_y, 10, 10)

ctx.strokeRect(base_x, base_y, 50, 50)

function step(){
  ctx.clearRect(0, 0, 500, 500)
  ctx.fillStyle = 'red'
  ctx.fillRect(player_x, player_y, 10, 10)
  ctx.strokeRect(base_x, base_y, 50, 50)

  playerReset()
  plusOne()
  requestAnimationFrame(step)
  ourPoints.innerHTML = points
}

requestAnimationFrame(step)

function handleInput(event) {
  const key = event.key
  if (key === 'w'){
    player_y -=10
  } else if (key === 'a') {
        player_x -= 10
      } else if (key === 'd') {
            player_x += 10
          } else if (key === 's') {
                player_y += 10
              }
}

document.addEventListener('keypress', handleInput)
}




//Begining of Car Game #######################################################################################

function carGame()

{

docCanvas = document.getElementById("canvas")
docCanvas.classList.remove("hidden")

docText = document.getElementById("chooseGame")
docText.innerHTML = "Car Game"

let points = 0
const canvas = document.querySelector('canvas')
canvas.width = 450
canvas.height = 300

const ctx = canvas.getContext('2d')

//player origin

let player_x = 180
let player_y = 290
let base_x = 120
let base_y = 0

//car origin
let car_x = 0
let car_y = 100
car_size = 10

function plusOne(){if(player_x >= base_x && player_y >= base_y && player_x <= base_x + 50
  && player_y <=base_y + 50 ) {
    ++points
    base_x = Math.floor(Math.random()*250)
    base_y = 0

    player_x = Math.floor(Math.random()*250)
    player_y = 290

    car_x = 0
    car_y = Math.floor(Math.random()*250)
    car_size = car_size + 10
  }
}
requestAnimationFrame(step)

function minusOne(){if(player_x >= car_x && player_y >= car_y && player_x <= car_x +car_size
  && player_y <= car_y + car_size) {
    --points
    car_size = 20
    car_x = 0
    car_y = Math.floor(Math.random()*250)

    player_x = 180
    player_y = 290
  }
}
requestAnimationFrame(step)

function carReset(){if(car_x >= 450)
  {
    car_x = 0
    car_y = Math.floor(Math.random()*250)
    
  }
}
requestAnimationFrame(step)
//contrain the player within canvas
function playerReset(){if(player_x >= 440){
  player_x = 440
} else if (player_x <= 0) {
  player_x = 0
} else if (player_y >= 290){
  player_y = 290
} else if(player_y <= 0){
  player_y = 0
  }
}

var ourPoints = document.getElementById("insert")
ctx.fillStyle = 'red'

ctx.fillRect(player_x, player_y, 10, 10)
ctx.strokeRect(base_x, base_y, 20, 20)

function step(){
  car_x = car_x + 2
  ctx.clearRect(0, 0, 450, 450)
  ctx.fillStyle = 'red'
  ctx.fillRect(player_x, player_y, 10, 10)

  ctx.strokeRect(base_x, base_y, 50, 50)
  ctx.fillRect(car_x, car_y, car_size, car_size)

  playerReset()
  plusOne()
  minusOne()
  carReset()
  requestAnimationFrame(step)
  ourPoints.innerHTML = points
}

requestAnimationFrame(step)

function handleInput(event) {
  const key = event.key
  if (key === 'w'){
    player_y -=10
  } else if (key === 'a') {
        player_x -= 10
      } else if (key === 'd') {
            player_x += 10
          } else if (key === 's') {
                player_y += 10
              }
}

document.addEventListener('keypress', handleInput)

}


//Begining of Real Estate Game #######################################################################################

function estateGame()

{

  function Building(name) {
    this.name = name,
    this.x = Math.floor(Math.random()*250),
    this.y = Math.floor(Math.random()*200),
    this.size = 20 * Math.floor(Math.random()*4),
    this.owned = false,
    this.colorOwn = function assignOwnershipColor() {
      if(this.owned === true) {
        return colorOwn = 'red'
      }
      else if(this.owned === false) {
        return colorOwn = "blue"
      }
    },
    
    this.exchange = function sellOrBuyBuilding(clickX, clickY) {
      if(this.owned === false) {
      if(clickX >= this.x && clickY >= this.y && clickX <= this.x + this.size 
      && clickY <= this.y + this.size) {
        this.owned = true
        cash = cash - 1000000
        }
      }
      else if(this.owned === true) {
        if(clickX >= this.x && clickY >= this.y && clickX <= this.x + this.size 
        && clickY <= this.y + this.size) {
          this.owned = false
          cash = cash + 50000
          }
        }
    },
    this.income = this.size * Math.floor(Math.random()*100) 
  }



    
docCanvas = document.getElementById("canvas")
docCanvas.classList.remove("hidden")

docText = document.getElementById("chooseGame")
docText.innerHTML = "Real Estate Game"

const canvas = document.querySelector('canvas')
canvas.width = 450
canvas.height = 300
const ctx = canvas.getContext('2d')

let building1 = new Building("Building One")
let building2 = new Building("Building Two")
let building3 = new Building("Building Three")
let building4 = new Building("Building Four")
let building5 = new Building("Building Five")
let building6 = new Building("Building Six")

function countOwned() {
  boolean1 = building1.owned
  boolean2 = building2.owned
  boolean3 = building3.owned
  boolean4 = building4.owned
  boolean5 = building5.owned
  boolean6 = building6.owned
  var myCounter = 0;

 [boolean1,boolean2,boolean3, boolean4, boolean5, boolean6].forEach(v => v ? myCounter++ : v)
 return myCounter
}


let cash = 0
var ourCash = document.getElementById("insert")
var totalSeconds = 0


function countUp() {
  ++totalSeconds 
}

function accrueIncome() {
  cash = cash + (totalSeconds * ((countOwned() + 1)/100))
  if (building1.owned === true) {
    cash = cash + building1.income
    }
  if (building2.owned === true) {
    cash = cash + building2.income
    }
  if (building3.owned === true) {
    cash = cash + building3.income
    }
  if (building4.owned === true) {
      cash = cash + building4.income
    }
  if (building5.owned === true) {
      cash = cash + building5.income
    }
  if (building6.owned === true) {
      cash = cash + building6.income
    }
}


function step(){
  ctx.clearRect(0, 0, 450, 450)
  ctx.fillStyle = 'red'
  
  ctx.fillStyle = building1.colorOwn()
  ctx.fillRect(building1.x, building1.y,building1.size,building1.size)
  
  ctx.fillStyle = building2.colorOwn()
  ctx.fillRect(building2.x, building2.y,building2.size,building2.size)

  ctx.fillStyle = building3.colorOwn()
  ctx.fillRect(building3.x, building3.y,building3.size,building3.size)
  
  ctx.fillStyle = building4.colorOwn()
  ctx.fillRect(building4.x, building4.y,building4.size,building4.size)

  ctx.fillStyle = building5.colorOwn()
  ctx.fillRect(building5.x, building5.y,building5.size,building5.size)

  ctx.fillStyle = building6.colorOwn()
  ctx.fillRect(building6.x, building6.y,building6.size,building6.size)
  countUp()
  accrueIncome()
  requestAnimationFrame(step)
  ourCash.innerHTML = "$" + cash.toFixed(2)
}

requestAnimationFrame(step)

function handleInput(event) {
  const key = event.key
  if (key === 'w'){
    player_y -=10
  } else if (key === 'a') {
        player_x -= 10
      } else if (key === 'd') {
            player_x += 10
          } else if (key === 's') {
                player_y += 10
              }
}

function handleClick(event) {
  let canvas = document.querySelector('canvas')
  rect = canvas.getBoundingClientRect()

  let clickX = event.clientX - rect.left;
  let clickY = event.clientY - rect.top;
  
  building1.exchange(clickX, clickY)
  building2.exchange(clickX, clickY)
  building3.exchange(clickX, clickY)
  building4.exchange(clickX, clickY)
  building5.exchange(clickX, clickY)
  building6.exchange(clickX, clickY)
  
}

document.addEventListener('keypress', handleInput)
document.addEventListener('click', handleClick)
}