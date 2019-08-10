let cellSizex = 34;
let cellSizey = 34;
let n = 10;
let emptyColor = '#FFFFFF';
let missColor = '#239FF7';
let shipColor = '#696969';
let hitColor ='#FF0000';
let isGameStarted;
let userSips=[];
let compShips=[];

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
      td.setAttribute('data-type','empty');
      td.className = 'cell';
      tr.appendChild(td);
    }
  }
}

function createUserField(){
  let cells = [...document.querySelectorAll('td')];
  cells.forEach( (item)=>{
                item.addEventListener('click', (e)=>{
                  let x = e.target.getAttribute('data-x');
                          let y = e.target.getAttribute('data-y');
                          console.log(x + y);
                          e.target.style.backgroundColor = shipColor;

                });
  });

}

function check(){
  
  game();
}

function game(){

}

createField();
createUserField();
