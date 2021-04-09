const map = [
   "WWWWWWWWWWWWWWWWWWWWW",
   "W   W     W     W W W",
   "W W W WWW WWWWW W W W",
   "W W W   W     W W   W",
   "W WWWWWWW W WWW W W W",
   "W         W     W W W",
   "W WWW WWWWW WWWWW W W",
   "W W   W   W W     W W",
   "W WWWWW W W W WWW W F",
   "S     W W W W W W WWW",
   "WWWWW W W W W W W W W",
   "W     W W W   W W W W",
   "W WWWWWWW WWWWW W W W",
   "W       W       W   W",
   "WWWWWWWWWWWWWWWWWWWWW",
];

let container = document.getElementById('container');

let winMessage = document.getElementsByTagName('h2');

let player = document.createElement('div');
player.id = 'p1';

const cells = (map) => {

   for(let i = 0; i < map.length; i++) {

      let lines = document.createElement('div');
      lines.classList.add('line');
      lines.classList.add(`${i}`);
      container.appendChild(lines);

      for(let j = 0; j < map[i].length; j++) {

         if(map[i][j] === 'W') {
            let walls = document.createElement('div');
            walls.classList.add('wall');
            walls.classList.add(`${j}`);
            lines.appendChild(walls);
         }

         if(map[i][j] === 'S') {
            // let player = document.createElement('div');
            // player.id = 'p1';
            let start = document.createElement('div');
            start.classList.add('start');
            start.appendChild(player);
            lines.appendChild(start);
         }

         if(map[i][j] === 'F') {
            let finish = document.createElement('div');
            finish.classList.add('finish');
            lines.appendChild(finish);
         }

         if(map[i][j] === ' ') {
            let way = document.createElement('div');
            way.classList.add('way');
            way.classList.add(`${j}`);
            lines.appendChild(way);
         }
      }
   }
}
cells(map);

let counter = 0;

document.addEventListener('keydown', (event) => {

   const keyName = event.key;
   let current = p1.parentElement;
   let next1 = p1.parentElement.nextSibling;
   let previous1 = p1.parentElement.previousSibling;
   let down = current.parentElement.nextSibling;
   let up = current.parentElement.previousSibling;

   if (keyName === 'ArrowDown' && down.childNodes[counter].classList.contains('way')) {
      down.childNodes[counter].appendChild(player);
   }

   if (keyName === 'ArrowUp' && up.childNodes[counter].classList.contains('way')) {
      up.childNodes[counter].appendChild(player);
   }

   if (keyName === 'ArrowRight') {

      if (next1.classList[0] === 'way') {
         next1.appendChild(player);
         counter++;
      }

      if (next1.classList[0] === 'finish') {
         next1.appendChild(player);
         winMessage[0].classList.remove('t');
         winMessage[0].classList.add('win');
      }
   }

   if (keyName === 'ArrowLeft') {

      if (previous1.classList[0] === 'way') {
         previous1.appendChild(player);
         counter--;
      }
   }
 })


