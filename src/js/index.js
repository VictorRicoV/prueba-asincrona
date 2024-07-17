// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const textElement = document.getElementById('text');
const phraseElement = document.getElementById('phrase');
const buttonElement = document.getElementById('button');

const update = data => {
  const newId = `ADVICE#${data.slip.id}`;
  textElement.textContent = newId;
  const newPhrase = data.slip.advice;
  phraseElement.textContent = newPhrase;
};
const getData = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    // console.log(data.slip.advice);
    update(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

buttonElement.addEventListener('click', getData);
