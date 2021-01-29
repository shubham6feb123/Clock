let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');

function updateClock(){
    let time = new Date();
    let currentHour = time.getHours();
    let currentMinute = time.getMinutes();
    let currentSecond = time.getSeconds();
   
   
   
    //Hours ka nibtara
    if(currentHour<10){
         box1.innerHTML = '0'+currentHour+' Hr';
    }else{
        box1.innerHTML = currentHour+' Hr';
    }
    //Minutes ka nibtara
    if(currentMinute<10){
        box2.innerHTML = '0'+currentMinute+' Min';
    }else{
         box2.innerHTML = currentMinute+' Min';
    }
    //Seconds ka nibtara
    if(currentSecond<10){
        box3.innerHTML = '0'+currentSecond+' Sec';
    }else{
        box3.innerHTML = currentSecond+' Sec';
    }
  //AM/PM ka nibtara kita
    if(currentHour<12){
        box4.innerHTML = 'AM';
    }else{box4.innerHTML = 'PM';}

    
}

setInterval(updateClock,1000)
updateClock();