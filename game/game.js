
alert("This game works best in phones with a wide screen & also in PC!");

var ttl = 0;
var scr = 0;

function start(){
    alert("If you miss 50 then you will lose. In short, you have 50 lives!");
    document.getElementById("start").style.display = "none";
    document.getElementById("container").style.display = "block"
    function timing(){
        ttl++;
        window.ttl = ttl;
        var x = Math.round(Math.random()*248);
        var y = Math.round(Math.random()*260);
        document.getElementById("box").setAttribute('x',x);
        document.getElementById("box").setAttribute('y',y);
        var msd = ttl - scr;
        window.msd = msd;
        document.getElementById("missed").innerHTML = "Missed: " + msd;
        if(msd == 50){
            document.getElementById("container").style.display = "none";
            document.getElementById("hide").style.display = "none";
            document.getElementById("fScore").innerHTML = "Total Score: " + scr;
            document.getElementById("result").style.display = "block";
        }
        if(scr==15){
           alert=("You WON!!!") 
        }
    }
    setInterval(timing, 700);
}

function score(){
    scr++;
    window.scr = scr;
    document.getElementById("score").innerHTML = "Score: " + scr;
    if(scr == 100){
        var d = msd;
        document.getElementById("container").style.display = "none";
        document.getElementById("hide").style.display = "none";
        document.getElementById("fMissed").innerHTML = "Total Missed: " + d;
        document.getElementById("result").style.display = "block";
        document.getElementById("gameOver").style.display = "none";
    }
}

