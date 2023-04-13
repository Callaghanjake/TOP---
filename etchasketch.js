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