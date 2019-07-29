let fieldSize = 315;
let cellSize = 31.5;
let ships = [ [0, 'one'], [1, 'two'],[2, 'tree'],[3, 'four']];
let isGameStarted;

function createField(){
  let field = document.createElement('div');
  field.className = 'field';
  document.body.appendChild(field);
  fieldUser = document.createElement('div');
  fieldUser.className = 'fieldUser';
  let fieldComp = fieldUser.cloneNode(true);
  fieldUser.className = 'fieldComp';
  field.appendChild(fieldUser);
  field.appendChild(fieldComp);
}

createField();
