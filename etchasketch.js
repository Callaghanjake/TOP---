let frame = document.querySelector('.frame');

let div = document.createElement('div');
  div.classList.add('box');


// frame.appendChild(div);

let num = 4;
let squared = num * num;

for (let i = 0; i < squared; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    div.textContent = 'hi';
    frame.appendChild(div);

}