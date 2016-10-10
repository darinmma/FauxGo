console.log('loaded')


//sets currentTurn to black, starting

var currentTurn = 'B';
var playable = $('.playable');
console.log(playable);

for(var i = 0; i < playable.length; i++){
  playable.eq(i).on('click', function() {
    if($(this).html() == '') {
      console.log("you clicked on", this
    );
    if(currentTurn === 'B') {
      console.log('adding class black')
      $(this).addClass('black')
    } else {
        console.log('adding class black')
      $(this).addClass('white')
    }
    switchTurn();
    } else {
    alert('Please replay your turn ');
  };
})
}

function switchTurn() {
  if(currentTurn == 'B') {
    currentTurn = 'W';
  } else {
    currentTurn = 'B';
  }
}

var resetButton = $('#resetGame');

resetButton.on('click', function(){
  for(var i = 0; i < playable.length; i++){
    playable.eq(i).removeClass('black white');
    currentTurn = 'B';
}})
