function generateRandomColor(number) {
    //make an array
    let arr=[];
    // add num random colors to array
    for (let i = 0; i < number; i++) {
        //get random color and push into arr
        arr.push(randomColor());

    }
    //return that array
    console.log(arr);
    return arr;
}

function randomColor(){
    //pick a 'red' from 0 -255
    let r=Math.floor(Math.random()*256)
    //pick a 'green' form 0-255
    let g=Math.floor(Math.random()*256)
    //pick a 'blue' from 0-255
    let b=Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`;
}

let colors=generateRandomColor(6);

// let colors = [
//     'rgb(255, 0, 0)',
//     'rgb(255, 255, 0)',
//     'rgb(0, 255, 0)',
//     'rgb(0, 255, 255)',
//     'rgb(0, 0, 255)',
//     'rgb(255, 0, 255)'
// ]

squares=document.querySelectorAll('.square');


pickColor=()=>{
    let random=Math.floor(Math.random()*colors.length);
    console.log(random);
    return colors[random];
}

let numSquare=6;
let pickedColor=pickColor();
colorDisplay=document.getElementById('colorDisplay');
messageDisplay=document.querySelector('#message')
colorDisplay.textContent=pickedColor;
let easyBtn=document.querySelector('#easyBtn');
let hardBtn=document.querySelector('#hardBtn');
easyBtn.addEventListener('click',()=>{
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSquare=3;
    colors=generateRandomColor(numSquare);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.background=colors[i];
        }else {
            squares[i].style.display='none';
        }
    }
});
hardBtn.addEventListener('click',()=>{
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    numSquare=6;
    colors=generateRandomColor(numSquare);
    pickedColor=pickColor();
    for (let i = 0; i < squares.length; i++) {
            squares[i].style.background=colors[i];
            squares[i].style.display='block';
    }
});


h1=document.querySelector('h1');
resetButtin=document.querySelector('#reset');
resetButtin.addEventListener('click',()=>{
    //generate all new colors
    colors=generateRandomColor(numSquare);
    //pick a new random color from array
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    resetButtin.textContent='New Colors';
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background=colors[i];
    }
    h1.style.background='steelblue';
})

for (let i = 0; i < squares.length; i++) {

    squares[i].style.background=colors[i]

    squares[i].addEventListener('click',()=>{
        let clickColor=squares[i].style.background;
        if (clickColor===pickedColor){
            messageDisplay.textContent='Correct!';
            resetButtin.textContent='Play Again?';
            changeColor(clickColor);
            h1.style.background=clickColor;

        }else {
            squares[i].style.background='#232323';
            messageDisplay.textContent='Try again!';
            // alert('wrong');
        }

    })
}

changeColor=(color)=>{
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.background=color;
    }
}


