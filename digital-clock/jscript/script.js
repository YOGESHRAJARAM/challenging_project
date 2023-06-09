const zib=document.querySelector('.clock');
function runClock(){
    var time=new Date();
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var txt="am"
    //console.log(hrs,min,sec);
    if (hrs>12){
        hrs=hrs-12;
        txt="PM";
    }else if(hrs ==0){
        hrs=12;
        txt="AM";
    }

   zib.innerHTML=` ${hrs<10?"0"+hrs:hrs}:${min<10?"0"+min:min}:${sec<10?"0"+sec:sec} ${txt}`; 

}
setInterval(runClock,1000);
