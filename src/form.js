import './style.css'
import { displayTasks } from './Inbox';
import { clear } from './pageLoad';
import { inboxpage } from './Inbox';

let taskLi=[];

export function tasks(){
    const form= document.querySelector('.form')
    form.style.display='block'
    submit(form)

}
function submit(form) {
    
    const title=document.getElementById('title')
    const description=document.getElementById('description')
    const dueDate=document.getElementById('dueDate')
    const dropdown=document.getElementById('dropdown')
    const taskElements=document.querySelector('.taskElements')
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
       
        console.log('hi')
        form.style.display = 'none';
        let ti =title.value;
        let des=description.value;
        let due=dueDate.value;
        let drop=dropdown.value;
        if (ti !== '' || des !== '' || due !== '') {
            const task= object(ti, des, due, drop);
            taskList(task)
        }
        title.value=''
        description.value=''
        dueDate.value=''
        dropdown.value=''
    });
    
}

function object(title, description, dueDate, dropdown){
    return {title:title,description:description,dueDate:dueDate,dropdown:dropdown}
    
}

export function taskList(task){
    if(task){
        taskLi.push(task);
    }

    console.log(taskLi);
    clear()
    inboxpage()
    displayTasks(taskLi)
}

