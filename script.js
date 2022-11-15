
let cDate;
let cHour;
let cMin;
let cSec;
let cMonth;
let daysLeft;
let daysFeb;
let daysYear;
let interval=window.setInterval(function(){
    let cDate=new Date();
    cHour=cDate.getHours();
    cMin=cDate.getMinutes();
    cSec=cDate.getSeconds();
    cDay=cDate.getDate();
    cMonth=cDate.getMonth()+1;
    cYear=cDate.getFullYear();
    cYear1=cDate.getFullYear()+1;
    if (cYear%4==0){
        daysFeb=29;
        daysYear=366;
    } else{
        daysFeb=28;
        daysYear=365;

    }
    switch(cMonth){
        case 1:
            daysLeft=daysYear;
            break;
        case 2:
            daysLeft=daysYear-31;
            break; 
        case 3:
            daysLeft=daysYear-(31+daysFeb);
            break;               
        case 4:
            daysLeft=daysYear-(31*2+daysFeb);
            break;
        case 5:
            daysLeft=daysYear-(31*2+30+daysFeb);
            break;
        case 6:
            daysLeft=daysYear-(31*3+30+daysFeb);
            break;  
        case 7:
            daysLeft=daysYear-(31*3+30*2+daysFeb);
            break;
        case 8:
            daysLeft=daysYear-(31*4+30*2+daysFeb);
            break;
        case 9:
            daysLeft=daysYear-(31*5+30*2+daysFeb);
            break;                 
        case 10:
            daysLeft=daysYear-(31*5+30*3+daysFeb);
            break;
        case 11:
            daysLeft=daysYear-(31*6+30*3+daysFeb);
            break;
        case 12:
            daysLeft=daysYear-(31*6+30*4+daysFeb);
            break;          

    }


    document.getElementById("seconds").innerHTML=60-cSec;
    document.getElementById("minutes").innerHTML=60-cMin;
    document.getElementById("hours").innerHTML=24-cHour;
    document.getElementById("days").innerHTML=daysLeft-cDay;
    document.getElementById("main").innerHTML="Happy New Year! "+cYear1;
    document.getElementById("main1").innerHTML="සුභ නව වසරක්! "+cYear1;
    document.getElementById("main2").innerHTML="புத்தாண்டு வாழ்த்துக்கள்! "+cYear1;
    
    
},1000);





