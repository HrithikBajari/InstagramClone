import React from 'react'
import SideSection from '../common/SideSection'
import Header from './Header'
import { myInfo } from '../../data/myinfo'
import MyPost from './MyPost'
const Profile = () => {
  return (
    <div style={{display:"flex",gap:"15vw"}}>
      <SideSection/>
      <div>
      <Header myInfo={myInfo}/>
      <MyPost post={myInfo.posts}/>
      </div>
        
        
    </div>
  )
}

export default Profile