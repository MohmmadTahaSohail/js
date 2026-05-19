const clock=document.getElementById('clock');

setInterval(function(){
    let date=new Date();
    // console.log(date.toLocaleTimeString());
    // clock.innerHTML=date.toLocaleTimeString();
    const time=date.toLocaleTimeString();
    clock.innerHTML=`<span>${time}</span>`;
},1000);
 