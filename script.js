function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d = date.getDate();
    var v= date.getMonth()+1;
    var y=date.getFullYear();
    var k=date.toLocaleDateString();
    var p=date.getDay();

    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    switch (p) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    d = (d < 10) ? "0" + d : d;
    v = (v < 10) ? "0" + v : v;
    
    var time = h + ":" + m + ":" + s + " " + session ;
    var timee =  day + " "+ d + " - " + v + " - " +  y + " " ;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplayy").innerText = timee;


    

    setTimeout(showTime, 1000);
    
}


showTime();

//p();
//setTimeout(k, 15000);
//function k(){
