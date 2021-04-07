// let은 변수 재선언 불가능, 재할당 가능
// const는 변수 재선언, 재할당 불가능

// new Date(year, monthIndex[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
const date = new Date();


const viewYear = date.getFullYear();
const viewMonth = date.getMonth();


document.querySelector('.calendar__header').textContent = `${viewYear}년 ${viewMonth + 1}월`;

const prev_month = new Date(viewYear, viewMonth, 0);
// console.log(prev_month)
const this_month = new Date(viewYear, viewMonth + 1, 0);
// console.log(this_month)

const prev_month_last_date = prev_month.getDate();
// console.log(prev_month_last_date) ;
const prev_month_last_day = prev_month.getDay();
// console.log(prev_month_last_day);

const this_month_last_date = this_month.getDate();
const this_month_last_day = this_month.getDay();

const prev_month_Dates = [];
const this_month_Dates = [];
const next_month_Dates = [];

// 이전달 날짜
// Array.unshift() >>> : 배열요소를 앞에다가 추가
if (prev_month_last_day !== 6){
    for (let i=0; i<prev_month_last_day+1; i++){
        prev_month_Dates.unshift(prev_month_last_date - i);
    }
}
console.log(`prev_month_Dates[] >>> : ${prev_month_Dates}`);


// 이번달 날짜
/* 요것은 요일을 출력하는것 이구여
for(let i=1; i<this_month_last_date+1; i++){
    this_month_Dates.push(new Date(viewYear, viewMonth, i).getDay());
}
console.log(`this_month_Dates[] >>> : ${this_month_Dates}`);
*/
for(let i=1; i<this_month_last_date+1; i++){
    this_month_Dates.push(i);
}

// 다음달 날짜
for (let i=1; i<7-this_month_last_day; i++){
    next_month_Dates.push(i);
}
console.log(`next_month_Dates[] >>> : ${next_month_Dates}`);

const viewDates = prev_month_Dates.concat(this_month_Dates).concat(next_month_Dates);
console.log(`viewDates >>> : ${viewDates}`);

viewDates.forEach((viewDate, i) => {
    console.log(i);
    if(i % 7 === 0){
        viewDates[i] = `<tr><td class='calendar__date'>${viewDate}</td>`    
    }else if(i % 7 === 6){
        viewDates[i] = `<td class='calendar__date'>${viewDate}</td><tr>`
    }else{
        viewDates[i] = `<td class='calendar__date'>${viewDate}</td>`
    }
    console.log(viewDates[i]);
});

document.querySelector('.calendar__dates').innerHTML = viewDates.join('');