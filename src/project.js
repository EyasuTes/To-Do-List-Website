import './Style.css'

export function projectpage(){
    const addtask =document.querySelector('.addtask')

    const add =document.createElement('div')
    add.classList.add('add')
    add.textContent=('Projects')
    addtask.appendChild(add)
}