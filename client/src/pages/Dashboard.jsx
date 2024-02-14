import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import DashUsers from '../components/DashUsers';
import DashComments from '../components/DashComments';
import DashBoardComp from '../components/DashBoardComp';

const Dashboard = () => {
  const location = useLocation();
  const [tab,setTab] = useState("");
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get("tab")
    if(tabFormUrl){
      setTab(tabFormUrl)
    }
  },[location])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="">
        {/*slide bar */}
        <DashSidebar/>

      </div>
      {/** profile */}
      {tab === 'profile' && <DashProfile/>}
      {tab === 'posts' && <DashPosts/>}
      {tab === 'users' && <DashUsers/>}
      {tab === 'comments' && <DashComments/>}
      {tab === 'dash' && <DashBoardComp/>}
    </div>
  )
}

export default Dashboard;