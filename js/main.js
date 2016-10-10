console.log('loaded')


//sets currentTurn to black, starting

var currentTurn = 'B';
var playable = document.getElementsByClassName('playable');
console.log(playable);

for(var i = 0; i < playable.length; i++){
  playable[i].addEventListener('click', function() {
    if(this.innerHTML == "") {
      console.log("you clicked on", this
    );
    this.innerHTML = currentTurn;
    switchTurn();
    } else {
    alert('Please replay your turn');
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

var resetButton = document.getElementById('resetGame');

resetButton.addEventListener('click', function(){
  for(var i = 0; i < playable.length; i++){
    playable[i].innerHTML = '';
    currentTurn = 'B';
}})
