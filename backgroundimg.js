const body = document.querySelector('body');

function init(){
    const randomNum = getRandom();
    setBackground(randomNum);
}
function getRandom(){
    const number = Math.floor(Math.random() * 5);
    return number;
}

function setBackground(imgNum){
    // body.style.background.url = `imgs/background/${imgNum + 1}.png`;
    // console.log(imgNum)
    body.style.backgroundImage = `url(imgs/background/${imgNum + 1}.png)`;
    // body.style.backgroundRepeat = 'no-repeat';
    
}

init();