//First Name Last Name High School Time? Error?

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

  for (time = 0; time < 4; time++) {
    let tableColumn = document.createElement("td");
    tableRow.appendChild(tableColumn);
    tableColumn.id = time;
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

  function displayGameData() {
    // console.log(tableColumn);
    tableColumn.innerHTML = "first name";
    // tableColumn.innerHTML = "last name";
    // tableColumn.innerHTML = "high score";
    // tableColumn.innerHTML = "awards";
    console.log(tableColumn);
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
