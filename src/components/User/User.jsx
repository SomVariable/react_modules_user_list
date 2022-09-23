import React from 'react'
import style from "./style.module.css" 

export default function User({avatar, name, email}) {
  return ( 
    <div className = {style.user}>
        <img className={style.avatar} src={avatar} alt="avatar" />
        <div className={style.info}>
            <p className = {style.name}>{name}</p>
            <p className = {style.email}>{email}</p>
        </div>
        <div className={style.plus}>+</div>
    </div>
  )
}
