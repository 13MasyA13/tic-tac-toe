window.onload= function(){

  for(var i = 0; i < 9; i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>'
  }

  var hod = 0;

  document.getElementById('game').onclick = function(event){
    console.log(event);
    if(event.target.className == 'block'){
      if(hod % 2 == 0){
        event.target.innerHTML = 'X';
      } else{
        event.target.innerHTML = '0';
      }
      hod++;
      checkWinnerX();
      checkWinnerO();
    }
  }

  function checkWinnerX(){
    var allBlocks = document.getElementsByClassName('block');
    console.log(allBlocks);
    if(allBlocks[0].innerHTML == 'X' && allBlocks[1].innerHTML == 'X' && allBlocks[2].innerHTML == 'X'){
      alert('X WIN!');
      clearAll();
    } else if (allBlocks[0].innerHTML == 'X' && allBlocks[3].innerHTML == 'X' && allBlocks[6].innerHTML == 'X') {
      alert('X WIN!');
      clearAll();
    } else if (allBlocks[6].innerHTML == 'X' && allBlocks[7].innerHTML == 'X' && allBlocks[8].innerHTML == 'X') {
      alert('X WIN!');
      clearAll();
    } else if (allBlocks[2].innerHTML == 'X' && allBlocks[5].innerHTML == 'X' && allBlocks[8].innerHTML == 'X') {
      alert('X WIN!');
      clearAll();
    } else if (allBlocks[1].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[7].innerHTML == 'X') {
      alert('X WIN!');
      clearAll();
    } else if (allBlocks[3].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[5].innerHTML == 'X') {
      alert('X WIN!');
      clearAll();
    } else if (allBlocks[0].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[8].innerHTML == 'X') {
      alert('X WIN!');
      clearAll();
    } else if (allBlocks[2].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[6].innerHTML == 'X') {
      alert('X WIN!');
      clearAll();
    } else {
      console.log('no winner yet');
    }
  }

  function checkWinnerO(){
    var allBlocks = document.getElementsByClassName('block');
    if(allBlocks[0].innerHTML == '0' && allBlocks[1].innerHTML == '0' && allBlocks[2].innerHTML == '0'){
      alert('0 WIN!');
      clearAll();
    } else if(allBlocks[0].innerHTML == '0' && allBlocks[3].innerHTML == '0' && allBlocks[6].innerHTML == '0'){
      alert('0 WIN!');
      clearAll();
    } else if(allBlocks[6].innerHTML == '0' && allBlocks[7].innerHTML == '0' && allBlocks[8].innerHTML == '0'){
      alert('0 WIN!');
      clearAll();
    } else if(allBlocks[2].innerHTML == '0' && allBlocks[5].innerHTML == '0' && allBlocks[8].innerHTML == '0'){
      alert('0 WIN!');
      clearAll();
    } else if(allBlocks[1].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[7].innerHTML == '0'){
      alert('0 WIN!');
      clearAll();
    } else if(allBlocks[3].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[5].innerHTML == '0'){
      alert('0 WIN!');
      clearAll();
    } else if(allBlocks[0].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[8].innerHTML == '0'){
      alert('0 WIN!');
      clearAll();
    } else if(allBlocks[2].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[6].innerHTML == '0'){
      alert('0 WIN!');
      clearAll();
    } else {
      console.log('no winner yet');
    }
  }

  function clearAll(){
    var allB = document.getElementsByClassName('block');
    for(var i = 0; i < 9; i++){
      allB[i].innerHTML = null;
    }
  }
}
