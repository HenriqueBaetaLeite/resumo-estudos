//  SWITCH CASE

let trafficLight = 'verde';

switch (trafficLight) {
  case 'vermelho':
    console.log('Pare!');
    break;
  case 'amarelo':
    console.log('Atenção');
    break;
  case 'verde':
    console.log('Siga!');
    break;
  default:
    console.log('Cuidado!!! Semáforo com defeito');
}

const verde = document.querySelector('#verde');
const vermelho = document.querySelector('#vermelho');
const amarelo = document.querySelector('#amarelo');
const btnColor = document.querySelector('#btn-color');
const color = document.querySelector('#color');

let initialState = 'vermelho';

color.textContent = initialState;

switch (initialState) {
  case 'vermelho':
    vermelho.style.backgroundColor = 'red';
    verde.style.backgroundColor = 'lightcyan';
    amarelo.style.backgroundColor = 'lightgoldenrodyellow';
    break;
  case 'verde':
    verde.style.backgroundColor = 'green';
    amarelo.style.backgroundColor = 'lightgoldenrodyellow';
    vermelho.style.backgroundColor = 'lightcoral';
    break;
  case 'amarelo':
    verde.style.backgroundColor = 'lightcyan';
    amarelo.style.backgroundColor = 'yellow';
    vermelho.style.backgroundColor = 'lightcoral';
    break;
  default:
    verde.style.backgroundColor = 'lightcyan';
    amarelo.style.backgroundColor = 'lightgoldenrodyellow';
    vermelho.style.backgroundColor = 'lightcoral';
    const strobe = setInterval(() => {
      amarelo.classList.toggle('strobe');
    }, 500);
    color.textContent = 'Com defeito!';
}

btnColor.addEventListener('click', () => {
  switch (initialState) {
    case 'vermelho':
      vermelho.style.backgroundColor = 'lightcoral';
      verde.style.backgroundColor = 'green';
      amarelo.style.backgroundColor = 'lightgoldenrodyellow';
      initialState = 'verde';
      color.textContent = initialState;
      break;
    case 'verde':
      verde.style.backgroundColor = 'lightcyan';
      amarelo.style.backgroundColor = 'yellow';
      vermelho.style.backgroundColor = 'lightcoral';
      initialState = 'amarelo';
      color.textContent = initialState;
      break;
    case 'amarelo':
      verde.style.backgroundColor = 'lightcyan';
      amarelo.style.backgroundColor = 'lightgoldenrodyellow';
      vermelho.style.backgroundColor = 'red';
      initialState = 'vermelho';
      color.textContent = initialState;
      break;
  }
});
