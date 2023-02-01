var date = new Date;
console.log(date);
var sumMonth = 0;
var sumDay =0;
var check = 1;


let tg = window.Telegram.WebApp;
tg.expand(); //расширяем на все окно  


function addSum() {
    sumDay = Number(sumDay) + Number ( document.querySelector('#in').value);
    sumMonth = Number(sumMonth) + Number ( document.querySelector('#in').value);
    var temp = {};
    temp.day = date.getDate();
    temp.sum = sumDay;
    temp.month = date.getMonth();
    temp.summonth = sumMonth;
    localStorage.setItem("onCup", JSON.stringify(temp));
    document.querySelector('#in').value = "";
    if (check === 1) {
        document.querySelector('#sum').textContent = sumDay;
    } else if (check === 2) {
        document.querySelector('#sum').textContent = sumMonth;   
    }
}

if (localStorage.getItem("onCup") == undefined ) {
    addSum();
} else {
    var temp;
    temp = JSON.parse(localStorage.getItem("onCup"));
    sumMonth = Number(temp.summonth);
    if (temp.day ===  date.getDate()) {
        sumDay = Number(temp.sum);
    } else {
        sumDay = 0;
        addSum();
    }
    if (temp.month ===  date.getMonth()) {
        sumMonth = Number(temp.summonth);
    } else {
        sumMonth = 0;
        addSum();
    }
    document.querySelector('#sum').textContent = sumDay;
}

document.querySelector("#day").onclick = function() {
    document.querySelector("#ch1").style.color = "#F8F3ED";
    document.querySelector("#ch2").style.color = "#F9D3AF";
    document.querySelector('#sum').textContent = sumDay;
    check = 1;
}

document.querySelector("#month").onclick = function() {
    document.querySelector("#ch2").style.color = "#F8F3ED";
    document.querySelector("#ch1").style.color = "#F9D3AF";
    document.querySelector('#sum').textContent = sumMonth; 
    check = 2;  
}

let player = document.querySelector("lottie-player");  
document.querySelector("#pic").addEventListener("click", () => {
//document.querySelector("#pic").onclick = function() {
    player.stop();
    player.play();
    document.querySelector("#sok").play();
    addSum();
    }
)