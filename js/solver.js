let cells = document.querySelectorAll('.cell');
let i = 0;

// outer borderring
cells.forEach (cell => {
    // cell.innerText = i;
    if(i % 3 == 2)
        cell.classList.add('right-side');
    if(i % 3 == 0)
        cell.classList.add('left-side');
    if((i >= 18 && i <= 26) || (i >= 45 && i <= 53) || (i >= 72 && i <= 80))
        cell.classList.add('below')
    if((i >= 0 && i <= 8) || (i >= 27 && i <= 35) || (i >= 54 && i <= 62))
        cell.classList.add('above');
    i++;
});


// user input
