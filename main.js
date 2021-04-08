const player1 = {
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Мачете', 'Боевые веера', 'Ножи-бабочки'],
  attack: function() {
    console.log(player1.name + '- Fight...');
  }
};

const player2 = {
  name: 'Subzero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ('Секира', 'боевой топор', 'Ножи-бабочки'),
  attack: function() {
    console.log(player2.name + '- Fight...');
  }
};

const createPlayer = function (player, name, heals) {

  const $player1 = document.createElement('div');
  $player1.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player1.appendChild($progressbar);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player1.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $progressbar.appendChild($life);
  $life.style.width = heals + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $progressbar.appendChild($name);
  $name.innerText = name;

  const $img = document.createElement('img');
  $img.src = player1.img;
  $character.appendChild($img);
  
  const arenas = document.querySelector('.arenas');
  arenas.appendChild($player1);
};

createPlayer('player1', 'Kitana', 80);
createPlayer('player2', 'Subzero', 50);
