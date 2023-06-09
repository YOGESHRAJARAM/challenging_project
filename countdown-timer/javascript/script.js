const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

function UpdateTime(){
    const currentYear=new Date().getFullYear();
    const newYear=new Date(`january 1 ${currentYear+1} 00:00:00`);
    const currentdate=new Date();
    const diff=newYear-currentdate;
    const D=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);
    //console.log(D+" "+h+" "+m+" "+s);
    days.innerHTML=D<10?"0"+D:D;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;

}

setInterval(UpdateTime,1000);
