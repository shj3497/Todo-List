// Toggle-Btn
const todo_List__toggle = document.querySelector('.todo-List__toggle-btn');
const todo_List = document.querySelector('.todo-List');

todo_List__toggle.addEventListener('click', () => {
    todo_List.classList.remove('close');
    todo_List.classList.add('open');
    todo_List__toggle.classList.remove('open');
})

const todo_List__toggle2 = document.querySelector('.todo-List__toggle-btn2');

todo_List__toggle2.addEventListener('click', () => {
    todo_List.classList.remove('open');
    todo_List.classList.add('close');
    todo_List__toggle.classList.add('open');
})

// Home
function current_times(){
    const current_date = new Date();
    const current_hour = addZeros(current_date.getHours(),2);
    
    const current_minute = addZeros(current_date.getMinutes(),2);
    
    const current_second = addZeros(current_date.getSeconds(),2);
    
    const current_time = `${current_hour}:${current_minute}:${current_second}`
    
    document.querySelector('.home__clock h1').innerHTML = current_time;
    setTimeout("current_times()", 1000);
}
function addZeros(num, digit){
    let zero = '';
    let number = num.toString();
    if(number.length < digit){
        for(let i=0; i<digit-number.length; i++){
            zero += '0';
        }
    }
    return zero + number;
}
current_times();

// Search
const search_text = document.querySelector('.search__text');
search_text.addEventListener('keyup', event => {
    
    const search_text_value = search_text.value;
    const search_form = document.querySelector('#search__form');

    if(event.keyCode === 13){
        
        search_form.action(`https://www.google.com/search`);
        search_form.submit();
        
    }
})