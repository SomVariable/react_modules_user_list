import React from 'react'
import Avatar from '../../UI/SkeletonComponents/Avatar'
import Header from '../../UI/SkeletonComponents/Header'
import Name from '../../UI/SkeletonComponents/Name'
import Text from '../../UI/SkeletonComponents/Text'
import style from './skeleton.module.css'

function Skeleton() {
  return (
    <div className={style.skeleton}>
      <Header />
      <div className={style.userInfo}>
        <Avatar/>
        <Name />
      </div>
      <Text/>
      <Text/>
      <Text/>
    </div>
  )
}

export default Skeleton