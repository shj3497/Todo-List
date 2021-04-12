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
const finished_List = document.querySelector('.finished');

todo_Form.addEventListener('submit', () => {
    event.preventDefault();
    const current_Value = todo_Input.value;
    paintToDo(current_Value, 'toDoList_pending');
    todo_Input.value = "";
    // localStorage.setItem('todo',JSON.stringify(jsonData));
})

let todo_pending_array = [];
let todo_finished_array = [];

function saveTodoLists(storage_name, todo_array){
    localStorage.setItem(storage_name, JSON.stringify(todo_array));
}

// array의 길이로 id값을 주는것이 아닌 중복되지 않는 숫자로 변경
let idNumbers = 1;

function paintToDo(text, storage_name){
    // toDoList_pending 일 경우
    if(storage_name === 'toDoList_pending'){
        const li = document.createElement('li');

        const chkBtn = document.createElement("button");
        chkBtn.innerHTML = '<i class="far fa-arrow-alt-circle-down"></i>';
        chkBtn.addEventListener('click', finishedTodo);

        const delBtn = document.createElement("button");
        delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        delBtn.addEventListener('click', delete_pending_Todo);

        const span = document.createElement("span");
        span.innerText = text;

        const newId = idNumbers;
        idNumbers++;
        li.id = newId;

        li.appendChild(span);
        li.appendChild(delBtn);
        li.appendChild(chkBtn);

        pending_List.appendChild(li);
        
        const toDo_Obj = {
            id: newId,
            text: text
        }

        todo_pending_array.push(toDo_Obj);
        saveTodoLists(storage_name, todo_pending_array);
    }else{
        // storage_name === toDoList_finished
        const li = document.createElement('li');

        const chkBtn = document.createElement("button");
        chkBtn.innerHTML = '<i class="far fa-arrow-alt-circle-up"></i>';
        chkBtn.addEventListener('click', unfinishedTodo);

        const delBtn = document.createElement("button");
        delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        delBtn.addEventListener('click', delete_finished_Todo);

        const span = document.createElement("span");
        span.innerText = text;

        const newId = idNumbers;
        idNumbers++;
        li.id = newId;

        li.appendChild(span);
        li.appendChild(delBtn);
        li.appendChild(chkBtn);

        finished_List.appendChild(li);

        const toDo_Obj = {
            id: newId,
            text: text
        }

        todo_finished_array.push(toDo_Obj);
        saveTodoLists(storage_name, todo_finished_array);
    }
}

function loadToDoLists(storage_name){
    const toDoLists = localStorage.getItem(storage_name);
    if(toDoLists !== null){
        const parsed_toDoLists = JSON.parse(toDoLists);
        parsed_toDoLists.forEach((parsed_toDoList) => {
            // console.log(parsed_toDoList.text);
            // 스토리지에서 읽어온 리스트들을 paintToDo()로 뿌려준다.
            paintToDo(parsed_toDoList.text, storage_name);
        })
    }
}
loadToDoLists('toDoList_pending');
loadToDoLists('toDoList_finished');

// todoDelBtn
function delete_pending_Todo(event){
    const btn = event.target;
    const li = btn.parentNode.parentNode;
    console.log(li);
    pending_List.removeChild(li);
    // console.log(`todo_array >>> ${todo_array}`)
    const cleanTodo_array = todo_pending_array.filter((toDo) => {
        // console.log(toDo)
        // todo_array : 스토리지에서 읽어온 json데이터들이 배열에 담겨져있음
        return toDo.id !== parseInt(li.id);
    });
    todo_pending_array = cleanTodo_array;
    saveTodoLists('toDoList_pending', todo_pending_array);
}

// pending에 있는 체크버튼
function finishedTodo(event){
    const btn = event.target;
    const li = btn.parentNode.parentNode;
    console.log(li);
    // console.log(li.firstChild.innerHTML);
    const chk_text = li.firstChild.innerHTML;
    
    paintToDo(chk_text, 'toDoList_finished')
    delete_pending_Todo(event);
    
}

// Finished에 있는 체크버튼
function unfinishedTodo(event){
    const btn = event.target;
    const li = btn.parentNode.parentNode;
    console.log(li);
    // console.log(li.firstChild.innerHTML);
    const chk_text = li.firstChild.innerHTML;
    
    paintToDo(chk_text, 'toDoList_pending');
    delete_finished_Todo(event);
}

function delete_finished_Todo(event){
    const btn = event.target;
    const li = btn.parentNode.parentNode;
    console.log(li);
    finished_List.removeChild(li);
    
    const cleanTodo_array = todo_finished_array.filter((toDo) => {
        // console.log(toDo)
        // todo_array : 스토리지에서 읽어온 json데이터들이 배열에 담겨져있음
        return toDo.id !== parseInt(li.id);
    });
    todo_finished_array = cleanTodo_array;
    saveTodoLists('toDoList_finished', todo_finished_array);
}



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
