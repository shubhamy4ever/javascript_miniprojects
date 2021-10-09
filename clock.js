setInterval(()=>{
    let time = document.getElementById("time");
    let d = new Date;
    time.innerHTML=d.toLocaleTimeString();
    
    let date = document.getElementById("date");
    date.innerHTML=` on Date ${d.toDateString()}`;
},1000);