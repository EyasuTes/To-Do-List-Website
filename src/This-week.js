import './style.css'


export function ThisWeekpage(){
    const addtask =document.querySelector('.addtask')

    const add =document.createElement('div')
    add.classList.add('add')
    add.textContent=('This week')
    addtask.appendChild(add)
}