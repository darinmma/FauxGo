console.log('loaded')


//sets currentTurn to black, starting

var currentTurn = 'B';
var playable = $('.playable');
console.log(playable);

//plays pieces on the board, alternating turns

playable.on('click', function() {
  if($(this).html() == '') {
    console.log("you clicked on", this
  )};
  if($(this).hasClass('unplayed')) {
    if(currentTurn == 'B') {
      console.log('adding class black')
      $(this).addClass('black')
      $(this).removeClass('unplayed')
    } else {
      console.log('adding class white')
      $(this).addClass('white')
      $(this).removeClass('unplayed')
    }
    createNeighbors(this)
    switchTurn()
  } else {
    alert('Please replay your turn');
  }
  // checkPrisoner($(this).attr('id'));
  console.log('check for prisoners');
  // checkWin();
})

//switch turns callback

function switchTurn() {
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
  console.log(yCoord)
  console.log(xCoord)
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
    console.log(neighbors)
    checkNeighbors(neighbors,self)
  }
}

function checkNeighbors(neighborsArr,playedDiv) {
  for(var i = 0; i < neighborsArr.length; i++) {
    if (currentTurn == 'B' && $(neighborsArr).eq(i).hasClass('white')){
      var captureArray = []
      var captureCoord = $(neighborsArr).eq(i).attr('id').split('')
      console.log(captureCoord)
      var yCoord = parseInt(coord[0])
      var xCoord = parseInt(coord[1])
      console.log(coord)
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
        console.log(captureArray)
        checkTaken(captureArray, possPrisoner)
    }
  }
}
}

// function checkNeighbors(neighborsArr,playedSpot) {
//   if (currentTurn === 'B')
//   for(var i = 0; i < neighborsArr.length; i++) {
//     if($('#' + neighborsArr[i]).hasClass('white')){
//       // $(playedSpot).removeClass('black')
//       $(playedSpot).addClass('taken')
//     } else if(currentTurn === 'W')
//       for(var i = 0; i < neighborsArr.length; i++) {
//         if($('#' + neighborsArr[i]).hasClass('black')){
//           // $(playedSpot).removeClass('white')
//           $(playedSpot).addClass('taken')
//         }
//     }
// }
// }
// reset button for game

var resetButton = $('#resetGame');

resetButton.on('click', function(){
  for(var i = 0; i < playable.length; i++){
    playable.eq(i).removeClass('black white')
    playable.eq(i).addClass('unplayed')
  }
    currentTurn = 'B';
})
