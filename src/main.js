import { nanoid } from 'nanoid';
import './style.css';

const passwordButton = document.querySelector('button');
const displayPassword = document.querySelector('h2');

passwordButton.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPassword.innerHTML = randomPassword;
});

