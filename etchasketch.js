let frame = document.querySelector('.frame');
let clearGrid = document.querySelector('.clearGrid');
let newGrid = document.querySelector('.newGrid');
let input = document.querySelector('.input');

// let num = 16;


function createGrid(num = 16) {

    if (num < 2) {
        num = 2;
    } else if (num > 64) {
        num = 64;
    }
    
    let squared = num * num;

    frame.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr)');
    
    for (let i = 0; i < squared; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        frame.appendChild(div);

        div.addEventListener('mouseover', () => {
            div.classList.add('active');
        });

        clearGrid.addEventListener('click', () => {
            div.classList.remove('active');
        });
    }
    
}
createGrid();

function emptyGrid() {
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
      }
}

newGrid.addEventListener('click', () => {
    emptyGrid();
    createGrid(input.value);
});






/*_______________________________________________________________________________________


// HTML DIV reference to hold the grid.
  let frame = document.querySelector('.frame');
// HTML BUTTON reference to reload the page on click.
  let refresh = document.querySelector('.refresh');

// Function to link CSS GRID-TEMPLATE-COLUMNS to NUM variable. Square NUM variable and create a grid of 'x by x' squares.
  function createGrid() {
    let num = parseInt(prompt('Pick a number', ''));

    if (num > 100) {
        num = 100;
    } else if (num < 2) {
        num = 2;
    } 

    frame.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr)');
    let squared = num * num;
    for (let i = 0; i < squared; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        frame.appendChild(div);
        
        div.onmouseover = function() { // Change the color of the squares on hover;
            div.classList.add('active');
        }
    }
  }

  createGrid();

// Reload BUTTON eventlistener
  refresh.addEventListener('click', () => {
    location.reload();
  });

  _______________________________________________________________________________________*/