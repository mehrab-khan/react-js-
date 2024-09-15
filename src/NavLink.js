import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
export default function NavLink() {
  return (
    <div>
        {/*Navlink are use on navbar when you click an option with {css} this option is colored as a mark
         that indicates this 
        link was active and   after click on navlink this navlink make his own class name active
        CSS
        .active{
            color:'red'; !important
        }
        
        */}
      <NavLink to='/c'>Home</NavLink>
    </div>
  )
}
