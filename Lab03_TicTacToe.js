const clicked = document.querySelectorAll("[id=no]")
for (let index = 0; index < clicked.length; index++) {
     clicked[index].addEventListener('click', TableClick);
}


let iswin = false;
let isplayable = 4;
function TableClick() {
    console.log("player")
    this.src = 'o.png';
    this.id = 'o';
    this.removeEventListener('click', TableClick)
    console.log(isplayable);
    checkwin();
    if(iswin === false){
        Botplay();
    }      
    isplayable--;
}

function Botplay(){
    var rand = Math.floor(Math.random() * 9);
    index = rand;
    console.log('Botplay');
    if(clicked[index].id === 'no') {
        console.log('IN if');
        clicked[index].src = 'x.png';
        clicked[index].id = 'x';
        clicked[index].removeEventListener('click', TableClick)
        console.log("Botplayed");
        checkwin()
    }
    else if (clicked[index].id === 'o' || clicked[index].id === 'x' && isplayable > 0){
        Botplay();
    }
    else {
        win();
    }
}

function checkwin() {
    if(clicked[0].id === 'o'){
        if(clicked[1].id === 'o' && clicked[2].id === 'o'){
            win(o);
        } 
        if(clicked[3].id === 'o' && clicked[6].id === 'o'){
            win(o);
        } 
        if(clicked[4].id === 'o' && clicked[8].id === 'o'){
            win(o);
        }
    }

    if(clicked[4].id === 'o'){
        if(clicked[1].id === 'o' && clicked[7].id === 'o'){
            win(o);
        } 
        if(clicked[3].id === 'o' && clicked[5].id === 'o'){
            win(o);
        } 
        if(clicked[2].id === 'o' && clicked[6].id === 'o'){
            win(o);
        }
    }
    if(clicked[8].id === 'o'){
        if(clicked[6].id === 'o' && clicked[7].id === 'o'){
            win(o);
        } 
        if(clicked[5].id === 'o' && clicked[2].id === 'o'){
            win(o);
        } 
    }
    
    if(clicked[0].id === 'x'){
        if(clicked[1].id === 'x' && clicked[2].id === 'x'){
            win(x);
        } 
        if(clicked[3].id === 'x' && clicked[6].id === 'x'){
            win(x);
        } 
        if(clicked[4].id === 'x' && clicked[8].id === 'x'){
            win(x);
        }
    }

    if(clicked[4].id === 'x'){
        if(clicked[1].id === 'x' && clicked[7].id === 'x'){
            win(x);
        } 
        if(clicked[3].id === 'x' && clicked[5].id === 'x'){
            win(x);
        } 
        if(clicked[2].id === 'x' && clicked[6].id === 'x'){
            win(x);
        }
    }
    if(clicked[8].id === 'x'){
        if(clicked[6].id === 'x' && clicked[7].id === 'x'){
            win(x);
        } 
        if(clicked[5].id === 'x' && clicked[2].id === 'x'){
            win(x);
        } 
    }
}

function win(player){
    if(player === o){
        console.log("O win")
        for (let index = 0; index < clicked.length; index++) {
            clicked[index].removeEventListener('click', TableClick);
        }
        iswin = true;
        const msg = document.getElementById('winner')
        msg.textContent = 'O win!'
    }
    else if (player === x){
        console.log("x win")
        for (let index = 0; index < clicked.length; index++) {
                clicked[index].removeEventListener('click', TableClick);
        }
        iswin = true;
        const msg = document.getElementById('winner')
        msg.textContent = 'X win!'
    }
    else{
        console.log("Draw");
        iswin = true;
        const msg = document.getElementById('winner')
        msg.textContent = 'Draw'
    }
 }
   

