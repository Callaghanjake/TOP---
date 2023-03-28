// Query selector to grab HTML frame DIV.
  let frame = document.querySelector('.frame');

// Variables that create the player grid.
  let num = 16;
  let squared = num * num;

// Change the CSS GRID-TEMPLATE-COLUMNS based on the NUM variable above.
  function changeGridSize() {
    frame.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr)');
  }

// FOR LOOP to create DIV squares based on NUM and SQUARED variables.
  for (let i = 0; i < squared; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    frame.appendChild(div);
    
    div.onmouseover = function() { // Change the color of player grid squares to black on mouseover.
        div.classList.add('active');
    }
  }
  changeGridSize();