let numOne = '';
let operator  = '';
let numTwo = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');



const onClickNumber = (event) => {
    if (!operator) {
      numOne += event.target.textContent;
      $result.value += event.target.textContent;
      return;
    }
     if (!numTwo){
      $result.value = '';
     } 
      numTwo += event.target.textContent;
      $result.value += event.target.textContent;
  }; 

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () =>  {
    if (numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert('숫자를 먼저 입력히세요.');
    }
};

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));  //+ 꼽하기
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));  //_ 빼기
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));  // / 나누기
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));  // * 더하기 
document.querySelector('#calculate').addEventListener('click', () => {   //계산하기
    if (numTwo) {
        switch (operator) {
            case '+':
              $result.value = parseInt(numOne) + parseInt(numTwo);
              break;
            case '-':
              $result.value = numOne - numTwo;
              break;
            case '*':
              $result.value = numOne * numTwo;
              break;
            case '/':
              $result.value = numOne / numTwo;
              break;
            default:
              break;
          }
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
});
document.querySelector('#clear').addEventListener('click', () => {});  //C 지우기