const randomColor= function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<=5;i++){
        color+=hex[parseInt(Math.random()*16)];
    }
    return color;
}
// console.log(randomColor());
let intervalId;
const changeBgColor =function() {
    document.body.style.backgroundColor = randomColor();
  };
const startChanging=function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }
};
const stopChanging=function () {
  clearInterval(intervalId);
};

document.querySelector('#start').addEventListener('click',startChanging);

document.querySelector('#stop').addEventListener('click',stopChanging);