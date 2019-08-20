let n = 10;
let score=2;
let timer;
let field;
let snake;
let nav='toRight';
let newApple;

function getRandom(n) {
  return Math.floor(Math.random() * (n + 1));
}

function createField(){
  field = document.createElement('div');
  document.body.appendChild(field);
  field.classList.add('field');
  field.innerHTML=`<i>Счет: ${score}`;

  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      let cell = document.createElement('div');
      cell.style.left=100+i*50+'px';
      cell.style.top=100+j*50+'px';
      cell.setAttribute('type', 'empty');
      field.appendChild(cell);
      cell.classList.add('cell');
    }
  }

  let table = document.getElementsByClassName('cell');

  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      table[i*10+j].setAttribute('x', i);
      table[i*10+j].setAttribute('y', j);
    }
  }
}

function createSnake(){
  let x = getRandom(n-4);
  let y = getRandom(n-1);
  snake = [document.querySelector('[x = "' + (x+2) + '" ][y = "' + y + '" ]'), document.querySelector('[x = "' + (x+1) + '" ][y = "' + y + '" ]'),
  document.querySelector('[x = "' + x + '" ][y = "' + y + '" ]')];
  for(let i=0;i<snake.length;i++){
    snake[i].classList.add('snake');
  }

  window.addEventListener('keydown', function (e) {
    if(e.keyCode == 37 && nav != 'toRight'){
      nav = 'toLeft';
    }
    else if(e.keyCode == 38 && nav != 'toDown'){
      nav = 'toUp';
    }
    else if(e.keyCode == 39 && nav != 'toLeft'){
      nav = 'toRight';
    }
    else if(e.keyCode == 40 && nav != 'toUp'){
      nav = 'toDown';
    }
  });
}

function createApple(){
  let x = getRandom(n-1);
  let y = getRandom(n-1);
  let apple = [document.querySelector('[x = "' + x + '" ][y = "' + y + '" ]')];
  apple[0].classList.add('apple');
  return apple;
}

function step(){
  // debugger;
  let snakePos = [snake[0].getAttribute('x'), snake[0].getAttribute('y')];
  snake[snake.length-1].classList.remove('snake');
  snake.pop();
  for(let i=1;i<snake.length;i++){
    if(snake[i].getAttribute('x')==snakePos[0]&&snake[i].getAttribute('y')==snakePos[1]){
      alert(`Игра окончена! Ваш результат: ${score+1}`);
      location.reload(true);
    }
  }
  switch(nav){
    case 'toRight':
    if(snakePos[0]<n-1){
      snake.unshift(document.querySelector('[x = "' + (+snakePos[0]+1) + '" ][y = "' + snakePos[1] + '" ]'));
      snake[0].classList.add('snake');
    }
    else{
      alert(`Игра окончена! Ваш результат: ${score+1}`);
      location.reload(true);
    }
    break;
    case 'toLeft':
    if(snakePos[0]>0){
      snake.unshift(document.querySelector('[x = "' + (+snakePos[0]-1) + '" ][y = "' + snakePos[1] + '" ]'));
      snake[0].classList.add('snake');
    }
    else{
      alert(`Игра окончена! Ваш результат: ${score+1}`);
      location.reload(true);
    }
    break;
    case 'toUp':
    if(snakePos[1]>0){
      snake.unshift(document.querySelector('[x = "' + snakePos[0] + '" ][y = "' +(+snakePos[1]-1) + '" ]'));
      snake[0].classList.add('snake');
    }
    else{
      alert(`Игра окончена! Ваш результат: ${score+1}`);
      location.reload(true);
    }
    break;
    case 'toDown':
    if(snakePos[1]<n-1){
      snake.unshift(document.querySelector('[x = "' + snakePos[0] + '" ][y = "' +(+snakePos[1]+1) + '" ]'));
      snake[0].classList.add('snake');
    }
    else{
      alert(`Игра окончена! Ваш результат: ${score+1}`);
      location.reload(true);
    }
    break;
  }
  if(snake[0].getAttribute('x') == newApple[0].getAttribute('x') && snake[0].getAttribute('y')==newApple[0].getAttribute('y')){
    newApple[0].classList.remove('apple');
    let x = snake[score].getAttribute('x');
    let y = snake[score].getAttribute('y');
    snake.push(document.querySelector('[x = "' + x + '"][y = "' + y + '"]'));
    newApple = createApple();
    score++;
  }
}

function game(){
  createField();
  createSnake();
  newApple = createApple();
  timer = setInterval(step, 500);
}

game();
