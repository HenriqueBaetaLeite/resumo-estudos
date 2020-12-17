const paragraph = document.querySelector('#clicked');
const btnClicked = document.querySelector('#btn-click');
const buttonDiv = document.querySelector('#btn-div');

btnClicked.addEventListener('click', () => {
  const age = 10;
  buttonDiv.innerHTML = '';
  paragraph.textContent = age;
  // paragraph.style.color = 'blue';
  console.log('Clicked', age);
  console.log('A ordem do script é respeitada linha à linha');
  const newBtn = document.createElement('button');
  newBtn.textContent = 'change the value again';

  buttonDiv.appendChild(newBtn);
  buttonDiv.addEventListener('click', () => {
    console.log('o valor não muda e mostra um erro porque age é uma const...');
    age = 50;
    paragraph.textContent = age;
  });
});
