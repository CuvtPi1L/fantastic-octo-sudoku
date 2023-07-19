//First Name Last Name High School Time? Error?

window.addEventListener('load',()=>{
const testData = localStorage.getItem('gameResult')
console.log(testData)}
)
//testing above

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function tableGen() {
  //getting body elements
  let tableBody = document.getElementsByClassName("table-group-divider");

  //creating table elements
  let tableRow = document.createElement("tr");
  let tableHead = document.createElement("th");
  let tableColumn;

  //appending tableElement into tbody
  tableBody[0].appendChild(tableRow);
  tableRow.appendChild(tableHead);
  //   tableRow.appendChild(tableColumn);

  const UserInfo = ["siyuan", "che", 90, "jeb"];
  for (time = 0; time < 4; time++) {
    let tableColumn = document.createElement("td");
    tableRow.appendChild(tableColumn);
    tableColumn.id = time;
    document.getElementById(time).innerHTML = UserInfo[time];
  }

  function getGameData() {
    var tableInfo = [];
    tableInfo = JSON.parse(localStorage.getItem("game data"));
    displayGameData();
  }

  function addNewGameData() {
    //going to newjs?
    tableInfo.push();
    localStorage.setItem("game data", JSON.stringify(tableInfo));
    displayGameData();
  }

  //   jegGen();
  getGameData();
  addNewGameData();
  displayGameData();
}

// function jegGen() {
//   console.log(tableColumn);
//   tableCol[0].innerHTML = "jeb";
//   element.innerHTML = "stuff to put in";
// }

tableGen();
