import React from 'react'
import errorIcon from "./computer.png"
import style from "./error.module.css"

function Error() {
  return (
    <div><img src={errorIcon} alt="" className = {style.img}/></div>
  )
}

export default Error