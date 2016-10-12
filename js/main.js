console.log('loaded')

//sets currentTurn to black, starting

var currentTurn = 'B';
var playable = $('.playable');
// console.log(playable);

//plays pieces on the board, alternating turns

playable.on('click', function() {
  if($(this).html() == '') {
    console.log("you clicked on", this
  )};
  if($(this).hasClass('unplayed')) {
    if(currentTurn == 'B') {
      // console.log('adding class black')
      $(this).addClass('black')
      $(this).removeClass('unplayed')
    } else {
      // console.log('adding class white')
      $(this).addClass('white')
      $(this).removeClass('unplayed')
    }
    createNeighbors(this)
    switchTurn()
  } else {
    alert('Please replay your turn');
  }
})

//switch turns callback

function switchTurn() {
  console.log("switching turn now")
  if(currentTurn == 'B') {
    currentTurn = 'W';
  } else {
    currentTurn = 'B';
  }
}

//create neighbors array for single capture comparison

function createNeighbors(self) {
  var neighbors = []
  var coord = $(self).attr('id').split('')
  console.log(coord)
  var yCoord = parseInt(coord[0])
  var xCoord = parseInt(coord[1])
  // console.log(yCoord)
  // console.log(xCoord)
  if (yCoord > 1) {
    var above = [(yCoord-1), xCoord].join('')
    neighbors.push(above)
  }
  if (xCoord < 9) {
    var right = [yCoord,(xCoord + 1)].join('')
    neighbors.push(right)
  }
  if (yCoord < 9) {
    var below = [(yCoord+1),xCoord].join('')
    neighbors.push(below)
  }
  if (xCoord > 1) {
    var left = [yCoord,(xCoord - 1)].join('')
    neighbors.push(left)
  }
  console.log(neighbors)
  checkNeighbors(neighbors)
}

function checkNeighbors(neighborsArr) {
  // console.log(neighborsArr)
  for(var i = 0; i < neighborsArr.length; i++) {
    console.log("looking at neighbor", neighborsArr[i])
    var neighborId = '#' + neighborsArr[i]
    var friend
    var enemy
    if (currentTurn == 'B') {
      friend = 'black'
      enemy = 'white'
    } else {
        friend = 'white'
        enemy = 'black'
      }
    if ($(neighborId).hasClass(enemy)){
      var captureArray = []
      var captureCoord = neighborsArr[i].split('')
      console.log(captureCoord)
      var yCoord = parseInt(captureCoord[0])
      var xCoord = parseInt(captureCoord[1])
      if (yCoord > 1) {
        var above = [(yCoord-1), xCoord].join('')
        captureArray.push(above)
      }
      if (xCoord < 9) {
        var right = [yCoord,(xCoord + 1)].join('')
        captureArray.push(right)
      }
      if (yCoord < 9) {
        var below = [(yCoord+1),xCoord].join('')
        captureArray.push(below)
      }
      if (xCoord > 1) {
        var left = [yCoord,(xCoord - 1)].join('')
        captureArray.push(left)
      }
      console.log("capture array: ", captureArray)
      var captured = true
      for(var j = 0; j < captureArray.length; j++) {
        var captureId = '#' + captureArray[j]
        console.log("looking at: ", captureId)
        if (!$(captureId).hasClass(friend)) {
          console.log('found a friend or its blank')
          captured = false
        } else {
          console.log('thats an enemy')
        }
      }
      console.log("captured is", captured)
      if (captured) {
        alert("Captured!")
      }
    }
  }
}

// reset button for game

var resetButton = $('#resetGame');

resetButton.on('click', function(){
  for(var i = 0; i < playable.length; i++){
    playable.eq(i).removeClass('black white')
    playable.eq(i).addClass('unplayed')
  }
    currentTurn = 'B';
})
