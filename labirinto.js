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
// 21x15
let container = document.getElementById('container');
const celulas = (map) => {
   for(let i = 0; i < map.length; i++) {
      for(let j = 0; j < map[i].length; j++) {
         if(map[i][j] === 'W') {
            let c1 = document.createElement('div');
            c1.classList.add('colunas1');
            container.appendChild(c1);
         }
         if(map[i][j] === 'S') {
            let c2 = document.createElement('div');
            c2.classList.add('colunas2');
            container.appendChild(c2);
         }
         if(map[i][j] === 'F') {
            let c3 = document.createElement('div');
            c3.classList.add('colunas3');
            container.appendChild(c3);
         }
         if(map[i][j] === ' ') {
            let c4 = document.createElement('div');
            c4.classList.add('colunas4');
            container.appendChild(c4);
         }
      }
   }
}
celulas(map);