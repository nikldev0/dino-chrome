let block = document.getElementById('block');
let character = document.getElementById('character');
let game = document.getElementById('game');
let replay = document.getElementById('replay');

game.addEventListener('click', () => {
  if (character.classList != 'character-animation') {
    character.classList.add('character-animation');
  } 
  setTimeout(function(){
    character.classList.remove('character-animation');
  }, 1000);
});


let checkDead = setInterval(() => {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft < 40 && blockLeft>0 && characterTop >= 81) {
    block.style.animation = "none";
    replay.style.display = "block";
    alert("You lose");
  }
}, 10);


replay.addEventListener('click', () => {
  block.style.animation = "block 1.8s linear infinite normal forwards";
  character.classList.remove('character-animation');
  replay.style.display = "none";
})