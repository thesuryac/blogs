import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import PostCard from '../components/PostCard'

const Home = () => {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await fetch('/api/post/getPosts');
      const data = await res.json()
      setPosts(data.posts)
    }
    fetchPosts()
  },[])
  return (
    <div>
      <div className="flex flex-col gap-6 px-3 max-w-6xl p-28 mx-auto"> 
      <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my blog</h1>
      <p className='text-gray-500 text-xs sm:text-sm'>Here you will find a variety of blogs on topics such as web development,software engineering and programing languages</p>
      <Link to={'/search'} className="text-xs sm:text-sm text-teal-500 font-bold hover:underline">View all posts</Link>

      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {
          posts && posts.length > 0 && (
            <div className="flex flex-col gap-6">

            <div className="flex flex-wrap gap-4">
              {posts.map((post) =>(
                <PostCard key={post._id} post={post}/>
              ))}
            </div>
            <Link to={'/search'} className='text-lg text-teal-500 hover:underline text-center'>View all posts</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Home;