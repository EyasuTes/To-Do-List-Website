import './Style.css'

import { inboxpage } from './Inbox'
import { projectpage } from './project'
import { ThisWeekpage } from './This-week'
import { todaypage } from './Today'
import { taskList } from './form'

function initialLoad(){
    const inbox =document.getElementById('inbox')
    const today =document.getElementById('today')
    const week =document.getElementById('thisWeek')
    const project =document.getElementById('project')
    inboxpage()
    inbox.addEventListener('click',function(){
        clear()
        inboxpage()
        taskList()
    })
    today.addEventListener('click',function(){
        clear()
        todaypage()
    })
    week.addEventListener('click',function(){
        clear()
        ThisWeekpage()
    })
    project.addEventListener('click',function(){
        clear()
        projectpage()
        
    })
    
}

export function clear(){
    const addtask =document.querySelector('.addtask')
    const add=document.querySelector('.add')
    if(add){
        addtask.removeChild(add)
    }
}
export default initialLoad;