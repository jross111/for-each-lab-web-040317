function iterativeLog(array){
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback) {
  const baseballTeams = ["Redsox", "Yankees", "Cubs", "Mariners"]
  baseballTeams.forEach(callback)
  return baseballTeams

}

function doToArray(array, callback) {
  array.forEach(callback)
}
