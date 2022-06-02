import React from 'react'
import Todoitems from './Todoitems.'


const Todoitem =(props) => {
    
  return (
      <div className='row' >
          <p>your todos</p>
          
          {
          
          props.todo.map((element) => {
             return ( props.todo.length===0?"you have no todos":<Todoitems element = {element} key ={element.id} onclick ={props.onclick} />)
            
          }
          )
          
      }
          
              
        


      </div>

      
    
    
    
  ) }

export default Todoitem
