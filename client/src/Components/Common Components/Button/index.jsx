import React from 'react'
import style from "./index.module.scss";

function Button({children, stl={}}) {
  return (
    <button id={style.Button} style={stl ? {border: stl.border, backgroundColor: stl.bgcolor, color: stl.color} : {}}>
        {children}
    </button>
  )
}

export default Button