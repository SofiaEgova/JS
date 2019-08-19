let cellSizex = 34;
let cellSizey = 34;
let n = 10;
let emptyColor = '#FFFFFF';
let missColor = '#239FF7';
let shipColor = '#696969';
let hitColor ='#FF0000';

function createField(){
  let field = document.createElement('div');
  field.className = 'field';
  document.body.appendChild(field);
  let fieldUser = document.createElement('div');
  fieldUser.className = 'fieldUser';
  fieldUser.innerHTML='<i>Игрок';
  let fieldComp = fieldUser.cloneNode(true);
  fieldComp.className = 'fieldComp';
  fieldComp.innerHTML='<i>Компьютер';
  field.appendChild(fieldUser);
  field.appendChild(fieldComp);

  let tableUser = document.createElement('table');
  fieldUser.appendChild(tableUser);
  for(let i=0;i<n;i++){
    let tr = document.createElement('tr');
    tableUser.appendChild(tr);
    for(let j=0;j<n;j++){
      let td = document.createElement('td');
      td.style.left=100+i*cellSizex+'px';
      td.style.top=100+j*cellSizey+'px';
      td.setAttribute('data-y',i);
      td.setAttribute('data-x',j);
      td.setAttribute('data-user',"user");
      td.className = 'cell';
      tr.appendChild(td);
    }
  }

  let tableComp = document.createElement('table');
  fieldComp.appendChild(tableComp);
  for(let i=0;i<n;i++){
    let tr = document.createElement('tr');
    tableComp.appendChild(tr);
    for(let j=0;j<n;j++){
      let td = document.createElement('td');
      td.style.left=750+i*cellSizex+'px';
      td.style.top=100+j*cellSizey+'px';
      td.setAttribute('data-y',i);
      td.setAttribute('data-x',j);
      td.setAttribute('data-user',"comp");
      td.className = 'cellComp';
      tr.appendChild(td);
    }
  }
}

function createUserField(){
  let cells = [...document.querySelectorAll('td.cell')];
  cells.forEach( (item)=>{
                item.addEventListener('click', (e)=>{
                  let x = e.target.getAttribute('data-x');
                          let y = e.target.getAttribute('data-y');
                          console.log(x + y);
                          e.target.style.backgroundColor = shipColor;
                });
  });
}

function getRandom(n) {
	return Math.floor(Math.random() * (n + 1));
}

function getCell(cells, x, y){
  let cell;
    cells.forEach( (item)=>{
      if(item.getAttribute('data-x') == x+""){
        if(item.getAttribute('data-y') == y+"") cell = item;
        return cell;
      }
    });
    return;
}

function createCompField(){
// debugger;
  let cells = [...document.querySelectorAll('td.cellComp')];
  createShip(cells, 1);
}

function createShip(cells, deck){
  let upright = getRandom(1);
  if(upright==0){
    x = getRandom(9);
		y = getRandom(10 - deck);
  } else{
    x = getRandom(10 - deck);
		y = getRandom(9);
  }
  var res = checkLocation(x,y,upright,deck,cells);
  if(!res) return createShip(cells, deck);
  //TD иначе рисуем
}

function checkLocation(x,y,upright,deck, cells){
//TD проверка на касание с другим кораблем
debugger;
let cell = cells.querySelector('[data-x="${x}"]');

// let res = getCell(cells,x,y);
// let cell = cells.querySelector('[data-x="1"][data-y="1"]');
// let cell = [...document.querySelectorAll('td.cellComp, [data-x="1"][data-y="1"]')];
// console.log(cell.style.backgroundColor);
  return true;
}

function check(){
//TD проверка расставления пользователя (по кнопке)
  game();
}

function game(){

}

createField();
createUserField();
createCompField();
