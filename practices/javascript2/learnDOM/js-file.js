const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const textRed = document.createElement('p');
textRed.classList.add('textRed');
textRed.textContent ='Oye, soy rojo';
textRed.style.color = 'red';

const textBlue = document.createElement('h3');
textBlue.classList.add('textBlue');
textBlue.textContent ='Soy un h3 Azul';
textBlue.style.color = 'blue';

container.appendChild(content);
container.appendChild(textRed);
container.appendChild(textBlue);

const segundoContenedor = document.querySelector('#segundoContenedor');

const cajaBordeada = document.createElement('h1');
cajaBordeada.classList.add('cajaBordeada');
cajaBordeada.textContent = 'Estoy en un div';

const nuevoP = document.createElement('p');
nuevoP.classList.add('nuevoP');
nuevoP.textContent = 'Yo tambien';

segundoContenedor.style.border = '1px solid black';
segundoContenedor.style.backgroundColor = 'pink';

segundoContenedor.appendChild(cajaBordeada);
segundoContenedor.appendChild(nuevoP);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});