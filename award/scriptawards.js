//First Name Last Name High School Time? Error?

function tableGen() {
  //getting body elements
  let tableBody = document.getElementsByClassName("table-group-divider");

  //creating table elements
  let tableRow = document.createElement("tr");
  let tableHead = document.createElement("th");
  let tableColumn = document.createElement("td");

  //appending tableElement into tbody
  tableBody[0].appendChild(tableRow);
  tableRow.appendChild(tableHead);

  for (time = 0; time < 4; time++) {
    tableRow.appendChild(tableColumn);
  }
}

function jegGen() {
  console.log(tableCol);
  tableCol[0].innerHTML = "jeb";
  //element.innerHTML = "stuff to put in"
}
tableGen();
