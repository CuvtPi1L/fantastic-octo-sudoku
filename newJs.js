// current issues: 
// when page loads user can input 1 but it does not count since the user input is 
async function gainsheet() {
  const response = await fetch("https://sudoku-api.vercel.app/api/dosuku");
  const rawAPI = await response.json();
  setGame(rawAPI)
}
window.load = gainsheet()
//fetch function


var timerCount = 300;
var error = 0;
var timer;
var fin = false;
var saveUserChoice = 1;
var gameResultList = [];

var emptyStartTile_Number
var solvedTile_Number

endGameJump = document.querySelector('#endGameJump')
endGameJump.addEventListener('click', () => { endGame(); console.log('Cheat-Actv') })


let numberBarGeneration = () => {
  for (let i = 1; i <= 9; i++) {

    //<div id=i class number> i <div>
    //for each i repeat <div> above
    let numberBox = document.createElement('div')
    numberBox.id = i
    numberBox.innerText = i
    //interactive with selectNumber()

    numberBox.addEventListener('click', function () {
      userChoice = numberBox.id
      if (saveUserChoice != userChoice) {
        let removeShading = document.getElementById(saveUserChoice)
        removeShading.classList.remove('number-selected')
      }
      saveUserChoice = numberBox.id
      numberBox.classList.add('number-selected')
    });
    numberBox.classList.add('number')

    document.getElementById('digits').appendChild(numberBox)
  }
}

function sudokuGridGeneration() {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let box = document.createElement('div');
      box.id = r + '-' + c;
      if (boardValue[r][c] != '0') {
        box.innerText = boardValue[r][c]
        box.classList.add('box-start')
      } else {
        box.innerText = ''
        box.classList.add('box-empty')
      }
      if (r == 2 || r == 5) {
        box.classList.add('horizontal-line')
      }
      if (c == 2 || c == 5) {
        box.classList.add("vertical-line");
      }
      box.classList.add("box");
      document.getElementById("board").append(box);
    }
  }
  let emptyStartTile_Class = '.box-empty'
  emptyStartTile_Number = get_class_Number(emptyStartTile_Class)
  console.log(emptyStartTile_Number)
}

var boardSolution
var boardValue
let userChoice;

function setGame(rawAPI) {
  boardSolution = rawAPI.newboard.grids[0].solution;
  boardValue = rawAPI.newboard.grids[0].value;

  console.log(boardValue)
  //digit 1-9 input bar
  numberBarGeneration()
  //board 9x9
  sudokuGridGeneration()
  boxempty()
  timerGo()


}
let userBoxSelected
let boxempty = () => {
  const boxStart = document.querySelectorAll('.box-empty');
  //add eventlistener to each emptybox that has a class .box-empty
  boxStart.forEach(emptyBox => {
    emptyBox.addEventListener("click", () => {
      if (saveUserChoice != 0) {
        userBoxSelected = document.getElementById(`${emptyBox.id}`)

        const r = emptyBox.id.split('-')[0]
        const c = emptyBox.id.split('-')[1]
        userBoxSelected.textContent = saveUserChoice;
        //parses the user input into value array to compare for endgame
        boardValue[r].splice([c], 1, Number.parseInt(userBoxSelected.textContent))
// userboxslected = users chosen box from bottom row however saveuserchoice = 1
        if (userChoice == boardSolution[r][c]) {
          userBoxSelected.classList.add('solved')
          try { userBoxSelected.classList.remove('red-text') }
          catch { console.log('no red text') }

        }
        else {
          reduceTimer(5)
          error = error + 1
          userBoxSelected.classList.add('red-text')
        }
      }
      let solvedTile_Class = '.solved'
      solvedTile_Number = get_class_Number(solvedTile_Class)
      //end game condition below
      if (solvedTile_Number == emptyStartTile_Number) { endGame() }
    });
  })
}


function get_class_Number(className) {
  let varClassTag = document.querySelectorAll(className)
  varClassTag_Number = varClassTag.length

  return varClassTag_Number
}


function endGame() {
  let person = prompt('You finished the sudoku! what is your name!');
  console.log(person)
  if (!person){
    person = 'Gary Almes'
  }else{
    console.log(`${person}!`)
  }
  //create string of fn, ln, error# and time
  let gameResultData = person.split(' ')
  if (gameResultData.length<2){
    gameResultData.push('aka Sudoku-Master')
  }else if(gameResultData.length>2){
    console.log('need to trim')
    grd0 = gameResultData[0];
    grd1 = gameResultData[1];
    gameResultData = []
    gameResultData.push(grd0,grd1)
    console.log(gameResultData)
  }else{
    console.log('looks good')
  }
  console.log(gameResultData)
  gameResultData.push(error, timer)  // not sure if timer is the correct variable for time
  console.log(gameResultData)
  //push string to string of strings 
  gameResultList.push(gameResultData)
  //save to local storage
  let gameResultString = JSON.stringify(gameResultList)
  localStorage.setItem('gameResult', gameResultString)
}


function reduceTimer(num) {
  timerCount -= num;
  // _____.textContent = timerCount; you can insert timertext by changing left variable
  if (fin && timerCount > 0) {
    clearInterval(timer);
    // score();//need
  }
  if (timerCount <= 0) {
    clearInterval(timer);
    // score();//need
  }
}


function timerGo() {
  timer = setInterval(function () {
    document.getElementById('timer').textContent = (`Time left: ${timerCount}`)
    reduceTimer(1);
  }, 1000)
}

//JSON.stringify(k1) === JSON.stringify(k2); // true //this is my compare function for the endgame


//function for selectingNumber under 
function selectNumber() {
  boardValue = this;
  boardValue.classList.add('number-selected')

}
