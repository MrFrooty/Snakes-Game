function keyPressed2(e, keys) {
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
function movePlayer2(keys) {
  var curTop = parseInt(player2.style.top);
  var curLeft = parseInt(player2.style.left);
    for(var i=0; i<keys.length; i++) {
      if(keys[i]==87) { //up
        player2.style.top = curTop + -2 + "px";
      }
      if(keys[i]==83) { //down
        player2.style.top = curTop + 2 + "px";
      }
      if(keys[i]==65) { //left
        player2.style.left = curLeft + -2 + "px";
      }
      if(keys[i]==68) { //right
        player2.style.left = curLeft + 2 + "px";
      }
  }
}
function keyLifted2(e, keys) {
  for(var i=0; i<keys.length; i++) {
      if(keys[i]==e.keyCode) {
          keys.splice(i,1);
      }
  }
}
