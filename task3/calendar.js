

const Calendar=(month,year)=>{
   
    let element = document.getElementById('calendar');
    let date = new Date(year,month-1);
    var table = `<table><tbody><td>${date.toLocaleString('default',{month:'long'})} ${date.getFullYear()}</td></tbody><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`;

for(let i = 0; i < Day(date); i++){
    table += '<td></td>';
}

while(date.getMonth() == month -1){
    table +=`<td>${date.getDate()}</td>`;
    if(Day(date) % 7 == 6){
        table += '</tr><tr>';
    }
    date.setDate(date.getDate() + 1);
}

if(Day(date) != 0){
    for(let i = Day(date); i < 7; i++){
        table += '<td></td>';
    }
}

 table +='</tr></table>'
element.innerHTML = table;
    
}

const Day = (date) =>{
    let day = date.getDay();
    if(day == 0) day = 7;

    return day - 1;
}



let month = prompt('Введите номер месяца!');
let year = prompt('Введите год');
Calendar(month,year);