import './Style.css'
import { tasks } from './form'
import { taskList } from './form'

export function inboxpage(){
    const addtask =document.querySelector('.addtask')

    const add =document.createElement('div')
    add.classList.add('add')
    const add1=document.createElement('div')
    const taskElements=document.createElement('div')
    taskElements.classList.add('taskElements')
    add.appendChild(add1)
    add.appendChild(taskElements)
    add1.textContent=('+add')
    add1.classList.add('add1')
    
    addtask.appendChild(add)

    
    add1.addEventListener('click',function(){
        console.log('hello')
        tasks()
    })


}

export function displayTasks(List){
    
    for (let i=0; i<List.length;i++){
        let object=List[i]
        const taskElements =document.querySelector('.taskElements')
        const taskcontainer=document.createElement('div')
        const taskheader=document.createElement('div')
        taskheader.classList.add('taskheader')
        taskcontainer.classList.add('taskcontainer')
        const title = object.title;
        const description =object.description;
        const dueDate = object.dueDate;
        const dropdown= object.dropdown;
        const element0=document.createElement('div')
        element0.classList.add('element0')
        element0.textContent='Task'+(i+1)
        const elementx=document.createElement('div')
        elementx.classList.add('elementx')
        elementx.textContent='X'
        const element1=document.createElement('div')
        element1.classList.add('element1')
        element1.textContent='Title: '+title;
        const element2=document.createElement('div')
        element2.classList.add('element2')
        element2.textContent='Description: '+description;
        const element3=document.createElement('div')
        element3.classList.add('element3')
        element3.textContent='dueDate: '+dueDate;
        const element4=document.createElement('div')
        element4.classList.add('element4')
        element4.textContent='Priority: '+dropdown;
        taskheader.appendChild(element0)
        taskheader.appendChild(elementx)
        taskcontainer.appendChild(taskheader)
        taskcontainer.appendChild(element1)
        taskcontainer.appendChild(element2)
        taskcontainer.appendChild(element3)
        taskcontainer.appendChild(element4)
        taskElements.appendChild(taskcontainer)
    }



}
