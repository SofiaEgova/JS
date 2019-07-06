  function start(){
    let res;
    let first = prompt('Введите первое число', '1');
    let second = prompt('Введите второе число', '1');
    let oper = prompt('Введите операцию', '+');

    if(isNumeric(first)){
      first=+first;
    } else{
      error('Первое введенное число не допустимо');
      return;
    }
    if(isNumeric(second)){
      second=+second;
    } else{
      error('Второе введенное число не допустимо');
      return;
    }

    switch (oper) {
      case '+':
        res = first+second;
        break;
      case '-':
        res = first-second;
        break;
      case '*':
        res = first*second;
        break;
      case '/':
        res = first/second;
        break;
      case '%':
        res = first%second;
        break;
      default:
        error('Введенный оператор не допустим')
        return;
    }
    alert(res);
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function error(message) {
    alert(message);
    start();
  }

  start();
