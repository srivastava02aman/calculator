
//getting element of screen.
let screen = document.getElementById('screen');
//getting all buttons.
buttons = document.querySelectorAll('button');
//screen value = null.
let empty = '';

//all logics.
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        
        if (buttonText == 'X') {
            buttonText = '*';
            empty += buttonText;
            screen.value = empty;
        }
        else if (buttonText == 'C') {
            empty = "";
            screen.value = empty;
        }
        else if (buttonText == '=') {
            screen.value = eval(empty);
        }
        else {
            empty += buttonText;
            screen.value = empty;
        }

    })
}