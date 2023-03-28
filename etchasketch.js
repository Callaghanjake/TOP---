let frame = document.querySelector('.frame');

let num = 10;
let squared = num * num;

for (let i = 0; i < squared; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    frame.appendChild(div);

    div.onmouseover = function() {
        div.classList.add('active');
    }
}


// Need to dynamically change CSS grid-template-columns repeat() number
// grid-template-columns: repeat(?, 1fr) needs to be the same as num