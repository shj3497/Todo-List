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


// Todo-List
const todo_Form = document.querySelector('.todo-List__Add-task');
todo_Form.addEventListener('submit', () => {
    event.preventDefault();
    const todo_Add = todo_Form.querySelector('input');
    const todo_Add_Value = todo_Add.value;

    const jsonData = {'20210419':[`${todo_Add_Value}`,`${todo_Add_Value}`]};
    
    
    
    // localStorage.setItem('todo',JSON.stringify(jsonData));
})
















// Home - Times
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

// Home- Name
const name_form = document.querySelector('.name__form');
name_form.addEventListener('submit', () => {
    event.preventDefault();
    const name_text = name_form.querySelector('input[type="text"]');
        
    localStorage.setItem('name', name_text.value);
    name_YN();
});

function name_YN (){
    const who = localStorage.getItem('name');
    if(who !== null){
        name_form.classList.add('name__Y');
        document.querySelector('.name__view').textContent = `Welcome, ${who}`;
    }
}

name_YN();


// Home - Search
