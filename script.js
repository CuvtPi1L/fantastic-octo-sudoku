//api
const apiUrl = `https://sudoku-api.vercel.app/api/dosuku`
let solution;
let puzzle;

fetch(apiUrl)
  .then(response => {
    console.log(response)
    return response.json();
  })
  .then(response => {
    console.log(response)
    console.log(response.newboard.grids[0].solution)// targeting the obj example


    
  })


//this is a async function for testing purposes -Pat
// const init = async function() {
//   const response = await fetch(apiUrl)
//   const data = await response.json()
// }