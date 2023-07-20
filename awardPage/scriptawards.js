//First Name Last Name High School Time? Error?

addToLocalStoarge_Button = document.querySelector("#addToLocalStorage");
addToLocalStoarge_Button.addEventListener("click", () => {
  console.log("AddToLocalStorage");
  let gameResultList = ["Jeb", "Jon", "24", "happily married"];
  let gameResultString = JSON.stringify(gameResultList);
  localStorage.setItem("gameResult", gameResultString);
});
//testing above

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function tableGen() {
	//getting body elements
  let tableBody = document.getElementById("table-group-divider");

  //creating table elements
  //   let tableRow = document.createElement("tr");
  //   let tableHead = document.createElement("th");
  //   let tableColumn;

  //appending tableElement into tbody
  //   tableBody[0].appendChild(tableRow);
  //   tableBody.appendChild(tableHead);
  //   tableRow.appendChild(tableColumn);

  function displayData(gameData) {
    for (let i = 0; i < gameData.length; i++) {
      let tableRow = document.createElement("tr");
      let num = document.createElement("td");
      num.textContent = i + 1;
      tableRow.appendChild(num);
      gameData[i].forEach(function (data) {
        let tableColumn = document.createElement("td");
        tableColumn.textContent = data;
        tableRow.appendChild(tableColumn);
      });
      tableBody.appendChild(tableRow);
    }
  }

  //const UserInfo = ["siyuan", "che", 90, "jeb"];
  //   function displayGameData(pineapple) {
  //     for (time = 0; time < 4; time++) {
  //       let tableColumn = document.createElement("td");
  //       tableRow.appendChild(tableColumn);
  //       tableColumn.id = time;
  //       document.getElementById(time).innerHTML = pineapple[0][time];
  //     }
  //   }
  //   function displayGameData(pineapple) {
  //     for (let lBoardTable = 0; lBoardTable < pineapple.length; lBoardTable++) {
  //       for (let lBoard = 0; lBoard < 4; lBoard++) {
  //         let tableColumn = document.createElement("td");
  //         tableRow.appendChild(tableColumn);
  //         tableColumn.id = lBoard;
  //         document.getElementById(lBoard).innerHTML =
  //           pineapple[lBoardTable][lBoard];
  //       }
  //     }
  //   }

  function getGameData() {
    var tableInfo = [];
    tableInfo = JSON.parse(localStorage.getItem("gameResult"));

    //////////////add sort by time first (low to high), then number of errors (low to high) https://stackoverflow.com/questions/50415200/sort-an-array-of-arrays-in-javascript
    tableInfo = tableInfo.sort(([a, b, c, d], [e, f, g, h]) => d-h || c-g);
    console.log(tableInfo);

    displayData(tableInfo);
  }

  //   function addNewGameData() {
  //     //going to newjs?
  //     tableInfo.push();
  //     localStorage.setItem("game data", JSON.stringify(tableInfo));
  //     displayGameData();
  //   }

  //   jegGen();
  getGameData();
  //   addNewGameData();
  //   displayGameData();
}

// function jegGen() {
//   console.log(tableColumn);
//   tableCol[0].innerHTML = "jeb";
//   element.innerHTML = "stuff to put in";
// }

tableGen();
