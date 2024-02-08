import React from 'react'
import style from "./index.module.scss";

function FooterIcon({children}) {
  return (
    <div id={style.FooterIcon}>
        {children}
    </div>
  )
}

export default FooterIcon