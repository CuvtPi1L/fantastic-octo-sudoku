
// First Name	Last Name	High Score	time? error?

function tableGen(){
    let tableBody = document.getElementsByClassName('table-group-divider')
    //getting<tbody> elements
    let tableRow = document.createElement('tr')
    let tableHead = document.createElement('th')
    let tableCol = document.createElement('td')
    //creating table elemets
    tableBody[0].appendChild(tableRow);
    tableRow.appendChild(tableHead)
        for(time= 0 ; time <4 ; time ++ ){
        tableRow.appendChild(tableCol)
        }
   console.log(tableCol)
   tableCol.innerHTML = 'jeb'
    //appending tableElement into <tbody>
}


function jegGen(){
    console.log(tableCol)

//element. innerHTML = 'stuff to put in'
}
tableGen()