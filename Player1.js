function keyPressed1(e, keys) {
  var isRepeat = false;
  for(var i=0; i<keys.length; i++) {
    if(e.keyCode==keys[i]) {
      isRepeat = true;
    }
  }
  if(!isRepeat) {
    keys.push(e.keyCode);
  }
}
function movePlayer1(keys) {
  var curTop = parseInt(player1.style.top);
  var curLeft = parseInt(player1.style.left);
    for(var i=0; i<keys.length; i++) {
      if(keys[i]==38) { //up
        player1.style.top = curTop + -2 + "px";
      }
      if(keys[i]==40) { //down
        player1.style.top = curTop + 2 + "px";
      }
      if(keys[i]==37) { //left
        player1.style.left = curLeft + -2 + "px";
      }
      if(keys[i]==39) { //right
        player1.style.left = curLeft + 2 + "px";
      }
  }
}
function keyLifted1(e, keys) {
  for(var i=0; i<keys.length; i++) {
      if(keys[i]==e.keyCode) {
          keys.splice(i,1);
      }
  }
}
