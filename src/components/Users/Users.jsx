import React, { useState } from 'react'
import User from '../User/User'
import styles from './style.module.css'
import Button from '../../UI/Button/Button'
import SearchField from '../../UI/SearchField/SearchField'
import { useInput } from '../../hooka/useInput'

function Users({users}) {
  const userItems =users? users.map(user => <li className = {styles.item}><User name = {`${user.first_name} ${user.last_name}`} email = {user.email} avatar = {user.avatar}/></li>):[]
  let userName = useInput()
  debugger
  return (
    <div className={styles.users}>
       <SearchField {...userName} placeholder='add users'/>
      <ul className={styles.list}>
        {userItems}
      </ul>
      <Button text = "Add friends" />
    </div>
   
  )
}



export default Users
