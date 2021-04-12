// let은 변수 재선언 불가능, 재할당 가능
// const는 변수 재선언, 재할당 불가능

// new Date(year, monthIndex[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);

// Calendar - Today
const viewToday = new Intl.DateTimeFormat('ko-KR').format(new Date());
// console.log(viewToday);
document.querySelector('.calendar__today').textContent = viewToday.replace('.','년').replace('.','월').replace('.','일');


// Calendar
// 재사용을 위해 함수로 만들어 주었다.
let date = new Date();
const viewCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();
    const viewMonth_eng = new Intl.DateTimeFormat('en-US', {month:'long'}).format(date);
    // console.log(viewMonth_eng)
    
    document.querySelector('.calendar__selected').textContent = `${viewMonth_eng}, ${viewYear}`;
    
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
            prev_month_Dates.unshift(`<span class='prev__month__date'>${prev_month_last_date - i}</span>`);
        }
    }
    // console.log(`prev_month_Dates[] >>> : ${prev_month_Dates}`);
    
    
    // 이번달 날짜
    const today_date = new Date();
    for(let i=1; i<this_month_last_date+1; i++){
        
        if(i === today_date.getDate() && viewMonth === today_date.getMonth() && viewYear === today_date.getFullYear()){
            this_month_Dates.push(`<span class='this__month__date today_date'>${i}</span>`);        
        }else{
            this_month_Dates.push(`<span class='this__month__date'>${i}</span>`);
        }
    }
    
    // 다음달 날짜
    for (let i=1; i<7-this_month_last_day; i++){
        next_month_Dates.push(`<span class='next__month__date'>${i}</span>`);
    }
    // console.log(`next_month_Dates[] >>> : ${next_month_Dates}`);
    
    const viewDates = prev_month_Dates.concat(this_month_Dates).concat(next_month_Dates);
    // console.log(`viewDates >>> : ${viewDates}`);
    
    viewDates.forEach((viewDate, i) => {
        // console.log(i);
        if(i % 7 === 0){
            viewDates[i] = `<tr><td class='calendar__date'>${viewDate}</td>`    
        }else if(i % 7 === 6){
            viewDates[i] = `<td class='calendar__date'>${viewDate}</td><tr>`
        }else{
            viewDates[i] = `<td class='calendar__date'>${viewDate}</td>`
        }
        // console.log(viewDates[i]);
    });
    
    document.querySelector('.calendar__dates').innerHTML = viewDates.join('');
}
viewCalendar();

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    viewCalendar();
}

const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    viewCalendar();
}

const prevYear = () => {
    date.setYear(date.getFullYear() - 1);
    viewCalendar();
}

const nextYear = () => {
    date.setYear(date.getFullYear() + 1);
    viewCalendar();
}

const goToday = () => {
    date = new Date();
    viewCalendar();
}

const minus_year = document.querySelector('.calendar__minus_year');
minus_year.addEventListener('click', prevYear);

const minus_month = document.querySelector('.calendar__minus_month');
minus_month.addEventListener('click', prevMonth);

const plus_month = document.querySelector('.calendar__plus_month');
plus_month.addEventListener('click', nextMonth);

const plus_year = document.querySelector('.calendar__plus_year');
plus_year.addEventListener('click', nextYear);

const calendar_today = document.querySelector('.calendar__today');
calendar_today.addEventListener('click', goToday);