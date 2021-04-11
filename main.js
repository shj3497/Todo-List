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
const todo_Form = document.querySelector('.todo-List__form');
const todo_Input = todo_Form.querySelector('input[type="text"]');
const pending_List = document.querySelector('.pending');
todo_Form.addEventListener('submit', () => {
    event.preventDefault();
    const current_Value = todo_Input.value;
    paintToDo(current_Value);
    todo_Input.value = "";
    // localStorage.setItem('todo',JSON.stringify(jsonData));
})

const todo_array = [];


function saveTodoLists(){
    localStorage.setItem('toDoList_pending', JSON.stringify(todo_array));
}

const todo_date = new Intl.DateTimeFormat('ko-KR').format(new Date());

function paintToDo(text){
    const pending_li = document.createElement('li');
    const chkBtn = document.createElement("button");
    chkBtn.innerHTML = '<i class="fas fa-check"></i>';

    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    const span = document.createElement("span");
    span.innerText = text;

    const newId = todo_array.length + 1;
    pending_li.id = newId;

    pending_li.appendChild(span);
    pending_li.appendChild(chkBtn);
    pending_li.appendChild(delBtn);
    pending_List.appendChild(pending_li);

    const toDo_Obj = {
        id: newId,
        text: text
    }

    todo_array.push(toDo_Obj);
    saveTodoLists();
}

function loadToDoLists(){
    const toDoLists = localStorage.getItem('toDoList_pending');
    if(toDoLists !== null){
        const parsed_toDoLists = JSON.parse(toDoLists);
        parsed_toDoLists.forEach((parsed_toDoList) => {
            // console.log(parsed_toDoList.text);
            // 스토리지에서 읽어온 리스트들을 paintToDo()로 뿌려준다.
            paintToDo(parsed_toDoList.text);
        })
    }
}
loadToDoLists();













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
