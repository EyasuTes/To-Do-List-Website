import './style.css'

export function todaypage(){
    const addtask =document.querySelector('.addtask')

    const add =document.createElement('div')
    add.classList.add('add')
    add.textContent=('Today')
    addtask.appendChild(add)
}