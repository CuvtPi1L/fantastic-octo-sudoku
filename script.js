//api
const apiUrl = `https://sudoku-api.vercel.app/api/dosuku`
let solution;
let puzzleLayout = [
  {
    line0:[]
  },{
    line1:[]
  },{
    line2:[]
  },{
    line3:[]
  },{
    line4:[]
  },{
    line5:[]
  },{
    line6:[]
  },{
    line7:[]
  },{
    line8:[]
  }
]


fetch(apiUrl)
  .then(response => {
    console.log(response)
    return response.json();
  })
  .then(response => {
    console.log(response)
    console.log(response.newboard.grids[0].solution)// targeting the obj example
  });

  function fillBoxSolved(){
    for(var i=0; i<9; i++){
      $(puzzleLayout[0][i])
    }
  }









  function gridObj(){
    for (var i=1; i<=3; i++){
      puzzleLayout[0].line0.push(`A`+[i])
    }
    for (var i=1; i<=3; i++){
      puzzleLayout[0].line0.push(`B`+[i])
    }
    for (var i=1; i<=3; i++){
      puzzleLayout[0].line0.push(`C`+[i])
    }
    for (var i=4; i<=6; i++){
      puzzleLayout[1].line1.push(`A`+[i])
    }
    for (var i=4; i<=6; i++){
      puzzleLayout[1].line1.push(`B`+[i])
    }
    for (var i=4; i<=6; i++){
      puzzleLayout[1].line1.push(`C`+[i])
    }
    for (var i=7; i<=9; i++){
      puzzleLayout[2].line2.push(`A`+[i])
    }
    for (var i=7; i<=9; i++){
      puzzleLayout[2].line2.push(`B`+[i])
    }
    for (var i=7; i<=9; i++){
      puzzleLayout[2].line2.push(`C`+[i])
    }
    for (var i=1; i<=3; i++){
      puzzleLayout[3].line3.push(`D`+[i])
    }
    for (var i=1; i<=3; i++){
      puzzleLayout[3].line3.push(`E`+[i])
    }
    for (var i=1; i<=3; i++){
      puzzleLayout[3].line3.push(`F`+[i])
    }
    for (var i=4; i<=6; i++){
      puzzleLayout[4].line4.push(`D`+[i])
    }
    for (var i=4; i<=6; i++){
      puzzleLayout[4].line4.push(`E`+[i])
    }
    for (var i=4; i<=6; i++){
      puzzleLayout[4].line4.push(`F`+[i])
    }
    for (var i=7; i<=9; i++){
      puzzleLayout[5].line5.push(`D`+[i])
    }
    for (var i=7; i<=9; i++){
      puzzleLayout[5].line5.push(`E`+[i])
    }
    for (var i=7; i<=9; i++){
      puzzleLayout[5].line5.push(`F`+[i])
    }
    for (var i=1; i<=3; i++){
      puzzleLayout[6].line6.push(`G`+[i])
    }
    for (var i=1; i<=3; i++){
      puzzleLayout[6].line6.push(`H`+[i])
    }
    for (var i=1; i<=3; i++){
      puzzleLayout[6].line6.push(`I`+[i])
    }
    for (var i=4; i<=6; i++){
      puzzleLayout[7].line7.push(`G`+[i])
    }
    for (var i=4; i<=6; i++){
      puzzleLayout[7].line7.push(`H`+[i])
    }
    for (var i=4; i<=6; i++){
      puzzleLayout[7].line7.push(`I`+[i])
    }
    for (var i=7; i<=9; i++){
      puzzleLayout[8].line8.push(`G`+[i])
    }
    for (var i=7; i<=9; i++){
      puzzleLayout[8].line8.push(`H`+[i])
    }
    for (var i=7; i<=9; i++){
      puzzleLayout[8].line8.push(`I`+[i])
    }
  };
  gridObj()
  console.log(puzzleLayout)

//this is a async function for testing purposes -Pat
// const init = async function() {
//   const response = await fetch(apiUrl)
//   const data = await response.json()
// }