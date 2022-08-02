const secondhand = document.querySelector('.sechand')
const minuteHand = document.querySelector('.minhand')
const hourHand = document.querySelector('.hourhand')
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();//get the seconds
    const secondsdeg = ((seconds/60) * 360) + 90;//convert the seconds to degrees
    secondhand.style.transform =  `rotate(${secondsdeg}deg)`;//add rotate transformation to the hand and use the degree created to use as the degree

    //minute hand
    const minute = now.getMinutes();
    console.log(minute)
    const minutedeg = ((minute/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutedeg}deg)`;

    //hour hand
    const hour = now.getHours();
    console.log(hour)
    const hourdeg = ((hour/12) * 360) + 90 ;
    hourHand.style.transform = `rotate(${hourdeg}deg)`;
    hourHand.style.background = `black`;
}
setInterval(setDate, 1000);