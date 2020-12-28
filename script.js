setInterval(()=>{
    d=new Date();
    hrtime=d.getHours();
    mintime=d.getMinutes();
    sectime=d.getSeconds();
    hrotation=30*hrtime+mintime/2;
    minrotation=6*mintime;
    secrotation=6*sectime;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${minrotation}deg)`;
    second.style.transform=`rotate(${secrotation}deg)`;
},1000);