console.log('loaded')


//sets currentTurn to black, starting

var currentTurn = 'B';
var playable = $('.playable');
console.log(playable);

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
    switchTurn()
  } else {
    alert('Please replay your turn');
  }
  checkPrisoner(parseInt(this.id));
  console.log('check for prisoners');
  //checkWin();
  // switchTurn();
})


function switchTurn() {
  if(currentTurn == 'B') {
    currentTurn = 'W';
  } else {
    currentTurn = 'B';
  }
}

function checkPrisoner(cellId) {
  // for($('#11')) {
  //   if (currentTurn = 'W' && $('#21').hasClass('white') && $('#12').hasClass('white') {
  //     $('#11').removeClass('black white playable')
  //   } else if (currentTurn = 'B' && $('#21').hasClass('black') && $('#12').hasClass('black') {
  //     $('#11').removeClass('black white playable')
  //   }
  if(currentTurn =='W' && ($('#'+(cellId + 10)).hasClass('white') || $('#'+(cellId - 10)).hasClass('white') || $('#'+(cellId + 1)).hasClass('white') || $('#'+(cellId - 1)).hasClass('white')) ) {
    console.log(typeof(cellId));
    console.log($('#'+(cellId + 10)));
    console.log($('#'+(cellId - 10)));
    console.log($('#'+(cellId + 1)));
    console.log($('#'+(cellId - 1)));    console.log('possible white prisoners');
  } else if (currentTurn =='B' && ($('#'+(cellId + 10)).hasClass('black') || $('#'+(cellId - 10)).hasClass('black') || $('#'+(cellId + 1)).hasClass('black') || $('#'+(cellId - 1)).hasClass('black'))) {
    console.log(typeof(cellId));
    console.log($('#'+(cellId + 10)));
    console.log($('#'+(cellId - 10)));
    console.log($('#'+(cellId + 1)));
    console.log($('#'+(cellId - 1)));    console.log('possible black prisoners');
  }
}
//    ($('#'+(cellId + 10)).hasClass('white') || $('#'+(cellId - 10)).hasClass('white') || $('#'+(cellId + 1)).hasClass('white') || $('#'+(cellId - 1)).hasClass('white')) {
//     console.log('possible prisoners')
//   }
// }

var resetButton = $('#resetGame');

resetButton.on('click', function(){
  for(var i = 0; i < playable.length; i++){
    playable.eq(i).removeClass('black white')
    playable.eq(i).addClass('unplayed')
  }
    currentTurn = 'B';
})
